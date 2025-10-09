import React, { useState, useEffect } from 'react';
import './App.css';
import '../Styles/receipt.css';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import Button from '@mui/material/Button';
import NavBar from '../Components/NavBar';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Receipt() {
  const { uniquckId } = useParams();
  const [receiptData, setReceiptData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    axios.get(`${process.env.REACT_APP_API_URL}/api/forms/getForm/${token}/${uniquckId}`)
      .then(res => setReceiptData(res.data))
      .catch(err => console.error(err));
  }, [uniquckId]);

  // Intraday brokerage at 0.01% of turnover (buy+sell)*quantity
  const calculateBrokerage = ({ buyPrice, sellPrice, quantity }) => {
    const turnover = (buyPrice + sellPrice) * quantity;
    return Number((turnover * 0.00005).toFixed(2));
  };


 const handleDownloadPDF = async () => {
  const input = document.getElementById('receipt-pdf');
  if (!input) return;

  // Clone node to remove buttons from PDF
  const clone = input.cloneNode(true);

  // Remove all elements with class 'no-print' (button container)
  clone.querySelectorAll('.no-print').forEach(el => el.remove());

  // Optional: explicitly remove any <button> inside clone just in case
  clone.querySelectorAll('button').forEach(btn => btn.remove());

  // Preserve dark theme colors
  clone.style.background = '#0f172a'; // match receipt background
  clone.style.width = '400px';
  clone.style.borderRadius = '20px';
  clone.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
  clone.style.overflow = 'hidden';
  clone.style.margin = '40px auto';

  // Preserve header colors
  const header = clone.querySelector('.header');
  if (header) {
    header.style.background = '#1e293b';
    header.style.color = '#fff';
    header.style.padding = '20px';
    header.style.display = 'flex';
    header.style.justifyContent = 'space-between';
    header.style.alignItems = 'center';
  }

  // Add clone to DOM for html2canvas
  clone.style.position = 'absolute';
  clone.style.left = '-9999px';
  document.body.appendChild(clone);

  try {
    const canvas = await html2canvas(clone, {
      scale: 3,
      useCORS: true,
      scrollY: -window.scrollY,
      backgroundColor: '#0f172a', // preserve dark background
    });
    const imgData = canvas.toDataURL('image/png');

    const pxToMm = 0.264583;
    const imgWmm = canvas.width * pxToMm;
    const imgHmm = canvas.height * pxToMm;

    const pdf = new jsPDF('p', 'mm', [imgWmm, imgHmm]);
    pdf.addImage(imgData, 'PNG', 0, 0, imgWmm, imgHmm);
    pdf.save('Exit Receipt.pdf');
  } catch (err) {
    console.error(err);
  } finally {
    document.body.removeChild(clone);
  }
};



  if (!receiptData) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
        <div className="text-muted">Loading receipt...</div>
      </div>
    );
  }

  const brokerage = calculateBrokerage(receiptData);
  // const netAmount = (receiptData.sellPrice * receiptData.quantity) - (receiptData.buyPrice * receiptData.quantity) - brokerage;
  //Calculate netAmount based on mode
  let netAmount = 0;
  const { buyPrice, sellPrice, quantity, mode } = receiptData;
  if (mode === 'buy') {
    netAmount = ((sellPrice * quantity) - (buyPrice * quantity)) - brokerage;
  } else if (mode === 'sell') {
    netAmount = (buyPrice * quantity) - (sellPrice * quantity) - brokerage;
  }

  // Net amount color class
  const netBoxClass = netAmount >= 0 ? 'net-box net-profit' : 'net-box net-loss';

  return (
    <>
      <NavBar />
      <div style={{ background: '#f0f2f5', minHeight: '100vh', padding: '32px 0' }}>
        <div
          id="receipt-pdf"
          className="receipt"
          style={{
            background: '#0f172a',
            width: 400,
            borderRadius: 0,
            boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
            overflow: 'hidden',
            margin: '0 auto'
          }}
        >
          {/* Header */}
          <div
            className="header"
            style={{
              borderRadius : 0,
              background: '#1e293b',
              color: '#fff',
              padding: 20,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <h2>
              KRISHNA ENT. PVT. LTD
              <br />
              <span style={{ fontSize: 12, fontWeight: 400 }}>Trade Exit Receipt</span>
            </h2>
            <div className="user-info">
              User: {receiptData.clientName}<br />
              {/* ID: {receiptData.idCode} */}
            </div>
          </div>

          {/* Stock Info */}
          <div className="stock-card">
            <h3 style={gridValueStyle}>{receiptData.stockName}</h3>
            <span  style={{ fontSize: 14, color: '#94a3b8', fontWeight: 600 }}>
              Exit ({receiptData.mode ? receiptData.mode.toUpperCase() : ''})
            </span>
          </div>

          {/* Grid */}
          <div className="grid">
            <div className="grid-item"  style={gridItemStyle}>
              <p style={gridLabelStyle}>Exit Date</p>
              <h4 style={gridValueStyle}>{new Date(receiptData.tradeDate).toLocaleDateString('en-GB')}</h4>
            </div>
            <div className="grid-item" style={gridItemStyle}>
              <p  style={gridLabelStyle}>Customer ID</p>
              <h4 style={gridValueStyle}>{receiptData.idCode || '—'}</h4>
            </div>
            <div className="grid-item" style={gridItemStyle}>
              <p style={gridLabelStyle}>Executed Price</p>
              <h4 style={gridValueStyle}>₹{Number(receiptData.sellPrice).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</h4>
            </div>
          </div>

          {/* Details */}
          <div className="details">
            <p style={gridLabelStyle}><strong style={gridValueStyle}>Product Type:</strong> {receiptData.mode ? receiptData.mode.toUpperCase() : ''}</p>
           <p style={gridLabelStyle}><strong style={gridValueStyle}>Quantity:</strong> {receiptData.quantity} {receiptData.lotSize ? <span>({receiptData.lotSize} Lot)</span> : null}</p>
            
            <p style={gridLabelStyle}><strong style={gridValueStyle}>Buy Price:</strong> ₹{Number(receiptData.buyPrice).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</p>
            <p style={gridLabelStyle}><strong style={gridValueStyle}>Total Buying:</strong>₹{(receiptData.buyPrice * receiptData.quantity).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</p>
            
            <p style={gridLabelStyle}><strong style={gridValueStyle}>sell Price:</strong> ₹{Number(receiptData.sellPrice).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</p>
            <p style={gridLabelStyle}><strong style={gridValueStyle}>Total Selling:</strong>₹{(receiptData.sellPrice * receiptData.quantity).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</p>
            
            {/* <p><strong>Current Value:</strong> ₹{(receiptData.sellPrice * receiptData.quantity).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</p> */}
            <p style={gridLabelStyle}><strong style={gridValueStyle}>Brokerage:</strong> ₹{brokerage.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</p>
            <p style={gridLabelStyle}><strong style={gridValueStyle}>Realised P&amp;L:</strong> {netAmount >= 0 ? '+' : '-'} ₹{Math.abs(netAmount).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</p>
          </div>

          {/* Net Amount */}
          <div className={netBoxClass}>
            Net Amount Received: ₹{(netAmount + (netAmount < 0 ? 0 : 0)).toLocaleString('en-IN', { minimumFractionDigits: 2 })}
          </div>

          {/* Actions */}
          <div className="actions noa-print">
            <button className="btn btn-download" onClick={handleDownloadPDF}>Print Receipt</button>
          </div>

          {/* Footer */}
          <div style={{
            background: '#1e293b',
            padding: 12,
            fontSize: 12,
            textAlign: 'center',
            color: '#94a3b8',
          }}>
            © KRISHNA ENT. PVT. LTD
          </div>
        </div>
      </div>
    </>
  );
}

const labelStyle = {
  fontWeight: 600,
  color: '#6c757d',
  padding: '4px 8px',
};

const valueStyle = {
  textAlign: 'right',
  padding: '4px 8px',
};


const gridLabelStyle = {
  margin: '4px 0',
  fontSize: 13,
  color: '#94a3b8',
};

const gridValueStyle = {
  margin: 0,
  fontSize: 15,
  fontWeight: 700,
  color: '#fff',
};

const gridItemStyle = {
  background: '#1e293b',

  padding: 10,
  textAlign: 'center',
};

export default Receipt;


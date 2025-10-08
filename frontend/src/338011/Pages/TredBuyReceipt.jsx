import React from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import Button from '@mui/material/Button';
import NavBar from '../Components/NavBar';
import { useLocation } from 'react-router-dom';

function TredBuyReceipt() {
  const location = useLocation();
  const { client, stockName, idCode, quantity,lotSize, buyPrice, tradeDate, mode } = location.state || {};

 const handleDownloadPDF = async () => {
    const input = document.getElementById('receipt-pdf');
    if (!input) return;

    const clone = input.cloneNode(true);

    clone.style.position = 'absolute';
    clone.style.left = '-9999px';
    // Important: Set the clone's background to match for canvas rendering accuracy
    clone.style.backgroundColor = '#0f172a'; 
    document.body.appendChild(clone);

    try {
      const canvas = await html2canvas(clone, {
        scale: 3,
        useCORS: true,
        scrollY: -window.scrollY,
        backgroundColor: '#0f172a', // dark PDF background
      });
      const imgData = canvas.toDataURL('image/png');

      // --- START: Changes to remove extra white space ---
      const pxToMm = 0.264583;
      const imgWmm = canvas.width * pxToMm;
      const imgHmm = canvas.height * pxToMm;

      // 1. Initialize jsPDF with custom dimensions (imgWmm, imgHmm) 
      //    instead of 'a4'. Orientation 'p' (portrait) or 'l' (landscape)
      //    is not strictly necessary but 'portrait' is common.
      const pdf = new jsPDF('p', 'mm', [imgWmm, imgHmm]);

      // 2. Add the image to the PDF, filling the entire custom page
      //    Start position (x, y) is (0, 0)
      pdf.addImage(imgData, 'PNG', 0, 0, imgWmm, imgHmm); 
      // --- END: Changes to remove extra white space ---

      pdf.save('Buy_Receipt.pdf');
    } catch (err) {
      console.error(err);
    } finally {
      document.body.removeChild(clone);
    }
  };
  const totalAmount = buyPrice * quantity;

  return (
    <>
      <NavBar />
      <div style={{ minHeight: '100vh', padding: '32px 0',  }}>
        <div
          id="receipt-pdf"
          style={{
            background: '#0f172a',
            width: 400,
            // borderRadius: 16,
            overflow: 'hidden',
            margin: '40px auto',
            color: '#fff',
            boxShadow: '0 6px 15px rgba(0,0,0,0.5)',
          }}
        >
          {/* Header */}
          <div
            className="receipt-header"
            style={{
              background: '#1e293b',
              padding: 20,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              
            }}
          >
            <div>
              <div style={{ fontWeight: 700, fontSize: 18 }}>KRISHNA ENT. PVT. LTD</div>
              <div style={{ fontSize: 12, fontWeight: 400 }}>Trade Buy Receipt</div>
            </div>
            <div style={{ fontSize: 12, textAlign: 'right', lineHeight: 1.4 }}>
              User: {client}<br />
              ID: {idCode}
            </div>
          </div>

          {/* Stock Info */}
          <div style={{ padding: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>{stockName}</div>
            <span style={{ fontSize: 14, color: '#94a3b8', fontWeight: 600 }}>Entry (BUY)</span>
          </div>

          {/* Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 12,
            padding: 20,
          }}>
            <div style={gridItemStyle}>
              <p style={gridLabelStyle}>Entry Date</p>
              <h4 style={gridValueStyle}>{tradeDate ? new Date(tradeDate).toLocaleDateString('en-GB') : ''}</h4>
            </div>
            <div style={gridItemStyle}>
              <p style={gridLabelStyle}>Customer ID</p>
              <h4 style={gridValueStyle}>{idCode}</h4>
            </div>
            <div style={gridItemStyle}>
              <p style={gridLabelStyle}>Buy Price</p>
              <h4 style={gridValueStyle}>₹{Number(buyPrice).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</h4>
            </div>
          </div>

          {/* Details */}
          <div style={{ padding: 20, fontSize: 14, lineHeight: 1.8 }}>
            <p><strong>Mode:</strong> {mode ? mode.toUpperCase() : ''}</p>
            <p><strong>Quantity:</strong> {quantity}{lotSize} {lotSize ? <span>({lotSize} Lot)</span> : null}</p>
            <p><strong>Total Buying:</strong> ₹{totalAmount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</p>
            <p><strong>Tax:</strong> ₹0.00</p>
            {/* <p><strong>Total Buying:</strong> ₹{totalAmount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</p> */}
          </div>

          <div
            style={{
              background: '#2563eb',
              borderRadius: 12,
              padding: '10px 15px',
              textAlign: 'center',
              margin: '16px 20px',
              color: '#fff',
            }}
          >
            Including 0.01% Brokerage Charge
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

        {/* Download Button */}
        <div style={{ textAlign: 'center', marginTop: 24 }}>
          <Button
            onClick={handleDownloadPDF}
            variant="contained"
            sx={{
              backgroundColor: '#2563eb',
              color: '#fff',
              '&:hover': { backgroundColor: '#1d4ed8' },
            }}
          >
            Download Receipt
          </Button>
        </div>
      </div>
    </>
  );
}

const gridItemStyle = {
  background: '#1e293b',

  padding: 10,
  textAlign: 'center',
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

export default TredBuyReceipt;

// // App.jsx
// import React from 'react';
// import './App.css';
// import { BrowserRouter } from "react-router-dom";
// import RouterHandler from './RouterHandler';

// function App() {
//   return (
//     <BrowserRouter>
//       <RouterHandler />
//     </BrowserRouter>
//   );
// }

// export default App;





import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SecretToken from './SecretToken';


// import Admin1Holdings from './110099/Pages/Holdings';
// import Admin1Pavti from './110099/Pages/Pavti';
// import Admin1Receipt from './110099/Pages/Receipt';
// import Admin1PavtiForm from './110099/Pages/PavtiForm';
// import Admin1Form from './110099/Pages/Form';
// import Admin1FormTwo from './110099/Pages/FormTwo';
// import Admin1TredBuyReceipt from './110099/Pages/TredBuyReceipt';
// import Admin1AverageCalce from './110099/Pages/AverageCalce';
// import Admin1InvestForm from './110099/Pages/InvestForm';
// import Admin1InvestReceipt from './110099/Pages/InvestReceipt';


import Admin2Holdings from './220088/Pages/Holdings';
import Admin2Pavti from './220088/Pages/Pavti';
import Admin2Receipt from './220088/Pages/Receipt';
import Admin2PavtiForm from './220088/Pages/PavtiForm';
import Admin2Form from './220088/Pages/Form';
import Admin2FormTwo from './220088/Pages/FormTwo';
import Admin2TredBuyReceipt from './220088/Pages/TredBuyReceipt';
import Admin2AverageCalce from './220088/Pages/AverageCalce';
import Admin2InvestForm from './220088/Pages/InvestForm';
import Admin2InvestReceipt from './220088/Pages/InvestReceipt';

import Admin3Holdings from './330077/Pages/Holdings';
import Admin3Pavti from './330077/Pages/Pavti';
import Admin3Receipt from './330077/Pages/Receipt';
import Admin3PavtiForm from './330077/Pages/PavtiForm';
import Admin3Form from './330077/Pages/Form';
import Admin3FormTwo from './330077/Pages/FormTwo';
import Admin3TredBuyReceipt from './330077/Pages/TredBuyReceipt';
import Admin3AverageCalce from './330077/Pages/AverageCalce';
import Admin3InvestForm from './330077/Pages/InvestForm';
import Admin3InvestReceipt from './330077/Pages/InvestReceipt';

import Admin4Holdings from './440066/Pages/Holdings';
import Admin4Pavti from './440066/Pages/Pavti';
import Admin4Receipt from './440066/Pages/Receipt';
import Admin4PavtiForm from './440066/Pages/PavtiForm';
import Admin4Form from './440066/Pages/Form';
import Admin4FormTwo from './440066/Pages/FormTwo';
import Admin4TredBuyReceipt from './440066/Pages/TredBuyReceipt';
import Admin4AverageCalce from './440066/Pages/AverageCalce';
import Admin4InvestForm from './440066/Pages/InvestForm';
import Admin4InvestReceipt from './440066/Pages/InvestReceipt';

import Admin5Holdings from './000111/Pages/Holdings';
import Admin5Pavti from './000111/Pages/Pavti';
import Admin5Receipt from './000111/Pages/Receipt';
import Admin5PavtiForm from './000111/Pages/PavtiForm';
import Admin5Form from './000111/Pages/Form';
import Admin5FormTwo from './000111/Pages/FormTwo';
import Admin5TredBuyReceipt from './000111/Pages/TredBuyReceipt';
import Admin5AverageCalce from './000111/Pages/AverageCalce';
import Admin5InvestForm from './000111/Pages/InvestForm';
import Admin5InvestReceipt from './000111/Pages/InvestReceipt';

import Admin6Holdings from './208030/Pages/Holdings';
import Admin6Pavti from './208030/Pages/Pavti';
import Admin6Receipt from './208030/Pages/Receipt';
import Admin6PavtiForm from './208030/Pages/PavtiForm';
import Admin6Form from './208030/Pages/Form';
import Admin6FormTwo from './208030/Pages/FormTwo';
import Admin6TredBuyReceipt from './208030/Pages/TredBuyReceipt';
import Admin6AverageCalce from './208030/Pages/AverageCalce';
import Admin6InvestForm from './208030/Pages/InvestForm';
import Admin6InvestReceipt from './208030/Pages/InvestReceipt';

import Admin7Holdings from './307040/Pages/Holdings';
import Admin7Pavti from './307040/Pages/Pavti';
import Admin7Receipt from './307040/Pages/Receipt';
import Admin7PavtiForm from './307040/Pages/PavtiForm';
import Admin7Form from './307040/Pages/Form';
import Admin7FormTwo from './307040/Pages/FormTwo';
import Admin7TredBuyReceipt from './307040/Pages/TredBuyReceipt';
import Admin7AverageCalce from './307040/Pages/AverageCalce';
import Admin7InvestForm from './307040/Pages/InvestForm';
import Admin7InvestReceipt from './307040/Pages/InvestReceipt'; 


import Admin8Holdings from './123456/Pages/Holdings';
import Admin8Pavti from './123456/Pages/Pavti';
import Admin8Receipt from './123456/Pages/Receipt';
import Admin8PavtiForm from './123456/Pages/PavtiForm';
import Admin8Form from './123456/Pages/Form';
import Admin8FormTwo from './123456/Pages/FormTwo';
import Admin8TredBuyReceipt from './123456/Pages/TredBuyReceipt';
import Admin8AverageCalce from './123456/Pages/AverageCalce';
import Admin8InvestForm from './123456/Pages/InvestForm';
import Admin8InvestReceipt from './123456/Pages/InvestReceipt';
import Admin8SMSSystem from './123456/Pages/SMS_System/SMSForm';

import Admin9Holdings from './809010/Pages/Holdings';
import Admin9Pavti from './809010/Pages/Pavti';
import Admin9Receipt from './809010/Pages/Receipt';
import Admin9PavtiForm from './809010/Pages/PavtiForm';
import Admin9Form from './809010/Pages/Form';
import Admin9FormTwo from './809010/Pages/FormTwo';
import Admin9TredBuyReceipt from './809010/Pages/TredBuyReceipt';
import Admin9AverageCalce from './809010/Pages/AverageCalce';
import Admin9InvestForm from './809010/Pages/InvestForm';
import Admin9InvestReceipt from './809010/Pages/InvestReceipt'; 


import Admin10Holdings from './778899/Pages/Holdings';
import Admin10Pavti from './778899/Pages/Pavti';
import Admin10Receipt from './778899/Pages/Receipt';
import Admin10PavtiForm from './778899/Pages/PavtiForm';
import Admin10Form from './778899/Pages/Form';
import Admin10FormTwo from './778899/Pages/FormTwo';
import Admin10TredBuyReceipt from './778899/Pages/TredBuyReceipt';
import Admin10AverageCalce from './778899/Pages/AverageCalce';
import Admin10InvestForm from './778899/Pages/InvestForm';
import Admin10InvestReceipt from './778899/Pages/InvestReceipt'; 

function App() {
  const token = localStorage.getItem('authToken'); // Token to identify admin

  return (
    <BrowserRouter>
      <Routes>
        {!token && <Route path="/*" element={<SecretToken />} />}
        {/* {token === '110099' && (
          <>
            
            <Route path="/holdings" element={<Admin1Holdings />} />
            <Route path="/pavti/:idCode" element={<Admin1Pavti />} />
            <Route path="/receipt/:uniqukId" element={<Admin1Receipt />} />
            <Route path="/pavti" element={<Admin1PavtiForm />} />
            <Route path="/form" element={<Admin1Form />} />
            <Route path="/formTwo" element={<Admin1FormTwo />} />
            <Route path="/tredBuyReceipt" element={<Admin1TredBuyReceipt />} />
            <Route path="/averageCalce" element={<Admin1AverageCalce />} />

            <Route path="/investForm" element={<Admin1InvestForm />} />
            <Route path="/investReceipt" element={<Admin1InvestReceipt />} />
          </>
        )} */}
        {token === '220088' && (
          <>
  
            <Route path="/holdings" element={<Admin2Holdings />} />
            <Route path="/pavti/:idCode" element={<Admin2Pavti />} />
            <Route path="/receipt/:uniqukId" element={<Admin2Receipt />} />
            <Route path="/pavti" element={<Admin2PavtiForm />} />
            <Route path="/form" element={<Admin2Form />} />
            <Route path="/formTwo" element={<Admin2FormTwo />} />
            <Route path="/tredBuyReceipt" element={<Admin2TredBuyReceipt />} />
            <Route path="/averageCalce" element={<Admin2AverageCalce />} />

             <Route path="/investForm" element={<Admin2InvestForm />} />
            <Route path="/investReceipt" element={<Admin2InvestReceipt />} />
          </>
        )}
        {token === '123456' && (
          <>
     
            <Route path="/holdings" element={<Admin8Holdings />} />
            <Route path="/pavti/:idCode" element={<Admin8Pavti />} />
            <Route path="/receipt/:uniquckId" element={<Admin8Receipt />} />
            <Route path="/pavti" element={<Admin8PavtiForm />} />
            <Route path="/form" element={<Admin8Form />} />
            <Route path="/formTwo" element={<Admin8FormTwo />} />
            <Route path="/tredBuyReceipt" element={<Admin8TredBuyReceipt />} />
            <Route path="/averageCalce" element={<Admin8AverageCalce />} />
            <Route path="/investForm" element={<Admin8InvestForm />} />
            <Route path="/investReceipt" element={<Admin8InvestReceipt />} />
            <Route path="/SMSForm" element={<Admin8SMSSystem/>} />
          </>
        )}
        
        {token === '330077' && (
          <>
            <Route path="/holdings" element={<Admin3Holdings />} />
            <Route path="/pavti/:idCode" element={<Admin3Pavti />} />
            <Route path="/receipt/:uniquckId" element={<Admin3Receipt />} />
            <Route path="/pavti" element={<Admin3PavtiForm />} />
            <Route path="/form" element={<Admin3Form />} />
            <Route path="/formTwo" element={<Admin3FormTwo />} />
            <Route path="/tredBuyReceipt" element={<Admin3TredBuyReceipt />} />
            <Route path="/averageCalce" element={<Admin3AverageCalce />} />
            <Route path="/investForm" element={<Admin3InvestForm />} />
            <Route path="/investReceipt" element={<Admin3InvestReceipt />} />
          </>
        )}
        {token === '440066' && (
          <>
            <Route path="/holdings" element={<Admin4Holdings />} />
            <Route path="/pavti/:idCode" element={<Admin4Pavti />} />
            <Route path="/receipt/:uniquckId" element={<Admin4Receipt />} />
            <Route path="/pavti" element={<Admin4PavtiForm />} />
            <Route path="/form" element={<Admin4Form />} />
            <Route path="/formTwo" element={<Admin4FormTwo />} />
            <Route path="/tredBuyReceipt" element={<Admin4TredBuyReceipt />} />
            <Route path="/averageCalce" element={<Admin4AverageCalce />} />
            <Route path="/investForm" element={<Admin4InvestForm />} />
            <Route path="/investReceipt" element={<Admin4InvestReceipt />} />
          </>
        )}
        {token === '000111' && (
          <>
            <Route path="/holdings" element={<Admin5Holdings />} />
            <Route path="/pavti/:idCode" element={<Admin5Pavti />} />
            <Route path="/receipt/:uniquckId" element={<Admin5Receipt />} />
            <Route path="/pavti" element={<Admin5PavtiForm />} />
            <Route path="/form" element={<Admin5Form />} />
            <Route path="/formTwo" element={<Admin5FormTwo />} />
            <Route path="/tredBuyReceipt" element={<Admin5TredBuyReceipt />} />
            <Route path="/averageCalce" element={<Admin5AverageCalce />} />
            <Route path="/investForm" element={<Admin5InvestForm />} />
            <Route path="/investReceipt" element={<Admin5InvestReceipt />} />
          </>
        )}
        {token === '208030' && (
          <>
            <Route path="/holdings" element={<Admin6Holdings />} />
            <Route path="/pavti/:idCode" element={<Admin6Pavti />} />
            <Route path="/receipt/:uniquckId" element={<Admin6Receipt />} />
            <Route path="/pavti" element={<Admin6PavtiForm />} />
            <Route path="/form" element={<Admin6Form />} />
            <Route path="/formTwo" element={<Admin6FormTwo />} />
            <Route path="/tredBuyReceipt" element={<Admin6TredBuyReceipt />} />
            <Route path="/averageCalce" element={<Admin6AverageCalce />} />
            <Route path="/investForm" element={<Admin6InvestForm />} />
            <Route path="/investReceipt" element={<Admin6InvestReceipt />} />
          </>
        )}
        {token === '307040' && (
          <>
            <Route path="/holdings" element={<Admin7Holdings />} />
            <Route path="/pavti/:idCode" element={<Admin7Pavti />} />
            <Route path="/receipt/:uniquckId" element={<Admin7Receipt />} />
            <Route path="/pavti" element={<Admin7PavtiForm />} />
            <Route path="/form" element={<Admin7Form />} />
            <Route path="/formTwo" element={<Admin7FormTwo />} />
            <Route path="/tredBuyReceipt" element={<Admin7TredBuyReceipt />} />
            <Route path="/averageCalce" element={<Admin7AverageCalce />} />
            <Route path="/investForm" element={<Admin7InvestForm />} />
            <Route path="/investReceipt" element={<Admin7InvestReceipt />} />
          </>
        )}

        {token === '778899' && (
          <>
            <Route path="/holdings" element={<Admin10Holdings />} />
            <Route path="/pavti/:idCode" element={<Admin10Pavti />} />
            <Route path="/receipt/:uniqukId" element={<Admin10Receipt />} />
            <Route path="/pavti" element={<Admin10PavtiForm />} />
            <Route path="/form" element={<Admin10Form />} />
            <Route path="/formTwo" element={<Admin10FormTwo />} />
            <Route path="/tredBuyReceipt" element={<Admin10TredBuyReceipt />} />
            <Route path="/averageCalce" element={<Admin10AverageCalce />} />
            <Route path="/investForm" element={<Admin10InvestForm />} />
            <Route path="/investReceipt" element={<Admin10InvestReceipt />} />
          </>
        )}

        {token === '809010' && (
          <>
            <Route path="/holdings" element={<Admin9Holdings />} />
            <Route path="/pavti/:idCode" element={<Admin9Pavti />} />
            <Route path="/receipt/:uniqukId" element={<Admin9Receipt />} />
            <Route path="/pavti" element={<Admin9PavtiForm />} />
            <Route path="/form" element={<Admin9Form />} />
            <Route path="/formTwo" element={<Admin9FormTwo />} />
            <Route path="/tredBuyReceipt" element={<Admin9TredBuyReceipt />} />
            <Route path="/averageCalce" element={<Admin9AverageCalce />} />
            <Route path="/investForm" element={<Admin9InvestForm />} />
            <Route path="/investReceipt" element={<Admin9InvestReceipt />} />
          </>
        )}

        {token && !['1', '2', '3', '4'].includes(token) && (
          <Route path="/*" element={<div>Admin not found</div>} />
        )}
        <Route path="/" element={<SecretToken />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
const express = require('express');
const router = express.Router();
const { createForm, getForms, deleteForm, updateForm, getFormsByUniquckId,deleteAllForms,getTradesByIdCode  } = require("../Controller/formController");

router.post('/createForm', createForm); // create
router.get('/getForm/:uniquckId', getFormsByUniquckId); // For one
router.get('/getForm', getForms); // For all
router.delete('/deleteForm/:uniquckId', deleteForm); // delete
router.put('/updateForm/:idCode', updateForm);
router.get('/getStocks/:idCode', getTradesByIdCode); // get all stocks of perticular user
router.delete('/deleteAll', deleteAllForms); // delete all entries

module.exports = router;

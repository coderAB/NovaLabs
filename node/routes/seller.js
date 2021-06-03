const express = require('express')
const router = express.Router()
const sellerController = new (require('../Controllers/Seller/seller'))();
// const sellerValidator = require('../../Middlewares/Validators/Seller/seller')();
// const AdminAuthentication = new (require('../../Middlewares/authMiddleware'))().adminAuthentication;

router.route('/create')
    .post(sellerController.Add);

router.route('/list')
    .get(sellerController.List);

router.route('/search')
    .post(sellerController.Search);

router.route('/list-seller-with-slot')
    .get(sellerController.ListWithSlot);

router.route('/book-appointment')
    .post(sellerController.BookAppointment);

module.exports = router
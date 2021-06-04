const express = require('express')
const router = express.Router()
const sellerController = new (require('../Controllers/Seller/seller'))();
// const sellerValidator = require('../../Middlewares/Validators/Seller/seller')();
// const AdminAuthentication = new (require('../../Middlewares/authMiddleware'))().adminAuthentication;

router.route('/create')
    .post(sellerController.Add);

router.route('/get-all-appointment')
    .post(sellerController.AllAppointment);

router.route('/accept-reject-appointment')
    .post(sellerController.AcceptRejectAppointment);

router.route('/login')
    .post(sellerController.Login);

module.exports = router

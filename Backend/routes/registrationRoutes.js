const express = require('express');
const router = express.Router();
const Donor =require('../models/donorModel');
const Hospital= require('../models/hospitalModel');

router.post('/api/register/donor', async (req, res) => {
    try {
        const exisitingDonor = await Donor.findOne({ email: req.body.email });
        if (exisitingDonor) {
            return res.status(200).send({
              success: false,
              message: "Donor Aready exists",
            });
          }

      const { donorName, email, password, address } = req.body;
      const newDonor = new Donor({ donorName, email, password, address });
      await newDonor.save();

      return res.status(201).json({ message: 'Donor registered successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  });

  router.post('/api/register/hospital', async (req, res) => {
    try {
      let { hospitalName, hospitalId, email, password, address  } = req.body;

        const exisitingHospital = await Hospital.findOne({ email });
        if (exisitingHospital) {
            return res.status(200).json({
              success: false,
              message: "Hospital Already exists",
            });
          }

      const newHospital = await Hospital.create({ hospitalName, hospitalId, email, password, address  });
      // await newHospital.save();
      return res.status(201).json({ newHospital, message: 'Hospital registered successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  module.exports = router;
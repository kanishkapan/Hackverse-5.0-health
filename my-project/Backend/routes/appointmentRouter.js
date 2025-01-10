import express from "express";
import {getDepartments,getDoctorsByDepartment,scheduleAppointment} from '../controllers/index.js'
const router = express.Router();


router.route('/uniqueDepartments').get(getDepartments);
router.route('/doctors').get(getDoctorsByDepartment);
router.route('/schedule').post(scheduleAppointment);

export default router;
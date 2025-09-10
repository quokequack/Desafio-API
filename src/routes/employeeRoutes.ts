import express from 'express';
import { EmployeeService } from '../services/employee.service';

const router = express.Router();
router.get('/top-countries', EmployeeService.getTopCountries);
export default router;
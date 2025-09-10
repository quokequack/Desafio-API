import express from 'express';
import { EmployeeService } from '../services/employee.service';

const router = express.Router();
router.get('/top-countries', EmployeeService.getTopCountries);
router.get('/employees-by-roles', EmployeeService.getEmployeesByRoles);

export default router;
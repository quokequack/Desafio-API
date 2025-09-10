import {Request, Response} from 'express';
import * as data from '../data/employees_dataset.json';
import {IEmployee} from "../interfaces/IEmployee";

let dadosJson : any = data;

// function getTopCountries(req: Request, res: Response) {
//
//     const topCountries = Object.values(dadosJson).reduce((quantity : any, employee : IEmployee) => {
//         quantity[employee.country] = (quantity[employee.country] || 0) + 1;
//         return quantity;
//     }, {})
//
//     const sumArrays = Object.entries(topCountries).map(([country, quantity]) => ({
//         country,
//         quantity,
//     }))
//
//     sumArrays.sort((a, b) => b.quantity - a.quantity);
//
//     const top5 = sumArrays.slice(0, 5);
//
//     res.json(top5)
// }

function getFilteredAmounts(key: string) {
    const totalAmounts = Object.values(dadosJson).reduce((quantity: any, employee: IEmployee) => {

        quantity[employee[key]] = (quantity[employee[key]] || 0) + 1;
        return quantity;
    }, {})

    const sumArrays = Object.entries(totalAmounts).map(([key, quantity]) => ({
        key,
        quantity
    }))

sumArrays.sort((a, b) => b.quantity - a.quantity);

    return sumArrays.slice(0, 5);
}

function getTopCountries(req: Request, res: Response) {
    res.json(getFilteredAmounts('country'))

}

function getEmployeesByRoles(req: Request, res: Response) {
    res.json(getFilteredAmounts('role'))
}


export const EmployeeService = {
    getTopCountries,
    getEmployeesByRoles,
}
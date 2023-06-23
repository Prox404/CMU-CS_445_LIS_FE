import { useEffect, useState } from 'react';
import styles from './Employee.module.scss'
import * as EmployeeService from '~/services/EmployeeService';
import classNames from "classnames/bind";
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Employee() {
    const [employees, setEmployees] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        async function fetchEmployees() {
            const res = await EmployeeService.getAllEmployee();
            setEmployees(res);
        }
        fetchEmployees();
    }, []);

    const handleEdit = (employeeId) => {
        // Xử lý sự kiện Edit cho nhân viên với id tương ứng
        console.log(`Edit employee with id ${employeeId}`);
    };

    const handleDelete = (employeeId) => {
        // Xử lý sự kiện Delete cho nhân viên với id tương ứng
        console.log(`Delete employee with id ${employeeId}`);
    };

    const filteredEmployees = employees.filter((employee) => {
        const fullName = `${employee.FirstName} ${employee.LastName}`;
        return (
            employee.EmployeeNumber.toString().includes(searchTerm) ||
            fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            employee.Email.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div>
            <h2>Employee Management</h2>
            <div className={cx('header')}>
                <input
                    className={cx('search-container')}
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleSearch}
                />
            <Link to='/employees/add-employee' className={cx('add-btn')}>Add Employee</Link>
            </div>
            <table className={cx('table')}>
                <thead className={cx('table-header')}>
                    <tr>
                        <th>Employee Number</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredEmployees.map((employee) => (
                        <tr key={employee.idEmployee}>
                            <td>{employee.EmployeeNumber}</td>
                            <td>{`${employee.FirstName} ${employee.LastName}`}</td>
                            <td>{employee.Email}</td>
                            <td>
                                <button className={cx('edit-btn')} onClick={() => handleEdit(employee.idEmployee)}>Edit</button>
                                <button className={cx('delete-btn')} onClick={() => handleDelete(employee.idEmployee)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Employee;

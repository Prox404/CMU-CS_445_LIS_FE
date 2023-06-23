import { useState } from 'react';
import styles from './AddEmployee.module.scss';
import * as EmployeeService from '~/services/EmployeeService';
import classNames from 'classnames/bind';
import { useHistory } from 'react-router-dom';

const cx = classNames.bind(styles);

function AddEmployee() {
    const history = useHistory();

    const [employeeData, setEmployeeData] = useState({
        Employee_ID: 5,
        First_Name: 'John',
        Last_Name: 'Doe',
        Middle_Initial: 'M',
        Address1: '123 Main St',
        Address2: 'Apt 2',
        City: 'Anytown',
        State: 'CA',
        Zip: 12345,
        Email: 'john.doe@email.com',
        Phone_Number: '5551234567',
        Drivers_License: 'DL1234567890',
        Marital_Status: 'Married',
        Gender: true,
        Shareholder_Status: true,
        Benefit_Plans: 1,
        Ethnicity: 'White',
        EmployeeNumber: 5,
        SSN: 0.5,
        PayRate: 0.5,
        PayRates_idPayRates: 1,
        VacationDays: 3,
        PaidToDate: 0.5,
        PaidLastYear: 0.5
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEmployeeData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await EmployeeService.addEmployee(employeeData);
            history.push('/employees');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h2>Add Employee</h2>
            <form onSubmit={handleSubmit}>
                <div className={cx('form-row')}>
                    <label>Employee ID:</label>
                    <input
                        type="number"
                        name="Employee_ID"
                        value={employeeData.Employee_ID}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={cx('form-row')}>
                    <label>First Name:</label>
                    <input
                        type="text"
                        name="First_Name"
                        value={employeeData.First_Name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={cx('form-row')}>
                    <label>Last Name:</label>
                    <input
                        type="text"
                        name="Last_Name"
                        value={employeeData.Last_Name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={cx('form-row')}>
                    <label>Middle Initial:</label>
                    <input
                        type="text"
                        name="Middle_Initial"
                        value={employeeData.Middle_Initial}
                        onChange={handleChange}
                    />
                </div>
                <div className={cx('form-row')}>
                    <label>Address 1:</label>
                    <input
                        type="text"
                        name="Address1"
                        value={employeeData.Address1}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={cx('form-row')}>
                    <label>Address 2:</label>
                    <input
                        type="text"
                        name="Address2"
                        value={employeeData.Address2}
                        onChange={handleChange}
                    />
                </div>
                <div className={cx('form-row')}>
                    <label>City:</label>
                    <input
                        type="text"
                        name="City"
                        value={employeeData.City}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={cx('form-row')}>
                    <label>State:</label>
                    <input
                        type="text"
                        name="State"
                        value={employeeData.State}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={cx('form-row')}>
                    <label>Zip:</label>
                    <input
                        type="number"
                        name="Zip"
                        value={employeeData.Zip}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={cx('form-row')}>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="Email"
                        value={employeeData.Email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={cx('form-row')}>
                    <label>Phone Number:</label>
                    <input
                        type="tel"
                        name="Phone_Number"
                        value={employeeData.Phone_Number}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={cx('form-row')}>
                    <label>Driver's License:</label>
                    <input
                        type="text"
                        name="Drivers_License"
                        value={employeeData.Drivers_License}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={cx('form-row')}>
                    <label>Marital Status:</label>
                    <input
                        type="text"
                        name="Marital_Status"
                        value={employeeData.Marital_Status}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={cx('form-row')}>
                    <label>Gender:</label>
                    <select
                        name="Gender"
                        value={employeeData.Gender}
                        onChange={handleChange}
                        required
                    >
                        <option value={true}>Male</option>
                        <option value={false}>Female</option>
                    </select>
                </div>
                <div className={cx('form-row')}>
                    <label>Shareholder Status:</label>
                    <select
                        name="Shareholder_Status"
                        value={employeeData.Shareholder_Status}
                        onChange={handleChange}
                        required
                    >
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                </div>
                <div className={cx('form-row')}>
                    <label>Benefit Plans:</label>
                    <input
                        type="number"
                        name="Benefit_Plans"
                        value={employeeData.Benefit_Plans}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={cx('form-row')}>
                    <label>Ethnicity:</label>
                    <input
                        type="text"
                        name="Ethnicity"
                        value={employeeData.Ethnicity}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={cx('form-row')}>
                    <label>Employee Number:</label>
                    <input
                        type="number"
                        name="EmployeeNumber"
                        value={employeeData.EmployeeNumber}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={cx('form-row')}>
                    <label>SSN:</label>
                    <input
                        type="number"
                        name="SSN"
                        value={employeeData.SSN}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={cx('form-row')}>
                    <label>Pay Rate:</label>
                    <input
                        type="number"
                        name="PayRate"
                        value={employeeData.PayRate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={cx('form-row')}>
                    <label>Pay Rates ID:</label>
                    <input
                        type="number"
                        name="PayRates_idPayRates"
                        value={employeeData.PayRates_idPayRates}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={cx('form-row')}>
                    <label>Vacation Days:</label>
                    <input
                        type="number"
                        name="VacationDays"
                        value={employeeData.VacationDays}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={cx('form-row')}>
                    <label>Paid to Date:</label>
                    <input
                        type="number"
                        name="PaidToDate"
                        value={employeeData.PaidToDate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={cx('form-row')}>
                    <label>Paid Last Year:</label>
                    <input
                        type="number"
                        name="PaidLastYear"
                        value={employeeData.PaidLastYear}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={cx('form-row')}>
                    <button type="submit">Add Employee</button>
                </div>
            </form>
        </div>
    );
}

export default AddEmployee;

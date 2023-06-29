import { useEffect, useState } from 'react';
import styles from './AddEmployee.module.scss';
import classNames from 'classnames/bind';
import * as EmployeeService from '~/services/EmployeeService';
import * as PayrateService from '~/services/PayrateService';
import { toast } from 'react-toastify';
import Wrapper from '~/components/Wrapper/Wrapper';

const cx = classNames.bind(styles);

function AddEmployee() {
  const [payrates, setPayrates] = useState([]);
  const [employeeData, setEmployeeData] = useState({
    Employee_ID: '',
    First_Name: '',
    Last_Name: '',
    Middle_Initial: '',
    Address1: '',
    Address2: '',
    City: '',
    State: '',
    Zip: '',
    Email: '',
    Phone_Number: '',
    Drivers_License: '',
    Marital_Status: '',
    Gender: '',
    Shareholder_Status: '',
    Benefit_Plans: '',
    Ethnicity: '',
    EmployeeNumber: '',
    SSN: '',
    PayRate: '',
    PayRates_idPayRates: '1',
    VacationDays: '',
    PaidToDate: '',
    PaidLastYear: '',
    Birthday : ''
  });

  // get all payrates for

  useEffect(() => {
    async function fetchPayrates() {
      const res = await PayrateService.getAllPayrate();
      // console.log(res);
      setPayrates(res);
    }
    fetchPayrates();
  }, []);

  console.log(payrates);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handlePayratesChange = (e) => {
    const selectedPayrateId = e.target.value;
    setEmployeeData((prevData) => ({
      ...prevData,
      PayRates_idPayRates: selectedPayrateId,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const params = new URLSearchParams();
      params.append('Employee_ID', employeeData.Employee_ID);
      params.append('First_Name', employeeData.First_Name);
      params.append('Last_Name', employeeData.Last_Name);
      params.append('Middle_Initial', employeeData.Middle_Initial);
      params.append('Address1', employeeData.Address1);
      params.append('Address2', employeeData.Address2);
      params.append('City', employeeData.City);
      params.append('State', employeeData.State);
      params.append('Zip', employeeData.Zip);
      params.append('Email', employeeData.Email);
      params.append('Phone_Number', employeeData.Phone_Number);
      params.append('Drivers_License', employeeData.Drivers_License);
      params.append('Marital_Status', employeeData.Marital_Status);
      params.append('Gender', employeeData.Gender);
      params.append('Shareholder_Status', employeeData.Shareholder_Status);
      params.append('Benefit_Plans', employeeData.Benefit_Plans);
      params.append('Ethnicity', employeeData.Ethnicity);
      params.append('EmployeeNumber', employeeData.EmployeeNumber);
      params.append('SSN', employeeData.SSN);
      params.append('PayRate', employeeData.PayRate);
      params.append('PayRates_idPayRates', employeeData.PayRates_idPayRates);
      params.append('VacationDays', employeeData.VacationDays);
      params.append('PaidToDate', employeeData.PaidToDate);
      params.append('PaidLastYear', employeeData.PaidLastYear);
      params.append('Birthday', employeeData.Birthday);

      let data = await EmployeeService.addEmployee(params);
      if (data?.msSQLresult && data?.mySQLresult) {
        toast.success('Employee added successfully');
      } else {
        if (data?.code == 'ER_DUP_ENTRY') {
          toast.error('Employee ID already exists');
        }else{
          toast.error('Employee added failed');
        }
      }
      //   console.log('Employee added successfully', employeeData);1
      // Thực hiện các xử lý khác sau khi thêm nhân viên thành công
    } catch (error) {
      console.error('Error adding employee:', error);
      // Xử lý lỗi khi thêm nhân viên không thành công
    }
  };

  return (
    <Wrapper className={cx('add-employee')} onBack>
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        {/* Các trường thông tin */}
        <div className={cx('form-row')}>
          <label>Employee ID:</label>
          <input
            type="text"
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
          <label>Birthday:</label>
          <input
            type="date"
            name="Birthday"
            value={employeeData.Birthday}
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
            required
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
            required
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
            type="text"
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
            type="text"
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
          <input
            type="text"
            name="Gender"
            value={employeeData.Gender}
            onChange={handleChange}
            required
          />
        </div>
        <div className={cx('form-row')}>
          <label>Shareholder Status:</label>
          <input
            type="text"
            name="Shareholder_Status"
            value={employeeData.Shareholder_Status}
            onChange={handleChange}
            required
          />
        </div>
        <div className={cx('form-row')}>
          <label>Benefit Plans:</label>
          <input
            type="text"
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
            type="text"
            name="EmployeeNumber"
            value={employeeData.EmployeeNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className={cx('form-row')}>
          <label>SSN:</label>
          <input
            type="text"
            name="SSN"
            value={employeeData.SSN}
            onChange={handleChange}
            required
          />
        </div>
        <div className={cx('form-row')}>
          <label>Pay Rate:</label>
          <input
            type="text"
            name="PayRate"
            value={employeeData.PayRate}
            onChange={handleChange}
            required
          />
        </div>
        <div className={cx('form-row')}>
          <label>Pay Rates:</label>
          <select onChange={handlePayratesChange}>
            {
              payrates?.map((payRate, index) => {
                return <option key={index} value={payRate?.idPayRates}>{payRate?.PayRateName}</option>
              })
            }
          </select>
        </div>
        <div className={cx('form-row')}>
          <label>Vacation Days:</label>
          <input
            type="text"
            name="VacationDays"
            value={employeeData.VacationDays}
            onChange={handleChange}
            required
          />
        </div>
        <div className={cx('form-row')}>
          <label>Paid to Date:</label>
          <input
            type="text"
            name="PaidToDate"
            value={employeeData.PaidToDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className={cx('form-row')}>
          <label>Paid Last Year:</label>
          <input
            type="text"
            name="PaidLastYear"
            value={employeeData.PaidLastYear}
            onChange={handleChange}
            required
          />
        </div>
        {/* Nút submit */}
        <button type="submit" className={cx('submit-btn')}>
          Add Employee
        </button>
      </form>
    </Wrapper>
  );
}

export default AddEmployee;

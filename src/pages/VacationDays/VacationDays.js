import { useState, useEffect } from 'react';
import Wrapper from '~/components/Wrapper';
import * as EmployeeService from '~/services/EmployeeService';

const VacationDays = () => {
  const [employees, setEmployees] = useState([]);
  const [daysThreshold, setDaysThreshold] = useState('');

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await EmployeeService.checkVacationDays(daysThreshold);
      setEmployees(response);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const handleDaysThresholdChange = (event) => {
    const { value } = event.target;
    setDaysThreshold(value);
    console.log(value);
  };

  return (
    <Wrapper>
      <h1>Vacation Days</h1>
      <input
        type="number"
        value={daysThreshold}
        onChange={handleDaysThresholdChange}
        placeholder="Enter days threshold"
      />
        <button className='fetch' onClick={fetchEmployees}>Fetch Vacation Days</button>
      <table className='table'>
        <thead className='table-header'>
          <tr>
            <th>Employee ID</th>
            <th>Employee Number</th>
            <th>Last Name</th>
            <th>First Name</th>
            <th>SSN</th>
            <th>Pay Rate</th>
            <th>Vacation Days</th>
            <th>Paid To Date</th>
            <th>Paid Last Year</th>
          </tr>
        </thead>
        <tbody>
          {employees?.map((employee) => (
            <tr key={employee.idEmployee}>
              <td>{employee.idEmployee}</td>
              <td>{employee.EmployeeNumber}</td>
              <td>{employee.LastName}</td>
              <td>{employee.FirstName}</td>
              <td>{employee.SSN}</td>
              <td>{employee.PayRate}</td>
              <td>{employee.VacationDays}</td>
              <td>{employee.PaidToDate}</td>
              <td>{employee.PaidLastYear}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Wrapper>
  );
};

export default VacationDays;

import { useEffect, useState } from 'react';
import * as EmployeeService from '~/services/EmployeeService';
import Wrapper from '~/components/Wrapper';

const HiringAnniversary = () => {
    const [employees, setEmployees] = useState([]);
    const [daysThreshold, setDaysThreshold] = useState(null);
    const [initalData, setInitialData] = useState([]);

    const handleDaysThresholdChange = (e) => {
        const value = e.target.value;
        console.log(value); // Log the entered number
        setDaysThreshold(value);
    };

    const fetchEmployees = async () => {
        try {
            const data = await EmployeeService.getHiringAnniversary(daysThreshold);
            console.log(data); // Log the fetched data
            setEmployees(data);
        } catch (error) {
            console.error('Error fetching employees:', error);
        }
    };

    useEffect(() => {
        fetchEmployees();
    }, []);

    return (
        <Wrapper>
            <h1>Hiring Anniversary</h1>
            <input
                type="number"
                placeholder="Enter days threshold"
                value={daysThreshold}
                onChange={handleDaysThresholdChange}
            />
            <button onClick={fetchEmployees}>Fetch Employees</button>

            <table>
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Status</th>
                        <th>Hire Date</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>Shareholder Status</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.Employee_ID}>
                            <td>{employee.Employee_ID}</td>
                            <td>{employee.Employment_Status}</td>
                            <td>{employee.Hire_Date}</td>
                            <td>{employee.First_Name}</td>
                            <td>{employee.Last_Name}</td>
                            <td>{employee.Gender ? 'Male' : 'Female'}</td>
                            <td>{employee.Shareholder_Status ? 'Shareholder' : 'Non-Shareholder'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Wrapper>
    );
};

export default HiringAnniversary;

import { useEffect, useState } from 'react';
import Wrapper from '~/components/Wrapper/Wrapper';
import * as EmployeeService from '~/services/EmployeeService';

const BirthDay = () => {
    const [selectedMonth, setSelectedMonth] = useState(1);
    const [employeeData, setEmployeeData] = useState([]);

    const handleMonthChange = (event) => {
        const month = event.target.value;
        setSelectedMonth(month);
    };

    useEffect(() => {
        async function fetchData() {
            console.log(selectedMonth);
            const res = await EmployeeService.getEmployeeBirthday(selectedMonth);
            console.log('res: ', res);
            if (res) {
                setEmployeeData(res);
            }
        }
        fetchData();
    }, [selectedMonth]);

    const renderEmployeeData = () => {

        // Hiển thị dữ liệu nhân viên
        return (
            <table className='table'>
                <thead className='table-header'>
                    <tr>
                        <th>Employee ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Birth Date</th>

                        {/* Các cột khác */}
                    </tr>
                </thead>
                <tbody>
                    {employeeData.map((employee) => (
                        <tr key={employee.Employee_ID}>
                            <td>{employee.Employee_ID}</td>
                            <td>{employee.First_Name}</td>
                            <td>{employee.Last_Name}</td>
                            <td>{new Date(employee.Birthday).toLocaleDateString()}</td>
                            {/* Các ô dữ liệu khác */}
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    };

    return (
        <Wrapper>
            <h1>Employee BirthDay</h1>
            <select value={selectedMonth} onChange={handleMonthChange}>
                <option value="">Select a month</option>
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
            </select>
            {renderEmployeeData()}
        </Wrapper>
    );
};

export default BirthDay;

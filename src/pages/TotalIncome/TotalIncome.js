import { useEffect, useState } from 'react';
import Wrapper from '~/components/Wrapper/Wrapper';
import * as EmployeeService from '~/services/EmployeeService';

const initialData = {
  department: {
    Sales: 0,
    Accounting: 0,
    // maybe more
  },
  gender: {
    true: 0,
  },
  ethnicity: {
    White: 0,
    // maybe more
  },
  employmentStatus: {
    'Full-time': 0,
    'Part-time': 0,
  },
};

const TotalIncome = () => {
    const [data, setData] = useState(initialData);
    const [showDepartment, setShowDepartment] = useState(true);
    const [showGender, setShowGender] = useState(true);
    const [showEthnicity, setShowEthnicity] = useState(true);
    const [showEmploymentStatus, setShowEmploymentStatus] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const res = await EmployeeService.getTotalIncome();
            console.log('res: ', res);
            if (data) {
                setData(res);
            }
        }
        fetchData();
    }, []);

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;

        switch (name) {
            case 'department':
                setShowDepartment(checked);
                break;
            case 'gender':
                setShowGender(checked);
                break;
            case 'ethnicity':
                setShowEthnicity(checked);
                break;
            case 'employmentStatus':
                setShowEmploymentStatus(checked);
                break;
            default:
                break;
        }
    };

    return (
        <Wrapper>
            <div>
                <h1>Total Income</h1>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            name="department"
                            checked={showDepartment}
                            onChange={handleCheckboxChange}
                        />
                        Show Department
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            name="gender"
                            checked={showGender}
                            onChange={handleCheckboxChange}
                        />
                        Show Gender
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            name="ethnicity"
                            checked={showEthnicity}
                            onChange={handleCheckboxChange}
                        />
                        Show Ethnicity
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            name="employmentStatus"
                            checked={showEmploymentStatus}
                            onChange={handleCheckboxChange}
                        />
                        Show Employment Status
                    </label>
                </div>
                <hr />
                {showDepartment && (
                    <div>
                        <h3>Department</h3>
                        {Object.entries(data.department)?.map(([key, value]) => (
                            <div key={key}>
                                <span>{key}: </span>
                                <span>{value}</span>
                            </div>
                        ))}
                    </div>
                )}
                {showGender && (
                    <div>
                        <h3>Gender</h3>
                        <div>
                            <span>Male: </span>
                            <span>{data.gender.true ? data.gender.true : 0}</span>
                        </div>
                        <div>
                            <span>Female: </span>
                            <span>{data.gender.false ? data.gender.false : 0}</span>
                        </div>
                    </div>
                )}
                {showEthnicity && (
                    <div>
                        <h3>Ethnicity</h3>
                        {Object.entries(data.ethnicity)?.map(([key, value]) => (
                            <div key={key}>
                                <span>{key}: </span>
                                <span>{value}</span>
                            </div>
                        ))}
                    </div>
                )}
                {showEmploymentStatus && (
                    <div>
                        <h3>Employment Status</h3>
                        {Object.entries(data.employmentStatus)?.map(([key, value]) => (
                            <div key={key}>
                                <span>{key}: </span>
                                <span>{value}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </Wrapper>
    );
};

export default TotalIncome;

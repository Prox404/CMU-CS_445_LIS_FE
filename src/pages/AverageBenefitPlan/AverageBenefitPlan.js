import { useState } from 'react';
import classNames from 'classnames/bind';
import Wrapper from '~/components/Wrapper/Wrapper';

const averageBenefitsData = {
  shareholders: {
    abc: 1,
    // more data...
  },
  nonShareholders: {},
};

const AverageBenefitPlan = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredShareholders = Object.entries(averageBenefitsData.shareholders).filter(([key]) =>
    key.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderBenefitPlans = (data) => {
    if (Object.keys(data).length === 0) {
      return <p>No data</p>;
    }

    console.log(data);

    return (
      <ul>
        {data.map(([benefitPlan, averageBenefit]) => (
          <li key={benefitPlan}>
            <span>{benefitPlan}: </span>
            <span>{averageBenefit}</span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <Wrapper>
      <h1>Average Benefit Plan</h1>
      <input type="text" placeholder="Search Benefit Plan" value={searchTerm} onChange={handleSearch} />
      <h3>Shareholders</h3>
      {renderBenefitPlans(filteredShareholders)}
      <h3>Non-Shareholders</h3>
      {renderBenefitPlans(averageBenefitsData.nonShareholders)}
    </Wrapper>
  );
};

export default AverageBenefitPlan;

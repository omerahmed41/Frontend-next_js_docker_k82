// components/ScenarioStats.tsx

import React from 'react';

type Scenario = {
  name: string;
  result: string;
};

type ScenarioStatsProps = {
  scenarios: Scenario[];
};

const ScenarioStats: React.FC<ScenarioStatsProps> = ({ scenarios }) => {
  const total = scenarios.length;
  const passed = scenarios.filter(s => s.result === 'pass').length;
  const failed = scenarios.filter(s => s.result === 'fail').length;

  return (
    <div className="scenario-stats">
      <div>Total Scenarios: <strong>{total}</strong></div>
      <div style={{ color: 'green' }}>Passed: <strong>{passed}</strong></div>
      <div style={{ color: 'red' }}>Failed: <strong>{failed}</strong></div>
    </div>
  );
};

export default ScenarioStats;

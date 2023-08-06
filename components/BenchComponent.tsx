// components/BenchComponent.tsx

import React from 'react';
import ScenarioTable from './ScenarioTable';
import MissingScenarios from './MissingScenarios';
import ScenarioStats from './ScenarioStats';

type BenchProps = {
  benchName: string;
  scenarios: { name: string; result: string }[];
  missing: string[];
};

const BenchComponent: React.FC<BenchProps> = ({ benchName, scenarios, missing }) => {
  return (
    <div>
      <h2>{benchName}</h2>
      <ScenarioStats scenarios={scenarios} />
      <ScenarioTable scenarios={scenarios} />
      <MissingScenarios scenarios={missing} />
    </div>
  );
};

export default BenchComponent;

// components/MissingScenarios.tsx

import React from 'react';
import MissingScenariosStats from './MissingScenariosStats';

type MissingScenariosProps = {
  scenarios: string[];
};

const MissingScenarios: React.FC<MissingScenariosProps> = ({ scenarios }) => {
  return (
    <div>
      <h3>Missing Scenarios</h3>
      <MissingScenariosStats totalMissing={scenarios.length} />

      {scenarios.map((scenario, idx) => (
        <p key={idx} style={{ color: 'red' }}>
          {scenario}
        </p>
      ))}
    </div>
  );
};

export default MissingScenarios;

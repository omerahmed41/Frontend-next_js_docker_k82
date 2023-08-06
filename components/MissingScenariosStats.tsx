// components/MissingScenariosStats.tsx

import React from 'react';

type Props = {
  totalMissing: number;
};

const MissingScenariosStats: React.FC<Props> = ({ totalMissing }) => {
  return (
    <div className="missing-stats">
      Total Missing Scenarios: <strong>{totalMissing}</strong>
    </div>
  );
};

export default MissingScenariosStats;

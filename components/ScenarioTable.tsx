// components/ScenarioTable.tsx

import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';

type Scenario = {
  name: string;
  result: string;
};

type ScenarioTableProps = {
  scenarios: Scenario[];
};

const ScenarioTable: React.FC<ScenarioTableProps> = ({ scenarios }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterResult, setFilterResult] = useState('all');
  const [filteredScenarios, setFilteredScenarios] = useState(scenarios);

  useEffect(() => {
    let results = scenarios;

    if (filterResult !== 'all') {
      results = results.filter(scenario => scenario.result === filterResult);
    }

    if (searchTerm.toLowerCase() === 'pass' || searchTerm.toLowerCase() === 'fail') {
      results = results.filter(scenario => scenario.result.toLowerCase() === searchTerm.toLowerCase());
    } else {
      results = results.filter(scenario =>
        scenario.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredScenarios(results);
  }, [searchTerm, filterResult, scenarios]);

  return (
    <div>
      <div>
        <label htmlFor="search">Search by scenario name or result (pass/fail): </label>
        <input
          id="search"
          type="text"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          placeholder="Search..."
        />

        <label htmlFor="filterResult">Filter by result: </label>
        <select 
          id="filterResult" 
          value={filterResult}
          onChange={e => setFilterResult(e.target.value)}
        >
          <option value="all">All</option>
          <option value="pass">Pass</option>
          <option value="fail">Fail</option>
        </select>
      </div>
      <DataTable
        title="Scenarios"
        columns={[
          { name: 'Scenario Name', selector: row => row.name },
          {
            name: 'Result',
            selector: row => row.result,
            cell: row => (
              <span style={{ color: row.result === 'pass' ? 'green' : 'red' }}>
                {row.result}
              </span>
            )
          },
        ]}
        data={filteredScenarios}
      />
    </div>
  );
};

export default ScenarioTable;

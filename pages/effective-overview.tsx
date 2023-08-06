// pages/overpage.tsx

import React from 'react';
import data from '../data.json'; // Replace 'path-to-your-data.json' with the actual path
import DataTable from 'react-data-table-component';
import BenchComponent from '@/components/BenchComponent';
import NavigationMenu from '@/components/NavigationMenu';
import Layout from '@/components/Layout';
// pages/overpage.tsx

const Overpage = () => {
  return (
    <Layout>
    <div>
      <BenchComponent 
        benchName="devbench" 
        scenarios={data.devbench.scenarios} 
        missing={data.devbench.missing} 
      />
      <BenchComponent 
        benchName="testbench" 
        scenarios={data.testbench.scenarios} 
        missing={data.testbench.missing} 
      />
    </div>
    </Layout>

  );
};

export default Overpage;
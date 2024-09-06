import React from 'react';
import LastPage1 from './LastPage1';
import LastPage2 from './LastPage2';
import LastPage3 from './LastPage3';
import LastPage4 from './LastPage4';
import PackageCategory1 from './PackageCategory/PackageCategory1';

const categories1 = [
  {
    title: 'Adventure PackagesRecommended Predefined ',
    packages: [
      {},
    ]
  }
];

function TrendingSection() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ marginBottom: '20px' }}>
        <LastPage1 />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <LastPage2 />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <LastPage3 />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <LastPage4 />
      </div>
      <div className="container mt-5" >
        {categories1.map((category, index) => (
          <PackageCategory1 key={index} category={category} />
        ))}
      </div>
    </div>
  );
}

export default TrendingSection;

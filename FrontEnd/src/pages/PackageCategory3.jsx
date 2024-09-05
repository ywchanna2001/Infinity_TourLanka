import React from 'react';
import PackageCard3 from './PackageCard3';
import './PackageCategory1.css'; 
import Variants from './Variants';
import VariantsBud from './VariantsBud';

function PackageCategory3({ category }) {
  return (
    <div className="mb-5">
      <h2 className="text-center mb-3">{category.title}</h2>
      {/* Added className 'description' for the description text */}
      <p className="text-center description">{category.description}</p>
      <div className="row">
        {category.packages.map((pkg, index) => (
          <div  key={index}>
            <VariantsBud></VariantsBud>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PackageCategory3;

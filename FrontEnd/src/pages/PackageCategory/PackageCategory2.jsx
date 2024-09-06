import React from 'react';
import './PackageCategory1.css'; 
import VariantsCul from '../VariantsCul';

function PackageCategory2({ category }) {
  return (
    <div className="mb-5">
      <h2 className="text-center mb-3">{category.title}</h2>
      {/* Added className 'description' for the description text */}
      <p className="text-center description">{category.description}</p>
      <div className="row">
        {category.packages.map((pkg, index) => (
          <VariantsCul></VariantsCul>
        ))}
      </div>
    </div>
  );
}

export default PackageCategory2;

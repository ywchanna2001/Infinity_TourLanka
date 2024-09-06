import React from 'react';
import PackageCard4 from '../PacageCard/PackageCard4';
import Variants from '../Variants';
import VariantsSea from '../VariantsSea';

function PackageCategory4({ category }) {
  return (
    <div className="mb-5">
      <h2 className="text-center mb-3">{category.title}</h2>
      {/* Added className 'description' for the description text */}
      <p className="text-center description">{category.description}</p>
      <div className="row">
        {category.packages.map((pkg, index) => (
          <div key={index}>
            <VariantsSea></VariantsSea>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PackageCategory4;

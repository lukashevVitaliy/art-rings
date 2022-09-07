import React, { useState } from 'react';

export default function FilterQuantityRings() {
  const [qty, setQty] = useState('');
  console.log(qty);

  return (
    <div className="flex">
      <p className="pr-2">Показать:</p>
      <select name="quantity-rings" onChange={(e) => setQty(e.target.value)}>
        <option className="text-sm bg-gray-200" value="25">
          25
        </option>
        <option className="text-sm bg-gray-200" value="50">
          50
        </option>
        <option className="text-sm bg-gray-200" value="75">
          75
        </option>
        <option className="text-sm bg-gray-200" value="100">
          100
        </option>
      </select>
    </div>
  );
}

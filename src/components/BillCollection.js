import React from 'react';
import BillCard from './BillCard';

export default function BillCollection({bills, castBill}) {
  // Your code here

  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        {bills.map(bill => (
          <BillCard key={bill.id} bill={bill} handleClick={castBill} />
        ))}
      </div>
    </div>
  );
}

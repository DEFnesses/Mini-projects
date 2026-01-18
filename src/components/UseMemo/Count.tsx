import React from "react";

type CountProps = {
  id: number;
  value: number;
};

const render: { count1: number; count2: number } = {
  count1: 0,
  count2: 0,
};

export default React.memo(function Count({ id, value }: CountProps) {
  console.warn(`Count${id} render: ${++render[`count${id as 1 | 2}`]}`);

  return (
    <div>
      <h1>{value}</h1>
    </div>
  );
});

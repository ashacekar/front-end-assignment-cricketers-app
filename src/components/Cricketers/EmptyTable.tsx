import React from 'react';
import { Empty } from 'antd';

export const EmptyTable = () => {
  return (
    <Empty className="empty-results-table" imageStyle={{ display: 'none' }} description={false}>
      {"No data available"}
    </Empty>
  );
};

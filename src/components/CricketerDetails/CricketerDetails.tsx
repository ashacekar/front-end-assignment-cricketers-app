import { Button } from 'antd';
import React from 'react';
import {Link, useLocation} from 'react-router-dom';


/**
 * Composition of player
 * @param event
 */
export const CricketerDetails: React.FC<{}> = () => {
  const location = useLocation();
  return (
    <div style={{height: 200,width: 300}}>
      {(location.state as any).name}
      <br/>
      <Button type="primary"><Link to={{ pathname: '/cricketers'}} >{"Back to Cricketers"}</Link></Button>
    </div>
  );
};
import { Button, Table } from 'antd';
import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import { TPlayer } from '../../data/get-players';
import { useCricketData } from '../../hooks/useCricketData';
import { cricketerDetailColumnPreset } from '../../presets/CricketerDetailColumnPreset';
import { relatedCricketerColumnPreset } from '../../presets/RelatedCricketerColumnPreset';
import './CricketerDetails.scss';


/**
 * Composition of player
 * @param event
 */
export const CricketerDetails: React.FC<{}> = () => {
  const location = useLocation();
  const {data} = useCricketData();

  return (
    <div className='detail-section'>
      <span className="detail-section-title">{"Cricketer Information"}</span>
      <Table
          className='detail-section-table'
          rowKey={"id"}
          columns={cricketerDetailColumnPreset}
          dataSource={data.filter((d: TPlayer) => {
            return d.id === (location.state as any).row.id;
          } )}
          bordered={true}
          scroll={{ x: true }}
          pagination = {false}
        />
      <span className="detail-section-title">{"Similar Cricketers"}</span>
       <Table
          className='detail-section-table'
          rowKey={"id"}
          columns={relatedCricketerColumnPreset}
          dataSource={data.filter((d: TPlayer) => {
            return d.type === (location.state as any).row.type && d.id !== (location.state as any).row.id;
          }).slice(0, 5)}
          bordered={true}
          scroll={{ x: true }}
          pagination = {false}
        />
      <Button type="primary" className="return-button"><Link to={{ pathname: '/cricketers'}} >{"Back to Cricketers"}</Link></Button>
      <div className='app-name'>{"Cricketer App v1.0.0"}</div>
    </div>
  );
};
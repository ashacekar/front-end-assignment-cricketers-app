import { Button, Table } from 'antd';
import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import { TPlayer } from '../../data/get-players';
import { useCricketData } from '../../hooks/useCricketData';
import { cricketerDetailColumnPreset } from '../../presets/CricketerDetailColumnPreset';
import { relatedCricketerColumnPreset } from '../../presets/RelatedCricketerColumnPreset';


/**
 * Composition of player
 * @param event
 */
export const CricketerDetails: React.FC<{}> = () => {
  const location = useLocation();
  const {data} = useCricketData();

  return (
    <div>
      <b>{"Cricketer Information"}</b>
      <Table
          rowKey={"id"}
          columns={cricketerDetailColumnPreset}
          dataSource={data.filter((d: TPlayer) => {
            return d.id === (location.state as any).row.id;
          } )}
          bordered={true}
          scroll={{ x: true }}
          pagination = {false}
        />
      <br/>
      <b>{"Similar Cricketers"}</b>
      <br/>
       <Table
          rowKey={"id"}
          columns={relatedCricketerColumnPreset}
          dataSource={data.filter((d: TPlayer) => {
            return d.type === (location.state as any).row.type && d.id !== (location.state as any).row.id;
          }).slice(0, 5)}
          bordered={true}
          scroll={{ x: true }}
          pagination = {false}
        />
        <br/>
      <Button type="primary"><Link to={{ pathname: '/cricketers'}} >{"Back to Cricketers"}</Link></Button>
    </div>
  );
};
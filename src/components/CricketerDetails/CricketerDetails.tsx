import { Button, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import {Link, useLocation} from 'react-router-dom';
import getPlayers, { TPlayer } from '../../data/get-players';
import { useCricketData } from '../../hooks/useCricketData';


/**
 * Composition of player
 * @param event
 */
export const CricketerDetails: React.FC<{}> = () => {
  const location = useLocation();
    const convertMsToAge = (ms:number) => {
    return Math.floor(ms / 31536000000)
  }
  const {data, setData} = useCricketData();
    useEffect(()=>{
    getPlayers().then((value) => {
      setData(value);
    });
  // eslint-disable-next-line
  },[])

  const [columns, ] = useState([
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Age',
    dataIndex: 'dob',
    key: 'dob',
    render: (age: number) => <div>{convertMsToAge(age)}</div>,
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Points',
    dataIndex: 'points',
    key: 'points',
  },
  {
    title: 'Rank',
    dataIndex: 'rank',
    key: 'rank',
  }
  ])

  const [columns2, ] = useState([
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (name: String, row: TPlayer) => <Link to={{
      pathname: '/cricketer-details',
      state: {row, data}
    }}
     >{name}</Link>,
  },
  {
    title: 'Points',
    dataIndex: 'points',
    key: 'points',
  },
  {
    title: 'Rank',
    dataIndex: 'rank',
    key: 'rank',
  }
  ])

  return (
    <div>
      <Table
          rowKey={"id"}
          columns={columns}
          dataSource={data.filter((d: TPlayer) => {
            return d.id === (location.state as any).row.id;
          } )}
          bordered={true}
          scroll={{ x: true }}
          pagination = {false}
        />
      <br/>
      <b>{"Similar Players"}</b>
      <br/>
       <Table
          rowKey={"id"}
          columns={columns2}
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
import React, { useEffect, useState } from 'react';
import { ConfigProvider, Table, Card, Button } from 'antd';
import { EmptyTable } from './EmptyTable';
import getPlayers, { TPlayer } from '../../data/get-players';
import { Link } from 'react-router-dom';
import { getPersistedValue, setPersistenceValue, usePersistence } from '../../hooks/usePersistence';

export const DataTable: React.FC<{}> = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize,setPageSize] = useState(10);
  const [total,setTotal] = useState(0);
  const [data,setData] = useState<TPlayer[]>([]);
  const [filterData,setFilterData] = useState<TPlayer[]>([]);
  const [filterOptions,setFilterOptions] = useState<String[]>([]);
  const [filterSelected,setFilterSelected] = usePersistence(
    "filterSelected",
    getPersistedValue("filterSelected")?getPersistedValue("filterSelected") : "");
  const [nameSearch, setNameSearch] = usePersistence(
    "nameSearch",
    getPersistedValue("nameSearch")? getPersistedValue("nameSearch") : "");

  const convertMsToAge = (ms:number) => {
    return Math.floor(ms / 31536000000)
  }
  
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
    sorter: (a: TPlayer, b: TPlayer) => a.name?.localeCompare(b.name!),
    render: (name: String) => <Link to={{
      pathname: '/cricketer-details',
      state: { name, data }
    }} >{name}</Link>,
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
    sorter: (a: TPlayer, b: TPlayer) => convertMsToAge(a.dob!) - convertMsToAge(b.dob!)
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
    sorter: (a: TPlayer, b: TPlayer) => a.rank! - b.rank!
  }
  ].filter(col => {
    return col.dataIndex !== 'id' && col.dataIndex !== 'description'
  } ))

  useEffect(()=>{
    getPlayers().then((value) => {
      setTotal(value.length);
      setData(value);
      setFilterData(value);
      setFilterOptions([...new Set(value.map(item => item.type as String))])
    });
  },[])



  const handlePagination = (page: number, newPageSize?: number) => {
    setPageNumber(page);
    setPageSize(newPageSize as number)
  };

  const filterColumnByType = (filterType: String) => {
    if(filterType!==filterSelected){
      setFilterSelected(filterType);
      setPersistenceValue("filterSelected", filterType);
    }else{
      setFilterSelected("");
    }
  }

  useEffect(()=>{
    if(filterSelected!==""){
    const newData = data.filter(d => {
    return d.type === filterSelected && (d.name?.toLowerCase() === nameSearch.toLowerCase() || d.name?.toLowerCase()?.includes(nameSearch.toLowerCase() as string));
    } )
    setTotal(newData.length); //move hooks
    setFilterData(newData);
    }else{
      setTotal(data.length); //move hooks
    setFilterData(data);
    }
  },[filterSelected,data,nameSearch])

  const searchByName = (event: any) => {
    const name = event.target.value;
    setNameSearch(name);
    setPersistenceValue("nameSearch", nameSearch);
    const newData = data.filter(d => {
    return (d.name?.toLowerCase() === name.toLowerCase() || d.name?.toLowerCase()?.includes(name.toLowerCase() as string)) && d.type === filterSelected;
    } )
    setTotal(newData.length);
    setFilterData(newData);
  }

    useEffect(()=>{
    let appSettings: object[] = [];
    interface LooseObject {
    [key: string]: object 
  }
    const userSettings: LooseObject = {};
    const userIdentity = `cricket-app-user`;
    userSettings[userIdentity] = {}     // set obj in an obj
     if (localStorage.hasOwnProperty('appSettings')) {
          // eslint-disable-next-line
          appSettings = JSON.parse(localStorage.getItem('appSettings') as string);
        }
        
        // push userSettings into an array for the 1st time
        if (appSettings.length === 0) {
          appSettings.push(userSettings);
        } else {
          const userKeys = Object.keys(Object.assign({}, ...appSettings));
          //  push only when user not exist 
          if (!userKeys.includes(userIdentity)) {
            appSettings.push(userSettings);
          }
        }
        localStorage.setItem('username', JSON.stringify(userIdentity));
        localStorage.setItem('appSettings', JSON.stringify(appSettings));
  },[filterData])
    
  

  return (
    <div>
    <Card
      className="search-results-card"
      title={
        <div className="action-ribbon">
          <span>{"Filter Options: "}<br/>
          {
            filterOptions.map((f)=>{
              if(f){
                return <Button onClick={()=>filterColumnByType(f)} style={{backgroundColor: !filterSelected.localeCompare(f)?"lightblue":"white"}}>{f}</Button>
              } else {
                return null;
              }
            })
          }</span>
          <span style={{marginLeft: 20}}>
            <input type="text" placeholder="Search by name...." value={nameSearch} onChange={searchByName} width={50} height={20}></input>
          </span>
        </div>
      }
      extra={
        <Button className="edit-columns" size="small">
        </Button>
      }>
      <ConfigProvider renderEmpty={EmptyTable}>
        <Table
          rowKey={"id"}
          columns={columns}
          dataSource={filterData}
          bordered={true}
          pagination={{
            showQuickJumper: false,
            current: pageNumber,
            pageSize,
            showSizeChanger: true,
            pageSizeOptions: ['5', '10', '25', '100'],
            total,
            onChange: handlePagination,
          }}
          scroll={{ x: true }}
        />
      </ConfigProvider>
    </Card>
    </div>
  );
};


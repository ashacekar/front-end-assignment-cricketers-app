import React, { useEffect, useState } from 'react';
import { ConfigProvider, Table, Card, Button } from 'antd';
import { EmptyTable } from './EmptyTable';
import { TPlayer } from '../../data/get-players';
import { getPersistedValue, setPersistenceValue, usePersistence } from '../../hooks/usePersistence';
import { useCricketData } from '../../hooks/useCricketData';
import { dataTableColumnPreset } from '../../presets/DataTableColumnPreset';
import { filterDataWithTypeAndName } from '../../utility/FilterDataWithTypeAndName';
import './Cricketers.scss';
import { convertCamelCaseToTitleCase } from '../../utility/ConvertCamelCaseToTitleCase';
import { FunnelPlotOutlined } from '@ant-design/icons';

export const DataTable: React.FC<{}> = () => {
  const [pageNumber, setPageNumber] = useState(1); 
  const [pageSize,setPageSize] = useState(10); 
  const [total,setTotal] = useState(0); 
  const {data} = useCricketData();
  const [filterData,setFilterData] = useState<TPlayer[]>([]);
  const [showFilters, setShowFilters] = usePersistence(
    "showFilters",
    !!getPersistedValue("showFilters"));
  const [filterOptions,setFilterOptions] = useState<String[]>([]);
  const [filterSelected,setFilterSelected] = usePersistence(
    "filterSelected",
    getPersistedValue("filterSelected")?getPersistedValue("filterSelected") : []);
  const [nameSearch, setNameSearch] = usePersistence(
    "nameSearch",
    getPersistedValue("nameSearch")? getPersistedValue("nameSearch") : "");

  // Whenever cricketer data is updated, filter it as per type and name (as per the searched text)
  useEffect(()=>{
      const newData = data.filter(d => {
        return filterDataWithTypeAndName(filterSelected,d.type as String,d.name as String, nameSearch);
      } )
      setTotal(newData.length); //move hooks
      setFilterData(newData);
      setFilterOptions([...new Set(data.map(item => item.type as String))])
  // eslint-disable-next-line
  },[data])

  // Utility to help with page navigation with pagination
  const handlePagination = (page: number, newPageSize?: number) => {
    setPageNumber(page);
    setPageSize(newPageSize as number)
  };

  // Filters cricketer data by type
  const filterColumnByType = ( filterKey: String) => {
    let updatedFilterList: String[] = [];
    if (filterSelected.includes(filterKey)) {
      updatedFilterList = filterSelected.filter((e: String) => e !== filterKey);
    } else {
      updatedFilterList = filterSelected;
      updatedFilterList.push(filterKey);
    }
    const newData = data.filter(d => {
      return filterDataWithTypeAndName(updatedFilterList,d.type as String,d.name as String, nameSearch);
    } )
    setTotal(newData.length); //move hooks
    setFilterData(newData);
    setFilterSelected(updatedFilterList);
    setPersistenceValue("filterSelected", updatedFilterList);
  };


  // Filters cricketer data by searched name
  const searchByName = (event: any) => {
    const name = event.target.value;
    setNameSearch(name);
    setPersistenceValue("nameSearch", nameSearch);
    const newData = data.filter(d => {
    return filterDataWithTypeAndName(filterSelected,d.type as String,d.name as String, nameSearch);
    } )
    setTotal(newData.length);
    setFilterData(newData);
  }

  // Persists type and searched name in local storage
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
    <div className='table-title-section'>
    <span className='table-name'>{"Cricketer Data"}</span>
    <Card
      className="search-results-card"
      title={
        <div className="action-ribbon">
          <div className="search-box">
            <input type="text" placeholder="Search by name...." value={nameSearch} onChange={searchByName} width={50} height={20}></input>
          </div>
          <div className="filter-options">
            <span className="filter-options-header" onClick={()=>setShowFilters(!showFilters)}>
              {"Filter Options"} <FunnelPlotOutlined />
            </span>
          </div>
          {showFilters && <div className='filter-buttons'>
            {
              filterOptions.map((f)=>{
                return <Button key={`${f}`} onClick={()=>filterColumnByType(f)} className={filterSelected.includes(f)?"filter-button-selected":"filter-button-unselected"}>{f? convertCamelCaseToTitleCase(f) : "NA"}</Button>
              })
            }
          </div>}
        </div>
      }
      >
      <ConfigProvider renderEmpty={EmptyTable}>
        <Table
          className='list-section-table'
          rowKey={"id"}
          columns={dataTableColumnPreset}
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
    <div className='app-name'>{"Cricketer App v1.0.0"}</div>
    </div>
  );
};


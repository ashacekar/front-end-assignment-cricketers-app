import { Link } from "react-router-dom"
import { TPlayer } from "../data/get-players"
import React from "react"
import { convertMilliSecondsToAge } from "../utility/ConvertMilliSecondsToAge"
import { convertCamelCaseToTitleCase } from "../utility/ConvertCamelCaseToTitleCase"

export const dataTableColumnPreset = [
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
    render: (name: String, row: TPlayer) => <Link to={{
      pathname: '/cricketer-details',
      state: {row}
    }}
     >{name}</Link>,
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    render: (type: String) => <div>{type? convertCamelCaseToTitleCase(type) : "NA"}</div>,
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
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
  },
  {
    title: 'Age',
    dataIndex: 'dob',
    key: 'dob',
    render: (dob: number) => <div>{convertMilliSecondsToAge(dob)}</div>,
    sorter: (a: TPlayer, b: TPlayer) => convertMilliSecondsToAge(a.dob!) - convertMilliSecondsToAge(b.dob!)
  },
  ].filter(col => {
    return col.dataIndex !== 'id' && col.dataIndex !== 'description'
  } )
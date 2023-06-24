import React from "react"
import { convertMilliSecondsToAge } from "../utility/ConvertMilliSecondsToAge"

export const cricketerDetailColumnPreset = [
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
    render: (age: number) => <div>{convertMilliSecondsToAge(age)}</div>,
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
  ]
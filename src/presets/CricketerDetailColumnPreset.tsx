import React from "react"
import { convertMilliSecondsToAge } from "../utility/ConvertMilliSecondsToAge"

export const cricketerDetailColumnPreset = [
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
  },
  {
    title: 'Age',
    dataIndex: 'dob',
    key: 'dob',
    render: (dob: number) => <div>{convertMilliSecondsToAge(dob)}</div>,
  },
  {
    title: 'Date of Birth',
    dataIndex: 'dob',
    key: 'dob',
    render: (dob: number) => <div>{(new Date(dob)).toLocaleDateString()}</div>,
  },
  ]
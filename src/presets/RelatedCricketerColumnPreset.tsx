import React from "react"
import { TPlayer } from "../data/get-players"
import { Link } from "react-router-dom"

export const relatedCricketerColumnPreset = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (name: String, row: TPlayer) => <Link to={{
      pathname: '/cricketer-details',
      state: {row}
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
  ]
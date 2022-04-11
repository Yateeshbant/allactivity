import React from 'react'
import { Link } from 'react-router-dom';

type Props = {}

const AppHeader = (props: Props) => {
  return (
    <div className='app-header'><Link to="/">All Activity</Link></div>
  )
}

export default AppHeader
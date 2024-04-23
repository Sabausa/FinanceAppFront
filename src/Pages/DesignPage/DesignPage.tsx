import React from 'react'
import Table from '../../Components/Table/Table'
import RatioList from '../../Components/RatioList/RatioList'

interface Props {}

const DesignPage = (props: Props) => {
  return (
    <>
      <h1>FinanceProject Design Page</h1>
      <h2>This is FinanceProject's design page. This is weere we will house various design aspects of the app</h2>
      <RatioList/>
      <Table/>
    </>
  )
}

export default DesignPage
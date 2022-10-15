import React from 'react';
import { ColabosList, WorkList } from "../../components"
import Header from '../../components/header/Header';

function WorksScreen() {
  return (
    <>
      <Header />
      <WorkList />
      <ColabosList />
    </>
  )
}

export default WorksScreen
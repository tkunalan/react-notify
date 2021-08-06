import React from 'react';
import MainLayout from './Layouts';
import Home from './Views';
import AddItem from './Views/AddItem';
import Login from './Views/Login';
import Test from './Views/test';

const routes  = () => [
  {
    path: '',
    element:  <MainLayout /> ,
    children: [
      { path: '/', element: <Home/> },
      { path: '/additem', element: <AddItem/> },
      { path: '/login', element: <Login/> },
      { path: '/test', element: <Test/> },
    ]
  }
];

export default routes;

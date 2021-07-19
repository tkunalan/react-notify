import React from 'react';
import MainLayout from './Layouts';
import Home from './Views';

const routes  = () => [
  {
    path: '',
    element:  <MainLayout /> ,
    children: [
      { path: '/', element: <Home/> },
    ]
  }
];

export default routes;

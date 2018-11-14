import React, { Component } from 'react';
import logo from './logo.svg';
import Form from './components/Form'
import List from './components/List'

import hocCRUD from './hoc/hocCRUD'

function App({data,create,update,remove}){
     return (
      <div className="container">
         <form onSubmit={create} />
         <Form />
         <List 
         todos={data}
         onToggle={update}
         onRemove={remove}
         />
      </div>
    );
  }
export default hocCRUD(App, 'http://localhost:9000/api/todos')

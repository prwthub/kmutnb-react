import React from 'react';
/*import { Header, Content, Footer } from './func-components';
import {Calendar} from './class-components';
import './App.css';
import logo from './logo.svg';
import './style.css';
import Banner from './banner'
import {Button} from './class-components';
import {Calculator} from './calculator';
import {Calculator2} from './calculator';
import {EventData2} from './event-data';
import {Table} from './event-data';*/
import RefsFunc from './refs-func';
import RefsArray from './refs-array';
import MessageBox from './state-func';

function App() {
  return(
        <>
        <center>
          <RefsFunc/>
          <br/>
          <RefsArray/>
          <br/>
          <MessageBox/>
          <br/>
        </center>
        </>
  ) 
}

export default App;
import React, { useEffect, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import SearchBar from './components/layouts/SearchBar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layouts/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';
import { Provider } from 'react-redux';
import store from './store';


const App=()=> {
  useEffect(()=>{
    //Initialize Materialize JS
    M.AutoInit();
  })
  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className="container">
        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <TechListModal />
        <Logs />
        <AddBtn />
        </div>
        
    </Fragment>
    </Provider>
    
  );
}

export default App;

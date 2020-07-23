import React,{useRef, useEffect} from 'react';
import {connect} from 'react-redux';
import {searchLogs,clearSearch} from '../../actions/logActions';
import PropTypes from 'prop-types';

const SearchBar=({searchLogs,clearSearch,log:{searched}})=>{

  const text = useRef('');

  useEffect(() => {
    console.log(searched)
    if (searched === null) {
      text.current.value = '';
    }
  });
  

  const onChange=e=>{
    if (text.current.value !== '') {
      searchLogs(e.target.value)
    } else {
      clearSearch();
    }
    
  };
    return (
        <nav style={{marginBottom:'30px'}} className="blue">
        <div className="nav-wrapper">
          <form>
            <div className="input-field">
              <input id="search" type="search" placeholder='Search Logs..' ref={text} onChange={onChange} />
              <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
              <i className="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
    )
};

const mapStateToProp =state=>({
  log:state.log
})

SearchBar.propTypes={
  searchLogs: PropTypes.func.isRequired
}


export default connect(mapStateToProp,{searchLogs,clearSearch})(SearchBar);
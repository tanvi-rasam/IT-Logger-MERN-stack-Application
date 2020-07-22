import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import LogItem from './LogItem';
import PropTypes from 'prop-types';
import PreLoader from './../layouts/PreLoader';
import {getLogs} from '../../actions/logActions';

const Logs=({log: {logs,loading}, getLogs})=>{

    
    useEffect(()=>{
        getLogs()
        //eslint-disable-next-line
    },[])

    
    if (loading || logs==null){
        return <PreLoader />
    }

    return (
        <ul className="collection with-header">
            <li className="collection-header"> 
                <h2 className="center">System Logs</h2>
            </li>
            {!loading && logs.length===0?<p>No logs to show..</p>:
                (logs.map(log=>
                        <LogItem log={log} key={log.id} />
                ))

            }
        </ul>

        )
}

Logs.propTypes={
    log: PropTypes.object.isRequired,
    getLogs:PropTypes.func.isRequired
}

const mapStateToProps = state =>({  //State is brought into the component in the form of prop
    log:state.log  //state.log is the name used in combineReducer

});

export default connect(mapStateToProps, {getLogs})(Logs);
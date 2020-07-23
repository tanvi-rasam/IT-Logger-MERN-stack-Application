import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import LogItem from './LogItem';
import PropTypes from 'prop-types';
import PreLoader from './../layouts/PreLoader';
import {getLogs} from '../../actions/logActions';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
const Logs=({log: {logs,loading,searched}, getLogs})=>{

    
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
                (searched!==null)?(searched.map(log => (
                    <CSSTransition
                      key={log._id}
                      timeout={500}
                      classNames='item'
                    >
                    <LogItem log={log} key={log._id} />
                    </CSSTransition>
                  ))):
                (logs.map(log=>
                    <CSSTransition
                    key={log._id}
                    timeout={500}
                    classNames='item'
                  >
                        <LogItem log={log} key={log._id} />
                    </CSSTransition>
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
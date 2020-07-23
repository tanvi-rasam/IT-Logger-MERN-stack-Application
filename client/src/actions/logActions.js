import axios from 'axios';
import {
    GET_LOGS,
    SET_LOADING,
    LOGS_ERROR,
    ADD_LOG,
    DELETE_LOG,
    UPDATE_LOG,
    SEARCH_LOGS,
    SET_CURRENT,
    CLEAR_CURRENT,
    CLEAR_SEARCH
  } from './types';
  
    

 

  // Get logs from server
  export const getLogs = () => async dispatch => {
    try {
      setLoading();
  
      const res = await axios.get('/logs');
      //const data = await res.json();
      
      dispatch({
        type: GET_LOGS,
        payload: res.data
      });

    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.statusText
      });
    }
  };
  
  // Add new log
  export const addLog = log => async dispatch => {
    try {
      setLoading();
      const config={
        headers:{
          'Content-Type':'application/json'
        }
      }

      const res= await axios.post('/logs',log,config)

      
      //const data = await res.json();
  
      dispatch({
        type: ADD_LOG,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.statusText
      });
    }
  };
  
  // Delete log from server
  export const deleteLog = id => async dispatch => {
    try {
      setLoading();
      
      await axios.delete(`/logs/${id}`)

      dispatch({
        type: DELETE_LOG,
        payload: id
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.statusText
      });
    }
  };
  
  // Update log on server
  export const updateLog = log => async dispatch => {
    try {
      setLoading();
  
      const config={
        headers:{
          'Content-Type':'application/json'
        }
      }

      const res= await axios.put(`/logs/${log.id}`,log,config)
      //const data = await res.json();
  
      dispatch({
        type: UPDATE_LOG,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.statusText
      });
    }
  };
  
  // Search server logs
  export const searchLogs = text => async dispatch => {
    try {
      setLoading();
  
      //const res = await axios.get(`/logs?q=${text}`);
      //const data = await res.json();
  
      dispatch({
        type: SEARCH_LOGS,
        payload:text
        
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.statusText
      });
    }
  };
  
  // Set current log
  export const setCurrent = log => {
    return {
      type: SET_CURRENT,
      payload: log
    };
  };
  
  // Clear current log
  export const clearCurrent = () => {
    return {
      type: CLEAR_CURRENT
    };
  };
  
  // Set loading to true
  export const setLoading = () => {
    return {
      type: SET_LOADING
    };
  };
  
  export const clearSearch = () => async dispatch => {
    try {
      
      dispatch({
        type: CLEAR_SEARCH
        
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.statusText
      });
    }
  };

  

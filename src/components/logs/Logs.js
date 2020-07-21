import React, {useEffect, useState} from 'react';
import LogItem from './LogItem';
import PreLoader from './../layouts/PreLoader'

const Logs=()=>{

    const [logs,setLogs]=useState([])
    const [loading,setLoading]=useState(false)

    useEffect(()=>{
        getLogs()
        //eslint-disable-next-line
    },[])

    const getLogs=async ()=>{
        setLoading(true)
        const res= await fetch('/logs')
        const data=await res.json();
        setLogs(data)   
        
        setLoading(false)
    }

    if (loading){
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

export default Logs;
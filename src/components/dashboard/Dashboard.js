import React, { Component } from 'react'
import Notification from './Notification'
import ProjectList from '../projects/ProjectList'

const Dashboard = ()=>{
    
        return(
            <div className='container dashboard'>
                <div className='row'></div>
                <div className='col s12 m6'>
                    <Notification />
                </div>
                <div className='col s12 m5 offset-1m'></div>
                    <ProjectList />
            </div>
        )
    
}
export default Dashboard
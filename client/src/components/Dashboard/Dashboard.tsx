import React from 'react';
import './Dashboard.css';
import FileComponent from "../FileComponent/FileComponent";

const Dashboard: React.FC = () => {
    return (
        <div className='dashboard'>
            <ul>
                <li> <FileComponent/> </li>
                <li> <FileComponent/> </li>
            </ul>
        </div>
    );
}

export default Dashboard;
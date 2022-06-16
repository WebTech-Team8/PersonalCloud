import React from 'react';
import './Dashboard.css';
import FolderComponent from '../FolderComponent/FolderComponent';


const Dashboard: React.FC<{prerender: () => void}> = (props: any) => {
    props.prerender();

    return (
        <div className='dashboard'>
            <FolderComponent //files={}
                             size={8}
                             created={new Date(2022,4,11)}
                             name="WEB"/>
        </div>
    );
}

export default Dashboard;
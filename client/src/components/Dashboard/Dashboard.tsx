import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import FolderComponent from '../FolderComponent/FolderComponent';
import userService from '../../services/user.service';
import directoryService from '../../services/directory.service';


const Dashboard: React.FC<{ prerender: () => void }> = (props: any) => {
    props.prerender();
    const [rootDir, setRootDir] = useState({id: '', name: ''});

    useEffect(() => {
        const accessToken = localStorage.getItem('auth-token') || '';
        if (accessToken) {
            userService.getUser(accessToken).then(user => {
                directoryService.getUserRootDir(user.id).then(dir => {
                    if (!dir.error) {
                        setRootDir(dir);
                    }
                });
            });
        }
    }, []);

    return (
        <div className='dashboard'>
            {rootDir.name != '' ? <FolderComponent //files={}
                id={rootDir.id}
                size={8}
                created={new Date(2022, 4, 11)}
                name={rootDir.name} />
                : <p>You have not created any directories yet.</p>}
        </div>
    );
}

export default Dashboard;
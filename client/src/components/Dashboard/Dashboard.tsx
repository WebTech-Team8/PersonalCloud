import React from 'react';
import './Dashboard.css';
import FileComponent from "../FileComponent/FileComponent";
import {File} from '../../interfaces/file';

const Dashboard: React.FC = () => {


    return (
        <div className='dashboard'>
            <FileComponent name="Doc1"
                           size={2}
                           extension=".doc"
                           created={new Date(2022,4,11)}
                //  folder="Docs"
            />
            <FileComponent name="Image"
                           size={4}
                           extension=".png"
                           created={new Date(2022,4,12)}
                //  folder="Docs"
            />
            <FileComponent name="Document2"
                           size={2}
                           extension=".doc"
                           created={new Date(2022,4,13)}
                //  folder="Docs"
            />
            <FileComponent name="Presentation"
                           size={3}
                           extension=".pptx"
                           created={new Date(2022,4,10)}
                //  folder="Docs"
            />
        </div>
    );
}

export default Dashboard;
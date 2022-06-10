import React from 'react';
import './Dashboard.css';
import FileComponent from "../FileComponent/FileComponent";


const Dashboard: React.FC<{prerender: () => void}> = (props: any) => {
    props.prerender();

    return (
        <div className='dashboard'>
            <FileComponent name="Doc1"
                           size={2}
                           extension=".doc"
                           created={new Date(2022,4,11)}
            />
            <FileComponent name="Image"
                           size={4}
                           extension=".png"
                           created={new Date(2022,4,12)}
            />
            <FileComponent name="Document2"
                           size={2}
                           extension=".doc"
                           created={new Date(2022,4,13)}
            />
            <FileComponent name="Presentation"
                           size={3}
                           extension=".pptx"
                           created={new Date(2022,4,10)}
            />
        </div>
    );
}

export default Dashboard;
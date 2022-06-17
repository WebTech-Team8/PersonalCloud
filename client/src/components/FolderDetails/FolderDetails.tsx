import React, { useEffect, useState } from 'react';
import directoryService from '../../services/directory.service';
import FileComponent from '../FileComponent/FileComponent';
import { FolderDetailsProps } from './FolderDetails.props';
import './FolderDetails.css';
import BackButton from '../BackButton/BackButton';

const FolderDetails: React.FC<FolderDetailsProps> = ({ match }) => {
    const directoryId = match.params.id;
    const [dirName, setDirName] = useState('');
    const [parentId, setParentId] = useState('');

    useEffect(() => {
        directoryService.getById(directoryId).then(dir => {
            setDirName(dir.name);
            setParentId(dir.parentDirId);
        });
    }, [directoryId]);

    const files =[
        <FileComponent name="Doc1"
                        size={2}
                        extension=".doc"
                        created={new Date(2022,4,11)}
                        key="1"/>,
        <FileComponent name="Image"
                       size={4}
                       extension=".png"
                       created={new Date(2022,4,12)}
                       key="2"/>,
        <FileComponent name="Document2"
                       size={2}
                       extension=".doc"
                       created={new Date(2022,4,13)}
                       key="3"/>,
        <FileComponent name="Presentation"
                       size={3}
                       extension=".pptx"
                       created={new Date(2022,4,10)}
                       key="4"/>];


    return (
        <div>
            <h2>{dirName}</h2>
            {parentId && <BackButton parentId={parentId} />}
            <div className="files">
                {files}
            </div>
        </div>
    )
}

export default FolderDetails;
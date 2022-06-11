import React from "react";
import {Folder} from '../../interfaces/folder';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFolder } from "@fortawesome/free-solid-svg-icons"
import './FolderComponent.css';

const FolderComponent: React.FC<Folder> = (props) => {

    const folder = props;

    return (
        <div>
            <button type="button" className="folder" >
                <FontAwesomeIcon className="folder-icon" icon={faFolder} size="lg"/>
                <h3 className="folder-name">{folder.name}</h3>
            </button>
        </div>
    );
}

export default FolderComponent;
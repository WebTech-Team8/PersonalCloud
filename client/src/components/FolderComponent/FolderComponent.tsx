import React from "react";
import {Folder} from '../../interfaces/folder';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFolder } from "@fortawesome/free-solid-svg-icons"
import './FolderComponent.css';
import {Link} from 'react-router-dom';


const FolderComponent: React.FC<Folder> = (props) => {

    const folder = props;

    return (
        <div>
            <Link to="/folders/1" className="folder">
                <FontAwesomeIcon className="folder-icon" icon={faFolder} size="lg"/>
                <h3 className="folder-name">{folder.name}</h3>
            </Link>
        </div>
    );
}

export default FolderComponent;
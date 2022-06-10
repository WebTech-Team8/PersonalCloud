import React from 'react';
import './FileComponent.css';
import {File} from '../../interfaces/file';
import fileLogo from '../../assets/fileLogo.png';
import docLogo from '../../assets/docLogo.png';
import imageLogo from '../../assets/imageLogo.png';
import pdfLogo from '../../assets/pdfLogo.jpeg';
import pptxLogo from '../../assets/pptxLogo.png';
import {FaShareSquare} from 'react-icons/fa';

const FileComponent: React.FC<File> = (props) => {

    const file = props;
    let logo = fileLogo;

    if (file.extension === 'png' || file.extension === 'jpg') {
        logo = imageLogo;
    } else if (file.extension === 'doc') {
        logo = docLogo;
    } else if (file.extension === 'pptx'){
        logo = pptxLogo;
    } else if (file.extension === 'pdf'){
        logo = pdfLogo;
    }

    return (
        <div className="file">
            <div className='icons'>
                <FaShareSquare/>
            </div>
            <img src={logo} className="file-image" />
            <span className="file-name">
                <b>{file.name.length > 10 ?
                    file.name.substring(0, 10) + "..." : file.name}</b>
            </span>
        </div>
    );
}

export default FileComponent;
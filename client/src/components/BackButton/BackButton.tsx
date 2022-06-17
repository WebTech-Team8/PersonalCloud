import React from 'react';
import { Link } from 'react-router-dom';
import './BackButton.css';

const BackButton: React.FC<{parentId: string}> = ({ parentId }) => {
    return (
        <Link to={`/folders/${parentId}`} className='back-btn'>Back</Link>
    );
}

export default BackButton;
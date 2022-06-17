import React, {SyntheticEvent} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFileArrowUp } from "@fortawesome/free-solid-svg-icons"
import FileService from "../../services/file.service";

const FileUpload: React.FC = () => {

    const handleFileUpload = async (element: HTMLInputElement) => {

        const file = element.files
        if (!file){
            return
        }

        const fileService = new FileService(file[0])
        await fileService.uploadFile()

        element.value = ''
    }

    return (
        <>
            <button type="button"
                    className="upload-file"
                    onChange={(e: SyntheticEvent) => handleFileUpload(e.currentTarget as HTMLInputElement)}>
                <FontAwesomeIcon icon={faFileArrowUp} size="2x"/>
                Upload File
            </button>
        </>
    )
}

export default FileUpload;
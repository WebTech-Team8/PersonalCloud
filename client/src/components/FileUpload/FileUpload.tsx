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
        <form method="POST">
            <FontAwesomeIcon icon={faFileArrowUp} size="2x"/>
            <input type="file" accept=".doc,.pdf,.pptx, image/*"
                   onChange={(e: SyntheticEvent) => handleFileUpload(e.currentTarget as HTMLInputElement)}/>
                   <input type="submit" value="Upload File"/>
        </form>
    )
}

export default FileUpload;
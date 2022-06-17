import React, {SyntheticEvent} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFileArrowUp } from "@fortawesome/free-solid-svg-icons"

const FileUpload: React.FC = () => {

    const handleFileUpload = async (element: HTMLInputElement) => {

        const file = element.files
        if (!file){
            return
        }

      //  const fileService = new FileService(file[0])
      //  await fileService.uploadFile()

        element.value = ''
    }

    return (
        <div>
            <FontAwesomeIcon icon={faFileArrowUp} size="2x"/>
            <form method="POST">
                <input type="file" accept=".doc,.pdf,.pptx, image/*"
                       onChange={(e: SyntheticEvent) => handleFileUpload(e.currentTarget as HTMLInputElement)}/>
                <input type="submit" value="Upload"/>
            </form>
        </div>
    )
}

export default FileUpload;
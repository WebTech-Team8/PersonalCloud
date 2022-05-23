import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileDownload} from "@fortawesome/free-solid-svg-icons";

export default function DownloadFileButton(){
    return (
        <>
            <lable className="btn btn-outline-success btn-lg m-0 mr-2">
                <FontAwesomeIcon icon={faFileDownload} />
                <input
                    type="file"
                    style={ {opacity: 0, position: "absolute", left: "-9999px" }}
                />
            </lable>
        </>
    )
}
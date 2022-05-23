import React from "react";
import Navbar from "./Navbar.js";
import UploadFileButton from "./UploadFileButton";
import DownloadFileButton from "./DownloadFileButton";

export default function Dashboard(){
    return (
        <>
            <Navbar/>
            <div align="right">
                <UploadFileButton/>
                <DownloadFileButton/>
            </div>
        </>
    )
}
import React, { useState } from 'react';
import { uploadFile } from '../../services/api';
import './FileUpload.css';

const FileUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [isUploading, setIsUploading] = useState(false);
    const [uploadStatus, setUploadStatus] = useState('');

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            setUploadStatus('Please select a file to upload');
            return;
        }

        setIsUploading(true);
        setUploadStatus('Uploading...');

        try {
            await uploadFile(selectedFile);
            setUploadStatus('File uploaded successfully');
        } catch (error) {
            setUploadStatus('Error during file upload');
        } finally {
            setIsUploading(false);
        }
    };

    return (
        <div className="file-upload-container">
            <h2>Upload your dataset</h2>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload} disabled={isUploading}>
                {isUploading ? 'Uploading...' : 'Upload'}
            </button>
            <p>{uploadStatus}</p>
        </div>
    );
};

export default FileUpload;

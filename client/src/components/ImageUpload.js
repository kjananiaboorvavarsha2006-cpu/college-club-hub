import React, { useState } from 'react';
import API from '../api';

function ImageUpload({ onUpload }) {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file first');
      return;
    }
    const formData = new FormData();
    formData.append('image', file);

    setUploading(true);
    try {
      const response = await API.post('/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      onUpload(response.data.url); // Pass uploaded file URL back
      alert('Upload successful');
    } catch (err) {
      alert('Upload failed');
    }
    setUploading(false);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? 'Uploading...' : 'Upload'}
      </button>
    </div>
  );
}

export default ImageUpload;

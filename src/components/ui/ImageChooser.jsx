import { useState } from 'react';

function FileUploadSingle() {
  const [file, setFile] = useState();

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUploadClick = () => {
    if (!file) {
      return;
    }

    const data = new FormData();
    data.append("nickname", "Khalid");
    data.append("profile_image", file, file.name);
    data.append("last_name", "Halida");
    data.append("name", "Halida");

    // 👇 Uploading the file using the fetch API to the server
    fetch('https://megalab.pythonanywhere.com/user/', {
      method: 'PUT',
      body: data,
      // 👇 Set headers manually for single file upload
      headers: {
        "Authorization": "Token 099e3b6d15a9638246e3f4905066b387ef06c30e",
        'content-length': `${file.size}`, // 👈 Headers need to be a string
      },
    })
      .then((res) => res.json())
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />

      <div>{file && `${file.name} - ${file.type}`}</div>

      <button onClick={handleUploadClick}>Upload</button>
    </div>
  );
}

export default FileUploadSingle;
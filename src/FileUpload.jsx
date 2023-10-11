import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FileUpload = () => {

    
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('file', file);
        try {
            await axios.post('http://localhost:3080/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('File uploaded successfully.');
        } catch (error) {
            console.error('Error uploading file: ', error);
        }
    };
    const [data, setData] = useState([]);

    useEffect(() => {

        axios.get("http://localhost:3080/")

            .then(res => setData(res.data))

            .catch(err => console.log(err));

    }, [])


    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
            {
                data.map((img,index)=>{
                    return(
                    <div key={index}>
                            <img src={`https://drive.google.com/uc?export=view&id=${img.column1}`} alt="hjgj" />
                            {/* <h1>{img.column1}</h1> */}
                    </div>
                    )

                })
            }
       

        </div>
    );
};

export default FileUpload;

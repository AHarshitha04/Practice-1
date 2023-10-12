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

    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     axios.get("http://localhost:3080/")

    //         .then(res => setData(res.data))

    //         .catch(err => console.log(err));
    // }, [])

    const [imageData, setImageData] = useState('');

    useEffect(() => {
        axios.get('http://localhost:3080/images/', { responseType: 'arraybuffer' })
            .then(response => {
                const base64Image = btoa(
                    new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
                );
                setImageData(`data:image/jpeg;base64,${base64Image}`);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);
    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
            {/* {
                data.map((img,index)=>{
                    return(
                    <div key={index} >
                           <div style={{display:'flex',gap:'5rem'}}>
                            <h1>{img.column1}</h1>
                            <h1>{img.column2}</h1>
                            <h1></h1>
                            <img src={img.image_column} alt="" />
                           </div>
                    </div>
                    )

                })
            } */}
       
       {imageData ? (
                <img src={imageData} alt="Image" />
            ) : (
                <p>Loading image...</p>
            )}

        </div>
    );
};

export default FileUpload;

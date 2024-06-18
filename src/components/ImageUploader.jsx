import React, { useState } from 'react'

export default function ImageUploader() {
    const [file, setFile] = useState(null)

    const handleFileChange = (e) => {
        const fileUploaded = e.target.files[0]
        setFile(fileUploaded)

    }


    return (
        <div>
            <input type="file" accept='image/*' onChange={handleFileChange} />
            {
                file && <img src={URL.createObjectURL(file)} alt='Image Uploaded' />
            }
        </div>
    )
}

import React, {useState} from 'react';
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg'];

    const changeHandler = e => {
        // console.log('changed');
        let selected = e.target.files[0];

        console.log(selected);
        // File {name: "AngryBird.png", lastModified: 1498983641381, lastModifiedDate: Sun Jul 02 2017 18:20:41 GMT+1000 (Australian Eastern Standard Time),
        // webkitRelativePath: "", size: 5339, type: "image/png" webkitRelativePath: ""}

        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Please select an image file (png or jpeg)');
        }
    }

    return (
        <form>
            <label>
                <input type="file" onChange={changeHandler}/>
                <span>+</span>
            </label>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
    );
};

export default UploadForm;

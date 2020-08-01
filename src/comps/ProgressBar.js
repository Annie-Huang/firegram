import React, {useEffect} from 'react';
import useStorage from "../hooks/useStorage";

const ProgressBar = ({file, setFile}) => {
    const {url, progress} = useStorage(file);
    console.log(progress, url);
    // e.g.
    // 0 null
    // 100 null
    // 100 "https://firebasestorage.googleapis.com/v0/b/ninja-firegram-de03f.appspot.com/o/AngryBird.png?alt=media&token=61b33bb7-1660-4d69-aaa9-17b126ee67d1"

    useEffect(() => {
        if(url) {
            setFile(null); // I personally think this disappear too quickly...
        }
    }, [url, setFile]);

    return (
        <div className="progress-bar" style={{width: progress + '%'}}></div>
    );
};

export default ProgressBar;

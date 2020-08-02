import React from 'react';

const Modal = ({selectedImg, setSelectedImg}) => {
    const handleClick = e => {
        // Only set it if user clicks on the backdrop, not the image itself.
        if(e.target.classList.contains('backdrop')) {
            setSelectedImg(null);
        }
    }

    return (
        <div className="backdrop" onClick={handleClick}>
            <img src={selectedImg} alt="enlarged pic"/>
        </div>
    );
};

export default Modal;

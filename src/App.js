import React from 'react';
import Title from './comps/Title';
import UploadForm from "./comps/UploadForm";
import ImageGrid from "./comps/ImageGrid";
import Modal from "./comps/Modal";

function App() {
  return (
    <div className="App">
      <Title/>
      <UploadForm />
      <ImageGrid />
      <Modal />
    </div>
  );
}

export default App;

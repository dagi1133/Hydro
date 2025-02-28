import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFile(event.target.files[0]);
    }
  };

  return (
    <>
      <Header />
      <main className="page-container">
        <h1>Upload Satellite Data</h1>
        <input type="file" onChange={handleFileUpload} />
        {selectedFile && <p>File Selected: {selectedFile.name}</p>}
      </main>
      <Footer />
    </>
  );
};

export default Upload;

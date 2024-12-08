import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';  // Import the Navbar component
import FileUpload from './components/FileUpload/FileUpload';  // Dataset upload interface
import Preprocessing from './components/Preprocessing/Preprocessing';  // Preprocessing UI
import Results from './components/Results/Results';  // Results dashboard
import Progress from './components/Progress/Progress';  // Pipeline progress display

function App() {
    return (
        <div className="App">
            <Navbar /> {/* Navbar component */}

            <div className="content">
                {/* File Upload Section */}
                <section id="file-upload" className="section">
                    <h2>File Upload</h2>
                    <FileUpload />
                </section>

                {/* Preprocessing Section */}
                <section id="preprocessing" className="section">
                    <h2>Preprocessing</h2>
                    <Preprocessing />
                </section>

                {/* Results Section */}
                <section id="results" className="section">
                    <h2>Results</h2>
                    <Results />
                </section>

                {/* Progress Section */}
                <section id="progress" className="section">
                    <h2>Progress</h2>
                    <Progress />
                </section>
            </div>
        </div>
    );
}

export default App;

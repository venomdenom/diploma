import React, { useState } from 'react';
import './Preprocessing.css';

const Preprocessing = () => {
    const [handleMissing, setHandleMissing] = useState('drop'); // 'drop' or 'fill'
    const [encoding, setEncoding] = useState('onehot'); // 'onehot' or 'label'
    const [scaling, setScaling] = useState('none'); // 'none', 'standard', 'minmax'

    const handleSubmit = (e) => {
        e.preventDefault();
        const preprocessingConfig = {
            handleMissing,
            encoding,
            scaling,
        };

        // Here, you would normally send this config to the backend or another component
        console.log('Preprocessing Configuration:', preprocessingConfig);
    };

    return (
        <div className="preprocessing-container">
            <h2>Preprocessing Configuration</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Handle Missing Values</label>
                    <select value={handleMissing} onChange={(e) => setHandleMissing(e.target.value)}>
                        <option value="drop">Drop Rows</option>
                        <option value="fill">Fill with Median</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Encoding</label>
                    <select value={encoding} onChange={(e) => setEncoding(e.target.value)}>
                        <option value="onehot">One-Hot Encoding</option>
                        <option value="label">Label Encoding</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Scaling</label>
                    <select value={scaling} onChange={(e) => setScaling(e.target.value)}>
                        <option value="none">None</option>
                        <option value="standard">Standard Scaling</option>
                        <option value="minmax">Min-Max Scaling</option>
                    </select>
                </div>

                <button type="submit">Save Configuration</button>
            </form>
        </div>
    );
};

export default Preprocessing;

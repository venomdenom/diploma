import React, { useState, useEffect } from 'react';
import './Progress.css';

const Progress = ({ progress, status }) => {
    // Progress state to simulate real-time updates
    const [currentProgress, setCurrentProgress] = useState(progress);

    useEffect(() => {
        if (progress !== currentProgress) {
            setCurrentProgress(progress);
        }
    }, [progress]);

    return (
        <div className="progress-container">
            <h2>Pipeline Progress</h2>
            <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: `${currentProgress}%` }}></div>
            </div>
            <div className="progress-status">
                <strong>Status:</strong> {status || 'Running...'}
            </div>
            <div className="progress-percent">{currentProgress}%</div>
        </div>
    );
};

export default Progress;

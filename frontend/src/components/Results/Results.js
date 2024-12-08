import React from 'react';
import './Results.css';

const Results = ({ results }) => {
    if (!results) {
        return <div className="results-container">No results to display</div>;
    }

    const { modelName, accuracy, f1Score, precision, recall } = results;

    return (
        <div className="results-container">
            <h2>Model Evaluation Results</h2>
            <div className="results-card">
                <h3>Model: {modelName}</h3>
                <div className="metrics">
                    <div className="metric">
                        <strong>Accuracy:</strong> {accuracy}%
                    </div>
                    <div className="metric">
                        <strong>F1 Score:</strong> {f1Score}
                    </div>
                    <div className="metric">
                        <strong>Precision:</strong> {precision}
                    </div>
                    <div className="metric">
                        <strong>Recall:</strong> {recall}
                    </div>
                </div>
            </div>
            <div className="visualization">
                {/* Placeholder for graphs or charts */}

            </div>
        </div>
    );
};

export default Results;

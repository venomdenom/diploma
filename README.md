# Auto-ML Service

This Auto-ML service is designed to streamline the process of building machine learning models. It automatically preprocesses the data, selects the best model, tunes hyperparameters, trains the model, and evaluates its performance.

The service is built using Python and various machine learning libraries such as **scikit-learn** and **pandas**. It provides an API for training and testing machine learning models, making it easy to integrate into other applications.

## Features

- **Data Preprocessing**: Automatic handling of missing values, categorical encoding, and scaling.
- **Model Selection**: Choose between multiple models (e.g., Random Forest, GBDT).
- **Hyperparameter Tuning**: Automatically perform hyperparameter tuning using **RandomizedSearchCV**.
- **Model Training**: Train selected models on the preprocessed dataset.
- **Model Evaluation**: Evaluate the trained model using standard metrics like accuracy.
- **Model Persistence**: Save and load models for future predictions.
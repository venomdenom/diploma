import os

MODEL_DIR = os.getenv('MODEL_DIR', 'models/')
UPLOAD_DIR = os.getenv('UPLOAD_DIR', 'uploads/')
LOG_DIR = os.getenv('LOG_DIR', '/logs')

DATA_FILE_PATH = os.getenv('DATA_FILE_PATH', 'data.csv')

# Hyperparamethers for models
MODEL_HYPERPARAMETERS = {
    'random_forest': {
        'n_estimators': 'randint(50, 200)',
        'max_depth': 'randint(10, 30)',
        'min_samples_split': 'randint(2, 20)',
        'min_samples_leaf': 'randint(1, 20)',
        'bootstrap': [True, False]
    },
    'svm': {
        'C': 'uniform(0.1, 10)',
        'kernel': ['linear', 'rbf'],
        'gamma': ['scale', 'auto']
    }
}

LOGGING_LEVEL = os.getenv('LOGGING_LEVEL', 'INFO')

# Model filename
MODEL_FILENAME = 'auto_ml_model.joblib'

# Environment (development, production, etc.)
ENVIRONMENT = os.getenv('ENVIRONMENT', 'development')
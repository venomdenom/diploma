import joblib
from sklearn.ensemble import RandomForestClassifier
from sklearn.svm import SVC
from sklearn.model_selection import RandomizedSearchCV
from sklearn.metrics import accuracy_score
from config import MODEL_HYPERPARAMETERS
from data_preprocessing import DataPreprocessor
from scipy.stats import randint, uniform

class AutoMlModel:
    
    def __init__(self) -> None:
        pass
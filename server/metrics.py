import numpy as np
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score, mean_squared_error, mean_absolute_error, mean_absolute_percentage_error, r2_score
from collections import Counter
from typing import Dict, List
from helpers import BaseHelper

class ClassificationMetrics:
    """
    A class to compute metrics for classification tasks.
    """
    def __init__(self, y_true: List, y_pred: List):
        self.y_true = y_true
        self.y_pred = y_pred
        self.metrics = None

    def calculate_metrics(self) -> Dict[str, float]:
        """
        Calculate common classification metrics.
        """
        self.metrics = {
            "accuracy": accuracy_score(self.y_true, self.y_pred),
            "precision": precision_score(self.y_true, self.y_pred, average='weighted', zero_division=0),
            "recall": recall_score(self.y_true, self.y_pred, average='weighted', zero_division=0),
            "f1_score": f1_score(self.y_true, self.y_pred, average='weighted', zero_division=0)
        }
        
    
    def get_metric(self, key: str) -> float | None:
        return self.metrics.get(key, None)


class RegressionMetrics:
    """
    A class to compute metrics for regression tasks.
    """
    def __init__(self, y_true, y_pred):
        self.y_true = y_true
        self.y_pred = y_pred
        self.metrics = None

    def calculate_metrics(self) -> Dict[str, float]:
        """
        Calculate common regression metrics.
        """
        self.metrics = {
            "mean_squared_error": mean_squared_error(self.y_true, self.y_pred),
            "mean_absolute_error": mean_absolute_error(self.y_true, self.y_pred),
            'mean_absolute_percentage_error': mean_absolute_percentage_error(self.y_true, self.y_pred),
            "r2_score": r2_score(self.y_true, self.y_pred)
        }


    def get_metric(self, key: str) -> float | None:
        return self.metrics.get(key, None)
    

class MetricsReccomender:
    
    def __init__(self, y: List | np.ndarray) -> None:
        self.y = y
        self.target_type = None
        
    
    def suggest_metric(self) -> Dict[str, List[str]]:
        """
        Suggest the best metric and other potential metrics based on the target type and dataset characteristics.

        Returns:
        - dict: A dictionary with the 'best_metric' and 'other_metrics'.
        
        Note:
        In regression loss function is also a metric, so always calculare r2_score, as getting mse = 102 says almost nothing, whereas r2_score = 0.21 says a lot about quality.
        """
        self.target_type = BaseHelper.determine_target_type()
        if self.target_type == 'classification':
            return self._suggest_classification_metric()
        else:
            return self._suggest_regression_metric()
        
    
    def _suggest_classification_metric(self) -> Dict[str, List[str]]:
        """
        Suggest metrics for classification based on class imbalance.

        Returns:
        - dict: The best metric and alternatives for classification tasks.
        """
        
        best_metric = 'accuracy' if BaseHelper.check_class_imbalance() else 'f1_score'
        
        other_metrics = ["precision", "recall", "f1_score"] if best_metric == "accuracy" else ["accuracy", "precision", "recall"]
        
        return {
            "best_metric": best_metric,
            "other_metrics": other_metrics
        }
        
    
    def _suggest_regression_metric(self) -> Dict[str, List[str]]:
        """
        Suggest metrics for regression based on the variance of the target variable.

        Returns:
        - dict: The best metric and alternatives for regression tasks.
        """
        
        variance = np.var(self.y)
        
        if variance > 1:
            best_metric = "mean_squared_error"
        else:
            best_metric = "mean_absolute_error"

        if np.mean(np.abs(self.y)) > 10:  # heuristic: large values, consider MAPE
            best_metric = "mape"

        other_metrics = ["r2_score", "mean_squared_error", "mean_absolute_error", "mape"]
        other_metrics.remove(best_metric)
        
        return {
            "best_metric": best_metric,
            "other_metrics": other_metrics
        }
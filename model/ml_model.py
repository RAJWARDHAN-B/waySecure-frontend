import pandas as pd
from sklearn.neighbors import KNeighborsRegressor
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, r2_score
import matplotlib.pyplot as plt
import numpy as np
from math import sqrt
from pydantic import BaseModel
import joblib
import warnings



version ='__0.1.0__'

knn=joblib.load('model/knn_model.pkl')  
scaler=joblib.load('model/scaler.pkl')

def predict_score(lat, lon):
    warnings.simplefilter(action='ignore', category=UserWarning)
    loc = scaler.transform([[lat, lon]])
    score=knn.predict(loc)
    return score






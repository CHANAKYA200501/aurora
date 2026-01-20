import pandas as pd
from sklearn.ensemble import IsolationForest
import joblib
import sys

csv = sys.argv[1]
model_path = sys.argv[2]

data = pd.read_csv(csv)[["NDVI","BSI","MAI"]]

model = IsolationForest(contamination=0.15)
model.fit(data)

joblib.dump(model, model_path)
print("Model trained")
import sys
import joblib
import pandas as pd

if len(sys.argv) < 4:
    print("Usage: python detect_excavation.py <model.pkl> <input.csv> <output.csv>")
    sys.exit(1)

model_path = sys.argv[1]
input_csv = sys.argv[2]
output_csv = sys.argv[3]

model = joblib.load(model_path)
data = pd.read_csv(input_csv)

scores = model.predict(data[["NDVI","BSI","MAI"]])
data["excavated"] = scores == -1

data.to_csv(output_csv, index=False)
print("Excavation detection completed")
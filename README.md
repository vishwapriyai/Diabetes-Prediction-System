# Diabetes-Prediction-System

## Overview
This project implements a machine learning model to predict whether a person is diabetic based on various health metrics. The model uses the PIMA Indian Diabetes Database to train a Support Vector Machine (SVM) classifier. Users can input their health data through a web interface to receive predictions.

![Diabetes-Prediction-System](Screenshot%202025-02-11%20144957.png)

![Diabetes-Prediction-System_Result](Screenshot%202025-02-11%20145003.png)


## Technologies Used
- Python
- Pandas
- NumPy
- Scikit-learn
- Flask
- Pickle

## Dataset
The project uses the PIMA Indian Diabetes Database, which contains the following features:
- `Pregnancies`: Number of times pregnant
- `Glucose`: Plasma glucose concentration a 2 hours in an oral glucose tolerance test
- `BloodPressure`: Diastolic blood pressure (mm Hg)
- `SkinThickness`: Triceps skin fold thickness (mm)
- `Insulin`: 2-Hour serum insulin (mu U/ml)
- `BMI`: Body mass index (weight in kg/(height in m)^2)
- `DiabetesPedigreeFunction`: Diabetes pedigree function
- `Age`: Age (years)
- `Outcome`: Class variable (0 or 1) indicating whether the person is diabetic

## Setup
To set up the environment, install the required libraries:

```bash
pip install pandas numpy scikit-learn flask
```

## Usage

### Data Preparation
1. Load the dataset:
   ```python
   import pandas as pd
   diabetes_dataset = pd.read_csv("path/to/diabetes.csv")
   ```

2. Preprocess the data, including standardization and splitting into training and testing sets.

3. Train the SVM classifier

## Running the Flask Application
1. Ensure that the trained model is saved as model.pkl.
2. Run the Flask application by executing the following command in your terminal:
```bash

python app.py
```

3. Open your web browser and go to http://127.0.0.1:5000/ to access the application.
  
## Making Predictions

- Input the required health metrics into the form on the web application.
- Click the "Predict" button to see whether the person is predicted to be diabetic or not.
## Conclusion
- This project demonstrates the implementation of a predictive model for diabetes, allowing users to estimate their diabetes risk based on health metrics.

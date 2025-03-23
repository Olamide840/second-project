import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split, cross_val_score, GridSearchCV
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report, confusion_matrix, ConfusionMatrixDisplay
import joblib
from flask import Flask, request, jsonify

# 1 Define BotDetector class
class BotDetector:
    def __init__(self):
        # Initialize RandomForestClassifier
        self.model = RandomForestClassifier()

    def train_model(self, X, y):
        # Split dataset into train and test sets
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
        
        # Perform GridSearchCV to find the best hyperparameters
        param_grid = {
            'n_estimators': [50, 100, 200],
            'max_depth': [None, 10, 20, 30],
            'min_samples_split': [2, 5, 10],
            'min_samples_leaf': [1, 2, 4]
        }
        grid_search = GridSearchCV(estimator=self.model, param_grid=param_grid, cv=5, scoring='accuracy', n_jobs=-1)
        grid_search.fit(X_train, y_train)
        
        # Get the best model
        self.model = grid_search.best_estimator_
        
        # Evaluate the best model
        self.model.fit(X_train, y_train)
        y_pred = self.model.predict(X_test)
        print("Classification Report:\n", classification_report(y_test, y_pred))
        print("Confusion Matrix:")
        cm = confusion_matrix(y_test, y_pred)
        cm_display = ConfusionMatrixDisplay(confusion_matrix=cm)
        cm_display.plot()
        
        # Perform Cross-Validation
        cv_scores = cross_val_score(self.model, X, y, cv=5)  # 5-fold cross-validation
        print("\nCross-Validation Scores:", cv_scores)
        print("Mean Cross-Validation Score:", cv_scores.mean())

    def detect_bot(self, X):
        # Make predictions to detect bots based on the trained model
        predictions = self.model.predict(X)
        return predictions

# 2. Create the dataset with behavioral features
data = {
    'click_frequency': [20, 5, 15, 50, 30, 2, 40, 1, 10, 60],
    'time_spent': [3, 6, 5, 15, 10, 2, 20, 1, 5, 30],
    'page_scroll_depth': [70, 80, 65, 100, 90, 50, 95, 30, 60, 100],
    'mouse_move_speed': [0.3, 1.2, 0.8, 1.5, 1.0, 0.4, 1.7, 0.2, 0.9, 1.8],
    'keyboard_activity': [100, 5, 50, 200, 150, 3, 180, 0, 60, 250],
    'session_length': [10, 5, 8, 25, 18, 4, 30, 3, 7, 35],
    'is_bot': [0, 1, 0, 1, 0, 1, 1, 1, 0, 1]
}

# 3. Convert to pandas DataFrame
df = pd.DataFrame(data)

# 4. Split the dataset into features (X) and labels (y)
X = df[['click_frequency', 'time_spent', 'page_scroll_depth', 'mouse_move_speed', 'keyboard_activity', 'session_length']]
y = df['is_bot']

# 5. Initialize BotDetector and train the model
bot_detector = BotDetector()
bot_detector.train_model(X, y)

# 6. Save the trained model using joblib
joblib.dump(bot_detector.model, 'bot_detector_model.pkl')

# Flask API setup
app = Flask(__name__)

# Load the pre-trained model
model = joblib.load('bot_detector_model.pkl')
#Home route (just a welcome message)
@app.route('/')
def home():
    return "donation.html"


@app.route('/predict', methods=['GET'])
def predict():
    print("Predict route triggered")
    
    # Get the data from the POST request
    data = request.get_json()

    # Ensure all necessary data fields are provided
    try:
        click_frequency = data['click_frequency']
        time_spent = data['time_spent']
        page_scroll_depth = data['page_scroll_depth']
        mouse_move_speed = data['mouse_move_speed']
        keyboard_activity = data['keyboard_activity']
        session_length = data['session_length']
    except KeyError as e:
        return jsonify({"error": f"Missing key: {e.args[0]}"})
    
    # Prepare the input for prediction
    input_data = np.array([[click_frequency, time_spent, page_scroll_depth,
                            mouse_move_speed, keyboard_activity, session_length]])

    # Make the prediction using the model
    prediction = model.predict(input_data)

    # Print the result to the terminal (console) to know if it's a bot or human
    if prediction[0] == 1:
        print("Bot detected!")
    else:
        print("Human detected!")

    # Return the prediction result as a JSON response
    return jsonify({'prediction': int(prediction[0])})

if __name__ == '__main__':
    app.run(debug=True)

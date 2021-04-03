from flask import Flask, render_template, url_for, request, redirect
import pickle
import preprocess

app = Flask(__name__)
# load the model
model = pickle.load(open('cat_boost_model.pkl', 'rb'))

# create default route
@app.route('/')
def index():
    return render_template('index.html')

# create predict route
@app.route('/predict', methods=['POST'])
def predict():
    # get the car details from the form
    car_details = list(request.form.values())
    # preprocess the car details
    car_details_processed = preprocess.encode(car_details)
    # apply scaler to the car details
    final_car_details = preprocess.scale(car_details_processed)
    # predict the car price 
    car_price = model.predict(final_car_details)
    # round the price value
    car_price = round(car_price[0])
    
    return render_template('index.html', prediction_text=f'The price of the {car_details[0].capitalize()} {car_details[1]} {car_details[3]} model grade {car_details[5]} {car_details[4]}, {car_details[6]} car with mileage value of {car_details[2]}km should be {car_price:,} naira')
   

if __name__ == '__main__':
    app.run(debug=True)  



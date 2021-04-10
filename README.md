# used_cars_price_prediction
This is an end-to-end Data science project on predicting the prices of used cars in Nigeria.

The project was carried out in 5 key stages:
1. Data scraping from the [cars 45 site](https://buy.cars45.com/cars). 
2. Data cleaning and preprocessing.
3. Exploratory data analysis(EDA) on the cleaned data.
4. Model building using various regression algorithms. 
5. Model deployment in Heroku using Flask.

# Data Scraping
The data was scraped using the [scraper notebook](https://github.com/FiyinfobaO/used_cars_price_prediction/blob/master/data_scraper_used_cars.ipynb) to get 4,183 cars with each car having the following information:
* The car manufacturer/make
* The car model
* The year the car was made
* The mileage(km)
* The car price
* The car grade
* The type of fuel used 
* The selling condition of the car
* The transmission of the car
* The car color

# Data Cleaning and Preprocessing 
The following steps were taken in order to clean the data using this [notebook](https://github.com/FiyinfobaO/used_cars_price_prediction/blob/master/data_cleaning_and_processing.ipynb):
* The data was checked for null values where it was discovered that all the columns apart from manufacturer and price had null values present.
* The null values was handled on a column by column basis; dropping the null values for some and filling the null values manually based on further analysis and by checking the cars45 site.
* Some columns were not in their appropriate data type so this was corrected.
* Further preprocessing was done on the *color* column to replace the ambiguous color names to simpler names.

# Exploratory data analysis(EDA)
By carrying out EDA on the cleaned data as seen in this [notebook](https://github.com/FiyinfobaO/used_cars_price_prediction/blob/master/data_EDA_used_cars.ipynb), various patterns were discovered in the dependent and independent variables.
For example: By plotting the distribution of the car prices and mileage values separately using distplot, it was seen that both the price and mileage distribution was positive skewed with most of the datapoints lieing on the left side so the price data had more of lower price values and the mileage had more cars of lower mileage kilometer values values.

The presence of outliers was also discovered using boxplot in the price and mileage columns. These outliers were removed by using the IQR method. Various plots were also made to show the relationships between the features and the target variable using countplot, swarmplot, stripplot, barplot and scatterplot from the seaborn library.
![mileage_distribution_picture](/images/mileage_distribution.png)
![yearvsprice_picture](/images/yearvsprice.png)
![sell_condvsprice_picture](/images/sell_condvsprice.png)

# Model Building 
Before the model building commenced, 3 important processes had to be done as seen in this [notebook](https://github.com/FiyinfobaO/used_cars_price_prediction/blob/master/feature_selection_and_model_building.ipynb):
1. The categorical independent features had to be encoded to numerical values using Label encoder from sklearn and after encoding, the fitted objects were saved using pickle to enable reuse when trying to prepare the data for predictions.
2. The dataset was split into train and test sets with the test set occupying 20% of the data. 
3. The independent features from the train and test set was normalized using Standard scaler after which the fitted scaler object was also saved using pickle to enable reuse.

Then all the features were selected and model building commenced using 10 different regression algorithms such as:
* Linear Regression
* Polynomial regression
* Decision Trees 
* Random Forest Regressor
* Extra Trees Regressor
* Adaboost Regressor 
* XGB Regressor 
* XGBRF Regressor 
* LGBM Regressor
* Catboost Regressor

## Model Performance Observations
From the observations of all the models that were trained, the Cat Boost Regressor performed the best with R2 score of 0.793 and a Root Mean Squared Error(RMSE) value of 666941.517. From the feature importance plot, the fuel and color feature had the least effect/importance on the models price prediction so I dropped those features and retrained all the models.

After retraining the models using the reduced features, majority of the models performed better than when all the features were used. The Cat Boost Regressor performed the best with R2 score of 0.799 and a Root Mean Squared Error(RMSE) value of 656639.186

The model was saved using pickle to enable reuse when making predictions on new data.

# Model Deployment 
The first thing I had to do was to build a web app using flask that had 2 routes as seen in [app.py](https://github.com/FiyinfobaO/used_cars_price_prediction/blob/master/app.py). The default route("/") that displays the form which the user will fill and the predict route("/predict") which is called when the user submits the form by clicking on the *Predict* button.

The web app contains dropdowns for each of the features the user has to provide a value for. After the user fills the form and clicks *Predict*, the values from each field are passed to the *encode* and *scale* functions in the [preprocess.py](https://github.com/FiyinfobaO/used_cars_price_prediction/blob/master/preprocess.py) file where the values are encoded and scaled using the saved encoder object and the saved scaler object. 
This prepares the data to be in the required format that the model is expecting.

The processed data is passed to the model which has been loaded using pickle for predictions that will be displayed to the user. 

After testing the app to satisfaction, I proceeded to deploying the flask app in heroku which is a Platform As A Service(PAAS)

![used_car_app_picture](/images/used_car_app_pic.png)

Web application: https://used-cars-price-prediction-api.herokuapp.com/

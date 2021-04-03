import pickle
import numpy as np

# load the encoders
manufacturer_encoder = pickle.load(open('manufacturer_encoder.pkl', 'rb'))
model_encoder = pickle.load(open('model_encoder.pkl', 'rb'))
grade_encoder = pickle.load(open('grade_encoder.pkl', 'rb'))
transmission__encoder = pickle.load(open('transmission_encoder.pkl', 'rb'))
selling_condition_encoder = pickle.load(open('selling_condition_encoder.pkl', 'rb'))

# load the scaler
scaler = pickle.load(open('standard_scaler.pkl', 'rb'))

# function to preprocess the car details
def encode(a_list):
    # unpack the list 
    yr = int(a_list[3])
    man = a_list[0]
    mod = a_list[1]
    mileage = int(a_list[2])
    grade = a_list[5]
    trans = a_list[6]
    sell_cond = a_list[4]

    # YEAR
    if yr != '' and yr != ' ':
        yr = yr
    else:
        yr = np.nan

    # mileage
    if mileage != '' and mileage != ' ':
        mileage = mileage
    else:
        mileage = np.nan

    # encode categorial features
    # manufacturer
    if man != '' and man != ' ':
        man_not_encoded =  np.array(man.lower()).ravel()
        man_encoded = manufacturer_encoder.transform(man_not_encoded)[0]
    else:
        man_encoded = np.nan
    # model
    if mod != '' and mod != ' ':
        mod_not_encoded =  np.array(mod.lower()).ravel()
        mod_encoded = model_encoder.transform(mod_not_encoded)[0]
    else:
        mod_encoded = np.nan
    # grade
    if grade != '' and grade != ' ':
        grade_not_encoded =  np.array(grade.lower()).ravel()
        grade_encoded = grade_encoder.transform(grade_not_encoded)[0]
    else:
        grade_encoded = np.nan
    # transmission
    if trans != '' and trans != ' ':
        transmission__not_encoded =  np.array(trans.lower()).ravel()
        transmission_encoded = transmission__encoder.transform(transmission__not_encoded)[0]
    else:
        transmission_encoded = np.nan
    # selling_condition
    if sell_cond != '' and sell_cond != ' ':
        selling_condition_not_encoded =  np.array(sell_cond.lower()).ravel()
        selling_condition_encoded = selling_condition_encoder.transform(selling_condition_not_encoded)[0]
    else:
        selling_condition_encoded = np.nan
    
    # prepare the car data for normalisation
    car = np.array([yr, man_encoded, mod_encoded, mileage, grade_encoded, transmission_encoded, selling_condition_encoded])
    car = np.array([car])

    return car

# function to scale the car array using standard scaler
def scale(car_arr):
    # transform the car
    car_scaled = scaler.transform(car_arr)
    return car_scaled

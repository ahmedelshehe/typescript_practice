const calculateBmi = (height: number, weight: number) :string => {
    if((isNaN(height) && isNaN(weight))){
        throw new Error ("Height and weight must be numbers");
    }
    const bmi = (weight / ((height /100)*2));
    if(bmi <= 18.5){
        return "Underweight ";
    }else if((bmi > 18.5) && (bmi <= 24.9)){
        return "Normal (healthy weight)";
    }else if((bmi > 24.9) && (bmi <= 30)){
        return "Overweight";
    }else if(bmi > 30){
        return "Obese";
    }else {
        throw new Error("Something went wrong");
    }
};
export default calculateBmi;

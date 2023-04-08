/* eslint-disable @typescript-eslint/no-unsafe-argument */
import express from 'express';
import calculateBmi from './bmiCalculator';
import bodyParser from 'body-parser';
import calculateExercises from './exerciseCalculator';
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended : false}));
app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});
app.get('/bmi', (req, res) => {
    const height = Number(req.query.height);
    const weight = Number(req.query.weight);
    try{
       const bmi = calculateBmi(height,weight);
       res.json({
        height,weight,bmi
       });
    }catch(_err){
        res.json({
            error: "malformatted parameters"
          });
    }
});
app.post('/exercises',(req,res)=>{
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const {daily_exercises,target} = req.body;
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      const results =calculateExercises(target,daily_exercises);
      res.json(results);
    }catch(err) {
      
      res.json({
        error: "parameters missing"
      });
    }
    
});
const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
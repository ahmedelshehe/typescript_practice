// eslint-disable-next-line @typescript-eslint/no-unused-vars
// interface exerciseValues {
//     targetHours: number
//     daysTrained : number[]
// }

interface CalulatedResult {
    periodLength: number
    trainingDays: number
    success: boolean
    rating: number
    ratingDescription: string
    target: number
    average: number
  }
// const getArgs = (args:number[]) : exerciseValues => {
//     if(isNaN(args[0])){
//         throw new Error(`Invalid arguments . Arguments must be numbers`);
//     }
//     if(args.every(a=> isNaN(a))){
//         throw new Error("Invalid arguments: Arguments must be numbers");
//     }else{
//         return {
//             targetHours: Number(args[0]),
//             daysTrained : args.splice(1)
//         };
//     }
// };
const calculate = (
    targetHours : number,
    daysTrained : number[]
) : CalulatedResult => {
    if(isNaN(targetHours) || daysTrained.every(a => isNaN(a))){
     throw new Error(`Invalid arguments . Arguments must be numbers`);
    }
    const average = (daysTrained : number[]) : number=> {
        return daysTrained.reduce((acc,hours)=>acc+hours) /daysTrained.length;
    };
    const rating = (daysTrained : number[]) : number=> {
        return Math.floor(daysTrained.reduce((acc,hours)=>acc+hours) /daysTrained.length);
    };
    const success = ()=> !(average(daysTrained) < targetHours);
    const message = (average :number) => {
        if(average < (targetHours/2)){
            return `Bad Activities `;
        } else if(average < (targetHours)){
            return `Not too bad but could be better!`;
        } else if(average >= targetHours){
            return ` Good Activities`;
        }else {
            return `Can't rate this activities`;
        }
    };
    return {
        periodLength: daysTrained.length,
        trainingDays: daysTrained.filter(d => d !==0).length,
        success: success(),
        rating: rating(daysTrained),
        ratingDescription: message(average(daysTrained)),
        target: targetHours,
        average: average(daysTrained),
    };
};
// try {
//     const args = process.argv.splice(2).map(Number)
//     const {targetHours,daysTrained} = getArgs(args)
//     console.log(calculate(targetHours,daysTrained)) 
// }catch(err) {
//     throw err;
// }
export default calculate;
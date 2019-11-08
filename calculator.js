const getSleepHours = day => {
   switch (day) {
     case 'monday':
       return 8
       break;
     case 'tuesday':
       return 7
       break;
     case 'wednesday':
       return 8
         break;
     case 'thursday':
       return 5
         break;
     case 'friday':
       return 8
         break;
     case 'saturday':
       return 8
         break;
     case 'sunday':
       return 8
         break;
     default:
       return "Error!"
   }
}

const getActualSleepHours = () =>
  getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') +
  getSleepHours('sunday');

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
}

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
 
  if(actualSleepHours === idealSleepHours){
      return console.log(`You received ${actualSleepHours} hours of sleep this week. That is the perfect amount of sleep!`);
  } 
  
  else if(actualSleepHours > idealSleepHours){
      return console.log(`Congratulations.You got ${actualSleepHours} hours of sleep this week which is ${actualSleepHours - idealSleepHours} hour(s) more than you needed!`);
  } 
  
  else if(actualSleepHours < idealSleepHours){
        return console.log(`You received ${actualSleepHours} hours of sleep this week, which is ${idealSleepHours - actualSleepHours} hours less than your required sleep. You should get some rest.`);
  } 
  else {
    console.log("Error! Something went wrong. Check your code.")
  }
}


calculateSleepDebt();



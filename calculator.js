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

const getIdealSleepHours = () =>{
  const idealHours = 8;
  return idealHours * 7;
}

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if(actualSleepHours === idealSleepHours){
      return console.log(`You received ${actualSleepHours} hours of sleep this week, which is the perfect amount of sleep!`);
  }
   if(actualSleepHours > idealSleepHours){
      return console.log(`You received ${actualSleepHours} hours of sleep this week, which is more than amount of sleep you needed!`);
  }
   if(actualSleepHours < idealSleepHours){
        return console.log(`You received ${actualSleepHours} hours of sleep this week, which is less than amount of sleep you needed!`);
  } 
}

calculateSleepDebt();


const getSleepHours = day => {
   switch (day) {
     case 'monday':
       return 8;
     case 'tuesday':
       return 8;
       case 'wednesday':
       return 8;
       case 'thursday':
       return 8;
       case 'friday':
       return 8;
       case 'saturday':
       return 8;
       case 'sunday':
       return 8;
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


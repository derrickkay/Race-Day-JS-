let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = true;

let runnersAge = 18;

if (registeredEarly && runnersAge > 18) {
  raceNumber += 1000;  
}

if (registeredEarly && runnersAge > 18) {
  console.log(`Your race will be at 9:30am, Your race number is: ${raceNumber}.`);
} 
else if (runnersAge > 18 && !registeredEarly) {
  console.log(`Your race will be at 11:30am, Your race number is: ${raceNumber}.`);
} else if (runnersAge < 18) {
  console.log(`Your race will begin at 12:30pm, Your race number is: ${raceNumber}`);
} else {
    console.log('Please go and see the regisration desk');
}
 

var wakeDog = function(dogName = "Xerox", dogBreed = "Border Collie") {
    return `Wake ${dogName} the ${dogBreed}`;
  }

var leashDog = function(dogName = "Xerox", dogBreed = "Border Collie") {
    return `Leash ${dogName} the ${dogBreed}`;
  }

var walkToPark = function(dogName = "Xerox", dogBreed = "Border Collie") {
    return `Walk to the park with ${dogName} the ${dogBreed}`;
  }

  var throwFrisbee = function(dogName = "Xerox", dogBreed = "Border Collie") {
    return `Throw the frisbee for ${dogName} the ${dogBreed}`;
  }
  
  var walkHome = function(dogName = "Xerox", dogBreed = "Border Collie") {
    return `Walk home with ${dogName} the ${dogBreed}`;
  }

  var unleashDog = function(dogName = "Xerox", dogBreed = "Border Collie") {
    return `Unleash ${dogName} the ${dogBreed}`;
  }



  const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

  var exerciseDog = function(dogName, dogBreed){
      return routine.map(fn => fn(dogName, dogBreed))
  }


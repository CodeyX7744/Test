const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    // yearOfDeath: 3470,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2201,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 2049,
  },
  {
    name: "Professor X",
    yearOfBirth: 1912,
    yearOfDeath: 1920,
  }
]


  
  const findTheOldest = function(people) {
   
    let age = null;
    let oldestAge = 0;
    let oldestPerson = null;
    let yearOfDate = new Date();
      people.forEach((person, index) => {
        if(person.yearOfDeath === undefined) {
          console.log("yearOfDate is undefined")
          console.log(yearOfDate.getFullYear())
          person.yearOfDeath = yearOfDate.getFullYear();

        }
        age = person.yearOfDeath-person.yearOfBirth
        people[index].age = age;               
      })
      people.forEach((person, index) => {
        if (person.age > oldestAge) {
            oldestAge = person.age;
            oldestPerson = people[index];
        }
             
      })
      
      return console.log(oldestPerson);
};



  findTheOldest(people);
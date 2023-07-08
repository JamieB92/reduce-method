  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
const nums = [0, 1, 2, 3, 4]
// acc: accumulator - represents the value that will ulmitaly returned from the reduce method 
// curr - currentValue - represent the current array item that the call back function is being run on
// Always need to have both of these in the call/function
// Must always have an initial value

// Long way
// let sum = nums.reduce((acc, curr) => {
//   console.log(
//     "Accumulator:", acc,
//     "Current Value:", curr,
//     "Total:", acc + curr
//   );
//   return acc + curr
// })

//short hand
let sum = nums.reduce((acc, curr) => acc + curr, 0)
console.log(sum)

const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Totaling a specific object property
let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0)
console.log(totalExperience)

// Grouping by a property, and totaling it too
// {Developer:12, Designer: 4} <-- this is the result I want
let experienceByProfession = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  if (!acc[key]) {
    acc[key] = curr.yrsExperience
  } else {
    acc[key] += curr.yrsExperience
  }
  return acc;
}, {})

console.log(experienceByProfession)
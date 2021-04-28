/*
Question:

Convert an array of integers into an array of strings representing the phonetic equivalent of the integer.
For example:
Given an array: [3, 25, 209], print “Three,TwoFive,TwoZeroNine” into stdout.
Given an array: [10, 300, 5], print “OneZero,ThreeZeroZero,Five” into stdout.
*/

// Solution:

const mapNumberToMorpheme = () => {
  integerArray = process.argv.slice(2);

  integerArray = integerArray.map(Number);

  // Maps integers [0-9] to their phonetic equivalent (morphemes)
  const integerToMorpheme = new Map([
    ["0", "Zero"],
    ["1", "One"],
    ["2", "Two"],
    ["3", "Three"],
    ["4", "Four"],
    ["5", "Five"],
    ["6", "Six"],
    ["7", "Seven"],
    ["8", "Eight"],
    ["9", "Nine"],
  ]);

  /* Edge case checks - not necessary when arguments are passed from command line */

  // Checks for presence of array
  if (integerArray === undefined) {
    return "No array provided - please supply a valid integer array";
  }
  // Checks for presence of valid array
  if (integerArray === null || integerArray.length === 0) {
    return "Null/empty array - please supply a valid integer array";
  }

  // Checks for presence of valid array type
  if (
    !integerArray.every(function (element) {
      return typeof element === "number";
    })
  ) {
    return "All members of the array argument must be integers";
  }

  // Stores phonetic equivalent of all integers
  let morphemeArray = [];

  for (let integer of integerArray) {
    const stringInteger = integer.toString();

    // Stores phonetic equivalent of given integer on each iteration
    let morphemedInteger = "";

    for (let i = 0; i < stringInteger.length; i++) {
      if (integerToMorpheme.has(stringInteger[i])) {
        morphemedInteger =
          morphemedInteger + integerToMorpheme.get(stringInteger[i]);
        if (
          stringInteger.lastIndexOf(stringInteger[i]) ===
            stringInteger.length - 1 &&
          i === stringInteger.length - 1
        ) {
          morphemeArray.push(morphemedInteger);
        }
      }
    }
  }
  return morphemeArray.join(",");
};

console.log(mapNumberToMorpheme());

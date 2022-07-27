// "username=azure+green&password=password%21"

function firstStep(input) {
  // Your code here
  return input.split("&");
}

function secondStep(input) {
  // Your code here
  return input.map(
    pair => pair.split("=")
  );
}

function thirdStep(input) {
  // Your code here
  return input.map(
    array => array.map(element => element.replace(/\+/g, " "))
  );
}

function fourthStep(input) {
  // Your code here
  return input.map(
    array => array.map(element => decodeURIComponent(element))
  );
}

function fifthStep(input) {
  // Your code here
  let initialObject = {};
  return input.reduce(
    (previousObject, currentArray) => {
      previousObject[currentArray[0]] = currentArray[1];
      return previousObject;
    },
    initialObject
  );
}

function parseBody(str) {
  // Your code here
  return fifthStep(fourthStep(thirdStep(secondStep(firstStep(str)))));
}

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody
};

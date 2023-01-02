function compareArrays(arr1, arr2) {
  let comparison = arr1.length === arr2.length && arr1.every((item, array) => item === arr2[array]);
  return comparison;
}

function getUsersNamesInAgeRange(users, gender) {
  let genderOfAPerson = users.filter(item => item.gender === gender);
  let searchAge = genderOfAPerson.map(item => item.age);
  let sum = searchAge.reduce((acc, item) => acc + item, 0);
  if (sum > 0) {
    return (sum / searchAge.length);
  } else {
    return sum;
  }
}
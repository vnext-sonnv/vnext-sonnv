
const users = {
  Alex: {
    ns: 1920,
    nm: 1960
  },
  Ana: {
    ns: 1925,
    nm: 1959
  },
  John: {
    ns: 1930,
    nm: 1980
  },
  Simp: {
    ns: 1928,
    nm: 1967
  },
  Leo: {
    ns: 1980,
    nm: 2021
  }
};

const age_max = [];
const user_max = {
  name: "",
  age: 0
};

const ageMax = (arr) => {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) if (max < arr[i]) max = arr[i];
  return max;
};

Object.entries(users).forEach(([key, value]) => {
  let age = value.nm - value.ns;
  age_max.push(age);
  if (age === ageMax(age_max)) {
    user_max.name = key;
    user_max.age = age;
  }
});

console.log("name_max", user_max);
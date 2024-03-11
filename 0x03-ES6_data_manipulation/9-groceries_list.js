const groceriesList = () => {
  const res = new Map();
  const objetos = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };

  // Sort the keys alphabetically
  const sortedKeys = Object.keys(objetos).sort();

  // Iterate over the sorted keys and add them to the Map
  for (const key of sortedKeys) {
    res.set(key, objetos[key]);
  }

  return res;
};

export default groceriesList;


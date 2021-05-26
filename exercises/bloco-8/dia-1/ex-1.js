const newEmployees = (callback) => {
  return {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
};


const personData = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('.');
  return {
    name: `${fullName}`,
    email: `${email}@trybe.com`,
  }
};

console.log(newEmployees(personData));

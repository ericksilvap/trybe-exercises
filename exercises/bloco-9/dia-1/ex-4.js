const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const sendMarsTemperature = () => `Mars temperature is: ${getMarsTemperature()} degree Celsius`;

setTimeout(() => console.log(sendMarsTemperature()), messageDelay());

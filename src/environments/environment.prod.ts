// const env = ('../../node-env.js')
const envObject = {
  BACKEND_URL: 'https://infrastructuremicroservicetest.herokuapp.com/api'
};

console.log("production env mm")
export const environment = {
  production: false,
  serviceUrl: envObject.BACKEND_URL
};

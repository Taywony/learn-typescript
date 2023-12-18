// api url
var url = 'https://jsonplaceholder.typicode.com/users/1';

// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

// user data
var user = {};

/**
 * @typedef {object} Address
 * @property {string} city
 * @property {string} street
 * @property {string} suite
 * @property {string} zipcode
 */


/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */


/**
 * 
 * @returns {Promise<User>}
 */
const fetchUser = () => {
  return axios.get(url)
}


fetchUser().then(function(response) {
  response.address.
})


function startApp() {

  fetchUser()
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();

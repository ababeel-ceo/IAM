import Cookies from 'js-cookie';

// Store the JWT in a cookie
Cookies.set('jwtToken', jwtToken);

// Retrieve the JWT from the cookie
const storedToken = Cookies.get('jwtToken');
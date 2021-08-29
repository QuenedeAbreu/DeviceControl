import Cookies from 'js-cookie';

export const isAuthenticated = () => {
  const token = Cookies.get('token');
  return (token) ? true : false;
}

export const doLogin = (token, rememberPassword) => {
  if (rememberPassword) {
    Cookies.set('token', token, { expires: 999 });
  } else {
    Cookies.set('token', token);
  }
}


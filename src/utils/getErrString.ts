export const getErrString = (str: string) => {
  str = str.split('/')[1];
  return str[0].toUpperCase() + str.slice(1).split('-').join(' ');
};
// 'auth/wrong-password': 'Wrong password',
// 'auth/user-not-found': 'User not found',
// 'auth/email-already-in-use': 'Email already in use',

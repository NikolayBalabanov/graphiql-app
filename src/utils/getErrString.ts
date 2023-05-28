export const getErrString = (str: string) => {
  str = str.split('/')[1];
  return str[0].toUpperCase() + str.slice(1).split('-').join(' ');
};

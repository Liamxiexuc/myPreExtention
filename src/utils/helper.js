export const isValidDomain = (url) => {
  return (
    url.includes('realestate.com.au/property') ||
    url.includes('realestate.com.au/sold/property')
  );
};

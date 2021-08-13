export const isValidDomain = (url) => {
  return (
    url.includes('realestate.com.au/property') ||
    url.includes('realestate.com.au/sold/property')
  );
};

export const isHousePage = (url) => {
  const pureUrl = url.split('?')[0];
  const isIncludeDomain = isValidDomain(pureUrl);
  const lastSubString = pureUrl.split('/').pop();
  const lastSubArray = lastSubString.split('-');
  const firstString = lastSubArray?.shift();
  const lastString = lastSubArray?.pop();
  const isSepcificProperty = !!(
    firstString === 'property' && lastString.match(/^-?\d+$/)
  );

  return isIncludeDomain && isSepcificProperty;
};

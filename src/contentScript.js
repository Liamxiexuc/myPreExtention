/* global chrome */
const getProperty = () => {
  const propertyInfo = document.querySelector(
    '.property-info-address',
  ).innerHTML;
  const propertyInfoArray = propertyInfo.split(',');
  const address = propertyInfoArray[0].trim();
  const suburb = propertyInfoArray[1].trim();
  const stateInfo = propertyInfoArray[2].trim();
  const stateInfoArray = stateInfo.split(' ');
  const state = stateInfoArray[0];
  const postcode = stateInfoArray[1];
  const url = window.location.href;
  const propertyType = document.querySelector(
    '.property-info__property-type',
  ).innerHTML;

  const geoStyle = document
    .querySelector('.static-map__img')
    ?.getAttribute('style');
  let geoData = geoStyle.split('%7C')[1];
  geoData = geoData.split('&')[0];
  geoData = geoData.split('%2C');
  const lat = geoData[0];
  const lng = geoData[1];

  return {
    address,
    suburb,
    state,
    postcode,
    url,
    propertyType,
    lat,
    lng,
  };
};

chrome.runtime.onMessage.addListener(function (
  message,
  sender,
  sendResponse,
) {
  switch (message.type) {
    case 'getProperty':
      const property = getProperty();

      sendResponse(property);
      break;
    default:
      console.error('Unrecognised message: ', message);
  }
});

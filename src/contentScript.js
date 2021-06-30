/* global chrome */
const getProperty = async () => {
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

  const geoStyle = await fetchGeoMap();
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

/**
 * Add google map (in the page) watcher
 *   and get the data once the map is loaded
 *
 */
const fetchGeoMap = () => {
  return new Promise((resolve, reject) => {
    let geoStyle;
    const watcher = setInterval(() => {
      geoStyle = document
        .querySelector('.static-map__img')
        ?.getAttribute('style');
      if (geoStyle) {
        clearInterval(watcher);
        resolve(geoStyle);
      }
    }, 50);
  });
};

let propertyData;
getProperty().then((res) => (propertyData = res));

chrome.runtime.onMessage.addListener(function (
  message,
  sender,
  sendResponse,
) {
  switch (message.type) {
    case 'getProperty':
      sendResponse(propertyData);
      break;
    default:
      console.error('Unrecognised message: ', message);
  }
});

/* global chrome */
const getProperty = async () => {
  const { propertyInfo, geoStyle } = await fetchDOM();
  const propertyInfoArray = propertyInfo.split(',');
  const address = propertyInfoArray[0].trim();
  const suburb = propertyInfoArray[1].trim();
  const stateInfo = propertyInfoArray[2].trim();
  const stateInfoArray = stateInfo.split(' ');
  const state = stateInfoArray[0];
  const postcode = stateInfoArray[1];
  let url = window.location.href;
  if (url.includes('?')) {
    url = url.split('?')[0];
  }
  const propertyType = document.querySelector(
    '.property-info__property-type',
  ).innerHTML;

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
 * Add DOM watcher
 *   get the data once the title and map are loaded
 *
 */
const fetchDOM = () => {
  return new Promise((resolve, reject) => {
    const watcher = setInterval(() => {
      const propertyInfo = document.querySelector(
        '.property-info-address',
      )?.innerHTML;
      const geoStyle = document
        .querySelector('.static-map__img')
        ?.getAttribute('style');
      if (geoStyle && propertyInfo) {
        clearInterval(watcher);
        resolve({ propertyInfo, geoStyle });
      }
    }, 100);
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
    case 'urlChanged':
      getProperty().then((res) => (propertyData = res));
      break;
    default:
      console.error('Unrecognised message: ', message);
  }
});

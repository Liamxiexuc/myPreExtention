/* global chrome */
const getProperty = async () => {
  let dom = {};
  try {
    dom = await fetchDOM();
  } catch (error) {
    console.log(error);
    return;
  }
  const { propertyInfo, geoStyle } = dom;
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
      if (!propertyInfo) {
        clearInterval(watcher);
        return reject('not in property page');
      }
      const geoStyle = document
        .querySelector('.static-map__img')
        ?.getAttribute('style');
      if (geoStyle && propertyInfo) {
        clearInterval(watcher);
        resolve({ propertyInfo, geoStyle });
      }
      return;
    }, 100);
  });
};

let propertyData;

chrome.runtime.onMessage.addListener(async function (
  message,
  sender,
  sendResponse,
) {
  switch (message.type) {
    case 'getProperty':
      if (propertyData) {
        sendResponse(propertyData);
      } else {
        const propertyData = await getProperty();
        sendResponse(propertyData);
      }
      break;
    case 'urlChanged':
      const currentUrl = window.location.href;
      if (
        currentUrl &&
        currentUrl.includes('realestate.com.au/property')
      ) {
        propertyData = await getProperty();
      } else {
        propertyData = null;
      }

      break;
    default:
      console.error('Unrecognised message: ', message);
  }
});

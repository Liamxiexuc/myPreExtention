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

  return {
    address,
    suburb,
    state,
    postcode,
    url,
    propertyType,
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

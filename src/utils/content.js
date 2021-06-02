/* global chrome */

export const getContent = () => {
  return new Promise((resolve, reject) => {
    chrome.tabs.query(
      { active: true, currentWindow: true },
      function (tabs) {
        chrome.tabs.sendMessage(
          tabs[0].id,
          { type: 'getProperty' },
          function (property) {
            if (!property) return reject('error');
            resolve(property);
          },
        );
      },
    );
  });
};

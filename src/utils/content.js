/* global chrome */

/**
 * Keep sending requests to content script
 *   until the property data loaded
 *
 */
export const getPropertyInfo = () => {
  return new Promise((resolve, reject) => {
    const watcher = setInterval(() => {
      chrome.tabs.query(
        { active: true, currentWindow: true },
        function (tabs) {
          chrome.tabs.sendMessage(
            tabs[0].id,
            { type: 'getProperty' },
            function (property) {
              if (property) {
                clearInterval(watcher);
                return resolve(property);
              }
            },
          );
        },
      );
    }, 100);
  });
};

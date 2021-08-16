/* global chrome */
import { getToken } from './authentication.js';
/**
 * Keep sending requests to content script
 *   until the property data loaded
 *
 */
export const getPropertyInfo = () => {
  return new Promise(async (resolve, reject) => {
    chrome.tabs.query(
      { active: true, currentWindow: true },
      function (tabs) {
        chrome.tabs.sendMessage(
          tabs[0].id,
          { type: 'getProperty' },
          function () {
            const watcher = setInterval(async () => {
              const data = await getToken('property');
              if (data) {
                clearInterval(watcher);
                resolve(data);
                return;
              }
            }, 100);
          },
        );
      },
    );
  });
};

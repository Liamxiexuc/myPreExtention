/*global chrome*/
/*eslint no-undef: "error"*/

const updateIcon = (tabId, url) => {
  let matching = false;

  if (url && url.includes('realestate.com.au/property')) {
    matching = true;
  }

  if (matching) {
    chrome.action.setIcon({ path: 'icon16.png', tabId: tabId });
    return;
  }
  chrome.action.setIcon({ path: 'icon16_gray.png', tabId: tabId });
};

chrome.tabs.onUpdated.addListener(function (tabId, change, tab) {
  const { url } = tab;
  updateIcon(tabId, url);
});

chrome.tabs.onActivated.addListener(function (info) {
  setTimeout(() => {
    chrome.tabs.get(info.tabId, function (tab) {
      const { url } = tab;
      updateIcon(info.tabId, url);
    });
  }, 100);
});

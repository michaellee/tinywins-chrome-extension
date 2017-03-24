chrome.tabs.onCreated.addListener(function(tab) {
  // Checks to see if the new tab is a blank tab, if it is then replace with
  // my.tinywins.net
  if (tab.url === 'chrome://newtab/') {
    chrome.tabs.update(tab.id, { url: 'https://my.tinywins.net'})
  }
});

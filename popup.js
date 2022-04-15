const button = document.querySelector('#start-button');

button.onclick = () => {
  chrome.tabs.query({active: true}, function(tabs) {
    const tab = tabs[0];
    tab_title = tab.title;
    chrome.scripting.executeScript({
      target: {tabId: tab.id, allFrames: true},
      func: f1
    });
  });
};

let tab_title = '';
function f1 (){
  document.querySelector('body > div.L3eUgb > div.o3j99.LLD4me.yr19Zb.LS8OJ > div > img').remove();
  button.innerText = 'test';
}
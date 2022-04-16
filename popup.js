const button = document.querySelector('#start-button');

function receivedResponse(response) {
  const topLine = document.createElement('div');
  topLine.innerText = 'Identifier: Color';
  document.body.appendChild(topLine);
  response.forEach((el) => {
    const legend = document.createElement('div');
    legend.innerText = `${el.id}: ${el.color}`; // Should show the actual color and not just hex code
    document.body.appendChild(legend);
  })
}

button.onclick = () => {
  chrome.tabs.query({active: true}, function(tabs) {
    const tab = tabs[0];
    chrome.tabs.sendMessage(
      tabId = tab.id,
      message = {pressed: true},
      callback = receivedResponse
    )
  });
};
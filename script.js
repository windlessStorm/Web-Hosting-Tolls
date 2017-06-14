function getword(info,tab) {
  console.log("Word " + info.selectionText + " was clicked.");
  chrome.tabs.create({  
    url: "https://mxtoolbox.com/SuperTool.aspx?action=blacklist%3a" + info.selectionText,
  });           
}
chrome.contextMenus.create({
  title: "Check Blacklist for domain: %s", 
  contexts:["selection"], 
  onclick: getword,
});
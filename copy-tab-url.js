const MENU_ID = "copyUrl";

browser.menus.create(
  {
    "id": MENU_ID,
    "title": "Copy URL",
    "contexts": ["tab"]
  }
);

browser.menus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId == MENU_ID) {
    navigator.clipboard.writeText(tab.url);
  }
});

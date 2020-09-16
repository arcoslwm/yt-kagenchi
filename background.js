browser.contextMenus.create({
    id: "yt-kagenchi",
    title: "Open link with yt-kagenchi",
    contexts: ["link"],
});

browser.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "yt-kagenchi") {
        
        console.log('yt-kagenchi: ', info);
        console.log('yt-kagenchi:', tab);

        const text = "This is text: " + info.linkUrl;
        console.log('yt-kagenchi');
    }
});

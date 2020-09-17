browser.contextMenus.create({
    id: "yt-kagenchi",
    title: "Open link with yt-kagenchi",
    contexts: ["link"],
});

browser.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "yt-kagenchi") {

        console.log('yt-kagenchi info.linkUrl: ', info.linkUrl);
        let linkUrl = info.linkUrl;
        let videoId = '';

        if (linkUrl.indexOf("youtube") !== -1 &&
            linkUrl.indexOf("v=") !== -1 &&
            linkUrl.substr(linkUrl.indexOf("v=") + 2).length >= 11) {

            videoId = linkUrl.substr(linkUrl.indexOf("v=") + 2, 11);
        }
        else if ( linkUrl.indexOf("youtu.be/") !== -1 &&
                  linkUrl.substr(linkUrl.indexOf(".be/") + 4).length >= 11) {

            videoId = linkUrl.substr(linkUrl.indexOf(".be/") + 4, 11);
        }
        else {
            console.log("video id not found");
        }

        if (videoId !== '') {
            console.log('open video: ', videoId);
            let creating = browser.tabs.create({
                active: false,
                url: "https://www.youtube.com/embed/" + videoId
            });
            creating.then(onCreated, onError);
        }

    }
});

function onCreated(tab) {
    console.log(`Created new tab: ${tab.id}`)
}

function onError(error) {
    console.log(`Error: ${error}`);
}

"use strict";

// http://www.adobe.com/devnet/actionscript/samples/media_2.html

var images = [
	"http://www.adobe.com/content/dam/Adobe/en/devnet/flash/samples/media_2/images/image1.jpg",
	"http://www.adobe.com/content/dam/Adobe/en/devnet/flash/samples/media_2/images/image2.jpg",
	"http://www.adobe.com/content/dam/Adobe/en/devnet/flash/samples/media_2/images/image3.jpg",
	"http://www.adobe.com/content/dam/Adobe/en/devnet/flash/samples/media_2/images/image4.jpg",
	"http://www.adobe.com/content/dam/Adobe/en/devnet/flash/samples/media_2/images/image5.jpg"
];

var image = chrome.extension.getURL(
	"image.jpg"
);

var callback = function(details) {
	console.debug(image);
	return {"redirectUrl": image};
};

chrome.webRequest.onBeforeRequest.addListener(
	callback, {"urls": images}, ["blocking"]
);

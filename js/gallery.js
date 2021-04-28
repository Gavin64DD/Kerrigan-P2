// requestAnim shim layer by Paul Irish
    window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       || 
              window.webkitRequestAnimationFrame || 
              window.mozRequestAnimationFrame    || 
              window.oRequestAnimationFrame      || 
              window.msRequestAnimationFrame     || 
              function(/* function */ callback, /* DOMElement */ element){
                window.setTimeout(callback, 1000 / 60);
              };
    })();
  

// example code from mr doob : http://mrdoob.com/lab/javascript/requestanimationframe/

animate();

var mLastFrameTime = 0;
var mWaitTime = 5000; //time in ms
function animate() {
    requestAnimFrame( animate );
	var currentTime = new Date().getTime();
	if (mLastFrameTime === 0) {
		mLastFrameTime = currentTime;
	}

	if ((currentTime - mLastFrameTime) > mWaitTime) {
		swapPhoto();
		mLastFrameTime = currentTime;
	}
}

/************* DO NOT TOUCH CODE ABOVE THIS LINE ***************/

function swapPhoto() {
	if (mCurrentIndex >= mImages.length) {
		mCurrentIndex = 0;
	}
else (mCurrentIndex < 0) {
		mCurrentIndex = mImages.length[12];
}
mLastFrameTime = 0;
	document.getElementById('photo').src = mImages[mCurrentIndex];
	var location = document.getElementsByClassName('location')[0].innerHTML = "Location:" + mImages[mCurrentIndex].location;
	var description = document.getElementsByClassName('description')[0].innerHTML = "Description:" + mImages[mCurrentIndex].description;
	var date = document.getElementsByClassName('date')[0].innerHTML = "Date" + mImages[mCurrentIndex].date;

	console.log('swap photo');
}
// Counter for the mImages array
var mCurrentIndex = 0;

// XMLHttpRequest variable
var mRequest = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
			mJson = JSON.parse(mRequest.reponseText);
 }
};
xhttp.open("GET", mUrl, true);
xhttp.send();

iterateJSON();
}


// Array holding GalleryImage objects (see below).
var mImages = [];

// Holds the retrived JSON information
var mJson;

// URL for the JSON to load by default
// Some options for you are: images.json, images.short.json; you will need to create your own extra.json later
var mUrl = '/image.json';


//You can optionally use the following function as your event callback for loading the source of Images from your json data (for HTMLImageObject).
//@param A GalleryImage object. Use this method for an event handler for loading a gallery Image object (optional).
function makeGalleryImageOnloadCallback(galleryImage) {
	return function(e) {
		galleryImage.img = e.target;
		mImages.push(galleryImage);
	}
}

$(document).ready( function() {

}

	// This initially hides the photos' metadata information
	$('.details').eq(0).hide();
});

window.addEventListener('load', function() {
	
	console.log('window loaded');

}, false);

$(document).ready( function():



function GalleryImage() {
	//implement me as an object to hold the following data about an image:
	function GalleryImage(location, description, date, img) {
    this.imgLocation = location;
    this.description = description;
    this.date = date;
    this.imgPath = img;
}

function iterateJSON() {
	for (x = 0; x < mJson.images.length; x++) {
			mImages[x] = new GalleryImage();
			mImages[x].location = mJson.images[x].imgLocation;
			mImages[x].description = mJson.images[x].description;
			mImages[x].date = mJson.images[x].date;
			mImages[x].img = mJson.images[x].imgPath;
	}
};

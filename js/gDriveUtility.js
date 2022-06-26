//https://dev.to/temmietope/embedding-a-google-drive-image-in-html-3mm9
//per this source, we can make an image file auto-visable from google drive
//if we switch up the position of its image id. This code does that
function getDriveID(linkX) {
  var imageID = linkX.substring(
    linkX.indexOf("/d/") + 3,
    linkX.lastIndexOf("/view")
  );
  return imageID
}
function convGDriveLink(linkX) {
  var imageID = getDriveID(linkX)
  var preLink = "https://drive.google.com/thumbnail?id="
  var outLink = preLink + imageID
  return outLink;
}

function show_image(src, alt) {
  var img = document.createElement("img");
  img.src = src;
  img.alt = alt;
  document.body.appendChild(img);
}

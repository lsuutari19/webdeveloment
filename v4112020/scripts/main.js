/*
 this is the script for the website
*/

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/header.png') {
        myImage.setAttribute('src', 'images/header2.png');
    } else {
        myImage.setAttribute('src', 'images/header.png');
    }
}
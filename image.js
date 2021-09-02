function onEvent(event) {
    if (event.key === "k") {
        var _img = document.getElementById('id1');
var newImg = new Image;
newImg.onload = function() {
    _img.src = this.src;
}
newImg.src = 'https://raw.githubusercontent.com/zigz0g/zzrevamp/main/img/Capture.png';
    }
};

// 이미지 변경 함수
function changeImage(buttonId, imagePath) {
  var button = document.getElementById(buttonId);
  var image = button.querySelector("img");
  image.src = imagePath;
}

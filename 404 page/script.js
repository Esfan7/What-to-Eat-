function redirectFunction(){
    window.location.href = "../index.html";
}
document.getElementById("return").addEventListener("click", redirectFunction);

var badRequestUrl = g;
var redirectUrl = './404 Page/404.html';

fetch(badRequestUrl).then(function (response) {
    // Check the response value is equal to 404.
    if (response.status === 404) {
      // If the page is not on the 404 page, redirect to it.
      document.location.replace(redirectUrl);
    } else {
      return response.json();
    }
  });



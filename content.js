function hideElement(element) {
  element.setAttribute("style", "display:none");
}

function hideRetweets() {
  // [data-testid=cellInnerDiv1] essentially matches a tweet
  Array.from(document.querySelectorAll("[data-testid=cellInnerDiv]"))
    .filter((element) => element.outerHTML.includes("Retweeted"))
    .forEach(hideElement);
}

setInterval(hideRetweets, 5000);

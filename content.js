function hideElement(element) {
  element.setAttribute("style", "display:none");
}

function hideRetweets() {
  // [data-testid=cellInnerDiv1] essentially matches a tweet
  Array.from(document.querySelectorAll("[data-testid=cellInnerDiv]"))
    .filter(
      (element) =>
        // hide retweets
        element.outerHTML.includes("Retweeted") &&
        // ignore route /notifications
        !element.outerHTML.includes(" Retweeted your Tweet") &&
        // ignore your own retweets
        !element.outerHTML.includes("You Retweeted")
    )
    .forEach(hideElement);
}

setInterval(hideRetweets, 5000);

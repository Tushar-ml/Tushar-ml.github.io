const mediumToMarkdown = require('medium-to-markdown');

var url = 'https://medium.com/@tushargoel-ml/near-real-time-optimization-of-notifications-at-linkedin-part-i-893dcb8eef41'
// Enter url here
mediumToMarkdown.convertFromUrl(url)
.then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});

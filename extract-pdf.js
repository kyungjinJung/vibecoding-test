const pdf = require('pdf-parse');
const fs = require('fs');

const dataBuffer = fs.readFileSync('public/Profile.pdf');

pdf(dataBuffer).then(function(data) {
  // PDF 텍스트 출력
  console.log(data.text);
}).catch(function(err) {
  console.error('Error:', err);
});

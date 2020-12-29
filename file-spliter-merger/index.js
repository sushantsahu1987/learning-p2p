const fs = require("fs");
const splitFile = require("split-file");
// const name = "./ebook.pdf"
// const name = "/Users/sushantsahu/Github/learning-p2p/file-spliter-merger/passport.pdf.sf-part1"
const name = "./test.pdf"
const { fileSizeInBytes, fileSizeInMegabytes } = getFileSize(name);

console.log("fileSizeInBytes ", fileSizeInBytes);
console.log("fileSizeInMegabytes ", fileSizeInMegabytes);

const FILE_SPLIT_SIZE = 15000;
// const filenames = []

// splitFile.splitFileBySize(__dirname + '/passport.pdf', FILE_SPLIT_SIZE)
//   .then((names) => {
//     filenames.push(names);
//   })
//   .catch((err) => {
//     console.log('Error: ', err);
//   });

// console.log(filenames);
// const filenames = [
//   "/Users/sushantsahu/Github/learning-p2p/file-spliter-merger/passport.pdf.sf-part1",
//   "/Users/sushantsahu/Github/learning-p2p/file-spliter-merger/passport.pdf.sf-part2",
//   "/Users/sushantsahu/Github/learning-p2p/file-spliter-merger/passport.pdf.sf-part3",
//   "/Users/sushantsahu/Github/learning-p2p/file-spliter-merger/passport.pdf.sf-part4",
//   "/Users/sushantsahu/Github/learning-p2p/file-spliter-merger/passport.pdf.sf-part5",
//   "/Users/sushantsahu/Github/learning-p2p/file-spliter-merger/passport.pdf.sf-part6",
// ];

// splitFile.mergeFiles(filenames, __dirname +'/marged-passport.pdf')
//   .then(() => {
//     console.log('Done!');
//   })
//   .catch((err) => {
//     console.log('Error: ', err);
//   });

function getFileSize(name) {
    const stats = fs.statSync(name);
    const fileSizeInBytes = stats.size;
    const fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
    return { fileSizeInBytes, fileSizeInMegabytes };
}


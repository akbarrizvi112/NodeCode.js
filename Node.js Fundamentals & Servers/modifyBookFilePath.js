const path = require('path');

// 1. Construct the original file path
const baseDir = 'books';
const genreDir = 'fiction';
const originalFile = 'The_Great_Novel.pdf';

const relativePath = path.join(baseDir, genreDir, originalFile);

// 2. Convert to absolute path
const originalAbsolutePath = path.resolve(relativePath);

// 3. Change the file extension from .pdf to .epub
const fileNameWithoutExt = path.basename(originalAbsolutePath, '.pdf');
const newFileName = fileNameWithoutExt + '.epub';

// 4. Construct the new absolute path
const originalDir = path.dirname(originalAbsolutePath);
const newAbsolutePath = path.join(originalDir, newFileName);

// 5. Print the results
console.log('Original Absolute Path:', originalAbsolutePath);
console.log('New Absolute Path:', newAbsolutePath);
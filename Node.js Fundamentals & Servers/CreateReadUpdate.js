// File Organizer Script

const fs = require('fs');
const path = require('path');

// Hardcoded file name
const initialFileName = 'example.txt';
const organizedFileName = 'organized_file.txt';

const initialFilePath = path.resolve(__dirname, initialFileName);
const organizedFilePath = path.resolve(__dirname, organizedFileName);

try {
  // Step 1: Check if the file exists
  if (!fs.existsSync(initialFilePath)) {
    // Create the file if it doesn't exist
    fs.writeFileSync(initialFilePath, '');
    console.log(`Created new file: ${initialFileName}`);
  } else {
    console.log(`File already exists: ${initialFileName}`);
  }

  // Step 2: Append text to the file
  fs.appendFileSync(initialFilePath, 'File organized!\n');
  console.log(`Appended "File organized!" to ${initialFileName}`);

  // Step 3: Rename the file
  fs.renameSync(initialFilePath, organizedFilePath);
  console.log(`File renamed to ${organizedFileName}`);
  
} catch (error) {
  console.error('An error occurred:', error);
}
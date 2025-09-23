const fs = require('fs');
const path = require('path');

const inputFile = path.resolve(__dirname, 'fruits.txt');
const outputFile = path.resolve(__dirname, 'filtered_fruits.txt');

console.log('Reading fruits.txt...');

// complete the code to read the inputFile
fs.readFile(inputFile,'utf8',(err,data)=>{
  if (err) {
    return console.error('Error reading file:', err);
  }

  // Step 1: Split into lines
  const fruits = data.split('\n').map(fruit => fruit.trim());

  // Step 2: Filter fruits that don't start with 'b' or 'B'
  const filtered = fruits.filter(fruit => !fruit.toLowerCase().startsWith('b'));

  // Step 3: Join back into string
  const result = filtered.join('\n');

  console.log('Writing filtered fruits to filtered_fruits.txt...');

  fs.writeFile(outputFile, result, 'utf8', (err) => {
    if (err) {
      return console.error('Error writing file:', err);
    }

    console.log('Filtered fruits written successfully!');
  });
});

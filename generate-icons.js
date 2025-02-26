import fs from 'fs';
import path from 'path';

// Resolve the absolute path to the icons folder
const iconsFolder = path.join(process.cwd(), 'public', 'img', 'icons');

// Log the resolved path for debugging purposes
console.log("Icons Folder Path:", iconsFolder);

const iconFiles = fs.readdirSync(iconsFolder);

const iconObject = iconFiles.reduce((acc, file) => {
  const iconName = path.basename(file, path.extname(file)); // Remove file extension
  acc[iconName] = `./img/icons/${file}`;
  return acc;
}, {});

console.log('Icon Object:', iconObject);

// запустить через node.js в терминале проекта
// node generate-icons.js
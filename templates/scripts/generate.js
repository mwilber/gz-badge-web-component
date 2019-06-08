const fs = require('fs');

const projectName = 'my-component';
const templatePath = `${__dirname}/../component`;
const componentsPath = `${__dirname}/../../src/components`

fs.mkdirSync(`${componentsPath}/${projectName}`);

createDirectoryContents(templatePath, componentsPath, projectName);

// Add the import to components.js
fs.appendFile(`${componentsPath}/../components.js`, `import './components/${projectName}/${projectName}.js';\n`, function (err) {
if (err) throw err;
console.log('Saved!');
});


function createDirectoryContents (templatePath, componentsPath, projectName) {
  const filesToCreate = fs.readdirSync(templatePath);

  filesToCreate.forEach(file => {
    const origFilePath = `${templatePath}/${file}`;
    
    // get stats about the current file
    const stats = fs.statSync(origFilePath);

    if (stats.isFile()) {
      const contents = fs.readFileSync(origFilePath, 'utf8').replace(/gz-component/g, projectName);
      
      const writePath = `${componentsPath}/${projectName}/${file.replace('gz-component',projectName)}`;
      fs.writeFileSync(writePath, contents, 'utf8');
    }
  });
}
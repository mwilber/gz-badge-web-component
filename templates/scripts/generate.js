const fs = require('fs');

const projectName = 'my-component';
const templatePath = `${__dirname}/../component`;
const componentsPath = `${__dirname}/../../src/components`

fs.mkdirSync(`${componentsPath}/${projectName}`);

createDirectoryContents(templatePath, componentsPath, projectName);


function createDirectoryContents (templatePath, componentsPath, newProjectPath) {
  const filesToCreate = fs.readdirSync(templatePath);

  filesToCreate.forEach(file => {
    const origFilePath = `${templatePath}/${file}`;
    
    // get stats about the current file
    const stats = fs.statSync(origFilePath);

    if (stats.isFile()) {
      const contents = fs.readFileSync(origFilePath, 'utf8');
      
      const writePath = `${componentsPath}/${newProjectPath}/${file}`;
      fs.writeFileSync(writePath, contents, 'utf8');
    }
  });
}
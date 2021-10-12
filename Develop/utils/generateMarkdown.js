//TODO: Create a function that returns a license badge based on which license is passed in
//If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![license badge](https://img.shields.io/badge/license-${license}-brightgreen)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## license 
  
This project is licensed under ${license}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge}

 `;
}



const installation = () => {
  const install = data.install;
  const newInstall = install.split(' ');
  [ one, two, three, four, five ] = newInstall;
  if (one === undefined) {
    one = '';
  } 
  if (two === undefined) {
    two = '';
  } 
  if (three === undefined) {
    three = '';
  } 
  if (four === undefined) {
    four = '';
  } 
  if (five === undefined) {
    five = '';
  }
}

const contributing = () => {
  const contribute = data.contribute;
  const newContribute = contribute.split(' ');
  [ one, two, three, four, five ] = newContribute;
  if (one === undefined) {
    one = '';
  } 
  if (two === undefined) {
    two = '';
  } 
  if (three === undefined) {
    three = '';
  } 
  if (four === undefined) {
    four = '';
  } 
  if (five === undefined) {
    five = '';
  }


installation();
contributing();
return `
# ${data.title}

## Description
    ${data.description}

    ## Installation <a id="install"></a>
    ${one}
    ${two}
    ${three}
    ${four}
    ${five}

  ## Usage <a id="usage"></a>
    ${data.usage}

  ## Contributing <a id="contribute"></a>
    ${one}
    ${two}
    ${three}
    ${four}
    ${five}

  ## Tests <a id="tests"></a>
    ${data.tests}

  ## Questions <a id="questions"></a>

  ###  Github: 
  [Github Account](https://github.com/${data.github})

  ###  Email: 
    ${data.email}

  ## Credits <a id="credits"></a>
    ${data.credits}
  
    `; 
  
  }

module.exports = generateMarkdown;

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
 
  * [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributions](#Contributing)
* [Test](#Test)
* [Questions](#Questions)

  ## Description
${data.description}
## Installation
${data.Installation}
## Usage
${data.usage}
## License
${data.license}
## Contributing
${data.contributing}
## Test
${data.test}
## Questions
${data.questions}
`;
}

module.exports = generateMarkdown;

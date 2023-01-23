// TODO: Create a function that returns a license badge based on which license is passed in
//var license;
// If there is no license, return an empty string
function renderLicenseBadge(liscense) {
      if  ( liscense >= 'MIT') {
          var liscenseBadge = 'https://img.shields.io/badge/MIT-Liscense-blue'
      }
      else if  (liscense >= 'Apache') {
        var liscenseBadge = 'https://img.shields.io/badge/Apache--2.0-Liscense-yellowgreen'
      }
      else() => {var liscenseBadge = 'https://img.shields.io/badge/Liscense-GPL.io-green'}
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //console.log(data);
  //var liscense = (data.license);
  //console.log(liscense);
  //renderLicenseBadge();
  return `# ${data.title}
  
  ## _Description >>_
      
  ${data.description}
  
  
  ## _Table of Contents __
  
  -[ ${data.title} ](#top) 
  - [Project Description](#description)
  - [Instalation Instructions](#instalation--_)
  - [Usage](#_-usage-_)
  - [Liscense Information](#liscense------🛡)
  - [Contributing](#contribution----__)
  - [Tests](#tests_)
  - [Further Questions?](#questions-_)
  
  ## Instalation  (._.)>
  
      The following lists all necessary packages, nodules, and cdns required for the project to run effectively.
  
  > - ${data.answer1}
  > - 
  > - 
  > - 
  > - 
  > - 
  > - 
  
  ## /_ Usage _\
  
  ${data.usage3}
  
  ## Liscense  ----> 🛡
  
      The Following Project is liscensed under  ${data.license}  All Rights are Reserved.
      
      This Liscense covers  ${data.title} from any copyright infringements, liabilities, and warrents against the creator. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
      SOFTWARE.
      
      
  ## Contribution ---__>
  
          Here Lies those who contributed to the project:
  - ${data.answer4}
  - 
  - 
  - 
  - 
  - 
  - 
  - 
  - 
  
  If you would like to become a contributor, or would consider contributing to this project in the future. Please contact me at the email address under the 'Question' section of this READme.
  
  ## TESTS_
  
  In order to test the project please follow these instructions...
  
                ${data.testing}
  
  ## Questions  ?_?
  
  For any further inquiries, please contact me at the following email:
  
  ${data.email}
  
  You may also visit my GitHub Profile for more great code!
  
  -+-  [My GitHub Profile](https://github.com/${data.githubN})
 
  
  
  ## ScreenShot
  
  ![Project's Screenshot](${data.screenshot})
  
  
  
  ## Development
  
  Want to contribute? Great!
  
  I take Paypal :-P
  [Buy me a cuppa](https://www.paypal.com/donate/?hosted_button_id=DPQ36F2TGW8QS)
`;
}

module.exports = generateMarkdown;
function fileGenerator(response) {
    var content = `# ${response.title}
##### ${response.logo}[${response.userName}](${response.GitHub}) [Email Me](${response.email}) [Deployed Application](https://www.youtube.com/channel/UCzyohHEJNSqklS1bwxmuVaA)
#### ReadMeGenerator© 2022 All Rights Reserved.  ${response.license} All material must be cited or credited, when using material (free to use).
    
## Table of Contents
* [Repository Description](#Repository-Description)
* [User Story](#User-Story)
* [Acceptance Criteria](#Acceptance-Criteria)
* [Contribution Guidelines](#Contribution-Guidelines)
* [License](#License)
* [Test](#test)
    
# Installation
###### [Back to Table of Contents](#Table-of-Contents)
    ${response.installation}

# Repository Description
###### [Back to Table of Contents](#Table-of-Contents)
    ${response.description}
    
## References
###### [Back to Table of Contents](#Table-of-Contents)
    ${response.ref1}

## Test
###### [Back to Table of Contents](#Table-of-Contents)
    ${response.test}
    
## User Story

### Acceptance Criteria
###### [Back to Table of Contents](#Table-of-Contents)
    1.   I a command-line application that accepts user input.
    2.   I want to be prompted for information about my application repository.
    3.   I want a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contribution Guidelines, Tests Instructions, and Questions.
    4.   I want my project title to display as the title of the README.
    5.   I want a description, installation instructions, usage information, contribution guidelines, and test instructions; and then, this information is added to the sections of the README entitled Description, Installation, Usage, Contribution Guidelines, and Tests Instructions.
    6.   I want to choose a license for my application from a list of options; and then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under.  
    7.   I want to enter my GitHub username; ant then this is added to the section of the README entitled Questions, with a link to my GitHub profile.
    8.   I want to enter my email address; and then this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions.
    9.   I want to click on the links in the Table of Contents; and then, I am taken to the corresponding section of the README.
    
### Contribution Guidelines
###### [Back to Table of Contents](#Table-of-Contents)
    ${response.contribute}
    

## Overview: What We Accomplished!
###### [Back to Table of Contents](#Table-of-Contents)
    ${response.accomplish}
    
    

    
  
## Repositiory End-Goal Criterea
###### [Back to Table of Contents](#Table-of-Contents)
    ${response.endgoal}
    
## License
###### [Back to Table of Contents](#Table-of-Contents)
    ${response.license}
    
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
    return content;
};

module.exports = fileGenerator;
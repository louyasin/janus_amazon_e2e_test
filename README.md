# Janus Amazon Product E2E Testing Suite

## Introduction
This project contains a suite of end-to-end tests for Amazon product search and cart functionalities. The tests are written using Cypress and JavaScript, aiming to ensure the reliability and performance of key user interactions on Amazon's website.

## Technologies Used
- JavaScript
- Cypress
- Node.js

## Setup and Installation
1. Clone the repository:

git clone [repository URL]

2. Navigate to the project directory:

cd janus_amazon-_2e_tests

3. Install dependencies:
npm install
npm install cypress --save-dev

## Running the Tests
To run the tests, execute the following command:

npx cypress open

Choose the spec file to run in the Cypress Test Runner.

## Test Scenarios
### Search Functionality: 
Verifies that users can search for products by name and ASIN, and the expected product is found.
### Add to Cart Operations: 
Checks if products can be added to the cart.
### Stretch Goal: 
Includes tests for handling adding multiple quantities to the cart.

### Tests to add if given more time
verifies "Buy Now" button completes checkout
empty search query returns home page URL
cannot add more than quantity of a product to the cart
cannot add quantity 0 of a product to the cart

### CI/CD Integration with Jenkins
This project is configured for Continuous Integration using Jenkins, automating the running of Cypress end-to-end tests with each code change. Jenkins setup involves:

Creating a Freestyle project in Jenkins.
Configuring source control with the project repository.
Setting up build triggers (e.g., on push to the repository).
Adding build steps to install dependencies (npm install) and run Cypress tests (npx cypress run).
Reviewing test results and build status in Jenkins after each run.
For detailed Jenkins setup, refer to the official Jenkins documentation.

  

## Contributing
To contribute to this project, please fork the repository and create a pull request with your features or fixes.

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.

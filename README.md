[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.porg/licenses/MIT)
# fitness-tracker
  ## Table of Contents
  - [About](#about)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributions](#contributions)
  - [Questions](#questions)
  ## About
This budget tracking web application enables users to input changes to their bank balance and visualize their transaction history.  
  
This assignment showcases comptenency in MVC development patterns, using the Express, Morgan, Mongoose npm packages to facilitate MongoDB database and front-end user experience. This assignment also utilizes Progress-Web-Application standards including online/offline accessibility and an installation feature so the app can be saved to the user's desktop or homescreen.
  
  [View the deployed site here!](https://cv-pwa-budget-tracker.herokuapp.com/)
  
  ![](https://i.imgur.com/FcpeDV5.png)
  
  ## Installation

### Heroku Hosted

To view this app, go to [cv-pwa-budget-tracker.herokuapp.com](https://cv-pwa-budget-tracker.herokuapp.com/).

### Locally Hosted

Clone the repository to your desired directory, then run `npm install` to download the necessary packages.

To initiate the server, run `node server.js`.

Go to [localhost:3000](http://localhost:3000/) to view the application.

  ## Usage

To use this app, first update the homescreen with your current balance. Call this transaction "Current Balance" and in the "Trasaction Amount" section enter the necessary amount. Afterwards, tap the "Add Funds Button".

After doing so, you will now be able visualize how your balance changes by adding and substracting funds whenever you make a purchase or deposit money into your account.

#### Online/Offline Functionality
To see how this app functions when you lose internet connection, in Google Chrome or Firefox, press F12 to view developer tools. Go to the "Network Tab" and set your bandwidth throttling to Offline. Input as many additions or subtractions to your balance as you would like. You will receive a POST error in the console, indicating that these submissions weren't delivered successfully to the database. Setting your bandwidth throttling to Online, and refreshing the page, you will see your submissions have successfully persisted, indicating that the stored values were submitted once your connection was restored.

#### Installation
If you are accessing this appliation from your desktop, look at the top right of the search bar. Tap the plus sign adjacent to the bookmark icon and confirm that you would like to install the application. If successful, the application should open in a new window in it's installed form. Here you can test all functionality of the webapp, now conveniently installed to your desktop. When returning the website, you will be able to return to this installed app by tapping the "open link" icon, allowing you to choose the desktop app you would like to open it with.

  ## Contributions
  As this is a project for the UPenn LPS Bootcamp, contributions will not be accepted. Any interested parties may reach me at clairej.vita@gmail.com.
  ## Questions
  Have a question? You can reach me at:
  - [github.com/github.com/clairevita](https://github.com/github.com/clairevita) 
  - clairej.vita@gmail.com

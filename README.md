<p align="center"><a href="https://github.com/KarimPortfolio/fitness-online-project" target="_blank"><img src="https://firebasestorage.googleapis.com/v0/b/karim-portfolio-bc1e8.appspot.com/o/logo.png?alt=media&token=e2dee5f5-0e40-4894-8a1a-510affb18d26&_gl=1*bhdikf*_ga*MTI3NDU3ODg1LjE2ODk0NTU1ODk.*_ga_CW55HF8NVT*MTY5NzQwNDI0OS4yMS4xLjE2OTc0MDQzNTYuMjIuMC4w" width="400" alt="Moroccan Airways Logo" ></a></p>

# FITNESS ONLINE

## Video Demo: 
 https://www.youtube.com/watch?v=oP2KaF2jI9s&t=4s

## About Fitness Online
FITNESS ONLINE is an online fitness website help users do a home workout without the need to go to the gym by providing
them a lot of professional workout videos by professional coaches, and the website provides them with a lot
of recipes for easy and healthy food, the recipes details page contains the recipe benefits and the ingredients needed
and also how to prepare it. Users can join a workout program by login first to the website then they can choose and join the program they like and they can quit the program if they want from their dashboards.

## Technologies used

I developed this project using only JavaScript in both frontend and backend ( EJS templates with bootstrap 5 in the client side) and (Express.js in the server side) and i used MySQL as a database management system.

## Project details

My Project contains several folders and files:

###### 1. Controllers folder:
This folder contains all my controllers files.

-homeController.js:
This file contains all the functions i used in home page.
like home function that's checks first if a user authenticated to server session and get 3 programs and 3 recipes
from database, and returns render to the home page with a response object that's contains some data i used in the page like the title of the page and auth if it's true or false and programs and recipes i get from database.
search function that's get the search value entered by user from request query and search in the database in both programs table and recipes table for matching results and it returns a render to search page with a response contains the matched results and the title of page and auth.

-programsController.js
This file contains functions i used to  manage programs (get programs - join program - quit program)
programs function get all the programs from database and returns a render to  the programs page with a response object with title of page and auth if true or false and if true i send name and user information too and programs.
program details function get a program from database by the id coming from request params and returns a render to the page program details with a response object contain the title of the page and auth and program which contains the program details from database.
join function associate a user to a program in a new table users_programs so the user can join any program he/she want the function returns a redirect to the program details page with a flash message contains a message in both failed and success situations and checks if the user not authenticated in that case the function returns a redirect to login page with a failed message.
quitProgram function cancel the association between a user and a program by delete the id's of both user and program from users_programs table so the user can left any program he/sh want and the function returns a redirect to the dashboard page with a flash message for  both failed and success
situations.

-recipesController.js
This file contains functions used to manage recipes (get recipes - get recipe by id)
recipes function get all the recipes from database and returns a render to  the recipes page with a response object with title of page and auth if true or false and if true i send name and user information too and recipes from database.
recipe details function get a recipe from database by the id coming from request params and returns a render to the page recipe details with a response object contain the title of the page and auth and recipe which contains the recipe details from database.

-usersController.js
This file contains all the function that's handle the authentication process from the register until get the dashboard page.
filterHtmlTags function i used this function to filter data coming from the form if it contains a html tags so the function returns data filtered from any html tags or malicious chars and takes the input value coming from the request body as a parameter.
register function get all the information entered by user from the client form and filter all this data then 
checks if user provide a empty string value if he does the function redirect him to the signup page with a 
failed message and then checks in the users table if the email he entered is already taken and exists if the email exists the function return a redirect again to the signup page with a failed message and then if the data is appropriate the function hash the password and store the data in the users table then returns a redirect to 
the sign in page.
login function get all the information entered by user from the client form and filter all this data then 
checks if user provide a empty string value if he does the function redirect him to the sign in page with a 
failed message and also checks if the email is exist if doesn't the function returns a redirect to sign in page with a failed message and if it does then it verify if the password hash is correct if doesn't then redirect to the sign in page with failed message if does then create a new session and stores user id in that's session then
returns a redirect to home page.
logout function this function destroy the session used to auth user and redirect to sign in page.
renderRegister this function use to render the sign up page.
renderLogin this function use to render the sign in page.
dashboard function get the user information from auth middleware request and get the programs he joined from users_programs table by his id and returns a render to dashboard page with a response object contains user information and the first letter from the first and last name and the programs he joined.


###### 2.middlewares folder:
this folder contains auth function used to check with each request if user authenticated or not.

authentication.js this file contain one function Auth this function use to check in each request if the user is authenticated so it checks if the session that's contains the user id is still exists or not if it doesn't the function redirect to the sign in page and if it does it gets the user id from session and get his information from users table by the id and returns a next() to continue.

###### 3.node_modules folder:
this folder contains all the libraries and dependencies used in the application.

###### 4.public folder:
This folder contains all the css and js files and the images i used in the application.

-css folder:
this folder contains 1 file and 1 floder
main.css this file contains all the imports to the other css files in styles folder and also the root variables i used.
styles folder contains all my css files i used to style the application pages:
__search.css this file contains all the styles i used in search page.
__register.css this file contains all the styles i used in sign up page.
__recipes.css this file contains all the styles i used in recipes page and contains a import for a css file from recipesDetails folder this folder contains __recipesDetails that's also contain the styles for the recipe details page.
__programs.css this file contain imports from both the programs folder and programsDetails folder in the programs folder i have 2 files __hero-section.css that's contains all styles i used in the hero section part of the programs page and __programs.css which contains styles for the rest of the programs page sections and programsDetails folder contain also 2 files __hero-section.css that's contains all styles i used in the hero section part of the program details page and __program-coach-info.css contains styles for the rest of the programs page sections too.
__notfound.css this file contain styles i used in the not found page.
__nav.css this file contains all the styles i used in the navbar used in most of pages and also contains a import to css files from navMobile folder that contains __nav.css file this one has styles used in navbar in the mobile version because i used 2 nav versions for desktop and mobile.
__login.css this file contain all the styles i used in the sign in page.
__home.css contains imported css files from home folder that's contains 4 files __herosection.css contain styles for the hero section part of home page __home-programs.css contains styles for programs section the part when displays 3 programs in home page __home-recipes.css contains styles for recipes section the part when displays 3 recipes in home page __service.css contains styles for service section part in home page.
__footer this file contain all the styles used in the footer part in most of pages.
__dashboard contains all the styles used in the dashboard page.

-images folder:
contains logo img and favicon img and 7 folders that's contains images depending on the sections used in.
coaches: contains the coaches images.
home: contains the images used in the home page.
login: contains the images used in sign in page.
programs: contains the programs images.
recipes: contains the recipes images.
register: contains the images used in the signup page.
search: contains the images used in the search image.

-js folder:
contains javascript files used in the application in the client side 1 files and 1 folder.
main.js file contains imports of the js files used in the application and a script that's change the navbar display in the sign in and sign up pages.
scripts folder contains all my js files i used in the client side:
__authPages.js contains scripts for both sign in and sign up pages to hide the failed messages when the user focus on the input fields.
__dashboard.js contains scripts for dashboard page to hide both success and failed messages after displaying by 6s.
__myFramework.js contains scripts that's helped me getEle(selector) function to select elements from dom using querySelector without call it every time and also  getAllEle(selector) to select elements has the same class from dom using querySelectorAll without call it every time.
__navbar.js contains scripts to handle search bar in the navbar to show/hide according to user click event and
to handle mobile navbar open/close according to user click event.

###### 5.routes folder:
Contains 4 files that's have all the routes used in my application.

authRoutes.js this files contains all the routes that's call to a controller and middleware functions to handle authentication routes for sign in and sign up and logout and dashboard.
homeroutes.js contains home page route and search page route.
notFoundRoutes.js contains not found page route.
programsRoutes.js contains routes to handle programs management (get programs and get program details and join program and quit a program).
recipesRoutes.js contains recipes and recipe details pages routes.


###### 6.views folder:
Contains 4 folders that's have files for ejs templates.

All my views file use the same extension .ejs this is a templating language that lets you generate HTML with plain JavaScript.

-footer folder: Contain 1 file.
footer.ejs this file contains the footer of the most pages in application that's included in the layout.ejs file inside layouts folder.

-layouts folder: Contain 1 file.
layout.ejs this file contains the layout of template most of pages extended from this layout.

-navbar folder: Contain 3 files.
navbar.ejs this file contains the navbar template used in most pages of the application and included in the layout.ejs file inside layouts folder.
navbarMobile.ejs this file contains the mobile version navbar template and included in the navbar.ejs file.
searchBar.ejs this file contains the search bar used in the navbar and included in the navbar.ejs file.

-pages folder: Contains 8 files and 3 folders.
auth folder contains 2 files  and 3 folders failedMsgs this folder contains 1 file failedMsgs.js this file has a template to display the failed messages sent from the server side.
login folder contains 1 file form.ejs this file has the form used in the sign in page and included in login.ejs file.
register folder contains 1 file form.ejs this file has the form used in the signup page and included in register.ejs file.
login.ejs this file contains the template used in sign in page and extends from layout.ejs.
register.ejs this file contains the template used in signup page and extends from layout.ejs.
dashboard folder contains 1 file userPrograms.ejs which has the template of the second section in dashboard page when the user programs displayed and included in dashboard.ejs file.
homeComp folder contains 2 files program.ejs which has the template of the second part in the home page the programs section part and included in home.ejs file and recipes.ejs which has the template of the 3 part in the home page the recipes section part and included in home.ejs file.
dashboard.ejs file contains template for dashboard page this is the first page which doesn't extended from layout.ejs.
home.ejs file contains template which contains 4 sections the hero section and programs section and recipes section and the last section services all used in home page and extends from layout.ejs file inside layouts folder.
notFound.ejs file contains template for not found page this is the first page which doesn't extended from layout.ejs inside layouts folder.
programDetails.ejs this file contains template which also contains 4 sections hero section and program details section and coach information section and join section all used in the program details page and extended from layout.ejs file inside layouts folder.
programs.ejs this file contains template which has 3 sections hero section and programs section and search not found section if the program is not exist all used in the programs page this file extended from layout.ejs file inside layouts folder.
recipeDetails.ejs this file contains template which has 2 sections hero section and recipe details section all used in the recipe details page this file extended from layout.ejs file inside layouts folder.
recipes.ejs this file contains template which has 3 sections hero section and recipes section and search not found section if the recipe is not exist all used in the recipes page this file extended from layout.ejs file inside layouts folder.
search.ejs this file contains the template used in search page and has 3 sections hero section and search results section and search not found section if no program or recipe matched all used in search page this file extended from layout.ejs file inside layouts folder.

###### .env file:
This file contains some configuration for the application as the server port and session secret and database connection to MySQL servers.

###### DB_gym_app.sql file:
This file contains my MySQL database used to handle data inside my application.

###### index.js file:
This file serves as the heart of my application because it's the server that's run my application, housing various configurations such as database connections, session settings, EJS template configurations, and handling all of my application routes and server configuration .

###### package.json file:
This file contains information about my application and dependencies i used.

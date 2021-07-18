# crud_app
 A simple employee management web app with basic CRUD operations.
 Requirements and Setup:
 ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*NodeJS and MongoDB are the fundamental requirements of this project. So, if you have not then download and install these into your PCs. It is easier to manage database with MongoDB Compass which have gui, so may want to get that too.

*Start a new project with npm init.

*We will be using express, express-handlebars, mongoose and body-parser so install these as dependencies (npm i –s express express-handlebars mongoose body-parser). Also. install nodemon as dev-dependencies (npm i –save-dev nodemon).

*Start mongodb by commands.
cd C:\Program Files\MongoDB\Server\4.2\bin
mongod.exe --dbpath C:\Users\DELL\mongo-data

Then, open mongodb or mongodb compass to create database EmployeeDB and collection employees inside it.
*to see the crud application type --> localhost:3000 in your web browser

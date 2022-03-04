# App decisions: Node.js Personal Finance Calculator Web Application
## Authour
1. Tumelo
## Context

## User signup
1. When a user signs up in this app they get stored in an sqlite database.
2. The passwords are not protected in this iteration.

## User Login
1. It became difficult to compare text in the database seems like nodejs sqliete3 doesnt support this feature in its SELECT statements.
2. A user who is registered is stored in an array in the database module authentication is done using === operator.
3. A user who is online for a session is tagged with an online boolean in the routes further iterations could utalize this 
to make sure a user is always logged in to use the the app.
## Discussion 
  A module file is presented in this app that has all the formulas for the calculatins.


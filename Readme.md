# Cricketer App
## Author: Ashish Kar
### Version 1.0.0


----

## 1. Pre-requisites
1. Install Node.js. I have used Node version 14.20.0 so using same will ensure no errors/conflicts happen in npm dependencies.
2. Install Git
3. Clone the repository by using command: 
For HTTPS: git clone https://github.com/ashacekar/front-end-assignment-cricketers-app.git
For SSH: git clone git@github.com:ashacekar/front-end-assignment-cricketers-app.git
4. Navigate to the project directory using a code editor (I recommend vs code)

## 2. How to Run the App
1. Run yarn install to download all dependencies
2. Run yarn build to build the project
3. Run yarn start to run the project
4. Navigate to '/cricketers' from the homepage to view the app. (Eg: http://localhost:3000/cricketers )

You can refer demo.mp4 to view tutorial from here: https://drive.google.com/file/d/1ZPpB_7eJl9W1BRJ9RfTq_dILevw-bvGg/view?usp=sharing

## 3. How to Test the App
1. Run yarn test:coverage:dev to run the unit tests

## 4. Implementaion Images
Cricketers Page (http://localhost:3000/cricketers)

    Displays the list of cricketers.
    The list has default pagination with page size of 10 but supports pagination with values 5, 25 and 100.
    Each item in the list displays below details:
        Name
        Type
        Points
        Rank
        Age
    The list support sorting by:
        Name
        Rank
        Age
    The list supports filter by:
        Type
    The list supports search by Name
    Screen retains the filter & search criteria on screen refresh
    Cricketer Name has a link which opens the Cricketer Details screen

![alt text](/public/Cricketer-Info-Page.png)

Cricketer Details Page (http://localhost:3000/cricketer-details)


    The details screen displays the below details of the cricketer selected:
        Name
        Description
        Type
        Points
        Rank
        Date of Birth
        Age
    The details screen has a Back to Cricketers button/link
    Similar players matching the Type of the player selected are displayed as well. 
    Like, if a Batsman details are displayed then other batsman details are diaplayed.
    Maximum 5 similar players are displayed
    Similar players details are as follows:
        Name
        Points
        Rank
    The similar player's name can be clicked to that cricketer's detailed information as well


![alt text](/public/Cricketers-Data%20List-View.png)
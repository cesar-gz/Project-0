
## Instructions on how to get working on website.

### How we used Scrum

Our Google Sheets holds our Product Backlog, Sprint Backlog, Retrospectives, and more rituals and artifacts from Scrum

https://docs.google.com/spreadsheets/d/12aRHzNKM2NZVCQUs7e6qWHEX-ZE_hBW6Qd6rnPpr9ag/edit#gid=702652394
### How to get the most recent code everytime before you begin your task:
type "git pull" in the terminal, when you are in the C:\ ... \RestaurantRoulette directory

### How to get the website to run:

1) In one terminal, go to C:\ ... \RestaurantRoulette\backend directory, type "nodemon server"
2) In another terminal, go to C:\ ... \RestaurantRoulette\frontend directory, type "npm start"

Our website will then pop up in a new tab

you can login to our MongoDB page to look at our backend

### Before you start working on your task:

- type "git pull" to get most recent code

- type "git branch task01" into terminal, to create a branch called task01 (or call it whatever you want), that is the exact copy of the main branch

- type "git checkout task01" into terminal, this will switch you to the task01 branch

- add/edit/delete whatever code for whatever task your doing

- do git add, git commit, and git push to add the code on the branch

- Product owner or yourself can go on the GitHub website, go to our repository

    - click "Compare & Pull Request"

    - click "Create Pull Request", then, "Merge Pull Request", then "Confirm Merge", then "Delete Branch"

    - This will add the task01 branch code to the master branch so everyone can get the new code
#### Dependencies:
    - CORS
    - DOTENV
    - Bootstrap
    - Axios
    - React Router Dom

#### Inspired by freeCodeCamp's MERN Stack Course
https://www.youtube.com/watch?v=mrHNSanmqQ4&t=6474s

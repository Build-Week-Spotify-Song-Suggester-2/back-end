# Spotify Song Suggester (2)

### Description 

This web application was made to suggest songs based on your previous song preferences. 

### Current Available Endpoints

## Register New User

- Register as a new user with : 
https://spotify-song-suggester-bw.herokuapp.com/api/auth/register

| to register | required |
| ----------- | -------- |
|   username  |    yes   |
|   password  |    yes   |
|    email    |    yes   |
|  first name |    yes   |
|  last name  |    yes   |

## Login as an authenticated user

- Login as a registered user  and become authenticated :
https://spotify-song-suggester-bw.herokuapp.com/api/auth/login

| to login | required |
| -------- | -------- |
| username |   yes    |
| password |   yes    |

- once logged in you will be given a token symbolizing that the user is logged in and authenticated. 

## Get a list of all songs

- view a list of current songs in the database when logged in as an authenticated user:
https://spotify-song-suggester-bw.herokuapp.com/api/songs

## Add songs to the database

- add additional songs to the database when logged in as an authenticated user:
https://spotify-song-suggester-bw.herokuapp.com/api/songs

## Update songs on the database

- you can update the songs in the database when logged in as an authenticated user:
https://spotify-song-suggester-bw.herokuapp.com/api/songs/:id

## Delete songs on the database

- You can delete songs on the dtatbase when logged in as an authenticated user:
https://spotify-song-suggester-bw.herokuapp.com/api/songs/:id








what i want to do:

[ ] - add functionality to songs route to add songs to database 
[ ] - change route end point for user's songs to /api/users/songs
[ ] - provide album art for songs database
[x] - supply documentation
[ ] - finish testing on end points
[x] - deploy backend

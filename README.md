# Full stack app

## Server

### Models - Done

- Song model - link, name, image(openAI), author
- comments
- user

### Endpoints - Done

- GET /songs - fetch all songs
- GET/songs/:id
- POST/songs
- Patch /songs/:id
- DELETE /songs/:id

## Client

### Pages

- HomePage - Soumia
- AccountPage - Soumia
- SongAllList
- SongSinglePage
- SongCreate
- SongEdit

### Components

- SongContent => single song - done
- SongList => multiple songs - done
- SongForm => create or update - done
- SongButton => delete
- Navbar - Julia

### Services -done

- songLoadSingle => GET/songs/:id
- songLoadAll => GET /songs
- songAdd => POST/songs
- songEdit => Patch /songs/:id
- songDelete => DELETE /songs/:id


## Project Commands

To work with this project, you can use the following commands:

- `git clone [repository URL]` - Clone the project repository to your local machine.
- `cd full-stack-app` - Navigate to the project directory.
- `npm install` - Install the necessary dependencies.
- `npm start` - Start the development server.

## Environment Variables

This project may require environment variables for configuration. Please check the server and client code for specific variables that need to be defined, and create a `.env` file with these variables if needed. Remember to keep sensitive information secure.

## General Instructions

This full-stack app is designed to manage a collection of songs with features for creating, editing, and deleting songs. The project is divided into server and client components. The server handles data storage and retrieval, while the client provides user interfaces and interactions.

Feel free to expand upon the existing features, add new functionalities, and customize the project as needed. Collaborate with your team members to ensure the smooth development of the app.

Enjoy working on your full-stack app project!

# Full stack app

## Server

### Models

- Song model - link, name, image(openAI), author
- comments
- user

### Endpoints

- GET /songs - fetch all songs
- GET/songs/:id
- POST/songs
- Patch /songs/:id
- DELETE /songs/:id

## Client

### Pages

- HomePage
- SongAllList
- SongSinglePage
- SongCreate
- SongEdit

### Components

- SongContent => single song
- SongList => multiple songs
- SongForm => create or update
- SongButton => delete
- Navbar

### Services

- songLoadSingle => GET/songs/:id
- songLoadAll => GET /songs
- songAdd => POST/songs
- songEdit => Patch /songs/:id
- songDelete => DELETE /songs/:id

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

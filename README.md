# Movie Watchlist
Simple movie watch-list REST API using Node.js + MySQL. Movie data imported from TMDB database.

## Installation

First, install npm packages in project directory:
```bash
npm install
```

Then, add your database url to .env file:
```bash
DATABASE_URL = "mysql://[user]:[password]@[url]:[port]/[database name]"
```

## Npm Commands

### init database 
```bash
npm run setup:db
```
### run locally 
```bash
npm run start:dev
```

## Postman Documentation
https://documenter.getpostman.com/view/15328143/2s84Dpx3Rr

## Live Demo
https://movie-watchlist-j7xb.onrender.com/api/v1/

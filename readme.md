# Cache API

This is a REST API that allows you to interact with a cache. The API is built using Node.js and MongoDB.

## Getting Started

To get started, clone this repository to your local machine and install the dependencies using npm:

```
npm install
```

In order to use this project, you must create a .env file in the root directory of the project and add the following variables:

MAX_CACHE_SIZE: the maximum number of entries allowed in the cache.

CACHE_TTL: the Time To Live (TTL) for each cached item, in milliseconds.

## .env example :

```
dbUrl='mongodb+srv://<username>:<password>@<cluster-address>/<database-name>?retryWrites=true&w=majority'
MAX_CACHE_SIZE=20
CACHE_TTL=60
```

Be sure to replace the placeholders with your own values. The dbUrl variable should include your MongoDB username, password, cluster address, and database name.

## Endpoints

```
GET /cache?key= - retrieves the cached data for the specified key

POST /cache?key= - stores or updates the data in the cache for the specified key

DELETE /cache?key= - deletes the cache for the specified key

DELETE /cache - deletes all caches

GET /cache - retrieves all stored keys in the cache
```

## Installation

Install my-project with npm

```bash
  npm install
  npm run start
```

## Tech Stack

**Server:** Node, Express, mongodb,

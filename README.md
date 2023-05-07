# Docker Lab

## Database

Execute: 

```bash
# Build the Image
$ docker build -t database -f db/Dockerfile .

# Run the Container
$ docker run -d -v $(pwd)/db/data:/var/lib/mysql --rm --name database-container database

# Execute the SQL Script
$ docker exec -i database-container mysql -uroot -pYOUR_ROOT_DB_PASSWORD < db/script.sql

# View the database
$ docker exec -it database-container /bin/bash
```

## API

Execute: 

```bash
# Build the Image
$ docker build -t api -f api/Dockerfile .

# Run the Container
$ docker run -d -v $(pwd)/api:/var/www/api -p 5000:5000 --link database-container --rm --name api-container api
```

## Web Page (Built with Next.js 😂😂😂)

Execute: 

```bash
# Build the Image
$ docker build -t web -f web/Dockerfile .

# Run the Container
$ docker run -d -v $(pwd)/web:/var/www/html -p 8888:80 --link api-container --rm --name web-container web
```
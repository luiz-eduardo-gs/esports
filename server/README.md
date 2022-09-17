# Server

## Dev

* Run `npm install`
* Run `cp .env.example .env`
* Run `npx prisma generate`
* Run `npm run dev`

## Prod

* Run `npm install`
* Transpile JS with `npm run build`
* Run `node build/server.js`
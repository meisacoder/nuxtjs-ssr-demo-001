## Setup Dev

Make sure to install the dependencies:

# npm
npm install

npx nuxi build

npm run dev

Starts the development server on `http://localhost:3000`

## Production

Build the application for production:

# npm
npm run build

## mongoDB

Create mongoDb:

# Create DB
docker-compose up

db.createUser({user: 'bwDbAdmin', pwd:"password", roles: [{role: "readWrite", db: "blackwell"}]})
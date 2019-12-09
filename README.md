# Deeproots
OSS Website for Deeproots Art & Culture

[Deployed site](https://deeprootsswe.herokuapp.com/Home)

## Features
#### Landing Page
![Landing Page](https://github.com/Drake-No-3D-Drake-Yes-2D/Deeproots/blob/develop/client/src/common/screenshots/Home.png "Landing page")
#### Workshops
![Workshops](https://github.com/Drake-No-3D-Drake-Yes-2D/Deeproots/blob/develop/client/src/common/screenshots/Workshops.png "Workshops")
#### Gallery
![Gallery](https://github.com/Drake-No-3D-Drake-Yes-2D/Deeproots/blob/develop/client/src/common/screenshots/Gallery.png "Gallery")
#### Admin login
![Admin login](https://github.com/Drake-No-3D-Drake-Yes-2D/Deeproots/blob/develop/client/src/common/screenshots/Admin.png "Admin login")
#### Edit panel
![Edit panel](https://github.com/Drake-No-3D-Drake-Yes-2D/Deeproots/blob/develop/client/src/common/screenshots/Edit.png "Edit panel")

## Usage
### Local
`npm start dev`: run both the client and server together

`npm start client`: run client

`npm start server` run server
### Heroku
Pushing to develop on GitHub automatically starts a Heroku build for the test site. Pushing to master starts a build for the production site. Builds may also be started manually with Heroku's UI.

Heroku needs two variables configured for it to run properly:
- REACT_APP_BASE_URL - the url the website is shown on
- DB_URI - the connection string for Mongo Atlas

If the website url changes (for example, by switching to a custom domain name) then the BASE_URL variable must be updated in Herkou.
## Updating
#### Database
Add your MongoDB URI to `config.js` to test different data.

#### Server connections


## Credits
[ReactJS](https://reactjs.org/)

[ExpressJS](https://expressjs.com/)

[MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

[Axios](https://www.axios.com/)

[JavaScript-MD5](https://github.com/blueimp/JavaScript-MD5)

[Square Connect](https://github.com/square/connect-nodejs-sdk)

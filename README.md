# ile-aux-navets-api

Get ready to sale those turnips, yes yes! 📈💥

## <img src="https://mrkelisi.fr/ile-aux-navets/assets/apps-icons/turnip.png" width="24"/> What's this for?
This API was made in NodeJS for my Angular app **L'île aux navets** to manage authentication, db communication and to generate a svg image of a villager from the game *Animal Crossing: New Horizons* from a predefined list of parameters.  
Check it out at [mrkelisi.fr/ile-aux-navets](http://mrkelisi.fr/ile-aux-navets/#/)!

## <img src="https://mrkelisi.fr/ile-aux-navets/assets/apps-icons/turnip.png" width="24"/> Installation
Once you've cloned the repository, use `npm install` to install all project's dependencies. Then create a `.env` file in the project's root directory, and write the following environment variables inside: 

Variable   | Comment
---------- | ---------
`DB_HOST`  | The database's host address (generally _localhost_)
`DB_NAME`  | The database's name (_ile-aux-navets_ works just fine)
`DB_USER`  | The API user account to access the database
`DB_PASS`  | The API password
`PORT`     | The API listening port
`SECRET`   | A secret passphrase for password encryption

## <img src="https://mrkelisi.fr/ile-aux-navets/assets/apps-icons/turnip.png" width="24"/> Run
You can start the API by running the command `npm start` from the project's root directory.

## <img src="https://mrkelisi.fr/ile-aux-navets/assets/apps-icons/turnip.png" width="24"/> How to use
The API is accessible from [mrkelisi.fr/ile-aux-navets/api/](http://mrkelisi.fr/ile-aux-navets/api/). Every endpoints are listed below : some endpoints are exposed publicly, the rest of them need an access token given to you once you're logged in.

Endpoint         | HTTP     | Public | Params             | Payload                              | Response
---------------- | -------- | :----: | ------------------ | ------------------------------------ | -------------------
`/`              | `GET`    | ✔     |                    |                                      | `{message}`
`/auth/login`    | `POST`   | ✔     |                    | `{username, password}`               | `{username, token}`
`/auth/register` | `POST`   | ✔     |                    | `{username, password, display_name}` | `{username, token}`
`/faces`         | `GET`    | ✖     | `username`         |                                      | Face
`/faces`         | `PUT`    | ✖     | `username`         | Face                                 | Face
`/photo`         | `GET`    | ✔     | `username`         |                                      | *SVG file*
`/photo`         | `GET`    | ✔     | 😆*                |                                      | *SVG file*
`/users`         | `GET`    | ✖     |                    |                                      | User[]
`/users`         | `GET`    | ✖     | `username`         |                                      | User
`/users`         | `PUT`    | ✖     | `username`         | User                                 | User
`/users`         | `DELETE` | ✖     | `username`         |                                      | 
`/weeks`         | `GET`    | ✖     | `username`         |                                      | Week[]
`/weeks`         | `GET`    | ✖     | `username`, `date` |                                      | Week

*😆 : `skin_color`, `hair`, `hair_color`, `eyes`, `eyes_color`, `nose`, `mouth`

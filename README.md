# ile-aux-navets-api

Get ready to sale those turnips, yes yes! 📈💥

## <img src="https://mrkelisi.fr/ile-aux-navets/assets/apps-icons/turnip.png" width="24"/> What's this for?
This API was made in NodeJS for my Angular app **L'île aux navets** to manage authentication, db communication and to generate a svg image of a villager from the game *Animal Crossing: New Horizons* from a predefined list of parameters.  
Check it out at [mrkelisi.fr/ile-aux-navets](http://mrkelisi.fr/ile-aux-navets/#/)!

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

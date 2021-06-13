## Title:

### Jacopo Rodighiero - Adidas Challenge Public Service  Api

-----------------------------------------

## Technologies Used:

#### Nodejs version: 14.16.0

#### Framework: Nestjs

#### Documentation: @nestjs/Swagger

--------------------------------------------------------------------------------------------

## Api Overview:

The API needs a token to authenticate user and the secret `SECRETKEY` in stored in the `.env` and `.env.example` file for challenge purposes, this will be used from the middleware for each endpoint, else in a real life application you would need to sign in and jwt creating 365 days cookie for your session, again this is for challenge's purpose and to show the approch. The class validator are implemented in the DTO file.


## Installations:

You would need NVM and Nodejs installed in your machine.

## To run the app:

`$ npm run start:dev || $ npm run start`

----------------------------------------------------------------------------------------------------

## Docker Instructions:

To build docker image: `$ docker build -t yourusername/yourtitle`

To run your image : `$ docker run -p 5000:5001  yourImageId `

To compose docker: `$ docker-compose up` and once finished `$ docker-compose down`

---------------------------------------------------------

## Documentation:

The swagger documentation and endpoints can be found at app running `http:localhost:5000/api` 




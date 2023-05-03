# Express Token Classes API

An Express server that provides an API for token classes data. It uses Postgres database to store token classes information.

## Getting Started

To get started, first clone the repository:

```
git clone https://github.com/ace1122sp/token-classes-api.git
```

Then, install the dependencies:

```
npm install
```

Finally, start the server:

```
npm start
```

The server will then be available at http://localhost:3002.

## API

### GET /api/token-classes

This endpoint is used for fetching token classes data. It returns a JSON object containing all available token on success.

Example response:

```
{
    "data": [
        {
            "id": 1,
            "token_class_name": "Bronze",
            "img_url": "https://misc-storage-v1.s3.eu-central-1.amazonaws.com/bronze.png",
            "percentage_of_ownership": "0.002100",
            "number_of_the_collection_remaining": 809,
            "price_usd": "99.00",
            "token_class_perks": [
                "Access to FANtium Discord collectors channel"
            ],
            "status": "enabled"
        },
        {
            "id": 2,
            "token_class_name": "Silver",
            "img_url": "https://misc-storage-v1.s3.eu-central-1.amazonaws.com/silver.png",
            "percentage_of_ownership": "0.010800",
            "number_of_the_collection_remaining": 100,
            "price_usd": "499.00",
            "token_class_perks": [
                "Early access (allowlist) on the next Thiem NFT drop",
                "Exclusive workout video"
            ],
            "status": "enabled"
        },
        {
            "id": 3,
            "token_class_name": "Gold",
            "img_url": "https://misc-storage-v1.s3.eu-central-1.amazonaws.com/gold.png",
            "percentage_of_ownership": "0.217100",
            "number_of_the_collection_remaining": 10,
            "price_usd": "9999.00",
            "token_class_perks": [
                "Meet and greet at one tournament on the ATP tour",
                "Access to a private chat with the"
            ],
            "status": "enabled"
        }
    ]
}
```

## Database

For using the service, you will need a running Postgres database. By default, the server will look for a database named `token_classes` on `localhost:5432`. You can change this by setting the `DATABASE_URL` environment variable. The database should have the schema defined in `root/src/models/token-class.js`.

## Environment Variables

This server uses the following environment variables:

DATABASE_URL: The URL of the Postgres database that will be used to store token classes information. For local development, this could be set to `postgres://user:password@localhost:5432/token_classes`.
CLIENT_URL: The URL of the client application that will be using this server. This is used to configure CORS settings. By default, this is set to `http://localhost:3000`.

## Improvements & Future Work

1 - Add unit tests for the server.

- unit tests for the endpoints and the database queries.
- spinning up a test database for running the tests.

2 - Implement Distributed caching for caching the token classes data by setuping up Redis server.

- this will improve the performance of the server significantly as it will not need to query the database for every request.
- it will also reduce the load on the database
- this would not decrease the accuracy of the data as the data is not expected to change frequently.

3 - Refactor midlewares and error handling.

- move the error handling logic to a separate file.
- move the middlewares to directory.
- create a router which would hold all the routes instead of having them in the server file.

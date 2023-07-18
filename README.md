<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.


## Installation

To install the Air Quality API, follow these steps:

1 - Clone the repository:
```bash
git clone https://github.com/hargarpay/air-quality-api.git
```

2 - Install the dependencies:
```bash
cd air-quality-api
yarn install # if you don't have yarn use `npm install`
```

3 - Create a .env file based on the .env.example file and set the appropriate environment variables:
```bash
MONGO_HOST=mongodb://localhost:27017/iqAir # use `mongodb://db:27017/iqAir` if docker compose is used
IQAIR_API_KEY=your_iqair_api_key_here
IQAIR_BASEURL=https://api.airvisual.com
PARIS_ZONE_LONGITUDE=2.352222 # This can be optional if the value is 2.352222 
PARIS_ZONE_LATITUDE=48.856613 # This can be optional if the value is 48.856613
```

you can create your IQAir credentials from here [IQAir](https://www.iqair.com/dashboard/api)

4 - Start the server:
```bash
yarn start:dev # if you don't have yarn use `npm run start:dev`
```

## Docker Start Up

Alternatively, you can use Docker Compose to run the Air Quality API. Simply run:
```bash
docker-compose up
```


You can use the below to connect to compass mongodb client to check the data
```bash
COMPASS_CONNECTION_FOR_DOCKER=mongodb://localhost:27019/iqAir 
```



## Usage

This Api supports OpenAPI/Swagger documentation, you can visit the baseUrl and it will show up 
Swagger UI Documentation
```bash
http://localhost:3000/
```


## Test

```bash
# unit tests
$ yarn test # if you don't have yarn use `npm run test`

```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

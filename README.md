# AngularModule
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.6.

# Node Version:
    Required node version: v18.18.2

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Local installation steps:
Run `npm i` install dependency
Run `npm start or ng serve` run angular app on local system on default port `http://localhost:4200/`

## Created deploy yml file
.github/workflows/deploy.yml file contain git action pipline config steps for automation

## Running with docker server
# Note: befour running these cmds you should have to start docker app or docker service on local machine.Then running these below cmd in project Directory
1) docker build -t angular-docker .
2) docker run -p 4201:4200 angular-docker

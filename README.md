# XOLa - JS App Skeleton

## Installation

Clone and run `npm install`. 
 
## Building project

 ```
 npm run build -- --dev|prod|staging|sandbox
 ```

This is will first run `semantic-ui` tasks and then webpack builds the project for mentioned environment.
If no environment option is provided the build run for `NODE_ENV` environment. If `NODE_ENV` is not set, project will build for development environment.

## Development

To start the server run `npm start` and visit [localhost:8081](http://localhost:8081). Any changes made in source files will be auto loaded on ui with page refresh via `webpack-dev-server`.


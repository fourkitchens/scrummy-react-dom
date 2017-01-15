## Local Backend Server Setup:

### Note:
* The deployed application connects to ws://scrummy-server.herokuapp.com.

### Scrummy Server:
* Copy `config/example.local.yaml` to `config/local.yaml` to connect to the [Scrummy Server](https://github.com/fourkitchens/scrummy-server).
* In the Scrummy Server repo change `config/default.yml` to have a port line that reads `port: 8081`.
* Open two terminal windows and start up both apps with `npm run start` in the projects root directories.
* Go to: http://localhost:8080/webpack-dev-server/
* Play Scrummy.

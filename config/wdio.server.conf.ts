import { config } from '../config/wdio.conf';

//
// ======
// LambdaTest
// ======
//

config.services = (config.services ? config.services : []).concat([
  [
    "lambdatest",
    {
      tunnel: false,
      lambdatestOpts: {
        logFile: "tunnel.log",
      },
    },
  ],
]);
config.hostname= "mobile-hub.lambdatest.com";
config.port = 80;
config.path = "/wd/hub";
config.user = process.env.LT_USERNAME;
config.key = process.env.LT_ACCESS_KEY;

export default config;

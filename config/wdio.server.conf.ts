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

export default config;

<a href="https://www.npmjs.com/package/serverless-wrap"><img src="https://img.shields.io/npm/v/serverless-wrap.svg"></a>
<a href="https://www.npmjs.com/package/serverless-wrap"><img src="https://img.shields.io/npm/dt/serverless-wrap.svg"></a>

# serverless-wrap
A tiny wrap around serverless, which executes the serverless command.

An excellent candidate to deploy serverless projects in a uniform fashion no matter where it's used and easily integrates with node task runners (e.g.: npm and gulp)
## Install

```bash
$ npm install --save serverless-wrap
```

## Usage

### imports
```js
// default import
import serverless from 'serverless-wrap'

// named import
import { serverless } from 'serverless-wrap';

// multiple named imports
import { deploy, execute } from 'serverless-wrap';
```
### deploy
```js
const args = [
    '--region', 'eu-west-1',
    '--stage', 'development',
    '--verbose'
];

await serverless.deploy(args);
```

### execute
Used to execute any serverless command.
```js
const args = [
    '--region', 'eu-west-1',
    '--stage', 'development',
    '--verbose'
];

await serverless.execute('deploy', args);
```
### environment variables
dotenv is supported; any environment variables are passed on to the serverless command.
```js
const dotenv = require('dotenv');
/*
 * loads configuration from the .env file, e.g.:
 *  process.env.AWS_ACCESS_KEY_ID
 *  process.env.AWS_SECRET_ACCESS_KEY
 *  process.env.AWS_REGION
 */
dotenv.config();

// makes use of the process.env variables
await serverless.deploy(args);
```

import { expect } from 'chai';

import sls from '../src/index';
import { serverless } from '../src/';
import { deploy, execute } from '../src/';

export const exporting = {
    'the default export': {
        'should be defined': () => {
            expect(sls).to.be.ok;
        },
        "should have 'deploy' defined": () => {
            expect(sls.deploy).to.be.ok;
        },
        "should have 'execute' defined": () => {
            expect(sls.execute).to.be.ok;
        }
    },
    'the single named constant export': {
        'should be defined': () => {
            expect(serverless).to.be.ok;
        },
        "should have 'deploy' defined": () => {
            expect(serverless.deploy).to.be.ok;
        },
        "should have 'execute' defined": () => {
            expect(serverless.execute).to.be.ok;
        }
    },
    'the named method exports': {
        'deploy': {
            'should be defined': () => {
                expect(deploy).to.be.ok;
            }
        },
        'execute': {
            'should be defined': () => {
                expect(execute).to.be.ok;
            }
        }
    }
};

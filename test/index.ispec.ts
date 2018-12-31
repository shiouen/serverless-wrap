import { expect } from 'chai';

import sls from '../src/index';
import { serverless } from '../src/index';
import { deploy, invoke } from '../src/index';

export const exporting = {
    'the default export': {
        'should be defined': () => {
            expect(sls).to.be.ok;
        },
        "should have 'deploy' defined": () => {
            expect(sls.deploy).to.be.ok;
        },
        "should have 'invoke' defined": () => {
            expect(sls.invoke).to.be.ok;
        }
    },
    'the single named constant export': {
        'should be defined': () => {
            expect(serverless).to.be.ok;
        },
        "should have 'deploy' defined": () => {
            expect(serverless.deploy).to.be.ok;
        },
        "should have 'invoke' defined": () => {
            expect(serverless.invoke).to.be.ok;
        }
    },
    'the named method exports': {
        'deploy': {
            'should be defined': () => {
                expect(deploy).to.be.ok;
            }
        },
        'invoke': {
            'should be defined': () => {
                expect(invoke).to.be.ok;
            }
        }
    }
};

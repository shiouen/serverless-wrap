import npx from 'npx-wrap';

async function deploy (args: string[]): Promise<any> {
    await serverless('deploy', args);
}

async function serverless (command: string, args: string[]): Promise<any> {
    await npx.async(command, args);
}

export default {
    deploy,
    serverless
}
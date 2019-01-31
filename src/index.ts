import npx from 'npx-wrap';

export async function deploy(args: string[]): Promise<any> {
    await execute('deploy', args);
}

export async function execute(command: string, args: string[]): Promise<any> {
    await npx.async('serverless', [command, ...args]);
}

export const serverless = { deploy, execute };
export default serverless;

import npx from 'npx-wrap';

export async function deploy(args: string[], directory?: string): Promise<any> {
    await execute('deploy', args, directory);
}

export async function execute(command: string, args: string[], directory?: string): Promise<any> {
    const options: any = {};

    if (directory) options.cwd = directory;

    await npx.async('serverless', [command, ...args], options);
}

export const serverless = { deploy, execute };
export default serverless;

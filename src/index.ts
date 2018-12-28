import npx from 'npx-wrap';

export async function deploy(args: string[]): Promise<any> {
    await invoke('deploy', args);
}

export async function invoke(command: string, args: string[]): Promise<any> {
    await npx.async('serverless', [command, ...args]);
}

export default invoke;
export const serverless = { deploy, invoke };
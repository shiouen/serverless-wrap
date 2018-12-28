import npx from 'node-npx';

export const serverless = async (command: string, args: string[]): Promise<any> => {
    return new Promise(((resolve, reject) => {
        args.unshift(command);

        const child = npx('serverless', args, {
            stdio: 'inherit'
        });

        child.on('exit', (code: number) => {
            code === 0 ? resolve() : reject();
        });
    }));
};

export const deploy = async (options: string[]): Promise<any> => {
    return serverless('deploy', options);
};

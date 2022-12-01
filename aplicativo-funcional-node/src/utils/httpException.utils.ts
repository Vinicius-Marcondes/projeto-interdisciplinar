interface HttpExceptions {
    status: number;
    message: string;
    error?: any;
}

export class HttpException extends Error implements HttpExceptions {
    readonly status: number;
    readonly error?: string | Error;

    constructor(status: number, message: string, error?: string | Error) {
        super(message);
        this.status = status;
        this.message = message;
        this.error = error;

        if(typeof this.error == 'object') {
            delete this.error.stack;
        }

        delete this.stack;
    }
}
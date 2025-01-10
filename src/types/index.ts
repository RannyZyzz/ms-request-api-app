export interface Request {
    id: string;
    name: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    url: string;
    headers: Record<string, string>;
    body?: string;
    docs?: string;
    response?: {
        status?: number;
        statusText?: string;
        data?: Record<string, unknown> | string;
        headers?: Record<string, string>;
        error?: string;
        time?: number;
    };
}

export interface Folder {
    id: string;
    name: string;
    requests: Request[];
}

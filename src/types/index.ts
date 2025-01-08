export interface Request {
    id: string;
    name: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    url: string;
    headers?: Record<string, string>;
    body?: string;
}

export interface Folder {
    id: string;
    name: string;
    requests: Request[];
}

import React from 'react';
import axios from 'axios';
import { Request } from '../types';
import { PlayIcon, StopIcon } from '@heroicons/react/24/solid';
import { ResponsePanel } from './ResponsePanel';

interface RequestPanelProps {
    request: Request;
    onUpdateRequest: (updatedRequest: Request) => void;
}

export const RequestPanel: React.FC<RequestPanelProps> = ({
    request,
    onUpdateRequest
}) => {
    const [activeTab, setActiveTab] = React.useState<'headers' | 'body' | 'docs'>('body');
    const [isLoading, setIsLoading] = React.useState(false);
    const abortControllerRef = React.useRef<AbortController | null>(null);

    const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onUpdateRequest({
            ...request,
            url: e.target.value
        });
    };

    const handleMethodChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onUpdateRequest({
            ...request,
            method: e.target.value as Request['method']
        });
    };

    const handleHeaderChange = (index: number, key: string, value: string) => {
        const headersArray = Object.entries(request.headers || {});
        headersArray[index] = [key, value];
        const newHeaders = Object.fromEntries(headersArray);
        onUpdateRequest({
            ...request,
            headers: newHeaders
        });
    };

    const addHeader = () => {
        onUpdateRequest({
            ...request,
            headers: {
                ...request.headers,
                '': ''
            }
        });
    };

    const removeHeader = (key: string) => {
        const newHeaders = { ...request.headers };
        delete newHeaders[key];
        onUpdateRequest({
            ...request,
            headers: newHeaders
        });
    };

    const handleSend = async () => {
        setIsLoading(true);
        const startTime = Date.now();

        abortControllerRef.current = new AbortController();

        try {
            const config: any = {
                method: request.method.toLowerCase(),
                url: request.url,
                headers: request.headers,
                signal: abortControllerRef.current.signal,
            };

            if (request.method === 'GET') {
                config.params = request.body ? JSON.parse(request.body) : undefined;
            } else {
                config.data = request.body ? JSON.parse(request.body) : undefined;
            }

            const response = await axios(config);

            onUpdateRequest({
                ...request,
                response: {
                    status: response.status,
                    statusText: response.statusText,
                    data: response.data,
                    headers: response.headers,
                    time: Date.now() - startTime
                }
            });
        } catch (error: any) {
            if (error.name === 'AbortError') {
                onUpdateRequest({
                    ...request,
                    response: {
                        error: 'Request cancelled',
                        time: Date.now() - startTime
                    }
                });
            } else {
                onUpdateRequest({
                    ...request,
                    response: {
                        error: error.message,
                        status: error.response?.status,
                        statusText: error.response?.statusText,
                        data: error.response?.data,
                        headers: error.response?.headers,
                        time: Date.now() - startTime
                    }
                });
            }
        } finally {
            setIsLoading(false);
            abortControllerRef.current = null;
        }
    };

    const handleCancel = () => {
        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
        }
    };

    return (
        <div className="flex-1 p-4 overflow-auto">
            <div className="flex items-center space-x-4 mb-4">
                <select
                    value={request.method}
                    onChange={handleMethodChange}
                    className="px-3 py-2 border rounded"
                >
                    <option value="GET">GET</option>
                    <option value="POST">POST</option>
                    <option value="PUT">PUT</option>
                    <option value="DELETE">DELETE</option>
                </select>
                <input
                    type="text"
                    value={request.url}
                    onChange={handleUrlChange}
                    className="flex-1 px-3 py-2 border rounded"
                    placeholder="Enter URL"
                />
                {isLoading ? (
                    <button
                        onClick={handleCancel}
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 flex items-center"
                    >
                        <StopIcon className="w-4 h-4 mr-2" />
                        Cancel
                    </button>
                ) : (
                    <button
                        onClick={handleSend}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center"
                    >
                        <PlayIcon className="w-4 h-4 mr-2" />
                        Send
                    </button>
                )}
            </div>

            <div className="border rounded mb-4">
                <div className="flex border-b">
                    <button
                        className={`px-4 py-2 ${activeTab === 'body' ? 'bg-gray-100' : ''}`}
                        onClick={() => setActiveTab('body')}
                    >
                        Body
                    </button>
                    <button
                        className={`px-4 py-2 ${activeTab === 'headers' ? 'bg-gray-100' : ''}`}
                        onClick={() => setActiveTab('headers')}
                    >
                        Headers
                    </button>
                    <button
                        className={`px-4 py-2 ${activeTab === 'docs' ? 'bg-gray-100' : ''}`}
                        onClick={() => setActiveTab('docs')}
                    >
                        Docs
                    </button>
                </div>

                <div className="p-4">
                    {activeTab === 'body' ? (
                        <textarea
                            value={request.body || ''}
                            onChange={(e) => onUpdateRequest({ ...request, body: e.target.value })}
                            className="w-full h-64 px-2 py-1 border rounded font-mono"
                            placeholder="Request body (JSON)"
                        />
                    ) : activeTab === 'headers' ? (
                        <div className="space-y-2">
                            {Object.entries(request.headers || {}).map(([key, value], index) => (
                                <div key={index} className="flex space-x-2">
                                    <input
                                        type="text"
                                        value={key}
                                        onChange={(e) => handleHeaderChange(index, e.target.value, value)}
                                        className="flex-1 px-2 py-1 border rounded"
                                        placeholder="Key"
                                    />
                                    <input
                                        type="text"
                                        value={value}
                                        onChange={(e) => handleHeaderChange(index, key, e.target.value)}
                                        className="flex-1 px-2 py-1 border rounded"
                                        placeholder="Value"
                                    />
                                    <button
                                        onClick={() => removeHeader(key)}
                                        className="px-2 py-1 text-red-500 hover:text-red-700"
                                    >
                                        ×
                                    </button>
                                </div>
                            ))}
                            <button
                                onClick={addHeader}
                                className="text-blue-500 hover:text-blue-700"
                            >
                                + Add Header
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-2">
                            <pre className="bg-gray-100 p-4 rounded whitespace-pre-wrap">
                                {request?.docs || 'Sem documentação disponível'}
                            </pre>
                        </div>
                    )}
                </div>
            </div>

            <ResponsePanel response={request.response || null} />
        </div>
    );
};
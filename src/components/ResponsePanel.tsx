import React from 'react';

interface ResponsePanelProps {
    response: {
        status?: number;
        statusText?: string;
        data?: Record<string, unknown> | string;
        headers?: Record<string, string>;
        error?: string;
        time?: number;
    } | null;
}

export const ResponsePanel: React.FC<ResponsePanelProps> = ({ response }) => {
    const [activeTab, setActiveTab] = React.useState<'body' | 'headers'>('body');

    if (!response) {
        return null;
    }

    const getStatusColor = (status?: number) => {
        if (!status) return 'bg-gray-500';
        if (status < 300) return 'bg-green-500';
        if (status < 400) return 'bg-blue-500';
        return 'bg-red-500';
    };

    const formatJson = (data: any) => {
        try {
            return JSON.stringify(data, null, 2);
        } catch {
            return String(data);
        }
    };

    return (
        <div className="border rounded mt-4">
            <div className="p-4 border-b bg-gray-50">
                <div className="flex items-center space-x-4">
                    <span className={`px-3 py-1 rounded text-white ${getStatusColor(response.status)}`}>
                        {response.status || 'Error'}
                    </span>
                    <span className="text-gray-600">{response.statusText}</span>
                    {response.time && (
                        <span className="text-gray-500">Time: {response.time}ms</span>
                    )}
                </div>
            </div>

            <div className="flex border-b">
                <button
                    className={`px-4 py-2 ${activeTab === 'body' ? 'bg-gray-100' : ''}`}
                    onClick={() => setActiveTab('body')}
                >
                    Response Body
                </button>
                <button
                    className={`px-4 py-2 ${activeTab === 'headers' ? 'bg-gray-100' : ''}`}
                    onClick={() => setActiveTab('headers')}
                >
                    Response Headers
                </button>
            </div>

            <div className="p-4">
                {response.error ? (
                    <pre className="bg-gray-50 p-4 rounded overflow-auto max-h-96">
                        {formatJson(response.data)}
                    </pre>
                ) : activeTab === 'body' ? (
                    <pre className="bg-gray-50 p-4 rounded overflow-auto max-h-96">
                        {formatJson(response.data)}
                    </pre>
                ) : (
                    <div className="space-y-2">
                        {Object.entries(response.headers || {}).map(([key, value]) => (
                            <div key={key} className="flex">
                                <span className="font-medium w-1/3">{key}:</span>
                                <span className="text-gray-600">{value}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};
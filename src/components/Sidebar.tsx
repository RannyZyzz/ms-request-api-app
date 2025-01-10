import React from 'react';
import { Folder } from '../types';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface SidebarProps {
    folders: Folder[];
    selectedRequest: string | null;
    onSelectRequest: (folderId: string, requestId: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
    folders,
    selectedRequest,
    onSelectRequest,
}) => {
    const [expandedFolders, setExpandedFolders] = React.useState<string[]>([]);

    const toggleFolder = (folderId: string) => {
        setExpandedFolders(prev =>
            prev.includes(folderId)
                ? prev.filter(id => id !== folderId)
                : [...prev, folderId]
        )
    }

    const handleRefreshToken = () => {
        window.location.reload();
    }

    return (
        <div className="w-64 bg-gray-100 h-screen p-4 flex flex-col">
            <h2 className="text-lg font-semibold mb-4">MS Omnichannel</h2>
            <div className="space-y-2 flex-grow">
                {folders.map(folder => (
                    <div key={folder.id}>
                        <div
                            className="flex items-center cursor-pointer hover:bg-gray-200 p-2 rounded"
                            onClick={() => toggleFolder(folder.id)}
                        >
                            {expandedFolders.includes(folder.id) ? (
                                <ChevronDownIcon className="w-4 h-4 mr-2" />
                            ) : (
                                <ChevronRightIcon className="w-4 h-4 mr-2" />
                            )}
                            {folder.name}
                        </div>
                        {expandedFolders.includes(folder.id) && (
                            <div className="ml-6 space-y-1">
                                {folder.requests.map(request => (
                                    <div
                                        key={request.id}
                                        className={`p-2 cursor-pointer rounded ${selectedRequest === request.id
                                            ? 'bg-blue-100'
                                            : 'hover:bg-gray-200'
                                            }`}
                                        onClick={() => onSelectRequest(folder.id, request.id)}
                                    >
                                        <span className={`text-sm font-medium ${request.method === 'GET' ? 'text-green-600' :
                                            request.method === 'POST' ? 'text-blue-600' :
                                                request.method === 'PUT' ? 'text-orange-600' :
                                                    'text-red-600'
                                            }`}>
                                            {request.method}
                                        </span>
                                        <span className="ml-2 text-sm">{request.name}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <button
                onClick={handleRefreshToken}
                className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Refresh chavePasse
            </button>
        </div>
    );
};
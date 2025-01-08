import React from 'react';
import { Sidebar } from './components/Sidebar';
import { RequestPanel } from './components/RequestPanel';
import { initialFolders } from './data/initialData';
import { Folder, Request } from './types';

const App: React.FC = () => {
    const [folders, setFolders] = React.useState<Folder[]>(initialFolders);
    const [selectedRequest, setSelectedRequest] = React.useState<Request | null>(null);

    const handleSelectRequest = (folderId: string, requestId: string) => {
        const folder = folders.find(f => f.id === folderId);
        const request = folder?.requests.find(r => r.id === requestId);
        if (request) {
            setSelectedRequest(request);
        }
    };

    const handleUpdateRequest = (updatedRequest: Request) => {
        setFolders(prevFolders =>
            prevFolders.map(folder => ({
                ...folder,
                requests: folder.requests.map(request =>
                    request.id === updatedRequest.id ? updatedRequest : request
                )
            }))
        );
        setSelectedRequest(updatedRequest);
    };

    return (
        <div className="flex h-screen">
            <Sidebar
                folders={folders}
                selectedRequest={selectedRequest?.id || null}
                onSelectRequest={handleSelectRequest}
            />
            {selectedRequest ? (
                <RequestPanel
                    request={selectedRequest}
                    onUpdateRequest={handleUpdateRequest}
                />
            ) : (
                <div className="flex-1 flex items-center justify-center text-gray-500">
                    Select a request from the sidebar
                </div>
            )}
        </div>
    );
};

export default App;
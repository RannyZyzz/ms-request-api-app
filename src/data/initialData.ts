import { Folder } from "../types";
import { AuthManager } from "../utils/authManager"; // Ajuste o caminho conforme necessário

export const initialFolders: Folder[] = [
    {
        id: '1',
        name: 'Acesso a Dados',
        requests: [
            {
                id: '1-1',
                name: 'chavePasse',
                method: 'GET',
                url: 'https://api.mosiaomnichannel.com.br/clientes/chavePasse/chavePasse',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': ' '
                },
                body: JSON.stringify({
                    instanciaApp: '1',
                    chavePasse: AuthManager.getStoredToken(), // Aqui estamos utilizando a função para obter a chavePasse
                    chaveFuncionalidade: '2ddf2e18-6997-44e0-ac2a-7a4fb3c05b7f'
                }, null, 2)
            },
            {
                id: '1-2',
                name: 'usuarioLogado',
                method: 'GET',
                url: 'https://api.mosiaomnichannel.com.br/clientes/chavePasse/usuario',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': ' '
                },
                body: JSON.stringify({
                    instanciaApp: '1',
                    chavePasse: AuthManager.getStoredToken(), // Aqui estamos utilizando a função para obter a chavePasse
                    chaveFuncionalidade: '2ddf2e18-6997-44e0-ac2a-7a4fb3c05b7f'
                }, null, 2)
            }
        ]
    }
];
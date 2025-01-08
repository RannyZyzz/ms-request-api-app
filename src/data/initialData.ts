import { Folder } from "../types";

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
                    chavePasse: 'nasihd12877bas',
                    chaveFuncionalidade: '92993-918293823-28738273'
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
                    chavePasse: 'nasihd12877bas',
                    chaveFuncionalidade: '92993-918293823-28738273'
                }, null, 2)
            }
        ]
    }
]
import { Folder } from "../types";
import { AuthManager } from "../utils/authManager";

const currentDate = new Date();
const formattedDate = currentDate.toISOString().slice(0, 19).replace('T', ' ');

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
                    'Authorization': ''
                },
                body: JSON.stringify({
                    instanciaApp: '1',
                    chavePasse: AuthManager.getStoredToken(),
                    chaveFuncionalidade: '2ddf2e18-6997-44e0-ac2a-7a4fb3c05b7f'
                }, null, 2),
                docs: 'Link documentação\nhttps://mobilesaudejira.atlassian.net/wiki/spaces/MO/pages/3427303431/Obter+dados+chavePasse'
            },
            {
                id: '1-2',
                name: 'usuarioLogado',
                method: 'GET',
                url: 'https://api.mosiaomnichannel.com.br/clientes/chavePasse/usuario',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': ''
                },
                body: JSON.stringify({
                    instanciaApp: '1',
                    chavePasse: AuthManager.getStoredToken(),
                    chaveFuncionalidade: '2ddf2e18-6997-44e0-ac2a-7a4fb3c05b7f'
                }, null, 2),
                docs: 'Link documentação\nhttps://mobilesaudejira.atlassian.net/wiki/spaces/MO/pages/2464219139/Obter+dados+usuarioLogado'
            },
            {
                id: '1-3',
                name: 'grupoFamiliar',
                method: 'GET',
                url: 'https://api.mosiaomnichannel.com.br/clientes/chavePasse/grupoFamiliar',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': ''
                },
                body: JSON.stringify({
                    instanciaApp: '1',
                    chavePasse: AuthManager.getStoredToken(),
                    chaveFuncionalidade: '2ddf2e18-6997-44e0-ac2a-7a4fb3c05b7f'
                }, null, 2),
                docs: 'Link documentação\nhttps://mobilesaudejira.atlassian.net/wiki/spaces/MO/pages/2464022540/Obter+dados+grupoFamiliar'
            },
            {
                id: '1-4',
                name: 'sistemaGeolocalizacao',
                method: 'GET',
                url: 'https://api.mosiaomnichannel.com.br/clientes/chavePasse/sistema',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': ''
                },
                body: JSON.stringify({
                    instanciaApp: '1',
                    chavePasse: AuthManager.getStoredToken(),
                    chaveFuncionalidade: '2ddf2e18-6997-44e0-ac2a-7a4fb3c05b7f'
                }, null, 2),
                docs: 'Link documentação\nhttps://mobilesaudejira.atlassian.net/wiki/spaces/MO/pages/2463957004/Obter+dados+sistema+e+geolocaliza+o'
            },
            {
                id: '1-5',
                name: 'termoDeUso',
                method: 'GET',
                url: 'https://api.mosiaomnichannel.com.br/clientes/chavePasse/termoDeUso',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': ''
                },
                body: JSON.stringify({
                    instanciaApp: '1',
                    chavePasse: AuthManager.getStoredToken(),
                    chaveFuncionalidade: '2ddf2e18-6997-44e0-ac2a-7a4fb3c05b7f'
                }, null, 2),
                docs: 'Link documentação\nhttps://mobilesaudejira.atlassian.net/wiki/spaces/MO/pages/3124953089/Obter+dados+termo+de+uso\n\nOBS: Para realizar essa requisição a funcionalidade precisa estar com uma ocorrência ativada nos termos de uso'
            }
        ]
    },
    {
        id: '2',
        name: 'Tokens',
        requests: [
            {
                id: '2-1',
                name: 'tokenTemporario',
                method: 'GET',
                url: 'https://api.mosiaomnichannel.com.br/clientes/auth/temp-authorization',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': ''
                },
                body: JSON.stringify({

                }, null, 2),
                docs: 'Link documentação\nhttps://mobilesaudejira.atlassian.net/wiki/spaces/MO/pages/3124953089/Obter+dados+termo+de+uso'
            },
            {
                id: '2-2',
                name: 'chaveUnicaConhecida',
                method: 'POST',
                url: 'https://api.mosiaomnichannel.com.br/clientes/utilitarios/seguranca/chaveAuth',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': ''
                },
                body: JSON.stringify({
                    chaveUnica: '90994281978'
                }, null, 2)
            }

        ]
    },
    {
        id: '3',
        name: 'Contatos',
        requests: [
            {
                id: '3-1',
                name: 'contatoCriarAtualizar',
                method: 'POST',
                url: 'https://api.mosiaomnichannel.com.br/clientes/contatos/contato',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': ''
                },
                body: JSON.stringify({
                    contato: {
                        nome: 'Ranniêr Reis',
                        email: 'rannier@mobilesaude.com.br',
                        telefone: '48984137055',
                        chaveUnica: '90994281978'
                    }
                }, null, 2)
            }
        ]
    },
    {
        id: '4',
        name: 'Ocorrências',
        requests: [
            {
                id: '4-1',
                name: 'ocorrenCriar',
                method: 'POST',
                url: 'https://api.mosiaomnichannel.com.br/clientes/ocorrencias',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': ''
                },
                body: JSON.stringify({
                    idFuncionalidade: 9298,
                    idTipoOcorrencia: "469",
                    idAssunto: 309,
                    rascunho: false,
                    solicitante: {
                        chaveUnica: "90994281978",
                        nome: "Ranniêr Reis",
                        email: "rannier@mobilesaude.com.br",
                        telefone: "48984137055"
                    },
                    numeroContrato: "00000000001",
                    beneficiario: {
                        chaveUnica: "90994281978",
                        nome: "Ranniêr Reis",
                        email: "rannier@mobilesaude.com.br",
                        telefone: "48984137055",
                    },
                    anotacao: "[API criar ocorrência] - Ocorrência criada via API lol",
                    formularios: [
                        {
                            idForm: "64dcd2b1342146345191ee00",
                            formData: [
                                {
                                    "seu-nome": "Ranniêr Reis",
                                    tipo: {
                                        label: "Sugestão",
                                        value: "2"
                                    },
                                    sugestao: "Sempre valide entradas de dados, considerando tanto cenários de uso comuns quanto casos de borda e limites de capacidade."
                                }
                            ]
                        }
                    ]
                }, null, 2)
            },
            {
                id: '4-2',
                name: 'ocorrenDetalhes',
                method: 'GET',
                url: 'https://api.mosiaomnichannel.com.br/clientes/ocorrencias/665544120250110090002',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': ''
                },
                body: JSON.stringify({

                }, null, 2)
            },
            {
                id: '4-3',
                name: 'ocorrenAlterarStatus',
                method: 'PUT',
                url: 'https://api.mosiaomnichannel.com.br/clientes/ocorrencias/665544120250110090002/status',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': ''
                },
                body: JSON.stringify({
                    idNovoStatus: 1093.1094,
                    textoDesfecho: "",
                    idMotivoEncerramento: "",
                    idAtendente: 274,
                    chaveUnicaSolicitante: "90994281978"
                }, null, 2)
            },
            {
                id: '4-4',
                name: 'ocorrenAnotacao',
                method: 'POST',
                url: 'https://api.mosiaomnichannel.com.br/clientes/ocorrencias/665544120250110090002/anotacao',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': ''
                },
                body: JSON.stringify({
                    publica: false,
                    mensagem: "[API criar anotação] - Anotação criada via API lol",
                    idAtendente: 274,
                    chaveUnicaSolicitante: "90994281978",
                    arquivos: [
                        {
                            url: "https://site.mobilesaude.com.br/imagens/logo2.png"
                        },
                        {
                            base64: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASoAAADFCAYAAADjX7.."
                        }
                    ]
                }, null, 2)
            },
            {
                id: '4-5',
                name: 'ocorrenAtivar',
                method: 'PUT',
                url: 'https://api.mosiaomnichannel.com.br/clientes/ocorrencias/665544120250110090002/ativar',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': ''
                },
                body: JSON.stringify({

                }, null, 2)
            },
            {
                id: '4-6',
                name: 'ocorrenListarProtocolos',
                method: 'GET',
                url: 'https://api.mosiaomnichannel.com.br/clientes/ocorrencias/ultimosProtocolos',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': '',
                    'chaveUnica': '90994281978',
                    'totalProtocolos': '10'
                },
                body: JSON.stringify({

                }, null, 2)
            },
            {
                id: '4-7',
                name: 'ocorrenAlterarDatas',
                method: 'PUT',
                url: 'https://api.mosiaomnichannel.com.br/clientes/ocorrencias/665544120250110090002/datas',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': ''
                },
                body: JSON.stringify({
                    motivo: "[API Alterar datas] - Data alterada via API lol",
                    dataEncerramento: '',
                    dataCriacao: formattedDate,
                }, null, 2),
                docs: 'Link documentação\nhttps://mobilesaudejira.atlassian.net/wiki/spaces/MO/pages/3393191937/Api+clientes+-+Alterar+Datas'
            }
        ]
    },
    {
        id: '5',
        name: 'Mensageria',
        requests: [
            {
                id: '5-1',
                name: 'menPush',
                method: 'POST',
                url: 'https://api.mosiaomnichannel.com.br/clientes/mensageria/envio',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': ''
                },
                body: JSON.stringify({
                    chaveUnica: "90994281978",
                    msg: "[API envio de push] - Nova notícia!",
                    idFuncionalidade: 0,
                    idRegistro: 945,
                    msgRegistrarPush: true,
                }, null, 2),
                docs: 'Link documentação\nhttps://mobilesaudejira.atlassian.net/wiki/spaces/MO/pages/2534047762/Api+Clientes+-+Envio+de+mensagem'
            },
            {
                id: '5-2',
                name: 'menWhatsAvulso',
                method: 'POST',
                url: 'https://api.mosiaomnichannel.com.br/clientes/mensageria/whatsapp/envioAvulso',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': ''
                },
                body: JSON.stringify({
                    identificadorMsg: "1",
                    idConfigWhatsapp: "63a45bfa127abfa74c1ac6b2",
                    template: {
                        id: "sdfsdfsdfew432434",
                        vars: {
                            header: [
                                {
                                    remover: "Wanderson"
                                }
                            ],
                            body: [
                                {
                                    remover: "200000215454545445"
                                }
                            ]
                        }
                    },
                    celularDestinatario: {
                        celular: "27992480823"
                    },
                    agendamento: {
                        dataHoraEnvio: "2022-12-29 17:25:40"
                    }
                }, null, 2),
                docs: 'Link documentação\nhttps://mobilesaudejira.atlassian.net/wiki/spaces/MO/pages/2597683210/Api+Clientes+-+Envio+de+mensagem+Whatsapp'
            },
            {
                id: '5-3',
                name: 'menWhatsContato',
                method: 'POST',
                url: 'https://api.mosiaomnichannel.com.br/clientes/mensageria/whatsapp/envioPorContato',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': ''
                },
                body: JSON.stringify({
                    identificadorMsg: "1",
                    idConfigWhatsapp: "63a45bfa127abfa74c1ac6b2",
                    template: {
                        id: "sdfsdfdsfe435345fgdsfsd",
                        vars: {
                            header: [
                                {
                                    remover: "Wanderson"
                                }
                            ],
                            body: [
                                {
                                    remover: "200000215454545445"
                                }
                            ]
                        }
                    },
                    celularDestinatario: {
                        celular: "27992480823"
                    },
                    contatoDestinatario: {
                        chaveUnica: "everson@mobilesaude.com.br"
                    },
                    ocorrencia: {
                        protocolo: "2000000000015452004"
                    },
                    contato: {
                        nome: "Geraldo",
                        chaveUnica: "01911165615",
                        celular: "278282828",
                    },
                    agendamento: {
                        dataHoraEnvio: "2022-12-29 17:25:40"
                    }
                }, null, 2),
                docs: 'Link documentação\nhttps://mobilesaudejira.atlassian.net/wiki/spaces/MO/pages/2597683210/Api+Clientes+-+Envio+de+mensagem+Whatsapp'
            },
            {
                id: '5-4',
                name: 'menWhatsMidiaAvulso',
                method: 'POST',
                url: 'https://api.mosiaomnichannel.com.br/clientes/mensageria/midia/avulso',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': ''
                },
                body: JSON.stringify({
                    identificadorMsg: "1",
                    idConfigWhatsapp: "63a45bfa127abfa74c1ac6b",
                    template: {
                        id: "sdfsdfsdfew432434",
                        vars: {
                            body: [
                                {
                                    remover: "200000215454545445"
                                }
                            ]
                        }
                    },
                    celularDestinatario: {
                        celular: "27999999999"
                    },
                    agendamento: {
                        dataHoraEnvio: "2022-12-29 17:25:40"
                    },
                    attachments: [
                        {
                            name: "hello-word.png",
                            contentType: "image/png",
                            base64: "iVBORw0KGgoAAAANSUhEUgAABDgAAAkkCAIAAAB2sV..."
                        }
                    ]
                }, null, 2),
                docs: 'Link documentação\nhttps://mobilesaudejira.atlassian.net/wiki/spaces/MO/pages/2597552344/Api+Clientes+-+Envio+de+mensagem+com+m+dia+Whatsapp'
            },
            {
                id: '5-5',
                name: 'menWhatsMidiaContato',
                method: 'POST',
                url: 'https://api.mosiaomnichannel.com.br/clientes/mensageria/midia/contato',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': ''
                },
                body: JSON.stringify({
                    identificadorMsg: "1",
                    idConfigWhatsapp: "63a45bfa127abfa74c1ac6",
                    template: {
                        id: "sdfsdfdsfe435345fgdsfsd",
                        vars: {
                            body: [
                                {
                                    remover: "200000215454545445"
                                }
                            ]
                        }
                    },
                    celularDestinatario: {
                        celular: "27999999999"
                    },
                    contatoDestinatario: {
                        chaveUnica: "everson@mobilesaude.com.br"
                    },
                    ocorrencia: {
                        protocolo: "2000000000015452004"
                    },
                    contato: {
                        nome: "Geraldo",
                        chaveUnica: "01911165615",
                        celular: "278282828",
                    },
                    agendamento: {
                        dataHoraEnvio: "2022-12-29 17:25:40"
                    },
                    attachments: [
                        {
                            name: "hello-word.png",
                            contentType: "image/png",
                            base64: "iVBORw0KGgoAAAANSUhEUgAABDgAAAkkCAIAAAB2sV..."
                        }
                    ]
                }, null, 2),
                docs: 'Link documentação\nhttps://mobilesaudejira.atlassian.net/wiki/spaces/MO/pages/2597552344/Api+Clientes+-+Envio+de+mensagem+com+m+dia+Whatsapp'
            }
        ]
    }
];
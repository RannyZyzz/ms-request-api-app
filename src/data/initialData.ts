import { Folder } from "../types";
import { AuthManager } from "../utils/authManager";

const currentDate = new Date();
const formattedDate = currentDate.toISOString().slice(0, 19).replace("T", " ");

export const initialFolders: Folder[] = [
  {
    id: "1",
    name: "Acesso a Dados",
    requests: [
      {
        id: "1-1",
        name: "chavePasse",
        method: "GET",
        url: "https://api.mosiaomnichannel.com.br/clientes/chavePasse/chavePasse",
        headers: {
          "Content-Type": "application/json",
          Authorization: "",
        },
        body: JSON.stringify(
          {
            instanciaApp: "1",
            chavePasse: AuthManager.getStoredToken(),
            chaveFuncionalidade: "2ddf2e18-6997-44e0-ac2a-7a4fb3c05b7f",
          },
          null,
          2,
        ),
        docs: "Link documentação\nhttps://mobilesaudejira.atlassian.net/wiki/spaces/MO/pages/3427303431/Obter+dados+chavePasse",
      },
      {
        id: "1-2",
        name: "usuarioLogado",
        method: "GET",
        url: "https://api.mosiaomnichannel.com.br/clientes/chavePasse/usuario",
        headers: {
          "Content-Type": "application/json",
          Authorization: "",
        },
        body: JSON.stringify(
          {
            instanciaApp: "1",
            chavePasse: AuthManager.getStoredToken(),
            chaveFuncionalidade: "2ddf2e18-6997-44e0-ac2a-7a4fb3c05b7f",
          },
          null,
          2,
        ),
        docs: "Link documentação\nhttps://mobilesaudejira.atlassian.net/wiki/spaces/MO/pages/2464219139/Obter+dados+usuarioLogado",
      },
      {
        id: "1-3",
        name: "grupoFamiliar",
        method: "GET",
        url: "https://api.mosiaomnichannel.com.br/clientes/chavePasse/grupoFamiliar",
        headers: {
          "Content-Type": "application/json",
          Authorization: "",
        },
        body: JSON.stringify(
          {
            instanciaApp: "1",
            chavePasse: AuthManager.getStoredToken(),
            chaveFuncionalidade: "2ddf2e18-6997-44e0-ac2a-7a4fb3c05b7f",
          },
          null,
          2,
        ),
        docs: "Link documentação\nhttps://mobilesaudejira.atlassian.net/wiki/spaces/MO/pages/2464022540/Obter+dados+grupoFamiliar",
      },
      {
        id: "1-4",
        name: "sistemaGeolocalizacao",
        method: "GET",
        url: "https://api.mosiaomnichannel.com.br/clientes/chavePasse/sistema",
        headers: {
          "Content-Type": "application/json",
          Authorization: "",
        },
        body: JSON.stringify(
          {
            instanciaApp: "1",
            chavePasse: AuthManager.getStoredToken(),
            chaveFuncionalidade: "2ddf2e18-6997-44e0-ac2a-7a4fb3c05b7f",
          },
          null,
          2,
        ),
        docs: "Link documentação\nhttps://mobilesaudejira.atlassian.net/wiki/spaces/MO/pages/2463957004/Obter+dados+sistema+e+geolocaliza+o",
      },
      {
        id: "1-5",
        name: "termoDeUso",
        method: "GET",
        url: "https://api.mosiaomnichannel.com.br/clientes/chavePasse/termoDeUso",
        headers: {
          "Content-Type": "application/json",
          Authorization: "",
        },
        body: JSON.stringify(
          {
            instanciaApp: "1",
            chavePasse: AuthManager.getStoredToken(),
            chaveFuncionalidade: "2ddf2e18-6997-44e0-ac2a-7a4fb3c05b7f",
          },
          null,
          2,
        ),
        docs: "Link documentação\nhttps://mobilesaudejira.atlassian.net/wiki/spaces/MO/pages/3124953089/Obter+dados+termo+de+uso\n\nOBS: Para realizar essa requisição a funcionalidade precisa estar com uma ocorrência ativada nos termos de uso",
      },
    ],
  },
  {
    id: "2",
    name: "Tokens",
    requests: [
      {
        id: "2-1",
        name: "tokenTemporario",
        method: "GET",
        url: "https://api.mosiaomnichannel.com.br/clientes/auth/temp-authorization",
        headers: {
          "Content-Type": "application/json",
          Authorization: "",
        },
        body: JSON.stringify({}, null, 2),
        docs: "Link documentação\nhttps://mobilesaudejira.atlassian.net/wiki/spaces/MO/pages/3124953089/Obter+dados+termo+de+uso",
      },
      {
        id: "2-2",
        name: "chaveUnicaConhecida",
        method: "POST",
        url: "https://api.mosiaomnichannel.com.br/clientes/utilitarios/seguranca/chaveAuth",
        headers: {
          "Content-Type": "application/json",
          Authorization: "",
        },
        body: JSON.stringify(
          {
            chaveUnica: "90994281978",
          },
          null,
          2,
        ),
      },
    ],
  },
  {
    id: "3",
    name: "Contatos",
    requests: [
      {
        id: "3-1",
        name: "contatoCriarAtualizar",
        method: "POST",
        url: "https://api.mosiaomnichannel.com.br/clientes/contatos/contato",
        headers: {
          "Content-Type": "application/json",
          Authorization: "",
        },
        body: JSON.stringify(
          {
            contato: {
              nome: "Ranniêr Reis",
              email: "rannier@mobilesaude.com.br",
              telefone: "48984137055",
              chaveUnica: "90994281978",
            },
          },
          null,
          2,
        ),
      },
    ],
  },
  {
    id: "4",
    name: "Ocorrências",
    requests: [
      {
        id: "4-1",
        name: "ocorrenCriar",
        method: "POST",
        url: "https://api.mosiaomnichannel.com.br/clientes/ocorrencias",
        headers: {
          "Content-Type": "application/json",
          Authorization: "",
        },
        body: JSON.stringify(
          {
            idFuncionalidade: 9298,
            idTipoOcorrencia: "469",
            idAssunto: 309,
            rascunho: false,
            solicitante: {
              chaveUnica: "90994281978",
              nome: "Ranniêr Reis",
              email: "rannier@mobilesaude.com.br",
              telefone: "48984137055",
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
                      value: "2",
                    },
                    sugestao:
                      "Sempre valide entradas de dados, considerando tanto cenários de uso comuns quanto casos de borda e limites de capacidade.",
                  },
                ],
              },
            ],
          },
          null,
          2,
        ),
      },
      {
        id: "4-2",
        name: "ocorrenDetalhes",
        method: "GET",
        url: "https://api.mosiaomnichannel.com.br/clientes/ocorrencias/665544120250110090002",
        headers: {
          "Content-Type": "application/json",
          Authorization: "",
        },
        body: JSON.stringify({}, null, 2),
      },
      {
        id: "4-3",
        name: "ocorrenAlterarStatus",
        method: "PUT",
        url: "https://api.mosiaomnichannel.com.br/clientes/ocorrencias/665544120250110090002/status",
        headers: {
          "Content-Type": "application/json",
          Authorization: "",
        },
        body: JSON.stringify(
          {
            idNovoStatus: 1093.1094,
            textoDesfecho: "",
            idMotivoEncerramento: "",
            idAtendente: 274,
            chaveUnicaSolicitante: "90994281978",
          },
          null,
          2,
        ),
      },
      {
        id: "4-4",
        name: "ocorrenAnotacao",
        method: "POST",
        url: "https://api.mosiaomnichannel.com.br/clientes/ocorrencias/665544120250110090002/anotacao",
        headers: {
          "Content-Type": "application/json",
          Authorization: "",
        },
        body: JSON.stringify(
          {
            publica: false,
            mensagem: "[API criar anotação] - Anotação criada via API lol",
            idAtendente: 274,
            chaveUnicaSolicitante: "90994281978",
            arquivos: [
              {
                url: "https://site.mobilesaude.com.br/imagens/logo2.png",
              },
              {
                base64:
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASoAAADFCAYAAADjX7..",
              },
            ],
          },
          null,
          2,
        ),
      },
      {
        id: "4-5",
        name: "ocorrenAtivar",
        method: "PUT",
        url: "https://api.mosiaomnichannel.com.br/clientes/ocorrencias/665544120250110090002/ativar",
        headers: {
          "Content-Type": "application/json",
          Authorization: "",
        },
        body: JSON.stringify({}, null, 2),
      },
      {
        id: "4-6",
        name: "ocorrenListarProtocolos",
        method: "GET",
        url: "https://api.mosiaomnichannel.com.br/clientes/ocorrencias/ultimosProtocolos",
        headers: {
          "Content-Type": "application/json",
          Authorization: "",
          chaveUnica: "90994281978",
          totalProtocolos: "10",
        },
        body: JSON.stringify({}, null, 2),
      },
      {
        id: "4-7",
        name: "ocorrenAlterarDatas",
        method: "PUT",
        url: "https://api.mosiaomnichannel.com.br/clientes/ocorrencias/665544120250110090002/datas",
        headers: {
          "Content-Type": "application/json",
          Authorization: "",
        },
        body: JSON.stringify(
          {
            motivo: "[API Alterar datas] - Data alterada via API lol",
            dataEncerramento: "",
            dataCriacao: formattedDate,
          },
          null,
          2,
        ),
        docs: "Link documentação\nhttps://mobilesaudejira.atlassian.net/wiki/spaces/MO/pages/3393191937/Api+clientes+-+Alterar+Datas",
      },
    ],
  },
  {
    id: "5",
    name: "Mensageria",
    requests: [
      {
        id: "5-1",
        name: "menPush",
        method: "POST",
        url: "https://api.mosiaomnichannel.com.br/clientes/mensageria/envio",
        headers: {
          "Content-Type": "application/json",
          Authorization: "",
        },
        body: JSON.stringify(
          {
            chaveUnica: "90994281978",
            msg: "[API envio de push] - Nova notícia!",
            idFuncionalidade: 0,
            idRegistro: 945,
            msgRegistrarPush: true,
          },
          null,
          2,
        ),
        docs: "Link documentação\nhttps://mobilesaudejira.atlassian.net/wiki/spaces/MO/pages/2534047762/Api+Clientes+-+Envio+de+mensagem",
      },
      {
        id: "5-2",
        name: "menWhatsAvulso",
        method: "POST",
        url: "https://api.mosiaomnichannel.com.br/clientes/mensageria/whatsapp/envioAvulso",
        headers: {
          "Content-Type": "application/json",
          Authorization: "",
        },
        body: JSON.stringify(
          {
            identificadorMsg: "1",
            idConfigWhatsapp: "63a45bfa127abfa74c1ac6b2",
            template: {
              id: "sdfsdfsdfew432434",
              vars: {
                header: [
                  {
                    remover: "Wanderson",
                  },
                ],
                body: [
                  {
                    remover: "200000215454545445",
                  },
                ],
              },
            },
            celularDestinatario: {
              celular: "27992480823",
            },
            agendamento: {
              dataHoraEnvio: "2022-12-29 17:25:40",
            },
          },
          null,
          2,
        ),
        docs: "Link documentação\nhttps://mobilesaudejira.atlassian.net/wiki/spaces/MO/pages/2597683210/Api+Clientes+-+Envio+de+mensagem+Whatsapp",
      },
      {
        id: "5-3",
        name: "menWhatsContato",
        method: "POST",
        url: "https://api.mosiaomnichannel.com.br/clientes/mensageria/whatsapp/envioPorContato",
        headers: {
          "Content-Type": "application/json",
          Authorization: "",
        },
        body: JSON.stringify(
          {
            identificadorMsg: "1",
            idConfigWhatsapp: "63a45bfa127abfa74c1ac6b2",
            template: {
              id: "sdfsdfdsfe435345fgdsfsd",
              vars: {
                header: [
                  {
                    remover: "Wanderson",
                  },
                ],
                body: [
                  {
                    remover: "200000215454545445",
                  },
                ],
              },
            },
            celularDestinatario: {
              celular: "27992480823",
            },
            contatoDestinatario: {
              chaveUnica: "everson@mobilesaude.com.br",
            },
            ocorrencia: {
              protocolo: "2000000000015452004",
            },
            contato: {
              nome: "Geraldo",
              chaveUnica: "01911165615",
              celular: "278282828",
            },
            agendamento: {
              dataHoraEnvio: "2022-12-29 17:25:40",
            },
          },
          null,
          2,
        ),
        docs: "Link documentação\nhttps://mobilesaudejira.atlassian.net/wiki/spaces/MO/pages/2597683210/Api+Clientes+-+Envio+de+mensagem+Whatsapp",
      },
      {
        id: "5-4",
        name: "menWhatsMidiaAvulso",
        method: "POST",
        url: "https://api.mosiaomnichannel.com.br/clientes/mensageria/midia/avulso",
        headers: {
          "Content-Type": "application/json",
          Authorization: "",
        },
        body: JSON.stringify(
          {
            identificadorMsg: "1",
            idConfigWhatsapp: "63a45bfa127abfa74c1ac6b",
            template: {
              id: "sdfsdfsdfew432434",
              vars: {
                body: [
                  {
                    remover: "200000215454545445",
                  },
                ],
              },
            },
            celularDestinatario: {
              celular: "27999999999",
            },
            agendamento: {
              dataHoraEnvio: "2022-12-29 17:25:40",
            },
            attachments: [
              {
                name: "hello-word.png",
                contentType: "image/png",
                base64: "iVBORw0KGgoAAAANSUhEUgAABDgAAAkkCAIAAAB2sV...",
              },
            ],
          },
          null,
          2,
        ),
        docs: "Link documentação\nhttps://mobilesaudejira.atlassian.net/wiki/spaces/MO/pages/2597552344/Api+Clientes+-+Envio+de+mensagem+com+m+dia+Whatsapp",
      },
      {
        id: "5-5",
        name: "menWhatsMidiaContato",
        method: "POST",
        url: "https://api.mosiaomnichannel.com.br/clientes/mensageria/midia/contato",
        headers: {
          "Content-Type": "application/json",
          Authorization: "",
        },
        body: JSON.stringify(
          {
            identificadorMsg: "1",
            idConfigWhatsapp: "63a45bfa127abfa74c1ac6",
            template: {
              id: "sdfsdfdsfe435345fgdsfsd",
              vars: {
                body: [
                  {
                    remover: "200000215454545445",
                  },
                ],
              },
            },
            celularDestinatario: {
              celular: "27999999999",
            },
            contatoDestinatario: {
              chaveUnica: "everson@mobilesaude.com.br",
            },
            ocorrencia: {
              protocolo: "2000000000015452004",
            },
            contato: {
              nome: "Geraldo",
              chaveUnica: "01911165615",
              celular: "278282828",
            },
            agendamento: {
              dataHoraEnvio: "2022-12-29 17:25:40",
            },
            attachments: [
              {
                name: "hello-word.png",
                contentType: "image/png",
                base64: "iVBORw0KGgoAAAANSUhEUgAABDgAAAkkCAIAAAB2sV...",
              },
            ],
          },
          null,
          2,
        ),
        docs: "Link documentação\nhttps://mobilesaudejira.atlassian.net/wiki/spaces/MO/pages/2597552344/Api+Clientes+-+Envio+de+mensagem+com+m+dia+Whatsapp",
      },
    ],
  },
  {
    id: "6",
    name: "Meetings",
    requests: [
      {
        id: "6-1",
        name: "meetingsCriar",
        method: "POST",
        url: "https://api.mosiaomnichannel.com.br/clientes/meetings/criar",
        headers: {
          "Content-Type": "application/json",
          Authorization: "",
          instancia_aplicacao: "",
        },
        body: JSON.stringify(
          {
            identificadorExterno: "564657688",
            chaveUnica: "90994281978",
            tipoMeeting: 1,
            responsavelAtendimento: {
              nome: "Ranniêr Reis",
              chaveUnica: "90994281978",
            },
            paciente: {
              chaveUnica: "90994281978",
              numeroContrato: "00000000001",
            },
          },
          null,
          2,
        ),
        docs: "Link documentação\nhttps://mobilesaudejira.atlassian.net/wiki/spaces/MO/pages/2968780801/API+de+clientes+-+Criar+meeting",
      },
      {
        id: "6-2",
        name: "meetingsCancelar",
        method: "POST",
        url: "https://api.mosiaomnichannel.com.br/clientes/meetings/cancelar",
        headers: {
          "Content-Type": "application/json",
          Authorization: "",
          instancia_aplicacao: "",
        },
        body: JSON.stringify(
          {
            identificadorExterno: "564657688",
            idMeeting: null,
            tipoCancelamento: "4",
          },
          null,
          2,
        ),
        docs: "Link documentação\nhttps://mobilesaudejira.atlassian.net/wiki/spaces/MO/pages/2979725313/API+de+clientes+-+Cancelamento+de+meeting",
      },
      {
        id: "6-3",
        name: "meetingsAtualizarFila",
        method: "POST",
        url: "https://api.mosiaomnichannel.com.br/clientes/meetings/pronto-atendimento/fila",
        headers: {
          "Content-Type": "application/json",
          Authorization: "",
          instancia_aplicacao: "",
        },
        body: JSON.stringify(
          {
            fila: [
              {
                posicaoFila: "06",
                idSenha: "a3a51d16-e106-471a-99de-53461316a559",
              },
            ],
          },
          null,
          2,
        ),
        docs: "Link documentação\nhttps://mobilesaudejira.atlassian.net/wiki/spaces/MO/pages/2672001049/API+Clientes+-+Atualiza+o+de+fila",
      },
      {
        id: "6-4",
        name: "meetingsConsultaCancelar",
        method: "POST",
        url: "https://api.mosiaomnichannel.com.br/clientes/meetings/pronto-atendimento/cancelar",
        headers: {
          "Content-Type": "application/json",
          Authorization: "",
          instancia_aplicacao: "",
        },
        body: JSON.stringify(
          {
            responsavelAtendimento: "Ranniêr Reis",
            idSenha: "a3a51d16-e106-471a-99de-53461316a559",
          },
          null,
          2,
        ),
        docs: "Link documentação\nhttps://mobilesaudejira.atlassian.net/wiki/spaces/MO/pages/2672001058/API+Clientes+-+Cancelamento+da+consulta",
      },
      {
        id: "6-5",
        name: "meetingsConsultaEncerrar",
        method: "POST",
        url: "https://api.mosiaomnichannel.com.br/clientes/meetings/pronto-atendimento/encerrar",
        headers: {
          "Content-Type": "application/json",
          Authorization: "",
          instancia_aplicacao: "",
        },
        body: JSON.stringify(
          {
            responsavelAtendimento: "Ranniêr Reis",
            idSenha: "a3a51d16-e106-471a-99de-53461316a559",
            motivo: "",
          },
          null,
          2,
        ),
        docs: "Link documentação\nhttps://mobilesaudejira.atlassian.net/wiki/spaces/MO/pages/2747826187/API+Clientes+-+Encerramento+da+consulta",
      },
    ],
  },
  {
    id: "7",
    name: "Tarefas",
    requests: [
      {
        id: "7-1",
        name: "tarefasDisparar",
        method: "POST",
        url: "https://api.mosiaomnichannel.com.br/clientes/mensageria/tasks",
        headers: {
          "Content-Type": "application/json",
          Authorization: "",
        },
        body: JSON.stringify(
          {
            chaveUnica: "90994281978",
            identificacaoTask: "tarefa_1",
            contato: {
              nome: "Ranniêr Reis",
              email: "rannier@mobilesaude.com.br",
              telefone: "48984137055",
            },
            elegivel: true,
            execucao: formattedDate,
            expiracao: formattedDate,
            macros: {
              key1: "value1",
              key2: "value2",
            },
            protocolo: "protocoloXYZ",
            variaveis: [
              { name_1: "variavel1", value_1: "valor1" },
              { name_2: "variavel2", value_2: "valor2" },
            ],
          },
          null,
          2,
        ),
        docs: "Link documentação\nhttps://mobilesaudejira.atlassian.net/wiki/spaces/MO/pages/3274571789/Tarefas+do+Chatbot",
      },
    ],
  },
  {
    id: "8",
    name: "Omnilink - status",
    requests: [
      {
        id: "8-1",
        name: "health-check-full",
        method: "GET",
        url: "https://cors-anywhere.herokuapp.com/{enviroment_url_host}/health-check/full",
        headers: {
          "Content-Type": "application/json",
          omniAuthorization: "",
          idOperadora: "",
          ambiente: "",
          idConfigClienteApp: "",
        },
        body: JSON.stringify({}, null, 2),
        docs: "Link documentação\n",
      },
      {
        id: "8-2",
        name: "debug",
        method: "GET",
        url: "https://cors-anywhere.herokuapp.com/{enviroment_url_host}/debug",
        headers: {
          "Content-Type": "application/json",
          omniAuthorization: "",
          idOperadora: "",
          ambiente: "",
          idConfigClienteApp: "",
        },
        body: JSON.stringify({}, null, 2),
        docs: "Link documentação\n",
      },
      {
        id: "8-3",
        name: "health-check",
        method: "GET",
        url: "https://cors-anywhere.herokuapp.com/{enviroment_url_host}/health-check",
        headers: {
          "Content-Type": "application/json",
          omniAuthorization: "",
          idOperadora: "",
          ambiente: "",
          idConfigClienteApp: "",
        },
        body: JSON.stringify({}, null, 2),
        docs: "Link documentação\n",
      },
    ],
  },
  {
    id: "9",
    name: "Omnilink - autenticação",
    requests: [
      {
        id: "9-1",
        name: "login",
        method: "POST",
        url: "https://cors-anywhere.herokuapp.com/{enviroment_url_host}/authentication/login",
        headers: {
          "Content-Type": "application/json",
          omniAuthorization: "",
          idOperadora: "",
          ambiente: "",
          idConfigClienteApp: "",
        },
        body: JSON.stringify(
          {
            login: "11111111111",
            senha: "1234567",
          },
          null,
          2,
        ),
        docs: "Link documentação\n",
      },
      {
        id: "9-2",
        name: "primeiroAcesso",
        method: "POST",
        url: "https://cors-anywhere.herokuapp.com/{enviroment_url_host}/authentication/novoUsuario",
        headers: {
          "Content-Type": "application/json",
          omniAuthorization: "",
          idOperadora: "",
          ambiente: "",
          idConfigClienteApp: "",
        },
        body: JSON.stringify(
          {
            login: "111111111111",
            senha: "senha321",
            dataNascimento: "1990-01-01",
          },
          null,
          2,
        ),
        docs: "Link documentação\n",
      },
      {
        id: "9-2",
        name: "primeiroAcesso",
        method: "POST",
        url: "https://cors-anywhere.herokuapp.com/{enviroment_url_host}/authentication/novoUsuario",
        headers: {
          "Content-Type": "application/json",
          omniAuthorization: "",
          idOperadora: "",
          ambiente: "",
          idConfigClienteApp: "",
        },
        body: JSON.stringify(
          {
            login: "111111111111",
            senha: "senha321",
            dataNascimento: "1990-01-01",
          },
          null,
          2,
        ),
        docs: "Link documentação\n",
      },
      {
        id: "9-3",
        name: "relogin",
        method: "POST",
        url: "https://cors-anywhere.herokuapp.com/{enviroment_url_host}/authentication/relogin",
        headers: {
          "Content-Type": "application/json",
          omniAuthorization: "",
          idOperadora: "",
          ambiente: "",
          idConfigClienteApp: "",
        },
        body: JSON.stringify(
          {
            chaveUnica: "11111111111",
          },
          null,
          2,
        ),
        docs: "Link documentação\n",
      },
      {
        id: "9-4",
        name: "elegibilidade",
        method: "POST",
        url: "https://cors-anywhere.herokuapp.com/{enviroment_url_host}/authentication/elegibilidade",
        headers: {
          "Content-Type": "application/json",
          omniAuthorization: "",
          idOperadora: "",
          ambiente: "",
          idConfigClienteApp: "",
        },
        body: JSON.stringify(
          {
            chaveUnica: "11111111111",
          },
          null,
          2,
        ),
        docs: "Link documentação\n",
      },
      {
        id: "9-5",
        name: "grupoFamiliar",
        method: "POST",
        url: "https://cors-anywhere.herokuapp.com/{enviroment_url_host}/authentication/grupoFamiliar",
        headers: {
          "Content-Type": "application/json",
          omniAuthorization: "",
          idOperadora: "",
          ambiente: "",
          idConfigClienteApp: "",
        },
        body: JSON.stringify(
          {
            chaveUnica: "11111111111",
            idFuncionalidade: "16",
          },
          null,
          2,
        ),
        docs: "Link documentação\n",
      },
      {
        id: "9-6",
        name: "trocarSenha",
        method: "POST",
        url: "https://cors-anywhere.herokuapp.com/{enviroment_url_host}/authentication/trocarSenha",
        headers: {
          "Content-Type": "application/json",
          omniAuthorization: "",
          idOperadora: "",
          ambiente: "",
          idConfigClienteApp: "",
        },
        body: JSON.stringify(
          {
            chaveUnica: "foo",
            senhaAtua: "bar",
            novaSenha: "bar",
          },
          null,
          2,
        ),
        docs: "Link documentação\n",
      },
      {
        id: "9-7",
        name: "recSenhaQuestVerifica",
        method: "POST",
        url: "https://cors-anywhere.herokuapp.com/{enviroment_url_host}/authentication/recuperarSenhaQuestionarioVerificacao",
        headers: {
          "Content-Type": "application/json",
          omniAuthorization: "",
          idOperadora: "",
          ambiente: "",
          idConfigClienteApp: "",
        },
        body: JSON.stringify(
          {
            chaveUnica: "foo",
            questao1: "1",
            alternativa1: "alttoken1",
            questao2: "2",
            alternativa2: "alttoken2",
            questao3: "3",
            alternativa3: "alttoken3",
            seguranca: {},
            integracao: {},
          },
          null,
          2,
        ),
        docs: "Link documentação\n",
      },
      {
        id: "9-8",
        name: "recSenhaQuestionario",
        method: "POST",
        url: "https://cors-anywhere.herokuapp.com/{enviroment_url_host}/authentication/recuperarSenhaQuestionario",
        headers: {
          "Content-Type": "application/json",
          omniAuthorization: "",
          idOperadora: "",
          ambiente: "",
          idConfigClienteApp: "",
        },
        body: JSON.stringify(
          {
            chaveUnica: "11111111111",
            integracao: {
              chaveUnica: "11111111111",
              chave_unica: "11111111111",
            },
          },
          null,
          2,
        ),
        docs: "Link documentação\n",
      },
      {
        id: "9-9",
        name: "recSenhaNovaSenha",
        method: "POST",
        url: "https://cors-anywhere.herokuapp.com/{enviroment_url_host}/authentication/recuperarSenhaNovaSenha",
        headers: {
          "Content-Type": "application/json",
          omniAuthorization: "",
          idOperadora: "",
          ambiente: "",
          idConfigClienteApp: "",
        },
        body: JSON.stringify(
          {
            chaveUnica: "foo",
            nova_senha: "bar",
          },
          null,
          2,
        ),
        docs: "Link documentação\n",
      },
      {
        id: "9-10",
        name: "recSenhaIdentificacao",
        method: "POST",
        url: "https://cors-anywhere.herokuapp.com/{enviroment_url_host}/authentication/recuperarSenhaIdentificacao",
        headers: {
          "Content-Type": "application/json",
          omniAuthorization: "",
          idOperadora: "",
          ambiente: "",
          idConfigClienteApp: "",
        },
        body: JSON.stringify(
          {
            codigoBeneficiario: "1",
            cpf: "11111111111",
            dataNascimento: "1980-01-31",
          },
          null,
          2,
        ),
        docs: "Link documentação\n",
      },
    ],
  },
  {
    id: "10",
    name: "Omnilink - form",
    requests: [
      {
        id: "10-1",
        name: "preLoadData",
        method: "POST",
        url: "https://cors-anywhere.herokuapp.com/{enviroment_url_host}/form/preLoadData",
        headers: {
          "Content-Type": "application/json",
          omniAuthorization: "",
          idOperadora: "",
          ambiente: "",
          idConfigClienteApp: "",
        },
        body: JSON.stringify(
          {
            chaveUnica: "11111111111",
            idFuncionalidade: "16",
          },
          null,
          2,
        ),
        docs: "Link documentação\n",
      },
    ],
  },
  {
    id: "11",
    name: "Omnilink - extrato",
    requests: [
      {
        id: "11-1",
        name: "extratoUtilizacao",
        method: "POST",
        url: "https://cors-anywhere.herokuapp.com/{enviroment_url_host}/extratoUtilizacao/extrato",
        headers: {
          "Content-Type": "application/json",
          omniAuthorization: "",
          idOperadora: "",
          ambiente: "",
          idConfigClienteApp: "",
        },
        body: JSON.stringify(
          {
            chaveUnica: "foo",
            integracao: {
              chaveUnica: "foo",
            },
            dataInicial: "2025-01-01",
            dataFinal: "2025-01-31",
          },
          null,
          2,
        ),
        docs: "Link documentação\n",
      },
      {
        id: "11-2",
        name: "extratoCoparticipacao",
        method: "POST",
        url: "https://cors-anywhere.herokuapp.com/{enviroment_url_host}/extratoCoparticipacao/extrato",
        headers: {
          "Content-Type": "application/json",
          omniAuthorization: "",
          idOperadora: "",
          ambiente: "",
          idConfigClienteApp: "",
        },
        body: JSON.stringify(
          {
            chaveUnica: "foo",
            integracao: {
              chaveUnica: "foo",
            },
            dataInicial: "2025-01-01",
            dataFinal: "2025-01-31",
          },
          null,
          2,
        ),
        docs: "Link documentação\n",
      },
    ],
  },
  {
    id: "12",
    name: "Omnilink - debitos",
    requests: [
      {
        id: "12-1",
        name: "listaDebitos",
        method: "POST",
        url: "https://cors-anywhere.herokuapp.com/{enviroment_url_host}/debitos/listaDebitos",
        headers: {
          "Content-Type": "application/json",
          omniAuthorization: "",
          idOperadora: "",
          ambiente: "",
          idConfigClienteApp: "",
        },
        body: JSON.stringify(
          {
            chaveUnica: "foo",
            integracao: {
              chaveUnica: "foo",
            },
          },
          null,
          2,
        ),
        docs: "Link documentação\n",
      },
      {
        id: "12-2",
        name: "listaDebitos",
        method: "POST",
        url: "https://cors-anywhere.herokuapp.com/{enviroment_url_host}/debitos/detalheDebito",
        headers: {
          "Content-Type": "application/json",
          omniAuthorization: "",
          idOperadora: "",
          ambiente: "",
          idConfigClienteApp: "",
        },
        body: JSON.stringify(
          {
            chaveUnica: "foo",
            codigoTitulo: "bar",
            idTitulo: "baz",
            integracao: {
              chaveUnica: "foo",
            },
          },
          null,
          2,
        ),
        docs: "Link documentação\n",
      },
      {
        id: "12-3",
        name: "boletoPdf",
        method: "POST",
        url: "https://cors-anywhere.herokuapp.com/{enviroment_url_host}/debitos/boletoPdf",
        headers: {
          "Content-Type": "application/json",
          omniAuthorization: "",
          idOperadora: "",
          ambiente: "",
          idConfigClienteApp: "",
        },
        body: JSON.stringify(
          {
            chaveUnica: "foo",
            codigoTitulo: "bar",
            idTitulo: "baz",
            integracao: {
              chaveUnica: "foo",
            },
          },
          null,
          2,
        ),
        docs: "Link documentação\n",
      },
      {
        id: "12-4",
        name: "resumoCobranca",
        method: "POST",
        url: "https://cors-anywhere.herokuapp.com/{enviroment_url_host}/debitos/resumoCobranca",
        headers: {
          "Content-Type": "application/json",
          omniAuthorization: "",
          idOperadora: "",
          ambiente: "",
          idConfigClienteApp: "",
        },
        body: JSON.stringify(
          {
            chaveUnica: "foo",
            codigoTitulo: "bar",
            idTitulo: "baz",
            integracao: {
              chaveUnica: "foo",
            },
          },
          null,
          2,
        ),
        docs: "Link documentação\n",
      },
      {
        id: "12-5",
        name: "comprovantePdf",
        method: "POST",
        url: "https://cors-anywhere.herokuapp.com/{enviroment_url_host}/debitos/comprovantePdf",
        headers: {
          "Content-Type": "application/json",
          omniAuthorization: "",
          idOperadora: "",
          ambiente: "",
          idConfigClienteApp: "",
        },
        body: JSON.stringify(
          {
            chaveUnica: "foo",
            codigoTitulo: "bar",
            idTitulo: "baz",
            integracao: {
              chaveUnica: "foo",
            },
          },
          null,
          2,
        ),
        docs: "Link documentação\n",
      },
    ],
  },
  {
    id: "13",
    name: "Omnilink - declarações",
    requests: [
      {
        id: "13-1",
        name: "listarDeclaracoes",
        method: "POST",
        url: "https://cors-anywhere.herokuapp.com/{enviroment_url_host}/declaracao/listarDeclaracoes",
        headers: {
          "Content-Type": "application/json",
          omniAuthorization: "",
          idOperadora: "",
          ambiente: "",
          idConfigClienteApp: "",
        },
        body: JSON.stringify(
          {
            chaveUnica: "foo",
          },
          null,
          2,
        ),
        docs: "Link documentação\n",
      },
      {
        id: "13-2",
        name: "declaracaoPdf",
        method: "POST",
        url: "https://cors-anywhere.herokuapp.com/{enviroment_url_host}/declaracao/declaracaoPdf",
        headers: {
          "Content-Type": "application/json",
          omniAuthorization: "",
          idOperadora: "",
          ambiente: "",
          idConfigClienteApp: "",
        },
        body: JSON.stringify(
          {
            chaveUnica: "foo",
            idDeclaracao: "bar",
          },
          null,
          2,
        ),
        docs: "Link documentação\n",
      },
    ],
  },
];

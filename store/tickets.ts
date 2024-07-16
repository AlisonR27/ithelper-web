import { defineStore } from 'pinia'

export const useTicketStore = defineStore('tickets', () => {
    const tickets = ref([
        {
          label: "Problema com a impressora no Lab 3",
          status: "doing",
          updated: new Date().toLocaleString(),
          user: {
            name: "Alice Johnson",
            photo: null,
            department: { id: 1, name: "Laboratório de Informática" }
          }
        },
        {
          label: "Erro no sistema de email",
          status: "completed",
          updated: new Date().toLocaleString(),
          user: {
            name: "Bob Smith",
            photo: null,
            department: { id: 2, name: "Secretaria" }
          }
        },
        {
          label: "Computador lento na Sala 101",
          status: "doing",
          updated: new Date().toLocaleString(),
          user: {
            name: "Carla Gomez",
            photo: null,
            department: { id: 3, name: "Sala dos Professores" }
          }
        },
        {
          label: "Falha no projetor da Sala de Conferências",
          status: "pending",
          updated: new Date().toLocaleString(),
          user: {
            name: "David Lee",
            photo: null,
            department: { id: 4, name: "Administração" }
          }
        },
        {
          label: "Problema de conexão com a rede Wi-Fi",
          status: "doing",
          updated: new Date().toLocaleString(),
          user: {
            name: "Eva Brown",
            photo: null,
            department: { id: 1, name: "Laboratório de Informática" }
          }
        },
        {
          label: "Acesso não autorizado ao servidor de arquivos",
          status: "completed",
          updated: new Date().toLocaleString(),
          user: {
            name: "Frank White",
            photo: null,
            department: { id: 5, name: "Coordenação Pedagógica" }
          }
        },
        {
          label: "Software antivírus desatualizado",
          status: "pending",
          updated: new Date().toLocaleString(),
          user: {
            name: "Grace Clark",
            photo: null,
            department: { id: 1, name: "Laboratório de Informática" }
          }
        },
        {
          label: "Atualização do sistema operacional",
          status: "doing",
          updated: new Date().toLocaleString(),
          user: {
            name: "Hank Harris",
            photo: null,
            department: { id: 4, name: "Administração" }
          }
        },
        {
          label: "Reparo na cadeira ergonômica",
          status: "completed",
          updated: new Date().toLocaleString(),
          user: {
            name: "Ivy Turner",
            photo: null,
            department: { id: 1, name: "Biblioteca" }
          }
        },
        {
          label: "Tela do computador quebrada",
          status: "pending",
          updated: new Date().toLocaleString(),
          user: {
            name: "John Miller",
            photo: null,
            department: { id: 2, name: "Secretaria" }
          }
        },
        {
          label: "Problema de configuração no laboratório",
          status: "doing",
          updated: new Date().toLocaleString(),
          user: {
            name: "Kathy Lewis",
            photo: null,
            department: { id: 1, name: "Laboratório de Informática" }
          }
        },
        {
          label: "Instalação de software necessário",
          status: "completed",
          updated: new Date().toLocaleString(),
          user: {
            name: "Leo Walker",
            photo: null,
            department: { id: 3, name: "Sala dos Professores" }
          }
        },
        {
          label: "Não consegue acessar o portal de estudantes",
          status: "pending",
          updated: new Date().toLocaleString(),
          user: {
            name: "Mia Scott",
            photo: null,
            department: { id: 5, name: "Coordenação Pedagógica" }
          }
        },
        {
          label: "Erro no sistema de gerenciamento de cursos",
          status: "doing",
          updated: new Date().toLocaleString(),
          user: {
            name: "Nathan Adams",
            photo: null,
            department: { id: 4, name: "Administração" }
          }
        },
        {
          label: "Computador não liga",
          status: "completed",
          updated: new Date().toLocaleString(),
          user: {
            name: "Olivia Martinez",
            photo: null,
            department: { id: 1, name: "Biblioteca" }
          }
        },
        {
          label: "Impressora sem toner",
          status: "pending",
          updated: new Date().toLocaleString(),
          user: {
            name: "Paul Nelson",
            photo: null,
            department: { id: 2, name: "Secretaria" }
          }
        },
        {
          label: "Problema com o sistema de backup",
          status: "doing",
          updated: new Date().toLocaleString(),
          user: {
            name: "Quinn Robinson",
            photo: null,
            department: { id: 1, name: "Laboratório de Informática" }
          }
        },
        {
          label: "Monitor com linhas verticais",
          status: "completed",
          updated: new Date().toLocaleString(),
          user: {
            name: "Rachel King",
            photo: null,
            department: { id: 3, name: "Sala dos Professores" }
          }
        },
        {
          label: "Falta de espaço no servidor",
          status: "pending",
          updated: new Date().toLocaleString(),
          user: {
            name: "Steve Allen",
            photo: null,
            department: { id: 5, name: "Coordenação Pedagógica" }
          }
        },
        {
          label: "Configuração de rede incorreta",
          status: "doing",
          updated: new Date().toLocaleString(),
          user: {
            name: "Tina Young",
            photo: null,
            department: { id: 4, name: "Administração" }
          }
        },
        {
          label: "Problema com a instalação de drivers",
          status: "completed",
          updated: new Date().toLocaleString(),
          user: {
            name: "Ursula Wright",
            photo: null,
            department: { id: 1, name: "Biblioteca" }
          }
        },
        {
          label: "Erro de autenticação no sistema",
          status: "pending",
          updated: new Date().toLocaleString(),
          user: {
            name: "Victor Green",
            photo: null,
            department: { id: 2, name: "Secretaria" }
          }
        },
        {
          label: "Falha no software de videoconferência",
          status: "doing",
          updated: new Date().toLocaleString(),
          user: {
            name: "Wendy Harris",
            photo: null,
            department: { id: 1, name: "Laboratório de Informática" }
          }
        },
        {
          label: "Problema com o carregador do laptop",
          status: "completed",
          updated: new Date().toLocaleString(),
          user: {
            name: "Xander Lewis",
            photo: null,
            department: { id: 3, name: "Sala dos Professores" }
          }
        },
        {
          label: "Sistema travando frequentemente",
          status: "pending",
          updated: new Date().toLocaleString(),
          user: {
            name: "Yvonne Anderson",
            photo: null,
            department: { id: 5, name: "Coordenação Pedagógica" }
          }
        },
        {
          label: "Atualização de software falhou",
          status: "doing",
          updated: new Date().toLocaleString(),
          user: {
            name: "Zachary Evans",
            photo: null,
            department: { id: 4, name: "Administração" }
          }
        }
    ]);

    return { tickets }
})
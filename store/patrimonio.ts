import { defineStore } from 'pinia'

export const usePatrimonioStore = defineStore('patrimonio', () => {
    const patrimonio = ref([
        { id: 1, name: 'PC Dell Inspiron', category: { name: 'Computadores', id: 1 }, department: { name: 'Laboratório de Informática', id: 4 } },
        { id: 2, name: 'Projetor Epson X123', category: { name: 'Projetores', id: 2 }, department: { name: 'Sala dos Professores', id: 6 } },
        { id: 3, name: 'Quadro Branco 120x90', category: { name: 'Quadros', id: 3 }, department: { name: 'Coordenação Pedagógica', id: 2 } },
        { id: 4, name: 'Cadeira Ergonomica', category: { name: 'Cadeiras', id: 4 }, department: { name: 'Biblioteca', id: 3 } },
        { id: 5, name: 'Mesa Reunião 200x100', category: { name: 'Mesas', id: 5 }, department: { name: 'Administração', id: 1 } },
        { id: 6, name: 'PC HP Pavilion', category: { name: 'Computadores', id: 1 }, department: { name: 'Secretaria', id: 5 } },
        { id: 7, name: 'Projetor BenQ MX535', category: { name: 'Projetores', id: 2 }, department: { name: 'Laboratório de Informática', id: 4 } },
        { id: 8, name: 'Quadro de Avisos', category: { name: 'Quadros', id: 3 }, department: { name: 'Sala dos Professores', id: 6 } },
        { id: 9, name: 'Cadeira de Escritório', category: { name: 'Cadeiras', id: 4 }, department: { name: 'Coordenação Pedagógica', id: 2 } },
        { id: 10, name: 'Mesa de Estudo', category: { name: 'Mesas', id: 5 }, department: { name: 'Biblioteca', id: 3 } },
        { id: 11, name: 'PC Lenovo ThinkPad', category: { name: 'Computadores', id: 1 }, department: { name: 'Laboratório de Informática', id: 4 } },
        { id: 12, name: 'Projetor Sony VPL', category: { name: 'Projetores', id: 2 }, department: { name: 'Coordenação Pedagógica', id: 2 } },
        { id: 13, name: 'Quadro Verde', category: { name: 'Quadros', id: 3 }, department: { name: 'Administração', id: 1 } },
        { id: 14, name: 'Cadeira de Madeira', category: { name: 'Cadeiras', id: 4 }, department: { name: 'Secretaria', id: 5 } },
        { id: 15, name: 'Mesa de Reunião Redonda', category: { name: 'Mesas', id: 5 }, department: { name: 'Sala dos Professores', id: 6 } },
        { id: 16, name: 'PC Asus VivoBook', category: { name: 'Computadores', id: 1 }, department: { name: 'Biblioteca', id: 3 } },
        { id: 17, name: 'Projetor LG PF50KA', category: { name: 'Projetores', id: 2 }, department: { name: 'Administração', id: 1 } },
        { id: 18, name: 'Quadro de Cortiça', category: { name: 'Quadros', id: 3 }, department: { name: 'Coordenação Pedagógica', id: 2 } },
        { id: 19, name: 'Cadeira Giratória', category: { name: 'Cadeiras', id: 4 }, department: { name: 'Laboratório de Informática', id: 4 } },
        { id: 20, name: 'Mesa de Escritório', category: { name: 'Mesas', id: 5 }, department: { name: 'Secretaria', id: 5 } }
        ])

    const categories =  ref([
        { name: 'Selecione a categoria', value: 0},
        { name: 'Computadores', value: 1 },
        { name: 'Projetores', value: 2 },
        { name: 'Quadros', value: 3 },
        { name: 'Cadeiras', value: 4 },
        { name: 'Mesas', value: 5 }
    ])

    const departments = ref([
        { name: 'Selecione o Departamento', value: 0},
        { name: 'Administração', value: 1 },
        { name: 'Coordenação Pedagógica', value: 2 },
        { name: 'Biblioteca', value: 3 },
        { name: 'Laboratório de Informática', value: 4 },
        { name: 'Secretaria', value: 5 },
        { name: 'Sala dos Professores', value: 6 }
    ])

    
    return { patrimonio, departments, categories }
 })

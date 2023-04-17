import axios from 'axios';
//cria uma instância do axios com a url base do webservice a ser acessado pelo app
export const inAxios = axios.create({baseURL:'http://localhost:3001/'});



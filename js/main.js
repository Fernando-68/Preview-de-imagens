'use strict'

import { criarPreview } from "./pages/preview.js"
import { criarLogin } from "./pages/login.js"


const paginas = {
    preview: {
        titulo: 'PREVIEW DE IMAGENS',
        renderizar: criarPreview
    },
    login: {
        titulo: 'Login no XYZ',
        renderizar: criarLogin
    }
}

paginas.preview.titulo

export function renderizarPagina (nomePagina){
    const pagina = paginas[nomePagina].renderizar()

    document.getElementById('main').replaceChildren(pagina)
}

renderizarPagina('login')




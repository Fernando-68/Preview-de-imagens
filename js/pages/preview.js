import { renderizarPagina } from "../main.js"


        export function criarPreview() {
            
        const container = document.createElement('form')

        const previewContainer = document.createElement('div')
        previewContainer.classList.add('preview-container')


        const input = document.createElement('input')
        input.id = 'preview-input'
        input.classList.add('preview-input')
        input.type = 'file'
        input.accept = 'image/*'


        const label = document.createElement('label')
        label.className = 'preview'
        label.htmlFor = 'preview-input'


        const image = document.createElement('img')
        image.id = 'preview-image'
        image.className = 'preview-image'
        image.src = './img/upload-icon.svg'

        const buttonContainer = document.createElement('div')
        buttonContainer.className = 'button-container'

        const uploadButton = document.createElement('button')
        uploadButton.className = 'button'
        uploadButton.type = 'button'
        uploadButton.id = 'upload-button'
        uploadButton.textContent = 'Salvar'
        
        
        const cancelarButton = document.createElement('button')
        cancelarButton.className = 'button'
        cancelarButton.type = 'button'
        cancelarButton.textContent = 'Cancelar'
        cancelarButton.onclick = ()=> renderizarPagina('login')

        previewContainer.append(input, label, image)

        buttonContainer.append(uploadButton, cancelarButton)

        container.append(previewContainer, buttonContainer)

        return container
    }
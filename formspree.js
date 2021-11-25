const formulario = document.querySelector('#formulario');

async function resolverEnvio(event)
{
    event.preventDefault();
    const $formulario = new FormData(this);
    const respuesta = await fetch(this.action, 
        {
            method: this.method,
            body: $formulario,
            headers: 
            {
                'Accept': 'application/json'
            }
        });

        if (respuesta.ok)
        {
            formulario.reset();
            alert("Gracias por tu mensaje, te responderé pronto. :D")
        }
}

formulario.addEventListener('submit', resolverEnvio);
const formulario = document.querySelector("#formulario");
const botonCorreo = document.querySelector("#invisible");

formulario.addEventListener("submit", resolverEnvio);

function resolverEnvio(event)
{
    event.preventDefault();
    const _formulario = new FormData(this);
    botonCorreo.setAttribute("href", `mailto:jsruedatorres@gmail.com?subject=Nombre: ${_formulario.get("nombre")}, Correo: ${_formulario.get("correo")}&body=${_formulario.get("mensaje")}`);
    botonCorreo.click();
}
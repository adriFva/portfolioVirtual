window.onload = () => {

    function registroVisible() {
        document.querySelector("#traslado").classList.toggle("tarjeta");
    }

    document.querySelector("#go_registro").onclick = registroVisible;
}
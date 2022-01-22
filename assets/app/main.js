let pagina_Articulos = document.querySelector(".azul");
pagina_Articulos.addEventListener("click", e => {
    window.open("index2.html");
});
document.querySelectorAll(".articulos").forEach(item => {
    item.addEventListener("click", e => {
        window.open("index2.html");
    })
});
let datos;
let detalle = document.querySelector("#detalle");
let mostrarArticulo = (e) => {
    let userSel = datos[Number(e.currentTarget.id)];
    detalle.innerHTML = `<h1 class="titulo">${userSel.articulo}</h1>
    <img class="imagen" src="${userSel.img}" alt="imagen">
    <p class="piedefoto">${userSel.autor}</p>
    <p>${userSel.cuerpo}</p>`

}
fetch("assets/app/data.json")
    .then(response => response.json())
    .then(data => {
        datos = data;
        let user = document.querySelector("#json");
        data.forEach((item, index) => {
            let articulo = `<img id="${index}" class="imagen" src="${item.img}" alt="imagen" >`
            user.innerHTML += articulo;
        });
    })
    .then(() => {
        let users = document.querySelectorAll(".imagen");
        users.forEach((item) => {
            item.addEventListener("click", mostrarArticulo, true)
        })
    });
let recargar = document.querySelector(".azul2");
recargar.addEventListener("click", e => {
    window.location.reload();
})
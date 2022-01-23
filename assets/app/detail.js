let datos;
let detalle = document.querySelector("#detalle");
let mostrarArticulo = (e) => {
    let userSel = datos[Number(e.currentTarget.id)];
    detalle.innerHTML = `<h1 class="titulo">${userSel.articulo}</h1>
    <img class="imagen" src="${userSel.img}" alt="imagen">
    <p class="piedefoto">${userSel.autor}</p>
    <p>${userSel.cuerpo}</p>`;
}

fetch("assets/app/data.json")
    .then(response => response.json())
    .then(data => {
        datos = data;
        let user = document.querySelector("#json");
        data.forEach((item, index) => {
            let articulo = `<img id="${index}" class="imagen" src="${item.img}" alt="imagen" >`;
            user.innerHTML += articulo;
        });
    })
    .then(() => {
        let users = document.querySelectorAll(".imagen");
        users.forEach((item) => {
            item.addEventListener("click", mostrarArticulo, true);
        })
    });
let recargar = document.querySelector(".azul2");
recargar.addEventListener("click", e => {
    window.open('index2.html', '_self');
})

let obtenerParam = (url) => {
    let urlParam = String(url.match(/\?+.+/));
    urlParam = urlParam.replace("?id=", "");
    return urlParam;
}
let param = obtenerParam(document.URL);
fetch('assets/app/data.json')
    .then(res => res.json())
    .then(data => {
        let user = data[Number(param)]
        if(param != null){
            detalle.innerHTML = `<h1 class="titulo">${user.articulo}</h1>
            <img class="imagen" src="${user.img}" alt="imagen">
            <p class="piedefoto">${user.autor}</p>
            <p>${user.cuerpo}</p>`;
        }
})
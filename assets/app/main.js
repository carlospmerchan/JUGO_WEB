let pagina_Articulos = document.querySelector(".azul");
pagina_Articulos.addEventListener("click", e => {
    window.open("index2.html");
});
// document.querySelectorAll(".articulos").forEach(item => {
//     item.addEventListener("click", e => {
//         window.open("index2.html");
//     })
// });
let mostrarArticulo2 = (e) => {
    window.open(`index2.html?id=${e.currentTarget.id}`, '_blank');
}
let datos;
fetch("assets/app/data.json")
    .then(response => response.json())
    .then(data => {
        datos = data;
        let userArticulos = document.querySelectorAll(".articulos");
        userArticulos.forEach((user) => {
            user.addEventListener("click", mostrarArticulo2)
        })
    })
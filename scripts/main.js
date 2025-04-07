import { series } from "./data.js";
var tableBody = document.getElementById("series");
function renderSeriesTable() {
    series.forEach(function (serie) {
        var row = document.createElement("tr");
        row.innerHTML = "<td>".concat(serie.id, "</td> <td><a href=\"#\" class=\"serie-link\">").concat(serie.name, "</a><td>").concat(serie.channel, "</td><td>").concat(serie.seasons, "</td>");
        var link = row.querySelector(".serie-link");
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Para que no recargue la página
            mostrarDetalle(serie);
        });
        tableBody.appendChild(row);
    });
}
renderSeriesTable();
function calcularPromedioTemporadas() {
    var totalSeasons = series.reduce(function (sum, serie) { return sum + serie.seasons; }, 0);
    return totalSeasons / series.length;
}
function mostrarPromedio() {
    var promedioElement = document.getElementById("averageSeasons");
    promedioElement.textContent = "El promedio de temporadas es: ".concat(Math.round(calcularPromedioTemporadas()));
}
mostrarPromedio();
var detailContainer = document.getElementById('serie-detail');
function mostrarDetalle(serie) {
    detailContainer.innerHTML = "\n    <div class=\"card\" style=\"width: 18rem;\">\n      <img src=\"".concat(serie.image, "\" class=\"card-img-top\" alt=\"").concat(serie.name, "\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">").concat(serie.name, "</h5>\n        <p class=\"card-text\">").concat(serie.description, "</p>\n        <a href=\"").concat(serie.url, "\" target=\"_blank\">").concat(serie.url, "</a>\n      </div>\n    </div>\n  ");
}

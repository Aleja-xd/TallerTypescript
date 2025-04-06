import { series } from "./data.js";
var tableBody = document.getElementById("series");
function renderSeriesTable() {
    series.forEach(function (serie) {
        var row = document.createElement("tr");
        row.innerHTML = "<td>".concat(serie.id, "</td><td>").concat(serie.name, "</td><td>").concat(serie.channel, "</td><td>").concat(serie.seasons, "</td>");
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

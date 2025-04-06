import { series } from "./data.js";
import { Serie } from "./Serie.js";

const tableBody = document.getElementById("series") as HTMLTableSectionElement;

function renderSeriesTable(): void {
    series.forEach((serie) => {
        let row = document.createElement("tr");
        row.innerHTML = `<td>${serie.id}</td><td>${serie.name}</td><td>${serie.channel}</td><td>${serie.seasons}</td>`;
        tableBody.appendChild(row);
    });
}

renderSeriesTable();

function calcularPromedioTemporadas(): number {
    let totalSeasons = series.reduce((sum, serie) => sum + serie.seasons, 0);
    return totalSeasons / series.length;
}

function mostrarPromedio(): void {
    const promedioElement = document.getElementById("averageSeasons") as HTMLElement;
    promedioElement.textContent = `El promedio de temporadas es: ${Math.round(calcularPromedioTemporadas())}`;
}

mostrarPromedio();

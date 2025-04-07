import { series } from "./data.js";
import { Serie } from "./Serie.js";

const tableBody = document.getElementById("series") as HTMLTableSectionElement;

function renderSeriesTable(): void {
    series.forEach((serie) => {
        let row = document.createElement("tr");
        row.innerHTML = `<td>${serie.id}</td> <td><a href="#" class="serie-link">${serie.name}</a><td>${serie.channel}</td><td>${serie.seasons}</td>`;
        
        const link = row.querySelector(".serie-link") as HTMLAnchorElement;
        link.addEventListener("click", (event) => {
            event.preventDefault(); // Para que no recargue la página
            mostrarDetalle(serie);
        });

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

const detailContainer: HTMLElement = document.getElementById('serie-detail')!;

function mostrarDetalle(serie: Serie): void {
    //La imagen no me carga en live server, sin embargo en http://localhost:3000/ si
    detailContainer.innerHTML = `
    <div class="card" style="width: 18rem;">
      <img src="${serie.image}" class="card-img-top" alt="${serie.name}">
      <div class="card-body">
        <h5 class="card-title">${serie.name}</h5>
        <p class="card-text">${serie.description}</p>
        <a href="${serie.url}" target="_blank">${serie.url}</a>
      </div>
    </div>
  `;
}
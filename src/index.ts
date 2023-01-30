import { characters } from "./personajes";

function createCharacterHTML(characters) {
  let html = `
  <div class="app container">
    <ul class="characters-list row list-unstyled">
  `;

  characters.forEach(character => {
    html += `
      <li class="character col">
        <div class="card character__card">
          <img src="img/${character.name.toLowerCase().replace(/ /g, '-')}.jpg" alt="${character.name}" class="character__picture card-img-top" />
          <div class="card-body">
            <h2 class="character__name card-title h4" id="${character.name.toLowerCase().replace(/ /g, '-')}">${character.name}</h2>
            <div class="character__info">
              <ul class="list-unstyled">
                <li>Edad: X años</li>
                <li>
                  Estado:
                  <i class="fas fa-thumbs-down"></i>
                  <i class="fas fa-thumbs-up"></i>
                </li>
              </ul>
            </div>
            <div class="character__overlay">
              <ul class="list-unstyled">
    `;

    if (character.role instanceof Rey) {
      html += `
                <li>Años de reinado: ${character.role.yearsOfReign}</li>
      `;
    } else if (character.role instanceof Luchador) {
      html += `
                <li>Arma: ${character.role.weapon}</li>
                <li>Destreza: ${character.role.fightingSkill}</li>
      `;
    } else if (character.role instanceof Asesor) {
      html += `
                <li>Asesora a: ${character.role.advises}</li>
      `;
    } else if (character.role instanceof Escudero) {
      html += `
                <li>Sirve a: ${character.role.serves}</li>
      `;
    }

    html += `
              </ul>
              <div class="character__actions">
                <button class="character__action btn">habla</button>
                <button class="character__action btn">muere</button>
              </div>
            </div>
          </div>
          <i class="emoji"></i>
        </div>
      </li>
    `;
  });

  html += `
    </ul>
  </div>
  <div class="comunications">
    <p class="comunications__text display-1">Una frase que dice alguien</p>
    <img class="comunications__picture" src="img/no-one.jpg" alt="Nombre

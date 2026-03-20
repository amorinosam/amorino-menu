const allergenMeta = {
  huevos: { icon: "🥚", label: "Huevos" },
  frutos_secos: { icon: "🌰", label: "Frutos secos" },
  leche: { icon: "🥛", label: "Leche" },
  soja: { icon: "🌱", label: "Soja" },
  mani: { icon: "🥜", label: "Maní" }
};

const sorbets = [
  {
    name: "Mango",
    image: "imagenes/mango.jpg",
    desc: "Sorbete afrutado y tropical, muy fresco y luminoso.",
    allergens: []
  },
  {
    name: "Limón",
    image: "imagenes/limon.jpg",
    desc: "Sorbete cítrico y refrescante, ideal para un sabor ligero.",
    allergens: []
  },
  {
    name: "Lima",
    image: "imagenes/lima.jpg",
    desc: "Sabor vivo y ácido, con un perfil muy fresco.",
    allergens: []
  },
  {
    name: "Frutilla",
    image: "imagenes/frutilla.jpg",
    desc: "Sorbete dulce y natural, con sabor claro a fruta roja.",
    allergens: []
  },
  {
    name: "Maracuyá",
    image: "imagenes/maracuja.jpg",
    desc: "Exótico e intenso, con el punto ácido típico de la fruta de la pasión.",
    allergens: []
  },
  {
    name: "Banana",
    image: "imagenes/banana.jpg",
    desc: "Sorbete suave y frutal, con un perfil redondo y cremoso al paladar.",
    allergens: []
  },
  {
    name: "Chocolate Bio",
    image: "imagenes/bio.jpg",
    desc: "Sorbete de chocolate con sabor intenso y perfil puro de cacao.",
    allergens: []
  }
];

const gelatos = [
  {
    name: "Pistacho",
    image: "imagenes/pistacho.jpg",
    desc: "Gelato de pistacho Mawardi, el llamado oro verde, con un aroma emblemático y elegante.",
    allergens: ["soja", "huevos", "frutos_secos", "leche"]
  },
  {
    name: "Chocolate",
    image: "imagenes/chocolate.jpg",
    desc: "Gelato cremoso de chocolate, intenso y redondo.",
    allergens: ["soja", "huevos", "leche"]
  },
  {
    name: "Stracciatella",
    image: "imagenes/stracciatella.jpg",
    desc: "La suavidad de la flor de leche se mezcla con virutas de chocolate negro para un contraste delicioso.",
    allergens: ["soja", "leche"]
  },
  {
    name: "Vainilla",
    image: "imagenes/vainilla.jpg",
    desc: "Gelato de vainilla bourbon, aromático, suave y clásico.",
    allergens: ["soja", "leche"]
  },
  {
    name: "Tiramisú",
    image: "imagenes/tiramisu.jpg",
    desc: "La intensidad del café y del cacao se equilibra con la suavidad del mascarpone en una textura muy cremosa.",
    allergens: ["soja", "huevos", "frutos_secos", "leche"]
  },
  {
    name: "Café",
    image: "imagenes/cafe.jpg",
    desc: "Gelato de café 100% arabica, aromático y profundo.",
    allergens: ["soja", "huevos", "leche"]
  },
  {
    name: "Caramelo",
    image: "imagenes/caramelo.jpg",
    desc: "Caramelo con mantequilla salada, suave, goloso y con un punto salino.",
    allergens: ["soja", "huevos", "leche"]
  },
  {
    name: "Yogurt",
    image: "imagenes/yogurt.jpg",
    desc: "Gelato de yogurt sin grasa, fresco y ligero.",
    allergens: ["soja", "leche"]
  },
  {
    name: "Amarena",
    image: "imagenes/amarena.jpg",
    desc: "Cerezas amarena llenas de sabor y ligeramente aciduladas, un clásico imprescindible de gelateria italiana.",
    allergens: ["soja", "huevos", "leche"]
  },
  {
    name: "Maní",
    image: "imagenes/mani.jpg",
    desc: "Gelato de cacahuete tostado con caramelo de mantequilla salada y toque crujiente de pralina de cacahuete.",
    allergens: ["soja", "huevos", "leche", "mani"]
  },
  {
    name: "Dulce de leche",
    image: "imagenes/dulce_de_leche.jpg",
    desc: "Gelato de dulce de leche ligeramente caramelizado, con sabor dulce y reconfortante, realzado con coulis de dulce de leche.",
    allergens: ["soja", "leche"]
  },
  {
    name: "Menta",
    image: "imagenes/menta.jpg",
    desc: "Gelato refrescante de menta con virutas de chocolate.",
    allergens: ["soja", "leche"]
  },
  {
    name: "Coco",
    image: "imagenes/coco.jpg",
    desc: "Gelato de coco de Sri Lanka, suave y exótico.",
    allergens: ["soja", "leche"]
  },
  {
    name: "Inimitable",
    image: "imagenes/inimitable.jpg",
    desc: "Combinación de chocolate y avellana con perfil intenso y goloso.",
    allergens: ["soja", "huevos", "frutos_secos", "leche"]
  }
];

function renderAllergens(allergens = []) {
  if (!allergens.length) {
    return `
      <div class="allergen-section">
        <div class="allergen-list">
          <div class="allergen-chip">
            <span class="allergen-icon">🌿</span>
            <span>Vegano</span>
          </div>
        </div>
      </div>
    `;
  }

  return `
    <div class="allergen-section">
      <div class="allergen-title">Alérgenos</div>
      <div class="allergen-list">
        ${allergens.map(key => {
          const item = allergenMeta[key];
          if (!item) return "";
          return `
            <div class="allergen-chip">
              <span class="allergen-icon">${item.icon}</span>
              <span>${item.label}</span>
            </div>
          `;
        }).join("")}
      </div>
    </div>
  `;
}

function createCardHTML(item) {
  return `
    <div class="card-inner">
      <div class="card-front">
        <div class="image-wrap">
          ${item.image ? `<img src="${item.image}" alt="${item.name}">` : ""}
        </div>
        <div class="front-bottom">
          <div class="front-title">${item.name}</div>
          <span class="flip-hint">↻</span>
        </div>
      </div>

      <div class="card-back">
        <div class="back-top">
          <h4>${item.name}</h4>
          <span class="back-flip">↻</span>
        </div>
        <p>${item.desc || "Más información pronto."}</p>
        ${renderAllergens(item.allergens)}
      </div>
    </div>
  `;
}

function render(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = "";

  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = createCardHTML(item);

    card.addEventListener("click", () => {
      card.classList.toggle("flip");
    });

    container.appendChild(card);
  });
}

render("sorbets", sorbets);
render("gelatos", gelatos);
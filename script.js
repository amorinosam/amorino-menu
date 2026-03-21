const supportedLocales = ["pt", "es", "en", "it", "fr"];

function getLocale() {
  const browserLang = (navigator.language || navigator.userLanguage || "en").toLowerCase();
  const shortLang = browserLang.slice(0, 2);
  return supportedLocales.includes(shortLang) ? shortLang : "en";
}

const locale = getLocale();

const uiText = {
  es: {
    home: {
  heroTitle: "Todos nuestros conos<br>son una flor",
  heroSubtitle: "Puedes incluir todos los sabores que quieras",
  howItWorks: "Cómo funciona",
  flavors: "Sabores",
  otherProducts: "Otros productos",
  review: "Dejar reseña",
  serviceNoteTitle: "Tu experiencia comienza en el mostrador",
  serviceNoteText: "Descubre nuestros sabores y opciones antes de pedir"
},
    flavorsPage: {
      mainTitle: "Nuestros sabores",
      sorbets: "SORBETS",
      gelato: "GELATO"
    },
    howItWorks: {
      pageTitle: "Crear tu flor gelato es muy simple",
      step1Number: "PASO 1",
      step1Title: "Elige tu tamaño",
      sizeSmall: "Pequeño",
      sizeMedium: "Mediano",
      sizeLarge: "Grande",
      step1Text: "Tu cono siempre se servirá en forma de flor.",
      step2Number: "PASO 2",
      step2Title: "Elige los sabores que quieras",
      step2Text: "Puedes incluir todos los sabores que quieras.",
      step3Number: "PASO 3",
      step3Title: "Haz tu gelato aún más especial",
      step3Text: "Añade tus toppings favoritos.",
      step4Number: "PASO 4",
      step4Title: "Disfruta tu creación",
      step4TextMain: "Ahora solo queda disfrutar tu gelato.",
      step4TextSoft: "Si tu experiencia te encantó, compártela con nosotros.",
      navTitle: "¿Qué quieres ver ahora?",
      backToMenu: "Volver al menú",
      flavors: "Sabores",
      otherProducts: "Otros productos",
      review: "Dejar reseña",
      reviewGoogle: "Valóranos en",
    },
    miniFlavors: {
      pistachio: "Pistacho",
      mango: "Mango",
      strawberry: "Frutilla",
      passionfruit: "Maracuyá",
      lemon: "Limón",
      amarena: "Amarena",
      tiramisu: "Tiramisú",
      stracciatella: "Stracciatella",
      chocolate: "Chocolate",
      dulceDeLeche: "Dulce de leche",
      coconut: "Coco",
      coffee: "Café",
      mint: "Menta",
      vanilla: "Vainilla"
    },
    toppings: {
      macaron: "Macaron",
      gianduiotto: "Gianduiotto",
      chantilly: "Chantilly",
      pistachioSauce: "Salsa pistacho",
      gianduja: "Gianduja",
      caramel: "Caramelo",
      darkChocolate: "Chocolate negro",
      crunchy: "Crocante"
    },
    allergens: {
      title: "Alérgenos",
      vegan: "Vegano",
      eggs: "Huevos",
      treeNuts: "Frutos secos",
      milk: "Leche",
      soy: "Soja",
      peanut: "Maní"
    }
  },

  pt: {
    home: {
  heroTitle: "Todos os nossos cones<br>são uma flor",
  heroSubtitle: "Pode incluir todos os sabores que quiser",
  howItWorks: "Como funciona",
  flavors: "Sabores",
  otherProducts: "Outros produtos",
  review: "Deixar avaliação",
  serviceNoteTitle: "A tua experiência começa ao balcão",
  serviceNoteText: "Descobre os nossos sabores e opções antes de pedir"
},
    flavorsPage: {
      mainTitle: "Os nossos sabores",
      sorbets: "SORBETS",
      gelato: "GELATO"
    },
    howItWorks: {
      pageTitle: "Criar a tua flor gelato é muito simples",
      step1Number: "PASSO 1",
      step1Title: "Escolhe o teu tamanho",
      sizeSmall: "Pequeno",
      sizeMedium: "Médio",
      sizeLarge: "Grande",
      step1Text: "O teu cone será sempre servido em forma de flor.",
      step2Number: "PASSO 2",
      step2Title: "Escolhe os sabores que quiseres",
      step2Text: "Podes incluir todos os sabores que quiseres.",
      step3Number: "PASSO 3",
      step3Title: "Torna o teu gelato ainda mais especial",
      step3Text: "Adiciona os teus toppings favoritos.",
      step4Number: "PASSO 4",
      step4Title: "Desfruta da tua criação",
      step4TextMain: "Agora só falta aproveitar o teu gelato.",
      step4TextSoft: "Se adoraste a experiência, partilha-a connosco.",
      navTitle: "O que queres ver agora?",
      backToMenu: "Voltar ao menu",
      flavors: "Sabores",
      otherProducts: "Outros produtos",
      review: "Deixar avaliação",
      reviewGoogle: "Avalia-nos no",
    },
    miniFlavors: {
      pistachio: "Pistácio",
      mango: "Manga",
      strawberry: "Morango",
      passionfruit: "Maracujá",
      lemon: "Limão",
      amarena: "Amarena",
      tiramisu: "Tiramisù",
      stracciatella: "Stracciatella",
      chocolate: "Chocolate",
      dulceDeLeche: "Doce de leite",
      coconut: "Coco",
      coffee: "Café",
      mint: "Menta",
      vanilla: "Baunilha"
    },
    toppings: {
      macaron: "Macaron",
      gianduiotto: "Gianduiotto",
      chantilly: "Chantilly",
      pistachioSauce: "Molho de pistácio",
      gianduja: "Gianduja",
      caramel: "Caramelo",
      darkChocolate: "Chocolate negro",
      crunchy: "Crocante"
    },
    allergens: {
      title: "Alergénios",
      vegan: "Vegan",
      eggs: "Ovos",
      treeNuts: "Frutos secos",
      milk: "Leite",
      soy: "Soja",
      peanut: "Amendoim"
    }
  },

  en: {
    home: {
  heroTitle: "All our cones<br>are shaped like a flower",
  heroSubtitle: "You can include as many flavors as you want",
  howItWorks: "How it works",
  flavors: "Flavors",
  otherProducts: "Other products",
  review: "Leave a review",
  serviceNoteTitle: "Your experience begins at the counter",
  serviceNoteText: "Discover our flavors and options before ordering"
},
    flavorsPage: {
      mainTitle: "Our flavors",
      sorbets: "SORBETS",
      gelato: "GELATO"
    },
    howItWorks: {
      pageTitle: "Creating your gelato flower is very simple",
      step1Number: "STEP 1",
      step1Title: "Choose your size",
      sizeSmall: "Small",
      sizeMedium: "Medium",
      sizeLarge: "Large",
      step1Text: "Your cone will always be served as a flower.",
      step2Number: "STEP 2",
      step2Title: "Choose the flavors you want",
      step2Text: "You can include as many flavors as you want.",
      step3Number: "STEP 3",
      step3Title: "Make your gelato even more special",
      step3Text: "Add your favorite toppings.",
      step4Number: "STEP 4",
      step4Title: "Enjoy your creation",
      step4TextMain: "Now all that is left is to enjoy your gelato.",
      step4TextSoft: "If you loved the experience, share it with us.",
      navTitle: "What would you like to see now?",
      backToMenu: "Back to menu",
      flavors: "Flavors",
      otherProducts: "Other products",
      review: "Leave a review",
      reviewGoogle: "Rate us on",
    },
    miniFlavors: {
      pistachio: "Pistachio",
      mango: "Mango",
      strawberry: "Strawberry",
      passionfruit: "Passion Fruit",
      lemon: "Lemon",
      amarena: "Amarena",
      tiramisu: "Tiramisu",
      stracciatella: "Stracciatella",
      chocolate: "Chocolate",
      dulceDeLeche: "Dulce de Leche",
      coconut: "Coconut",
      coffee: "Coffee",
      mint: "Mint",
      vanilla: "Vanilla"
    },
    toppings: {
      macaron: "Macaron",
      gianduiotto: "Gianduiotto",
      chantilly: "Whipped Cream",
      pistachioSauce: "Pistachio Sauce",
      gianduja: "Gianduja",
      caramel: "Caramel",
      darkChocolate: "Dark Chocolate",
      crunchy: "Crunchy"
    },
    allergens: {
      title: "Allergens",
      vegan: "Vegan",
      eggs: "Eggs",
      treeNuts: "Tree nuts",
      milk: "Milk",
      soy: "Soy",
      peanut: "Peanut"
    }
  },

  it: {
    home: {
  heroTitle: "Tutti i nostri coni<br>sono un fiore",
  heroSubtitle: "Puoi includere tutti i gusti che vuoi",
  howItWorks: "Come funziona",
  flavors: "Gusti",
  otherProducts: "Altri prodotti",
  review: "Lascia una recensione",
  serviceNoteTitle: "La tua esperienza inizia al banco",
  serviceNoteText: "Scopri i nostri gusti e le nostre opzioni prima di ordinare"
},
    flavorsPage: {
      mainTitle: "I nostri gusti",
      sorbets: "SORBETTI",
      gelato: "GELATO"
    },
    howItWorks: {
      pageTitle: "Creare il tuo fiore gelato è molto semplice",
      step1Number: "PASSO 1",
      step1Title: "Scegli la tua dimensione",
      sizeSmall: "Piccolo",
      sizeMedium: "Medio",
      sizeLarge: "Grande",
      step1Text: "Il tuo cono sarà sempre servito a forma di fiore.",
      step2Number: "PASSO 2",
      step2Title: "Scegli i gusti che vuoi",
      step2Text: "Puoi includere tutti i gusti che vuoi.",
      step3Number: "PASSO 3",
      step3Title: "Rendi il tuo gelato ancora più speciale",
      step3Text: "Aggiungi i tuoi topping preferiti.",
      step4Number: "PASSO 4",
      step4Title: "Goditi la tua creazione",
      step4TextMain: "Ora non resta che goderti il tuo gelato.",
      step4TextSoft: "Se hai amato l’esperienza, condividila con noi.",
      navTitle: "Cosa vuoi vedere adesso?",
      backToMenu: "Torna al menu",
      flavors: "Gusti",
      otherProducts: "Altri prodotti",
      review: "Lascia una recensione",
      reviewGoogle: "Valutaci su",
    },
    miniFlavors: {
      pistachio: "Pistacchio",
      mango: "Mango",
      strawberry: "Fragola",
      passionfruit: "Frutto della passione",
      lemon: "Limone",
      amarena: "Amarena",
      tiramisu: "Tiramisù",
      stracciatella: "Stracciatella",
      chocolate: "Cioccolato",
      dulceDeLeche: "Dulce de leche",
      coconut: "Cocco",
      coffee: "Caffè",
      mint: "Menta",
      vanilla: "Vaniglia"
    },
    toppings: {
      macaron: "Macaron",
      gianduiotto: "Gianduiotto",
      chantilly: "Chantilly",
      pistachioSauce: "Salsa al pistacchio",
      gianduja: "Gianduja",
      caramel: "Caramello",
      darkChocolate: "Cioccolato fondente",
      crunchy: "Croccante"
    },
    allergens: {
      title: "Allergeni",
      vegan: "Vegano",
      eggs: "Uova",
      treeNuts: "Frutta a guscio",
      milk: "Latte",
      soy: "Soia",
      peanut: "Arachidi"
    }
  },

  fr: {
    home: {
  heroTitle: "Tous nos cornets<br>sont une fleur",
  heroSubtitle: "Vous pouvez inclure tous les parfums que vous voulez",
  howItWorks: "Comment ça marche",
  flavors: "Parfums",
  otherProducts: "Autres produits",
  review: "Laisser un avis",
  serviceNoteTitle: "Votre expérience commence au comptoir",
  serviceNoteText: "Découvrez nos parfums et options avant de commander"
},
    flavorsPage: {
      mainTitle: "Nos parfums",
      sorbets: "SORBETS",
      gelato: "GELATO"
    },
    howItWorks: {
      pageTitle: "Créer votre fleur gelato est très simple",
      step1Number: "ÉTAPE 1",
      step1Title: "Choisissez votre taille",
      sizeSmall: "Petit",
      sizeMedium: "Moyen",
      sizeLarge: "Grand",
      step1Text: "Votre cornet sera toujours servi en forme de fleur.",
      step2Number: "ÉTAPE 2",
      step2Title: "Choisissez les parfums que vous voulez",
      step2Text: "Vous pouvez inclure tous les parfums que vous voulez.",
      step3Number: "ÉTAPE 3",
      step3Title: "Rendez votre gelato encore plus spécial",
      step3Text: "Ajoutez vos toppings préférés.",
      step4Number: "ÉTAPE 4",
      step4Title: "Savourez votre création",
      step4TextMain: "Il ne vous reste plus qu’à savourer votre gelato.",
      step4TextSoft: "Si vous avez adoré l’expérience, partagez-la avec nous.",
      navTitle: "Que voulez-vous voir maintenant ?",
      backToMenu: "Retour au menu",
      flavors: "Parfums",
      otherProducts: "Autres produits",
      review: "Laisser un avis",
      reviewGoogle: "Notez-nous sur",
    },
    miniFlavors: {
      pistachio: "Pistache",
      mango: "Mangue",
      strawberry: "Fraise",
      passionfruit: "Fruit de la passion",
      lemon: "Citron",
      amarena: "Amarena",
      tiramisu: "Tiramisù",
      stracciatella: "Stracciatella",
      chocolate: "Chocolat",
      dulceDeLeche: "Dulce de leche",
      coconut: "Noix de coco",
      coffee: "Café",
      mint: "Menthe",
      vanilla: "Vanille"
    },
    toppings: {
      macaron: "Macaron",
      gianduiotto: "Gianduiotto",
      chantilly: "Chantilly",
      pistachioSauce: "Sauce pistache",
      gianduja: "Gianduja",
      caramel: "Caramel",
      darkChocolate: "Chocolat noir",
      crunchy: "Croquant"
    },
    allergens: {
      title: "Allergènes",
      vegan: "Vegan",
      eggs: "Œufs",
      treeNuts: "Fruits à coque",
      milk: "Lait",
      soy: "Soja",
      peanut: "Cacahuète"
    }
  }
};

function getText(path) {
  const keys = path.split(".");
  let value = uiText[locale];

  for (const key of keys) {
    value = value?.[key];
  }

  if (value !== undefined) return value;

  value = uiText.en;
  for (const key of keys) {
    value = value?.[key];
  }

  return value ?? path;
}

function applyPageTranslations() {
  document.documentElement.lang = locale;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = getText(key);
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const key = element.dataset.i18nHtml;
    element.innerHTML = getText(key);
  });
}

const allergenMeta = {
  huevos: { icon: "🥚", labelKey: "allergens.eggs" },
  frutos_secos: { icon: "🌰", labelKey: "allergens.treeNuts" },
  leche: { icon: "🥛", labelKey: "allergens.milk" },
  soja: { icon: "🌱", labelKey: "allergens.soy" },
  mani: { icon: "🥜", labelKey: "allergens.peanut" }
};

const sorbets = [
  {
    name: {
      es: "Mango",
      pt: "Manga",
      en: "Mango",
      it: "Mango",
      fr: "Mangue"
    },
    image: "imagenes/mango.jpg",
    desc: {
      es: "Sorbete tropical, afrutado y muy refrescante.",
      pt: "Sorbet tropical, frutado e muito refrescante.",
      en: "Tropical, fruity sorbet with a very refreshing finish.",
      it: "Sorbetto tropicale, fruttato e molto rinfrescante.",
      fr: "Sorbet tropical, fruité et très rafraîchissant."
    },
    allergens: []
  },
  {
    name: {
      es: "Limón",
      pt: "Limão",
      en: "Lemon",
      it: "Limone",
      fr: "Citron"
    },
    image: "imagenes/limon.jpg",
    desc: {
      es: "Sorbete cítrico, fresco y ligero.",
      pt: "Sorbet cítrico, fresco e leve.",
      en: "Citrus sorbet, fresh and light.",
      it: "Sorbetto agrumato, fresco e leggero.",
      fr: "Sorbet citronné, frais et léger."
    },
    allergens: []
  },
  {
    name: {
      es: "Lima",
      pt: "Lima",
      en: "Lime",
      it: "Lime",
      fr: "Citron vert"
    },
    image: "imagenes/lima.jpg",
    desc: {
      es: "Sorbete vivo y ácido, con un perfil muy fresco.",
      pt: "Sorbet vibrante e ácido, com um perfil muito fresco.",
      en: "Bright and tangy sorbet with a very fresh profile.",
      it: "Sorbetto vivace e agrumato, dal profilo molto fresco.",
      fr: "Sorbet vif et acidulé, au profil très frais."
    },
    allergens: []
  },
  {
    name: {
      es: "Frutilla",
      pt: "Morango",
      en: "Strawberry",
      it: "Fragola",
      fr: "Fraise"
    },
    image: "imagenes/frutilla.jpg",
    desc: {
      es: "Sorbete dulce y natural de fruta roja.",
      pt: "Sorbet doce e natural de frutos vermelhos.",
      en: "Sweet, natural red-fruit sorbet.",
      it: "Sorbetto dolce e naturale ai frutti rossi.",
      fr: "Sorbet doux et naturel aux fruits rouges."
    },
    allergens: []
  },
  {
    name: {
      es: "Maracuyá",
      pt: "Maracujá",
      en: "Passion Fruit",
      it: "Frutto della passione",
      fr: "Fruit de la passion"
    },
    image: "imagenes/maracuja.jpg",
    desc: {
      es: "Sorbete exótico e intenso, con un toque ácido.",
      pt: "Sorbet exótico e intenso, com um toque ácido.",
      en: "Exotic, intense sorbet with a tangy touch.",
      it: "Sorbetto esotico e intenso, con una nota acidula.",
      fr: "Sorbet exotique et intense, avec une touche acidulée."
    },
    allergens: []
  },
  {
    name: {
      es: "Banana",
      pt: "Banana",
      en: "Banana",
      it: "Banana",
      fr: "Banane"
    },
    image: "imagenes/banana.jpg",
    desc: {
      es: "Sorbete suave y frutal, con textura redonda.",
      pt: "Sorbet suave e frutado, com textura redonda.",
      en: "Smooth, fruity sorbet with a rounded texture.",
      it: "Sorbetto morbido e fruttato, dalla texture avvolgente.",
      fr: "Sorbet doux et fruité, à la texture ronde."
    },
    allergens: []
  },
  {
    name: {
      es: "Chocolate Bio",
      pt: "Chocolate Bio",
      en: "Organic Chocolate",
      it: "Cioccolato Bio",
      fr: "Chocolat Bio"
    },
    image: "imagenes/bio.jpg",
    desc: {
      es: "Sorbete de chocolate con sabor intenso a cacao.",
      pt: "Sorbet de chocolate com sabor intenso a cacau.",
      en: "Chocolate sorbet with an intense cocoa profile.",
      it: "Sorbetto al cioccolato dal gusto intenso di cacao.",
      fr: "Sorbet chocolat au goût intense de cacao."
    },
    allergens: []
  },
  {
    name: {
      es: "Almendra Bio",
      pt: "Amêndoa Bio",
      en: "Organic Almond",
      it: "Mandorla Bio",
      fr: "Amande Bio"
    },
    image: "imagenes/organic_almond.jpg",
    desc: {
      es: "Sorbete de almendra ecológica, suave y delicado.",
      pt: "Sorbet de amêndoa biológica, suave e delicado.",
      en: "Organic almond sorbet, smooth and delicately nutty.",
      it: "Sorbetto alla mandorla bio, morbido e delicato.",
      fr: "Sorbet amande bio, doux et délicat."
    },
    allergens: ["frutos_secos"]
  }
];

const gelatos = [
  {
    name: {
      es: "Pistacho",
      pt: "Pistácio",
      en: "Pistachio",
      it: "Pistacchio",
      fr: "Pistache"
    },
    image: "imagenes/pistacho.jpg",
    desc: {
      es: "Gelato de pistacho Mawardi, aromático y elegante.",
      pt: "Gelato de pistácio Mawardi, aromático e elegante.",
      en: "Mawardi pistachio gelato, aromatic and elegant.",
      it: "Gelato al pistacchio Mawardi, aromatico ed elegante.",
      fr: "Gelato à la pistache Mawardi, aromatique et élégant."
    },
    allergens: ["soja", "huevos", "frutos_secos", "leche"]
  },
  {
    name: {
      es: "Chocolate",
      pt: "Chocolate",
      en: "Chocolate",
      it: "Cioccolato",
      fr: "Chocolat"
    },
    image: "imagenes/chocolate.jpg",
    desc: {
      es: "Gelato cremoso de chocolate, intenso y equilibrado.",
      pt: "Gelato cremoso de chocolate, intenso e equilibrado.",
      en: "Creamy chocolate gelato, intense and balanced.",
      it: "Gelato cremoso al cioccolato, intenso ed equilibrato.",
      fr: "Gelato crémeux au chocolat, intense et équilibré."
    },
    allergens: ["soja", "huevos", "leche"]
  },
  {
    name: {
      es: "Stracciatella",
      pt: "Stracciatella",
      en: "Stracciatella",
      it: "Stracciatella",
      fr: "Stracciatella"
    },
    image: "imagenes/stracciatella.jpg",
    desc: {
      es: "Flor de leche con virutas de chocolate negro.",
      pt: "Flor de leite com lascas de chocolate negro.",
      en: "Milk gelato with dark chocolate flakes.",
      it: "Fior di latte con scaglie di cioccolato fondente.",
      fr: "Fleur de lait avec éclats de chocolat noir."
    },
    allergens: ["soja", "leche"]
  },
  {
    name: {
      es: "Vainilla",
      pt: "Baunilha",
      en: "Vanilla",
      it: "Vaniglia",
      fr: "Vanille"
    },
    image: "imagenes/vainilla.jpg",
    desc: {
      es: "Gelato de vainilla bourbon, suave y aromático.",
      pt: "Gelato de baunilha bourbon, suave e aromático.",
      en: "Bourbon vanilla gelato, smooth and aromatic.",
      it: "Gelato alla vaniglia bourbon, morbido e aromatico.",
      fr: "Gelato vanille bourbon, doux et aromatique."
    },
    allergens: ["soja", "leche"]
  },
  {
    name: {
      es: "Tiramisú",
      pt: "Tiramisù",
      en: "Tiramisu",
      it: "Tiramisù",
      fr: "Tiramisù"
    },
    image: "imagenes/tiramisu.jpg",
    desc: {
      es: "Café, cacao y mascarpone en una textura cremosa.",
      pt: "Café, cacau e mascarpone numa textura cremosa.",
      en: "Coffee, cocoa and mascarpone in a creamy texture.",
      it: "Caffè, cacao e mascarpone in una texture cremosa.",
      fr: "Café, cacao et mascarpone dans une texture crémeuse."
    },
    allergens: ["soja", "huevos", "frutos_secos", "leche"]
  },
  {
    name: {
      es: "Café",
      pt: "Café",
      en: "Coffee",
      it: "Caffè",
      fr: "Café"
    },
    image: "imagenes/cafe.jpg",
    desc: {
      es: "Gelato de café 100% arabica, profundo y aromático.",
      pt: "Gelato de café 100% arábica, profundo e aromático.",
      en: "100% arabica coffee gelato, deep and aromatic.",
      it: "Gelato al caffè 100% arabica, intenso e aromatico.",
      fr: "Gelato café 100% arabica, profond et aromatique."
    },
    allergens: ["soja", "huevos", "leche"]
  },
  {
    name: {
      es: "Caramelo",
      pt: "Caramelo",
      en: "Caramel",
      it: "Caramello",
      fr: "Caramel"
    },
    image: "imagenes/caramelo.jpg",
    desc: {
      es: "Caramelo con mantequilla salada, suave y goloso.",
      pt: "Caramelo com manteiga salgada, suave e guloso.",
      en: "Salted butter caramel, smooth and indulgent.",
      it: "Caramello al burro salato, morbido e goloso.",
      fr: "Caramel au beurre salé, doux et gourmand."
    },
    allergens: ["soja", "huevos", "leche"]
  },
  {
    name: {
      es: "Yogurt",
      pt: "Iogurte",
      en: "Yogurt",
      it: "Yogurt",
      fr: "Yaourt"
    },
    image: "imagenes/yogurt.jpg",
    desc: {
      es: "Gelato de yogurt sin grasa, fresco y ligero.",
      pt: "Gelato de iogurte sem gordura, fresco e leve.",
      en: "Fat-free yogurt gelato, fresh and light.",
      it: "Gelato allo yogurt senza grassi, fresco e leggero.",
      fr: "Gelato yaourt sans matière grasse, frais et léger."
    },
    allergens: ["soja", "leche"]
  },
  {
    name: {
      es: "Amarena",
      pt: "Amarena",
      en: "Amarena",
      it: "Amarena",
      fr: "Amarena"
    },
    image: "imagenes/amarena.jpg",
    desc: {
      es: "Cerezas amarena con un perfil clásico y ligeramente ácido.",
      pt: "Cerejas amarena com perfil clássico e ligeiramente ácido.",
      en: "Amarena cherries with a classic, lightly tangy profile.",
      it: "Ciliegie amarena dal profilo classico e leggermente acidulo.",
      fr: "Cerises amarena au profil classique et légèrement acidulé."
    },
    allergens: ["soja", "huevos", "leche"]
  },
  {
    name: {
      es: "Maní",
      pt: "Amendoim",
      en: "Peanut",
      it: "Arachide",
      fr: "Cacahuète"
    },
    image: "imagenes/mani.jpg",
    desc: {
      es: "Gelato de cacahuete tostado con notas de caramelo.",
      pt: "Gelato de amendoim torrado com notas de caramelo.",
      en: "Roasted peanut gelato with caramel notes.",
      it: "Gelato all’arachide tostata con note di caramello.",
      fr: "Gelato cacahuète grillée aux notes de caramel."
    },
    allergens: ["soja", "huevos", "leche", "mani"]
  },
  {
    name: {
      es: "Dulce de leche",
      pt: "Doce de leite",
      en: "Dulce de Leche",
      it: "Dulce de leche",
      fr: "Dulce de leche"
    },
    image: "imagenes/dulce_de_leche.jpg",
    desc: {
      es: "Gelato de dulce de leche, suave y reconfortante.",
      pt: "Gelato de doce de leite, suave e reconfortante.",
      en: "Dulce de leche gelato, smooth and comforting.",
      it: "Gelato al dulce de leche, morbido e avvolgente.",
      fr: "Gelato dulce de leche, doux et réconfortant."
    },
    allergens: ["soja", "leche"]
  },
  {
    name: {
      es: "Menta",
      pt: "Menta",
      en: "Mint",
      it: "Menta",
      fr: "Menthe"
    },
    image: "imagenes/menta.jpg",
    desc: {
      es: "Gelato refrescante de menta con chocolate.",
      pt: "Gelato refrescante de menta com chocolate.",
      en: "Refreshing mint gelato with chocolate.",
      it: "Gelato rinfrescante alla menta con cioccolato.",
      fr: "Gelato rafraîchissant à la menthe et au chocolat."
    },
    allergens: ["soja", "leche"]
  },
  {
    name: {
      es: "Coco",
      pt: "Coco",
      en: "Coconut",
      it: "Cocco",
      fr: "Noix de coco"
    },
    image: "imagenes/coco.jpg",
    desc: {
      es: "Gelato de coco de Sri Lanka, suave y exótico.",
      pt: "Gelato de coco do Sri Lanka, suave e exótico.",
      en: "Sri Lankan coconut gelato, smooth and exotic.",
      it: "Gelato al cocco dello Sri Lanka, morbido ed esotico.",
      fr: "Gelato noix de coco du Sri Lanka, doux et exotique."
    },
    allergens: ["soja", "leche"]
  },
  {
    name: {
      es: "Inimitable",
      pt: "Inimitable",
      en: "Inimitable",
      it: "Inimitable",
      fr: "Inimitable"
    },
    image: "imagenes/inimitable.jpg",
    desc: {
      es: "Chocolate y avellana en una combinación intensa y golosa.",
      pt: "Chocolate e avelã numa combinação intensa e gulosa.",
      en: "Chocolate and hazelnut in an intense, indulgent blend.",
      it: "Cioccolato e nocciola in una combinazione intensa e golosa.",
      fr: "Chocolat et noisette dans une combinaison intense et gourmande."
    },
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
            <span>${getText("allergens.vegan")}</span>
          </div>
        </div>
      </div>
    `;
  }

  return `
    <div class="allergen-section">
      <div class="allergen-title">${getText("allergens.title")}</div>
      <div class="allergen-list">
        ${allergens.map((key) => {
          const item = allergenMeta[key];
          if (!item) return "";
          return `
            <div class="allergen-chip">
              <span class="allergen-icon">${item.icon}</span>
              <span>${getText(item.labelKey)}</span>
            </div>
          `;
        }).join("")}
      </div>
    </div>
  `;
}

function createCardHTML(item) {
  const itemName = item.name?.[locale] || item.name?.en || item.name || "";
  const itemDesc = item.desc?.[locale] || item.desc?.en || item.desc || "More information soon.";

  return `
    <div class="card-inner">
      <div class="card-front">
        <div class="image-wrap">
          ${item.image ? `<img src="${item.image}" alt="${itemName}">` : ""}
        </div>
        <div class="front-bottom">
          <div class="front-title">${itemName}</div>
          <span class="flip-hint">↻</span>
        </div>
      </div>

      <div class="card-back">
        <div class="back-top">
          <h4>${itemName}</h4>
          <span class="back-flip">↻</span>
        </div>
        <p>${itemDesc}</p>
        ${renderAllergens(item.allergens)}
      </div>
    </div>
  `;
}

function render(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = "";

  items.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = createCardHTML(item);

    card.addEventListener("click", () => {
      card.classList.toggle("flip");
    });

    container.appendChild(card);
  });
}

applyPageTranslations();
render("sorbets", sorbets);
render("gelatos", gelatos);
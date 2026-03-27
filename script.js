const supportedLocales = ["pt", "es", "en", "it", "fr"];

function getLocale() {
  const browserLang = (navigator.language || navigator.userLanguage || "en").toLowerCase();
  const shortLang = browserLang.slice(0, 2);
  return supportedLocales.includes(shortLang) ? shortLang : "en";
}

const locale = getLocale();
function getLocalReviewLink() {
  const params = new URLSearchParams(window.location.search);
  const local = params.get("local");
  if (local === "deck") {
    return "https://search.google.com/local/writereview?placeid=ChIJQULSFpK1Gg0RH5n72IY8y88";
  }
  return "https://search.google.com/local/writereview?placeid=ChIJJZ5ITJq1Gg0RJYv1OtXW7WI";
}

const reviewLink = getLocalReviewLink();

const uiText = {
  es: {
    home: {
  heroTitle: "Todos nuestros conos<br>son una flor",
  heroSubtitle: "Puedes incluir todos los sabores que quieras",
  howItWorks: "Cómo funciona",
  flavors: "Sabores",
  otherProducts: "Nuestros productos",
  review: "Dejar reseña",
  reviewHelp: "Tu opinión nos ayuda mucho",
  reviewGoogle: "Valóranos en",
  serviceNoteTitle: "Tu experiencia comienza en el mostrador",
  serviceNoteText: "Descubre qué vas a disfrutar y haz tu pedido en el mostrador."
},
    flavorsPage: {
  mainTitle: "Nuestros sabores",
  sorbets: "SORBETS",
  gelato: "GELATO",
  createFlower: "Quiero crear mi flor",
  reviewGoogle: "Valóranos en",
  backToMenu: "Volver al menú"
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
  step2Text: "Puedes incluir todos los sabores que quieras en tu flor.",
  step3Number: "PASO 3",
  step3Title: "Haz tu gelato aún más especial",
  step3Text: "Añade tus toppings favoritos",
  step4Number: "PASO 4",
  step4Title: "Disfruta tu creación",
  step4TextMain: "Ahora solo queda disfrutar tu gelato.",
  step4TextSoft: "Si tu experiencia te encantó, compártela con nosotros.",
  backToMenu: "Volver al menú",
  flavors: "Sabores",
  otherProducts: "Nuestros productos",
  reviewGoogle: "Valóranos en"
},
    miniFlavors: {
      coffeeCreamAmaretti: "Crema de café y amaretti",
redBerries: "Frutos rojos",
fiorDiLatteExotic: "Flor de leche y frutas exóticas",
blueberryCheesecake: "Blueberry cheesecake",
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
    },
    productsPage: {
  pageTitle: "Nuestros productos",
  noteText: "Descubre qué vas a disfrutar y haz tu pedido en el mostrador.",

  crepesTitle: "Crepes y waffles",
  crepe: "Crepe",
  waffles: "Waffles",
  waffleSticks: "Waffle sticks",

  coffeeTitle: "Cafetería",
  espresso: "Espresso",
  americano: "Americano",
  latte: "Latte",
  cappuccino: "Cappuccino",
  hotChocolate: "Chocolate caliente",
  tea: "Té",

  specialsTitle: "Especiales",
  affogato: "Affogato",
  affogatoChocolate: "Affogato chocolate",
  affogatoGourmet: "Affogato gourmet",
  copoGourmet: "Copo gourmet",
  latteGourmet: "Latte gourmet",
  espressoFrappe: "Espresso frappé",

  coldDrinksTitle: "Bebidas frías",
  frappe: "Frappé",
  milkshake: "Batido",
  sorbetDrink: "Bebida sorvete",
  veganShake: "Vegan shake",

  takeAwayTitle: "Macarons y envasados para casa o para llevar",
  macaronsLarge: "Macarons grandes",
  macaronsSmall: "Macarons pequeños",
  macaronsBox12: "Caja x12 macarons",
  takeAwayBoxes: "Cajas 550 y 1100 ml",
  waferGianduja: "Wafer Gianduja x4",
  largeTin: "Lata grande",

  reviewGoogle: "Valóranos en",
  backToMenu: "Volver al menú"
},
faq: {
  trigger: "¿Tienes alguna duda?",
  items: [
    {
      q: "¿Por dónde empiezo?",
      a: "Elige tu tamaño y toppings en el mostrador — nuestros artistas gelato harán el resto. La flor es nuestra firma."
    },
    {
      q: "¿Cuántos sabores puedo elegir?",
      a: "Todos los que quieras. Sin límite. Ese es el juego."
    },
    {
      q: "¿El tamaño limita los sabores?",
      a: "Para nada. En cualquier tamaño, el límite lo pones tú."
    },
    {
      q: "¿Si pido en copa también tengo la flor?",
      a: "La flor solo nace en el cono — es su forma natural. En copa el gelato sigue siendo igual de bueno, pero sin la magia de los pétalos."
    },
    {
      q: "¿Tienen opciones veganas?",
      a: "Todos nuestros sorbetes son 100% veganos. Y si quieres, también tenemos cono vegano."
    },
    {
      q: "¿Hay servicio en mesa?",
      a: "El pedido se hace en el mostrador — pero una vez que tienes tu flor en mano, la mesa es toda tuya."
    },
    {
      q: "¿Los helados tienen gluten?",
      a: "Ninguno de nuestros helados contiene gluten. Disfruta sin preocupaciones."
    },
    {
      q: "¿Tienen protocolo para alergias?",
      a: "Sí — infórmanos al hacer tu pedido y nuestros artistas gelato estarán especialmente atentos. Tenemos un protocolo específico para cuidarte. Como precaución, te avisamos que no podemos garantizar la ausencia total de contaminación cruzada."
    }
  ]
},
    
  },

  pt: {
    home: {
  heroTitle: "Todos os nossos cones<br>são uma flor",
  heroSubtitle: "Pode incluir todos os sabores que quiser",
  howItWorks: "Como funciona",
  flavors: "Sabores",
  otherProducts: "Os nossos produtos",
  review: "Deixar avaliação",
  reviewHelp: "A tua opinião ajuda-nos muito",
  reviewGoogle: "Avalia-nos no",
  serviceNoteTitle: "A tua experiência começa ao balcão",
  serviceNoteText: "Descobre o que vais saborear e faz o teu pedido ao balcão."
},
    flavorsPage: {
  mainTitle: "Os nossos sabores",
  sorbets: "SORBETS",
  gelato: "GELATO",
  createFlower: "Quero criar a minha flor",
  reviewGoogle: "Avalia-nos no",
  backToMenu: "Voltar ao menu"
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
  step2Text: "Podes incluir todos os sabores que quiseres na tua flor.",
  step3Number: "PASSO 3",
  step3Title: "Torna o teu gelato ainda mais especial",
  step3Text: "Adiciona os teus toppings favoritos.",
  step4Number: "PASSO 4",
  step4Title: "Desfruta da tua criação",
  step4TextMain: "Agora só falta aproveitar o teu gelato.",
  step4TextSoft: "Se adoraste a experiência, partilha-a connosco.",
  backToMenu: "Voltar ao menu",
  flavors: "Sabores",
  otherProducts: "Os nossos produtos",
  reviewGoogle: "Avalia-nos no"
},
    miniFlavors: {
      coffeeCreamAmaretti: "Crema de café e amaretti",
redBerries: "Frutos vermelhos",
fiorDiLatteExotic: "Fior di latte e frutas exóticas",
blueberryCheesecake: "Blueberry cheesecake",
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
    },
    productsPage: {
  pageTitle: "Os nossos produtos",
  noteText: "Descobre o que vais saborear e faz o teu pedido ao balcão.",

  crepesTitle: "Crepes e waffles",
  crepe: "Crepe",
  waffles: "Waffles",
  waffleSticks: "Waffle sticks",

  coffeeTitle: "Cafetaria",
  espresso: "Espresso",
  americano: "Americano",
  latte: "Latte",
  cappuccino: "Cappuccino",
  hotChocolate: "Chocolate quente",
  tea: "Chá",

  specialsTitle: "Especiais",
  affogato: "Affogato",
  affogatoChocolate: "Affogato de chocolate",
  affogatoGourmet: "Affogato gourmet",
  copoGourmet: "Copo gourmet",
  latteGourmet: "Latte gourmet",
  espressoFrappe: "Espresso frappé",

  coldDrinksTitle: "Bebidas frias",
  frappe: "Frappé",
  milkshake: "Batido",
  sorbetDrink: "Bebida sorvete",
  veganShake: "Vegan shake",

  takeAwayTitle: "Macarons e embalados para casa ou takeaway",
  macaronsLarge: "Macarons grandes",
  macaronsSmall: "Macarons pequenos",
  macaronsBox12: "Caixa x12 macarons",
  takeAwayBoxes: "Caixas 550 e 1100 ml",
  waferGianduja: "Wafer Gianduja x4",
  largeTin: "Lata grande",

  reviewGoogle: "Avalia-nos no",
  backToMenu: "Voltar ao menu"
},
faq: {
  trigger: "Tens alguma dúvida?",
  items: [
    {
      q: "Por onde começo?",
      a: "Escolhe o teu tamanho e toppings ao balcão — os nossos artistas gelato tratam do resto. A flor é a nossa assinatura."
    },
    {
      q: "Quantos sabores posso escolher?",
      a: "Todos os que quiseres. Sem limite. Esse é o jogo."
    },
    {
      q: "O tamanho limita os sabores?",
      a: "De forma alguma. Em qualquer tamanho, o limite és tu."
    },
    {
      q: "Se pedir em copo também tenho a flor?",
      a: "A flor só nasce no cone — é a sua forma natural. Em copo o gelato é igualmente bom, mas sem a magia das pétalas."
    },
    {
      q: "Têm opções vegan?",
      a: "Todos os nossos sorbets são 100% vegan. E se quiseres, também temos cone vegan."
    },
    {
      q: "Há serviço à mesa?",
      a: "O pedido faz-se ao balcão — mas assim que tens a tua flor na mão, a mesa é toda tua."
    },
    {
      q: "Os gelatos têm glúten?",
      a: "Nenhum dos nossos gelatos contém glúten. Desfruta sem preocupações."
    },
    {
      q: "Têm protocolo para alergias?",
      a: "Sim — informa-nos ao fazer o teu pedido e os nossos artistas gelato estarão especialmente atentos. Temos um protocolo específico para te cuidar. Como precaução, avisamos que não podemos garantir a ausência total de contaminação cruzada."
    }
  ]
},
  },

  en: {
    home: {
  heroTitle: "All our cones<br>are shaped like a flower",
  heroSubtitle: "You can include as many flavors as you want",
  howItWorks: "How it works",
  flavors: "Flavors",
  otherProducts: "Our products",
  review: "Leave a review",
  reviewHelp: "Your opinion helps us a lot",
  reviewGoogle: "Rate us on",
  serviceNoteTitle: "Your experience begins at the counter",
  serviceNoteText: "Discover what you would like to enjoy and place your order at the counter."
},
    flavorsPage: {
  mainTitle: "Our flavors",
  sorbets: "SORBETS",
  gelato: "GELATO",
  createFlower: "I want to create my flower",
  reviewGoogle: "Rate us on",
  backToMenu: "Back to menu"
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
  step2Text: "You can include as many flavors as you want in your flower.",
  step3Number: "STEP 3",
  step3Title: "Make your gelato even more special",
  step3Text: "Add your favorite toppings.",
  step4Number: "STEP 4",
  step4Title: "Enjoy your creation",
  step4TextMain: "Now all that is left is to enjoy your gelato.",
  step4TextSoft: "If you loved the experience, share it with us.",
  backToMenu: "Back to menu",
  flavors: "Flavors",
  otherProducts: "Our products",
  reviewGoogle: "Rate us on"
},
    miniFlavors: {
      coffeeCreamAmaretti: "Coffee cream & amaretti",
redBerries: "Red berries",
fiorDiLatteExotic: "Fior di latte & exotic fruits",
blueberryCheesecake: "Blueberry cheesecake",
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
    },
    productsPage: {
  pageTitle: "Our products",
  noteText: "Discover what you would like to enjoy and place your order at the counter.",

  crepesTitle: "Crepes and waffles",
  crepe: "Crepe",
  waffles: "Waffles",
  waffleSticks: "Waffle sticks",

  coffeeTitle: "Coffee",
  espresso: "Espresso",
  americano: "Americano",
  latte: "Latte",
  cappuccino: "Cappuccino",
  hotChocolate: "Hot chocolate",
  tea: "Tea",

  specialsTitle: "Specials",
  affogato: "Affogato",
  affogatoChocolate: "Chocolate affogato",
  affogatoGourmet: "Gourmet affogato",
  copoGourmet: "Gourmet cup",
  latteGourmet: "Gourmet latte",
  espressoFrappe: "Espresso frappe",

  coldDrinksTitle: "Cold drinks",
  frappe: "Frappe",
  milkshake: "Milkshake",
  sorbetDrink: "Sorbet drink",
  veganShake: "Vegan shake",

  takeAwayTitle: "Macarons and packaged items for home or takeaway",
  macaronsLarge: "Large macarons",
  macaronsSmall: "Small macarons",
  macaronsBox12: "Box of 12 macarons",
  takeAwayBoxes: "550 and 1100 ml boxes",
  waferGianduja: "Gianduja wafer x4",
  largeTin: "Large tin",

  reviewGoogle: "Rate us on",
  backToMenu: "Back to menu"
},
faq: {
  trigger: "Got any questions?",
  items: [
    {
      q: "Where do I start?",
      a: "Choose your size and toppings at the counter — our gelato artists will take care of the rest. The flower is our signature."
    },
    {
      q: "How many flavors can I choose?",
      a: "As many as you want. No limit. That's the whole point."
    },
    {
      q: "Does the size limit the flavors?",
      a: "Not at all. In any size, the only limit is you."
    },
    {
      q: "If I order in a cup, do I get the flower too?",
      a: "The flower only blooms on the cone — it's its natural shape. In a cup the gelato is just as delicious, but without the petal magic."
    },
    {
      q: "Do you have vegan options?",
      a: "All our sorbets are 100% vegan. And if you'd like, we also have a vegan cone."
    },
    {
      q: "Is there table service?",
      a: "Orders are placed at the counter — but once you have your flower in hand, the table is all yours."
    },
    {
      q: "Is the gelato gluten-free?",
      a: "None of our gelatos contain gluten. Enjoy without worry."
    },
    {
      q: "Do you have an allergy protocol?",
      a: "Yes — let us know when placing your order and our gelato artists will take special care of you. We have a specific protocol to look after you. As a precaution, please note that we cannot fully guarantee the absence of cross-contamination."
    }
  ]
},
  },

  it: {
    home: {
  heroTitle: "Tutti i nostri coni<br>sono un fiore",
  heroSubtitle: "Puoi includere tutti i gusti che vuoi",
  howItWorks: "Come funziona",
  flavors: "Gusti",
  otherProducts: "I nostri prodotti",
  review: "Lascia una recensione",
  reviewHelp: "La tua opinione ci aiuta molto",
  reviewGoogle: "Valutaci su",
  serviceNoteTitle: "La tua esperienza inizia al banco",
  serviceNoteText: "Scopri cosa ti va di gustare e fai il tuo ordine al banco."
},
    flavorsPage: {
  mainTitle: "I nostri gusti",
  sorbets: "SORBETTI",
  gelato: "GELATO",
  createFlower: "Voglio creare il mio fiore",
  reviewGoogle: "Valutaci su",
  backToMenu: "Torna al menu"
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
  step2Text: "Puoi includere tutti i gusti che vuoi nel tuo fiore.",
  step3Number: "PASSO 3",
  step3Title: "Rendi il tuo gelato ancora più speciale",
  step3Text: "Aggiungi i tuoi topping preferiti.",
  step4Number: "PASSO 4",
  step4Title: "Goditi la tua creazione",
  step4TextMain: "Ora non resta che goderti il tuo gelato.",
  step4TextSoft: "Se hai amato l’esperienza, condividila con noi.",
  backToMenu: "Torna al menu",
  flavors: "Gusti",
  otherProducts: "I nostri prodotti",
  reviewGoogle: "Valutaci su"
},
    miniFlavors: {
      coffeeCreamAmaretti: "Crema di caffè e amaretti",
redBerries: "Frutti rossi",
fiorDiLatteExotic: "Fior di latte e frutti esotici",
blueberryCheesecake: "Blueberry cheesecake",
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
    },
    productsPage: {
  pageTitle: "I nostri prodotti",
  noteText: "Scopri cosa ti va di gustare e fai il tuo ordine al banco.",

  crepesTitle: "Crepes e waffles",
  crepe: "Crepe",
  waffles: "Waffles",
  waffleSticks: "Waffle sticks",

  coffeeTitle: "Caffetteria",
  espresso: "Espresso",
  americano: "Americano",
  latte: "Latte",
  cappuccino: "Cappuccino",
  hotChocolate: "Cioccolata calda",
  tea: "Tè",

  specialsTitle: "Speciali",
  affogato: "Affogato",
  affogatoChocolate: "Affogato al cioccolato",
  affogatoGourmet: "Affogato gourmet",
  copoGourmet: "Coppa gourmet",
  latteGourmet: "Latte gourmet",
  espressoFrappe: "Espresso frappé",

  coldDrinksTitle: "Bevande fredde",
  frappe: "Frappé",
  milkshake: "Milkshake",
  sorbetDrink: "Bevanda sorbetto",
  veganShake: "Vegan shake",

  takeAwayTitle: "Macaron e confezionati da portare a casa o via",
  macaronsLarge: "Macaron grandi",
  macaronsSmall: "Macaron piccoli",
  macaronsBox12: "Scatola da 12 macaron",
  takeAwayBoxes: "Scatole 550 e 1100 ml",
  waferGianduja: "Wafer Gianduja x4",
  largeTin: "Latta grande",

  reviewGoogle: "Valutaci su",
  backToMenu: "Torna al menu"
},
faq: {
  trigger: "Hai qualche domanda?",
  items: [
    {
      q: "Da dove inizio?",
      a: "Scegli la tua dimensione e i topping al banco — i nostri artisti gelato faranno il resto. Il fiore è la nostra firma."
    },
    {
      q: "Quanti gusti posso scegliere?",
      a: "Tutti quelli che vuoi. Senza limite. È questo il bello."
    },
    {
      q: "La dimensione limita i gusti?",
      a: "Per niente. In qualsiasi dimensione, il limite lo metti tu."
    },
    {
      q: "Se ordino in coppa ho anche il fiore?",
      a: "Il fiore nasce solo nel cono — è la sua forma naturale. In coppa il gelato è altrettanto buono, ma senza la magia dei petali."
    },
    {
      q: "Avete opzioni vegane?",
      a: "Tutti i nostri sorbetti sono 100% vegani. E se vuoi, abbiamo anche il cono vegano."
    },
    {
      q: "C'è servizio al tavolo?",
      a: "L'ordine si fa al banco — ma una volta che hai il tuo fiore in mano, il tavolo è tutto tuo."
    },
    {
      q: "I gelati contengono glutine?",
      a: "Nessuno dei nostri gelati contiene glutine. Goditi ogni morso senza pensieri."
    },
    {
      q: "Avete un protocollo per le allergie?",
      a: "Sì — comunicacelo al momento dell'ordine e i nostri artisti gelato saranno particolarmente attenti. Abbiamo un protocollo specifico per prenderci cura di te. Come precauzione, ti avvisiamo che non possiamo garantire l'assenza totale di contaminazione crociata."
    }
  ]
},
  },

  fr: {
    home: {
  heroTitle: "Tous nos cornets<br>sont une fleur",
  heroSubtitle: "Vous pouvez inclure tous les parfums que vous voulez",
  howItWorks: "Comment ça marche",
  flavors: "Parfums",
  otherProducts: "Nos produits",
  review: "Laisser un avis",
  reviewHelp: "Votre avis nous aide beaucoup",
  reviewGoogle: "Notez-nous sur",
  serviceNoteTitle: "Votre expérience commence au comptoir",
  serviceNoteText: "Découvrez ce que vous allez savourer et passez votre commande au comptoir."
},
    flavorsPage: {
  mainTitle: "Nos parfums",
  sorbets: "SORBETS",
  gelato: "GELATO",
  createFlower: "Je veux créer ma fleur",
  reviewGoogle: "Notez-nous sur",
  backToMenu: "Retour au menu"
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
  step2Text: "Vous pouvez inclure tous les parfums que vous voulez dans votre fleur.",
  step3Number: "ÉTAPE 3",
  step3Title: "Rendez votre gelato encore plus spécial",
  step3Text: "Ajoutez vos toppings préférés.",
  step4Number: "ÉTAPE 4",
  step4Title: "Savourez votre création",
  step4TextMain: "Il ne vous reste plus qu’à savourer votre gelato.",
  step4TextSoft: "Si vous avez adoré l’expérience, partagez-la avec nous.",
  backToMenu: "Retour au menu",
  flavors: "Parfums",
  otherProducts: "Nos produits",
  reviewGoogle: "Notez-nous sur"
},
    miniFlavors: {
      coffeeCreamAmaretti: "Crème de café et amaretti",
redBerries: "Fruits rouges",
fiorDiLatteExotic: "Fior di latte et fruits exotiques",
blueberryCheesecake: "Blueberry cheesecake",
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
    },
    productsPage: {
  pageTitle: "Nos produits",
  noteText: "Découvrez ce que vous allez savourer et passez votre commande au comptoir.",

  crepesTitle: "Crêpes et waffles",
  crepe: "Crêpe",
  waffles: "Waffles",
  waffleSticks: "Waffle sticks",

  coffeeTitle: "Café",
  espresso: "Espresso",
  americano: "Americano",
  latte: "Latte",
  cappuccino: "Cappuccino",
  hotChocolate: "Chocolat chaud",
  tea: "Thé",

  specialsTitle: "Spéciaux",
  affogato: "Affogato",
  affogatoChocolate: "Affogato chocolat",
  affogatoGourmet: "Affogato gourmet",
  copoGourmet: "Coupe gourmet",
  latteGourmet: "Latte gourmet",
  espressoFrappe: "Espresso frappé",

  coldDrinksTitle: "Boissons froides",
  frappe: "Frappé",
  milkshake: "Milkshake",
  sorbetDrink: "Boisson sorbet",
  veganShake: "Vegan shake",

  takeAwayTitle: "Macarons et produits emballés pour la maison ou à emporter",
  macaronsLarge: "Grands macarons",
  macaronsSmall: "Petits macarons",
  macaronsBox12: "Boîte de 12 macarons",
  takeAwayBoxes: "Boîtes 550 et 1100 ml",
  waferGianduja: "Wafer Gianduja x4",
  largeTin: "Grande boîte",

  reviewGoogle: "Notez-nous sur",
  backToMenu: "Retour au menu"
},
faq: {
  trigger: "Une question ?",
  items: [
    {
      q: "Par où je commence ?",
      a: "Choisissez votre taille et vos toppings au comptoir — nos artistes gelato s'occupent du reste. La fleur est notre signature."
    },
    {
      q: "Combien de parfums puis-je choisir ?",
      a: "Autant que vous voulez. Sans limite. C'est tout le principe."
    },
    {
      q: "La taille limite-t-elle les parfums ?",
      a: "Pas du tout. Quelle que soit la taille, la seule limite c'est vous."
    },
    {
      q: "Si je commande en coupe, j'ai aussi la fleur ?",
      a: "La fleur ne naît que dans le cornet — c'est sa forme naturelle. En coupe le gelato est tout aussi bon, mais sans la magie des pétales."
    },
    {
      q: "Avez-vous des options vegan ?",
      a: "Tous nos sorbets sont 100% vegan. Et si vous le souhaitez, nous avons aussi un cornet vegan."
    },
    {
      q: "Y a-t-il un service à table ?",
      a: "La commande se passe au comptoir — mais une fois votre fleur en main, la table est à vous."
    },
    {
      q: "Les glaces contiennent-elles du gluten ?",
      a: "Aucun de nos gelatos ne contient de gluten. Savourez sans souci."
    },
    {
      q: "Avez-vous un protocole pour les allergies ?",
      a: "Oui — signalez-le lors de votre commande et nos artistes gelato seront particulièrement attentifs. Nous avons un protocole spécifique pour prendre soin de vous. Par précaution, nous vous informons que nous ne pouvons pas garantir l'absence totale de contamination croisée."
    }
  ]
},
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
    es: "Frutos rojos",
    pt: "Frutos vermelhos",
    en: "Red Berries",
    it: "Frutti rossi",
    fr: "Fruits rouges"
  },
  image: "imagenes/red_berries.jpg",
  desc: {
    es: "Sorbete de frutos rojos, vibrante y refrescante.",
    pt: "Sorbet de frutos vermelhos, vibrante e refrescante.",
    en: "Red berries sorbet, vibrant and refreshing.",
    it: "Sorbetto ai frutti rossi, vivace e rinfrescante.",
    fr: "Sorbet fruits rouges, vif et rafraîchissant."
  },
  allergens: []
},
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
    es: "Crema de café y biscotti amaretti",
    pt: "Crema de café e biscotti amaretti",
    en: "Coffee cream & amaretti biscotti",
    it: "Crema di caffè & biscotti amaretti",
    fr: "Crème de café & biscotti amaretti"
  },
  image: "imagenes/crema_caffe_amaretti.jpg",
  desc: {
    es: "Gelato cremoso de café con notas delicadas de amaretti.",
    pt: "Gelato cremoso de café com delicadas notas de amaretti.",
    en: "Creamy coffee gelato with delicate amaretti notes.",
    it: "Gelato cremoso al caffè con delicate note di amaretti.",
    fr: "Gelato crémeux au café avec de délicates notes d’amaretti."
  },
  allergens: ["soja", "huevos", "leche"]
},
{
  name: {
    es: "Flor de leche y frutas exóticas",
    pt: "Fior di latte e frutas exóticas",
    en: "Fior di latte & exotic fruits",
    it: "Fior di latte & exotic fruits",
    fr: "Fior di latte & fruits exotiques"
  },
  image: "imagenes/fior_latte_exotic_fruits.jpg",
  desc: {
    es: "Gelato suave de flor de leche con un toque frutal exótico.",
    pt: "Gelato suave de fior di latte com um toque frutado exótico.",
    en: "Smooth fior di latte gelato with an exotic fruity touch.",
    it: "Gelato fior di latte morbido con un tocco fruttato esotico.",
    fr: "Gelato fior di latte doux avec une touche fruitée exotique."
  },
  allergens: ["soja", "leche"]
},
{
  name: {
    es: "Blueberry cheesecake",
    pt: "Blueberry cheesecake",
    en: "Blueberry cheesecake",
    it: "Blueberry cheesecake",
    fr: "Blueberry cheesecake"
  },
  image: "imagenes/blueberry_cheesecake.jpg",
  desc: {
    es: "Gelato inspirado en cheesecake con arándanos, cremoso y elegante.",
    pt: "Gelato inspirado em cheesecake com mirtilos, cremoso e elegante.",
    en: "Cheesecake-inspired gelato with blueberries, creamy and elegant.",
    it: "Gelato ispirato al cheesecake ai mirtilli, cremoso ed elegante.",
    fr: "Gelato inspiré du cheesecake aux myrtilles, crémeux et élégant."
  },
  allergens: ["soja", "huevos", "leche"]
},
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
          <span class="info-hint">i</span>
        </div>
        <div class="front-bottom">
          <div class="front-title">${itemName}</div>
        </div>
      </div>

      <div class="card-back">
        <div class="back-top">
          <h4>${itemName}</h4>
          <span class="back-info-hint">i</span>
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
function toggleFaq() {
  const list = document.getElementById("faqList");
  const arrow = document.getElementById("faqArrow");
  if (!list) return;
  list.classList.toggle("visible");
  arrow.classList.toggle("open");
}

function renderFaq() {
  const list = document.getElementById("faqList");
  if (!list) return;

  const items = uiText[locale]?.faq?.items || uiText.en.faq.items;

  list.innerHTML = items.map((item, i) => `
    <div class="faq-item" id="faqItem${i}">
      <button class="faq-question" onclick="toggleFaqItem(${i})">
        <span>${item.q}</span>
        <span class="faq-question-arrow">›</span>
      </button>
      <div class="faq-answer">${item.a}</div>
    </div>
  `).join("");
}

function toggleFaqItem(i) {
  const item = document.getElementById("faqItem" + i);
  if (!item) return;
  item.classList.toggle("open");
}

renderFaq();
document.querySelectorAll("#reviewBtn").forEach(btn => {
  btn.href = reviewLink;
});

applyPageTranslations();
render("sorbets", sorbets);
render("gelatos", gelatos);
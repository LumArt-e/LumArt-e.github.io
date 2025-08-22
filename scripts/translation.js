// Traducciones completas inglés/español para todos los textos visibles
const translations = {
  es: {
    menu_home: "Inicio",
    menu_about: "Sobre Nosotros",
    menu_gallery: "Galería",
    menu_contact: "Contacto",
    title: "LumArt - Art Studio",
    tagline: "Un viaje visual a través de la historia y la expresión artística",
    about_title: "Sobre Nosotros",
    about_intro: "En <strong>LumArt</strong>, somos un estudio de arte especializado en artes plásticas, dominando diversas técnicas de pintura y estilos visuales. Nuestras obras incluyen tanto creaciones originales como reinterpretaciones de piezas icónicas de artistas reconocidos. Nuestra misión es llevarte un pedazo de historia a través del arte, transformando espacios con emoción, color y legado.",
    mission_title: "Misión",
    mission: "Fomentar el aprecio por las artes visuales, de manos y corazón de quien los elabora.",
    vision_title: "Visión",
    vision: "Ser un lugar de referencia cultural reconocido por la calidad de sus productos de arte.",
    history_title: "Nuestra Historia",
    history: "LumArt nació del sueño de crear un espacio donde la pasión por el arte se combina con la innovación y el respeto por la tradición. Desde nuestros inicios en 2020, hemos trabajado en fomentar la creatividad, la colaboración y el crecimiento artístico de nuestra comunidad.",
    values_title: "Valores",
    value_creativity: "<strong>Creatividad:</strong> Fomentamos la expresión única de cada artista.",
    value_quality: "<strong>Calidad:</strong> Cada obra busca la excelencia en técnica y significado.",
    value_commitment: "<strong>Compromiso:</strong> Apostamos por la educación y la difusión cultural.",
    team_title: "Equipo",
    team: "Nuestro equipo está formado por expertos en arte, gestión cultural y educación artística, comprometidos con acercar el arte a todos los públicos.",
    products_title: "Galería de Obras",
    product1: "Obra 1", product2: "Obra 2", product3: "Obra 3", product4: "Obra 4", product5: "Obra 5",
    product6: "Obra 6", product7: "Obra 7", product8: "Obra 8", product9: "Obra 9", product10: "Obra 10",
    product11: "Obra 11", product12: "Obra 12", product13: "Obra 13", product14: "Obra 14", product15: "Obra 15",
    product16: "Obra 16", product17: "Obra 17", product18: "Obra 18", product19: "Obra 19", product20: "Obra 20",
    contact_title: "Contacto",
    phone_title: "Teléfono:",
    phone: "+593 983 337 795",
    email_title: "Email:",
    email: "lumar_2223@yahoo.com",
    instagram_title: "Instagram:",
    instagram: "@Lum_Artstudio",
    facebook_title: "Facebook:",
    facebook: "Lum_ArtStudio",
    footer: "&copy; 2025 LumArt - Art Studio. Todos los derechos reservados."
  },
  en: {
    menu_home: "Home",
    menu_about: "About Us",
    menu_gallery: "Gallery",
    menu_contact: "Contact",
    title: "LumArt - Art Studio",
    tagline: "A visual journey through history and artistic expression",
    about_title: "About Us",
    about_intro: "At <strong>LumArt</strong>, we are an art studio specializing in visual arts, mastering various painting techniques and visual styles. Our works include both original creations and reinterpretations of iconic pieces by renowned artists. Our mission is to bring you a piece of history through art, transforming spaces with emotion, color, and legacy.",
    mission_title: "Mission",
    mission: "To foster appreciation for visual arts, crafted with heart and hands.",
    vision_title: "Vision",
    vision: "To be a cultural reference recognized for the quality of its art products.",
    history_title: "Our History",
    history: "LumArt was born from the dream of creating a space where passion for art combines with innovation and respect for tradition. Since our beginnings in 2020, we have worked to foster creativity, collaboration, and artistic growth in our community.",
    values_title: "Values",
    value_creativity: "<strong>Creativity:</strong> We encourage each artist's unique expression.",
    value_quality: "<strong>Quality:</strong> Every work seeks excellence in technique and meaning.",
    value_commitment: "<strong>Commitment:</strong> We support education and cultural promotion.",
    team_title: "Team",
    team: "Our team is made up of experts in art, cultural management, and art education, committed to bringing art closer to all audiences.",
    products_title: "Gallery",
    product1: "Work 1", product2: "Work 2", product3: "Work 3", product4: "Work 4", product5: "Work 5",
    product6: "Work 6", product7: "Work 7", product8: "Work 8", product9: "Work 9", product10: "Work 10",
    product11: "Work 11", product12: "Work 12", product13: "Work 13", product14: "Work 14", product15: "Work 15",
    product16: "Work 16", product17: "Work 17", product18: "Work 18", product19: "Work 19", product20: "Work 20",
    contact_title: "Contact",
    phone_title: "Phone:",
    phone: "+593 983 337 795",
    email_title: "Email:",
    email: "lumar_2223@yahoo.com",
    instagram_title: "Instagram:",
    instagram: "@Lum_Artstudio",
    facebook_title: "Facebook:",
    facebook: "Lum_ArtStudio",
    footer: "&copy; 2025 LumArt - Art Studio. All rights reserved."
  }
};

function switchLang(lang) {
  document.querySelectorAll('[data-lang]').forEach(el => {
    const key = el.getAttribute('data-lang');
    if (translations[lang] && translations[lang][key]) {
      // Si el texto tiene HTML, usar innerHTML, si no, textContent
      if (translations[lang][key].includes("<strong>") || translations[lang][key].includes("<br>")) {
        el.innerHTML = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });
}
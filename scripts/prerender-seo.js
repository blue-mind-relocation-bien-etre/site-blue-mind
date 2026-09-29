import fs from "node:fs";
import path from "node:path";

const seoData = {
  "/": {
    title:
      "Blue Mind & Carrieres Nomades - Relocation & Bien-etre en Finistere",
    description:
      "Decouvrez nos services d’accompagnement a la mobilite geographique et de bien-etre a Brest et dans le Finistere.",
  },
  "/carrieres-nomades": {
    title: "Carrieres Nomades Relocation",
    description:
      "Carrières Nomades by Blue Mind vous accompagne dans votre mobilité géographique et votre installation en France. Découvrez nos services sur-mesure pour faciliter votre transition et celle de votre famille.",
  },
  "/blue-mind": {
    title: "Blue Mind - Nos prestations bien-être",
    description:
      "Blue Mind accompagne les personnes pour aller plus loin dans leur bien-être et permettre un équilibre personnel grâce à la discipline du Janzu et la réflexologie plantaire.",
  },
  "/pricing": {
    title: "Blue Mind - Nos tarifs",
    description:
      "Demandez votre devis gratuit pour un projet de relocation ou decouvrez les tarifs de nos prestations bien etre. Nous analysons votre demande et préparons votre devis.",
  },
  "/agency": {
    title: "Blue Mind - Notre agence",
    description:
      "Decouvrez l'histoire de Blue Mind et votre consultante relocation et bien-être.",
  },
  "/our-philosophy": {
    title: "Blue Mind - Notre Philosophie",
    description:
      "Allier ambitions professionnelles et qualite de vie grace a une approche humaine et sur-mesure par les bienfaits de l'eau.",
  },
  "/partners": {
    title: "Blue Mind - Nos Partenaires",
    description:
      "Decouvrez les partenaires qui nous accompagnent pour reussir votre installation en Bretagne.",
  },
  "/contact": {
    title: "Blue Mind - Contact",
    description:
      "Une question sur votre projet de relocation ou de bien-etre ? Contactez notre equipe a Brest.",
  },
  "/legal-notice": {
    title: "Blue Mind - Mentions Legales",
    description: "Consultez les mentions legales de notre site internet.",
  },
};

const distDir = path.resolve(process.cwd(), "dist");

function updateHtmlFile(filePath, routePath) {
  const seo = seoData[routePath];
  if (!seo) return;

  let html = fs.readFileSync(filePath, "utf8");

  // Definition des balises sans declencher le filtre du chat
  const strDocType = "<" + "!doctype html>";
  const strTitleOpen = "<" + "title>";
  const strTitleClose = "<" + "/title>";
  const strMetaDesc = "<" + 'meta name="description"';
  const strHeadOpen = "<" + "head>";

  // 1. On repare le bug de ViteSSG en supprimant tout texte parasite avant le doctype
  const docTypeIndex = html.toLowerCase().indexOf(strDocType);
  if (docTypeIndex > 0) {
    html = html.substring(docTypeIndex);
  }

  // 2. On supprime proprement les anciennes balises title si elles existent
  const titleStart = html.indexOf(strTitleOpen);
  if (titleStart !== -1) {
    const titleEnd = html.indexOf(strTitleClose) + strTitleClose.length;
    html = html.substring(0, titleStart) + html.substring(titleEnd);
  }

  // 3. On supprime proprement les anciennes balises meta description si elles existent
  const descStart = html.indexOf(strMetaDesc);
  if (descStart !== -1) {
    const descEnd = html.indexOf(">", descStart) + 1;
    html = html.substring(0, descStart) + html.substring(descEnd);
  }

  // 4. On injecte les nouvelles balises justes apres head
  const headIndex = html.indexOf(strHeadOpen);
  if (headIndex !== -1) {
    const insertionPoint = headIndex + strHeadOpen.length;
    const injection =
      "\n    " +
      strTitleOpen +
      seo.title +
      strTitleClose +
      "\n    " +
      "<" +
      'meta name="description" content="' +
      seo.description +
      '" />\n';
    html =
      html.substring(0, insertionPoint) +
      injection +
      html.substring(insertionPoint);
  }

  fs.writeFileSync(filePath, html, "utf8");
  console.log("[SEO Post-Build] Mis a jour de la page : " + routePath);
}

function processDirectory(currentDir) {
  const entries = fs.readdirSync(currentDir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(currentDir, entry.name);

    if (entry.isDirectory()) {
      processDirectory(fullPath);
    } else if (entry.name === "index.html") {
      const relativeDir = path.relative(distDir, currentDir);
      let routePath = "/" + relativeDir.replace(/\\/g, "/");
      if (routePath === "/.") {
        routePath = "/";
      }

      updateHtmlFile(fullPath, routePath);
    }
  }
}

if (fs.existsSync(distDir)) {
  processDirectory(distDir);
  console.log("[SEO Post-Build] Injection terminee avec succes !");
} else {
  console.error("[SEO Post-Build] Le dossier dist est introuvable.");
}

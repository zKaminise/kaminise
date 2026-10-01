import imageManifest from "./image-manifest.json";

export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  url: string;
  image: string;
  fullImage: string;
  tone: string;
};

export const projects: Project[] = [
  {
    id: "01",
    title: "Alçar Humà",
    category: "Site institucional",
    description:
      "Uma presença digital para quem desenvolve pessoas e fortalece empresas.",
    url: "https://alcarhuma.com.br",
    image: "portfolio-1",
    fullImage: "case-01",
    tone: "sage",
  },
  {
    id: "02",
    title: "Odontologia Flavia",
    category: "Landing page",
    description:
      "Cuidado e confiança traduzidos em uma experiência clara, do primeiro olhar ao contato.",
    url: "https://www.odontologiafl.com.br",
    image: "portfolio-4",
    fullImage: "case-02",
    tone: "sand",
  },
  {
    id: "03",
    title: "BRASA",
    category: "Landing page",
    description:
      "Uma experiência para hamburgueria que combina identidade marcante, cardápio e animações de scroll.",
    url: "https://hamburgerlp.vercel.app/",
    image: "portfolio-brasa",
    fullImage: "portfolio-brasa",
    tone: "sand",
  },
  {
    id: "04",
    title: "Acquagyn",
    category: "Site institucional",
    description:
      "Natação, saúde e movimento em uma presença digital feita para aproximar.",
    url: "https://acquagyn.com.br",
    image: "portfolio-5",
    fullImage: "case-05",
    tone: "blue",
  },
  {
    id: "05",
    title: "Leandro Kaminise",
    category: "Landing page",
    description:
      "Uma apresentação direta para uma solução de agendamentos via WhatsApp.",
    url: "https://curso-leandro.vercel.app/",
    image: "portfolio-2",
    fullImage: "case-03",
    tone: "forest",
  },
  {
    id: "06",
    title: "Clube das Zizas",
    category: "Landing page",
    description:
      "Um espaço digital para uma comunidade de desenvolvimento pessoal feminino.",
    url: "https://clube-zizas.vercel.app",
    image: "case-04",
    fullImage: "case-04",
    tone: "rose",
  },
  {
    id: "07",
    title: "Saldanha Móveis",
    category: "Landing page",
    description:
      "O design dos espaços de beleza começa na forma de apresentar cada detalhe.",
    url: "https://saldanhamoveis.com.br",
    image: "portfolio-7",
    fullImage: "case-06",
    tone: "olive",
  },
  {
    id: "08",
    title: "Ecos da Alma",
    category: "Landing page",
    description:
      "Uma experiência de leitura e descoberta que dá espaço à mensagem.",
    url: "https://ecosdaalma.app.br/",
    image: "portfolio-3",
    fullImage: "case-07",
    tone: "lilac",
  },
  {
    id: "09",
    title: "Salon 2Beauté ADN",
    category: "Site com agendamento",
    description:
      "Beleza e cuidado em uma experiência que apresenta o salão e facilita o agendamento online.",
    url: "https://salon2beauteadn.com.br/",
    image: "portfolio-salon",
    fullImage: "portfolio-salon",
    tone: "rose",
  },
];

// Keep the featured sequence and hero selection explicit when adding projects.
export const featuredProjects = projects.slice(0, 4);
export const moreProjects = projects.slice(4);
export const heroProjects = [projects[2], projects[0], projects[1]];

// User-supplied design references, separate from commissioned portfolio projects.
export const visualArchive = [
  {
    image: "portfolio-ref-stanzza",
    title: "Stanzza",
    label: "Referência de design",
  },
  {
    image: "portfolio-ref-lightweight",
    title: "Lightweight",
    label: "Referência de design",
  },
  {
    image: "portfolio-ref-aevion",
    title: "Aevion",
    label: "Referência de design",
  },
];

export const imageUrl = (name: string, width = 1280) =>
  "/images/" +
  name +
  "-" +
  (name.startsWith("portfolio") ? width : 800) +
  ".webp";
export const imageSet = (name: string) => {
  const variants = (
    imageManifest as Record<
      string,
      {
        width: number;
        height: number;
        variants: { file: string; width: number }[];
      }
    >
  )[name]?.variants;
  return variants
    ?.map(({ file, width }) => "/images/" + file + " " + width + "w")
    .join(", ");
};
export const imageDimensions = (name: string) =>
  (imageManifest as Record<string, { width: number; height: number }>)[
    name
  ] ?? { width: 1920, height: 1080 };

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
    title: "Leandro Kaminise",
    category: "Landing page",
    description:
      "Uma apresentação direta para uma solução de agendamentos via WhatsApp.",
    url: "https://script.kaminisegrowth.com.br",
    image: "portfolio-2",
    fullImage: "case-03",
    tone: "forest",
  },
  {
    id: "04",
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
    id: "05",
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
    id: "06",
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
    id: "07",
    title: "Ecos da Alma",
    category: "Landing page",
    description:
      "Uma experiência de leitura e descoberta que dá espaço à mensagem.",
    url: "https://ecosdaalma.com.br",
    image: "portfolio-3",
    fullImage: "case-07",
    tone: "lilac",
  },
];

// These original portfolio images have no project URLs in the source repository.
export const visualArchive = [
  { image: "portfolio-6", title: "Beleza & estética", label: "Website" },
  { image: "portfolio-8", title: "Ana Veludo", label: "Website" },
  { image: "portfolio-9", title: "Premium Burger House", label: "Website" },
];

export const imageUrl = (name: string, width = 1280) =>
  `/images/${name}-${name.startsWith("portfolio") ? width : 800}.webp`;
export const imageSet = (name: string) =>
  name.startsWith("portfolio")
    ? [640, 1280, 1920]
        .map((width) => `${imageUrl(name, width)} ${width}w`)
        .join(", ")
    : undefined;

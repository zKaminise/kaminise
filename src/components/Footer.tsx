const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 bg-background border-t border-border/30">
      <div className="container mx-auto px-4">
        <p className="text-center text-muted-foreground text-sm md:text-base">
          Copyright © {currentYear} Gabriel Misao | Powered by{" "}
          <a
            href="https://instagram.com/gabrielmisao.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent/80 transition-colors"
          >
            @GabrielMisao.dev
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

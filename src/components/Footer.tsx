import { Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-background border-t border-border/30">
      <div className="container mx-auto px-4">
        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-4">
          <a
            href="https://www.instagram.com/gabrielmisao.dev?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/gabrielkaminise/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-center text-muted-foreground text-sm md:text-base">
          Copyright © {currentYear} Gabriel Misao | Powered by{" "}
          <a
            href="https://www.instagram.com/gabrielmisao.dev"
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

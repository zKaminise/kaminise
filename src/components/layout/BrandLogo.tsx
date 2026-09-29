import "./brand.css";

const logos = {
  horizontal: { src: "/brand/logo-horizontal.webp", width: 670, height: 245 },
  principal: { src: "/brand/logo-principal.webp", width: 1255, height: 420 },
  monogram: { src: "/brand/monogram.webp", width: 370, height: 305 },
};

export default function BrandLogo({
  variant = "horizontal",
  decorative = false,
  className = "",
  loading = "lazy",
}: {
  variant?: keyof typeof logos;
  decorative?: boolean;
  className?: string;
  loading?: "eager" | "lazy";
}) {
  return (
    <img
      {...logos[variant]}
      className={`brand-logo ${className}`}
      alt={decorative ? "" : "Gabriel Misao — .dev"}
      loading={loading}
      decoding="async"
    />
  );
}

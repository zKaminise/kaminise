import websiteMockup from "@/assets/website-mockup.jpg";

const DeviceMockup = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Laptop */}
      <div className="relative animate-float">
        {/* Screen */}
        <div className="relative bg-secondary rounded-t-xl pt-6 pb-4 px-6">
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-muted"></div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-muted border border-border">
            <img
              src={websiteMockup}
              alt="Website preview"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
        {/* Laptop Base */}
        <div className="relative h-4 bg-gradient-to-b from-secondary to-muted rounded-b-xl">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-muted rounded-t-lg"></div>
        </div>
        {/* Laptop Stand */}
        <div className="mx-auto w-[80%] h-2 bg-muted/50 rounded-b-xl"></div>
      </div>

      {/* Phone - positioned to the right */}
      <div 
        className="absolute -right-4 md:right-8 bottom-8 w-24 md:w-32 animate-float"
        style={{ animationDelay: "1s" }}
      >
        {/* Phone Frame */}
        <div className="relative bg-secondary rounded-2xl p-1.5 shadow-2xl border border-border">
          {/* Notch */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-muted rounded-full z-10"></div>
          {/* Screen */}
          <div className="relative aspect-[9/19] overflow-hidden rounded-xl bg-muted">
            <img
              src={websiteMockup}
              alt="Mobile preview"
              className="w-full h-full object-cover object-top scale-150"
            />
          </div>
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 -z-10 bg-accent/10 blur-3xl rounded-full scale-150 animate-glow-pulse"></div>
    </div>
  );
};

export default DeviceMockup;

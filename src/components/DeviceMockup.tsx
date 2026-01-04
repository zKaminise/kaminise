import deviceMockup from "@/assets/device-mockup.png";

const DeviceMockup = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative animate-float scale-110 lg:scale-125">
        <img
          src={deviceMockup}
          alt="Website preview on devices"
          className="w-full h-auto object-contain drop-shadow-2xl"
        />
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 -z-10 bg-accent/10 blur-3xl rounded-full scale-150 animate-glow-pulse"></div>
    </div>
  );
};

export default DeviceMockup;

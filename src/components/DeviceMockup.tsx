import deviceMockup from "@/assets/device-mockup.png";

const DeviceMockup = () => {
  return (
    <div className="relative w-full min-w-[600px] lg:min-w-[800px] xl:min-w-[900px]">
      <div className="relative animate-float">
        <img
          src={deviceMockup}
          alt="Website preview on devices"
          className="w-full h-auto object-contain drop-shadow-2xl scale-125 lg:scale-150 origin-center"
        />
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 -z-10 bg-accent/10 blur-3xl rounded-full scale-150 animate-glow-pulse"></div>
    </div>
  );
};

export default DeviceMockup;

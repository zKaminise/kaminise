import { Star } from "lucide-react";

const avatars = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
];

const SocialProof = () => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
      {/* Avatar Stack */}
      <div className="flex -space-x-3">
        {avatars.map((avatar, index) => (
          <div
            key={index}
            className="relative w-10 h-10 rounded-full border-2 border-background overflow-hidden transition-transform hover:scale-110 hover:z-10"
            style={{ zIndex: avatars.length - index }}
          >
            <img
              src={avatar}
              alt={`Cliente ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="flex flex-col gap-1">
        <span className="text-sm font-medium text-foreground">
          +120 negócios atendidos
        </span>
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 fill-accent text-accent"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialProof;

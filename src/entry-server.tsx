import { renderToString } from "react-dom/server";
import { MotionConfig } from "framer-motion";
import Index from "./pages/Index";

export function render() {
  return renderToString(
    <MotionConfig reducedMotion="user">
      <Index />
    </MotionConfig>,
  );
}

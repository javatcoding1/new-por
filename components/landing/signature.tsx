import {
  motion,
  useAnimation,
  useReducedMotion,
  type ViewportOptions,
} from "motion/react";

interface SignatureProps {
  className?: string;
  controls?: ReturnType<typeof useAnimation>;
  viewport?: ViewportOptions;
}

export function Signature({ className, controls, viewport }: SignatureProps) {
  const reducedMotion = useReducedMotion();

  return (
    <svg
      width="115"
      height="63"
      viewBox="0 0 115 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <motion.path
        d="M 15 15 L 45 15 M 30 15 L 30 45 C 30 55 18 55 10 48 M 48 48 L 48 20 L 68 40 L 88 20 L 88 48"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0.8 }}
        animate={controls}
        whileInView={
          !controls && !reducedMotion
            ? { pathLength: 1, opacity: 1 }
            : undefined
        }
        className="no-js-visible signature-path"
        viewport={{ once: true, amount: 0.2, ...viewport }}
        transition={
          reducedMotion ? { duration: 0 } : { duration: 1.5, ease: "easeInOut" }
        }
      />
    </svg>
  );
}

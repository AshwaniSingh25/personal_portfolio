import React from "react";
import PropTypes from "prop-types";

const BlurBlob = ({
  position,
  size,
  color = "from-violet-500/25 to-cyan-500/20",
  duration = "20s",
}) => {
  const { top, left, right, bottom } =
    position;

  const { width, height } = size;

  return (
    <div
      className="
        pointer-events-none
        absolute
        -z-10
        transform-gpu
        will-change-transform
      "
      style={{
        top,
        left,
        right,
        bottom,
        width,
        height,
      }}
    >
      {/* MAIN BLOB */}
      <div
        className={`
          h-full
          w-full
          rounded-full
          bg-gradient-to-br
          ${color}

          opacity-60
          blur-[90px]

          dark:opacity-70

          animate-blob
        `}
        style={{
          animationDuration: duration,
        }}
      />

      {/* SECONDARY GLOW */}
      <div
        className="
          absolute
          inset-0
          rounded-full

          bg-white/40
          opacity-30
          blur-[120px]

          dark:bg-white/10
          dark:opacity-20
        "
      />

      {/* EXTRA DEPTH LAYER */}
      <div
        className="
          absolute
          inset-0
          rounded-full

          bg-gradient-to-br
          from-white/10
          to-transparent

          dark:from-white/5

          blur-3xl
        "
      />
    </div>
  );
};

BlurBlob.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string,
    right: PropTypes.string,
    bottom: PropTypes.string,
  }).isRequired,

  size: PropTypes.shape({
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
  }).isRequired,

  color: PropTypes.string,

  duration: PropTypes.string,
};

export default BlurBlob;
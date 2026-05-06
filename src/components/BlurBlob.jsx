import React from "react";
import PropTypes from "prop-types";

const BlurBlob = ({
  position,
  size,
  color = "from-violet-500/30 to-fuchsia-500/20",
  duration = "20s",
}) => {
  const { top, left, right, bottom } = position;
  const { width, height } = size;

  return (
    <div
      className="
        absolute
        pointer-events-none
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
      <div
        className={`
          w-full
          h-full
          rounded-full
          bg-gradient-to-br
          ${color}
          opacity-70
          blur-3xl
          mix-blend-screen
          animate-blob
        `}
        style={{
          animationDuration: duration,
        }}
      />

      {/* Secondary Glow Layer */}
      <div
        className="
          absolute
          inset-0
          rounded-full
          bg-white/10
          blur-2xl
          opacity-30
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
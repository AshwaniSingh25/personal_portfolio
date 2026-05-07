import React from "react";
import PropTypes from "prop-types";

const BlurBlob = ({
  position,
  size,
  color = "from-violet-500/15 to-cyan-500/10",
  duration = "18s",
}) => {
  const {
    top,
    left,
    right,
    bottom,
  } = position;

  const {
    width,
    height,
  } = size;

  return (
    <div
      className="
        pointer-events-none
        absolute
        -z-10
        transform-gpu
        will-change-transform
        hidden md:block
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
          relative
          h-full
          w-full
          rounded-full
          bg-gradient-to-br
          ${color}

          opacity-50

          blur-[60px]
          lg:blur-[80px]

          animate-blob
        `}
        style={{
          animationDuration: duration,
        }}
      >
        {/* SOFT INNER GLOW */}
        <div
          className="
            absolute
            inset-0
            rounded-full
            bg-white/[0.04]
            mix-blend-overlay
          "
        />
      </div>
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
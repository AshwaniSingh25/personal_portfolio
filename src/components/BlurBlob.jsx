import React from "react";
import PropTypes from "prop-types";

const BlurBlob = ({ position, size }) => {
  // Destructure position and size
  const { top, left } = position;
  const { width, height } = size;

  return (
    <div
      className="absolute pointer-events-none" // 1. Add pointer-events-none
      style={{
        top: top,
        left: left,
        width: width,
        height: height,
        transform: "translate(-50%, -50%)",
      }}
    >
      {/* 2. Use semantic accent color for the blur effect */}
      <div className="w-full h-full bg-accent dark:bg-accent rounded-full opacity-20 blur-3xl animate-blob"></div>
    </div>
  );
};

// 3. Fix PropTypes spelling (P should be lowercase)
BlurBlob.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.string.isRequired, // Added isRequired
    left: PropTypes.string.isRequired, // Added isRequired
  }).isRequired,
  size: PropTypes.shape({
    width: PropTypes.string.isRequired, // Added isRequired
    height: PropTypes.string.isRequired, // Added isRequired
  }).isRequired,
};

export default BlurBlob;
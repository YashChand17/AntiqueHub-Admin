// BackgroundImage.js
import React from "react";

const BackgroundImage = () => {
  return (
    <div className="bg-cover bg-center fixed inset-0 z-0">
      {/* Add your image source here */}
      <img src="/Background.png" className="w-full h-full object-cover" alt="Background" />
    </div>
  );
};

export default BackgroundImage;

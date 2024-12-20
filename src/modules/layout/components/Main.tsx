"use client";
import React, { useState, ReactNode, useEffect } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Main: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div
      style={{
        
        // flexGrow: 1,
        // overflow: "hidden"
      }}
    >
      {children}
    </div>
  );
};

export default Main;
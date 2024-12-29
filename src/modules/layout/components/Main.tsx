"use client";
import React, { useState, ReactNode, useEffect } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Main: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div style={{marginLeft:"320px"}}
    >
      {children}
    </div>
  );
};

export default Main;
"use client";
import React, { useState, ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import ReduxProvider from "@/store/redux-provider";
import queryClient from "@/libs/QueryClient";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <ReduxProvider>
                <div style={{}}>
                    <div >
                        <Header />
                    </div>
                    <div style={{ display: "flex", flex: 1, marginLeft: "250px" }}>
                        <Main>{children}</Main>
                    </div>
                    <div style={{  width: "250px"}}>
                        <Sidebar />
                    </div>
                </div>
            </ReduxProvider>
        </QueryClientProvider>
    );
};

export default Layout;

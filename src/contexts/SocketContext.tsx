import React, { createContext, useContext, useEffect, useRef } from "react";
import io, { Socket } from "socket.io-client";

interface SocketContextProps {
  socket: Socket | null;
}

const SocketContext = createContext<SocketContextProps | undefined>(undefined);

export const useSocket = (): SocketContextProps => {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error("useSocket must be used within a SocketProvider");
  }
  return context;
};

export const SocketProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    socketRef.current = io(process.env.WEB_SOCKET ||'https://socket.ai-dms.com');

    // Emit the user-session event
    if (socketRef.current) {
      const user = {
        id: 1,
        name: "Scott",
        socketID: socketRef.current.id,
      };
      socketRef.current.emit("user-session", user);
    }

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    };
  }, []);

  return (
    <SocketContext.Provider value={{ socket: socketRef.current }}>
      {children}
    </SocketContext.Provider>
  );
};

import { useState, createContext, FC, ReactNode } from "react";

interface SidebarContextInterface {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
  children?: ReactNode;
}

interface SidebarContextProps {
  children: ReactNode;
}

export const SidebarContext = createContext<SidebarContextInterface>(
  {} as SidebarContextInterface
);

export const SidebarProvider: FC<SidebarContextProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <SidebarContext.Provider value={{ sidebarOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

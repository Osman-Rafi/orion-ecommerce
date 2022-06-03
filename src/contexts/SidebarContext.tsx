import { useState, createContext, FC, ReactNode } from "react";

interface SidebarContextInterface {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}

interface SidebarContextPropsInterface {
  children: ReactNode;
}

const SidebarContext = createContext<SidebarContextInterface>(
  {} as SidebarContextInterface
);

const SidebarProvider: FC<SidebarContextPropsInterface> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <SidebarContext.Provider value={{ sidebarOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export { SidebarContext, SidebarProvider };

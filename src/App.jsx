import { useState } from "react";
import Sidebar from "./components/layout/Sidebar";
import MainWrapper from "./components/layout/MainWrapper";
import Home from "./pages/home/Home";
import Lists from "./pages/lists/Lists";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentView, setCurrentView] = useState("Home");

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
        currentView={currentView}
        setCurrentView={setCurrentView}
      />

      <MainWrapper>
        {currentView === "Home" && <Home />}
        {currentView === "Lists" && <Lists />}
        {/* {currentView === 'lists' && <ListsView />}
        {currentView === 'community' && <CommunityView />} */}
      </MainWrapper>
    </div>
  );
}

export default App;

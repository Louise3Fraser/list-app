import { Home, BarChart3, Users, Menu, X } from "lucide-react";

export default function Sidebar({
  isOpen,
  setIsOpen,
  currentView,
  setCurrentView,
}) {
  return (
    <div
      className={`${
        isOpen ? "w-63" : "w-20"
      } transition-all duration-300 flex flex-col`}
    >
      <div className="p-6 flex items-center justify-between">
        <h1 className={`text-2xl font-bold ${!isOpen && "hidden"}`}>Lyst</h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-1 hover:bg-gray-100 rounded-lg"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <nav className="flex-1 px-3">
        <button
          onClick={() => setCurrentView("Home")}
          className={`w-full flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg mb-1 ${
            currentView === "Home" ? "bg-gray-100" : "hover:bg-gray-100"
          }`}
        >
          <Home size={20} />
          {isOpen && <span>Home</span>}
        </button>

        <button
          onClick={() => setCurrentView("Lists")}
          className={`w-full flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg mb-1 ${
            currentView === "Lists" ? "bg-gray-100" : "hover:bg-gray-100"
          }`}
        >
          <BarChart3 size={20} />
          {isOpen && <span>Lists</span>}
        </button>

        <button
          onClick={() => setCurrentView("community")}
          className={`w-full flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg ${
            currentView === "community" ? "bg-gray-100" : "hover:bg-gray-100"
          }`}
        >
          <Users size={20} />
          {isOpen && <span>Community</span>}
        </button>
      </nav>

      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"></div>
          {isOpen && (
            <div className="flex-1 overflow-hidden">
              <div className="text-sm font-medium">Olivia Rhye</div>
              <div className="text-xs text-gray-500 truncate">
                olivia@untitledui.com
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

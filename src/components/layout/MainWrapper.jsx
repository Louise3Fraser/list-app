export default function MainWrapper({ children }) {
  return (
    <div className="flex-1 overflow-auto h-screen bg-gray-50">
      <div className="pl-0 p-2.5 h-screen">
        <div className="bg-white h-full rounded-md border shadow-sm p-6">
          {children}
        </div>
      </div>
    </div>
  );
}

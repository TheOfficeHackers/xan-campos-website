import { Routes, Route } from "react-router-dom";
import { WorksScreen, HomeScreen, ConcertsScreen, VideosScreen, ContactScreen, AdminAuthScreen, AdminDashboardScreen, ErrorsScreen } from "./screens"

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/concerts/*" element={<ConcertsScreen />} />
          <Route path="/works" element={<WorksScreen />} />
          <Route path="/videos" element={<VideosScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
          <Route path="/admin/auth" element={<AdminAuthScreen />} />
          <Route path="/admin/dashboard" element={<AdminDashboardScreen />} />
          <Route path="*" element={<ErrorsScreen />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

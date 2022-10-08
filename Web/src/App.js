import { Routes, Route } from "react-router-dom";
import { WorksScreen, ErrorsScreen } from "./screens"

function App() {
  return (
    <>
      <div className="container py-3">
        <Routes>
          <Route path="/discography" element={<WorksScreen />} />
          <Route path="*" element={<ErrorsScreen />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

import {
  Navbar,
  Class1Maths,
  Class2Maths,
  Class1English,
  Class2English,
} from "./components";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar clName={""} />

      <Routes>
        <Route path="/class1/maths" element={<Class1Maths />} />
        <Route path="/class1/english" element={<Class1English />} />
        <Route path="/class2/maths" element={<Class2Maths />} />
        <Route path="/class2/english" element={<Class2English />} />
      </Routes>
    </>
  );
}

export default App;

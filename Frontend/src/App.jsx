import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import AllLists from "./pages/AllLists";
import { ListItem } from "./pages/ListItem";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import AddList from "./components/AddList";
import EditList from "./components/EditLsit";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/my-lists" element={<AllLists />} />
          <Route path="/my-list/:id" element={<ListItem />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add-list" element={<AddList />} />
          <Route path="/edit-list" element={<EditList />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

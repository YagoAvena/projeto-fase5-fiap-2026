import { createRoot } from "react-dom/client";
import Header from "./components/Header";

const header = document.getElementById("header-root");

if (header) {
    createRoot(header).render(<Header />);
}
import "./App.css"
import Header from "./components/Header.jsx";
import ToDoList from "./components/ToDoList.jsx";

export default function App() {
    return (
        <main className="app">
            <Header />
            <ToDoList />
        </main>
    );
}
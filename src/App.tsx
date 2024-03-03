import { Footer } from "./components";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/home";

function App() {
  return (
    <div className="flex min-h-screen flex-col justify-between antialiased">
      <Navbar />
      <main className="flex-1 bg-white p-6">
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}

export default App;

import { About, Contacts, Footer, Home, Navbar, Portfolio, Resume } from "./components";

export default function App() {
  return (
    <section className="min-h-screen bg-slate-900 w-full text-white ">
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Resume />
      <Contacts/>
      <Footer/>
    </section>
  );
}

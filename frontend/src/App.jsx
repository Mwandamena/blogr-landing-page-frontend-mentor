import { About, Footer, Header } from "./components";

function App() {
  return (
    <>
      <main className="h-screen flex flex-col items-center overflow-x-hidden overflow-y-auto">
        {/* header */}
        <Header />

        {/* about */}
        <About />

        {/* footer */}
        <Footer />
      </main>
    </>
  );
}

export default App;

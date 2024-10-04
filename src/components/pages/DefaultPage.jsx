import DevicesManager from "../organisms/DevicesManager/DevicesManager";
import Header from "../molecules/Header/Header";
import Footer from "../molecules/Footer/Footer";

export default function App() {
  return (
    <>
      <Header />
      <section className="w-full bg-white min-h-[calc(100vh-100px)]">
        <DevicesManager />
      </section>
      <Footer />
    </>
  );
}

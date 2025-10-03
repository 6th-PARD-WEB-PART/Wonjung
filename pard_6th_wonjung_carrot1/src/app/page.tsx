import Header from "./components/Header";
import Searchpage from "./components/Searchpage";
import Area from "./components/Area";

export default function Home() {
  return (
    <>
      <Header />
      <Searchpage />

      <main className="bg-[#F9FaFB] w-full min-h-screen">
        <Area />
      </main>
      


    </>
  );
}

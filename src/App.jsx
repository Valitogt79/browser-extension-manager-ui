import { Filters } from "./components/Filters";
import { Header } from "./components/Header";
import { CardsContainer } from "./components/Cards-container";
import { useState } from "react";

function App() {

  const [filter, setFilter] = useState(('All')); // 'All' - 'Active' - 'Inactive'


  return (
    <main className="light-gradient dark:dark-gradient min-h-screen flex flex-col items-center">
      <section className="w-[343px] my-6 md:w-[672px] xl:w-[1170px]">
        <Header />
        <Filters setFilter={setFilter} />
        <CardsContainer filter={filter} />
      </section>
    </main>
  );
}

export default App;

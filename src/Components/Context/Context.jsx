import { Children, createContext, useEffect, useState } from "react";
import { Pokemon } from "../Pokemon";

export const Context = createContext({
  Pokemon: [],
  loader: true,
  error: null,
  search: "",
  setsearch: "",
  searchData: [],
  DisplayPoke: "",
  totalPage: 0,
  currentPage: 1,
  Prev: () => {},
  Next: () => {},
});

function ContextProvider({ children }) {
  const [Pokemon, setPokemon] = useState([]);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(null);
  const [search, setsearch] = useState("");
  /**
   Pagination states
   */
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const API = "https://pokeapi.co/api/v2/pokemon?limit=124";

  const fetchPokemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      
      const detailedPokemonData = data.results.map(async (poke) => {
        const res = await fetch(poke.url);
        const data = await res.json();

        return data;
      });
      // **this detailedPokemonData gives datas promise only
      // console.log(detailedPokemonData)

      /**this will give data */
      const detailRespone = await Promise.all(detailedPokemonData);
      setPokemon(detailRespone);
      setTotalPage(Math.ceil(detailRespone.length / 8)); // pagination
      setLoader(false);
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {
    fetchPokemon();
  }, []);
  //search functionality
  const searchData = Pokemon.filter((poke) =>
    poke.name.toLowerCase().includes(search.toLowerCase())
  );
  // pagination methods
  const changePage = (newpage) => {
    setCurrentPage(newpage);
    console.log(newpage);
  };
  const Next = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };
  const Prev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  // formula
  const PokePerPage = 8;
  const startIndex = (currentPage - 1) * PokePerPage;
  const endIndex = startIndex + PokePerPage;
  const DisplayPoke = searchData.slice(startIndex, endIndex);

  return (
    <>
      <Context.Provider
        value={{
          Pokemon,
          loader,
          error,
          search,
          setsearch,
          searchData,
          DisplayPoke,
          changePage,
          totalPage,
          currentPage,
          Prev,
          Next,
        }}
      >
        {children}
      </Context.Provider>
    </>
  );
}
export default ContextProvider;

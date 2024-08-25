import React, { useContext } from "react";

import Cards from "./Cards";
import { Context } from "./Context/Context";
import Loader from "./Loader";
import Btn from "./Btn";
import Footer from "./Footer";
import { SiPokemon } from "react-icons/si";
import { Link } from "react-scroll";

import { MdOutlineCatchingPokemon } from "react-icons/md";

export const Pokemon = () => {
  const {
    loader,
    error,
    search,
    setsearch,
    DisplayPoke,
    changePage,
    totalPage,
    currentPage,
  } = useContext(Context);

  if (loader) return <Loader />;
  if (error)
    return (
      <h1>{error.message}</h1> // this is by defualt method to print error
    );
  return (
    <>
      <div className="main">
        <div className="header" id="head">
          <Link spy={true} smooth={true} offset={50} duration={250} to="footer">
            <h1>
              <MdOutlineCatchingPokemon className="icon" />
            </h1>
          </Link>
        </div>

        <section className="search">
          <input
            type="text"
            placeholder="Search pokemon.."
            onChange={(e) => setsearch(e.target.value)}
          />
        </section>
        <div className="cards">
          <Cards />
        </div>
      </div>
      <Btn />
      <Footer />
    </>
  );
};

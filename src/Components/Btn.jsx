import { useContext } from "react";
import { Context } from "./Context/Context";
import { Link } from "react-scroll";

function Btn() {
  const { totalPage, currentPage, changePage, Prev, Next } =
    useContext(Context);

  const DisblePrev = currentPage === 1;
  const DisbleNext = currentPage ===totalPage;

  return (
    <div className="btns">
      <Link to="head" spy={true} smooth={true} offset={50} duration={250}>
        <button onClick={() => Prev()} disabled={DisblePrev}>
          Prev
        </button>
      </Link>

      {/* {Array.from({ length: totalPage }, (e, i) => {
    return <button
     key={i}
    //  disabled={currentPage ===i+1}
     onClick={()=>changePage(i+1)}
     >
      {i + 1}
      </button>;
  })} */}
      <h3>{currentPage}</h3>

      <Link
        to="head"
        spy={true}
        smooth={true}
        offset={50}
        duration={250}
        
      >
        <button 
        disabled ={DisbleNext}
        onClick={() => Next()}>Next</button>
      </Link>

      {/* {DisplayPoke.map((poke,i)=>  <Btn key={poke.id} num={i+1} click={changePage}/>)} */}
      {/* we can also use map method */}
    </div>
  );
}

export default Btn;

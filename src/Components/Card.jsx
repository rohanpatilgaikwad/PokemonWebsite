import React from "react";

const Card = ({ Pokemon }) => {
  console.log(Pokemon);
  return (
    <div className="card">
      <div className="img">
        <img
          src={Pokemon.sprites.other.dream_world.front_default}
          alt={Pokemon.name}
        />
      </div>

      <div className="name">
        <h3>{Pokemon.name}</h3>
      </div>

      <div className="btn">
        <button>
          {Pokemon.types.map((poke) => poke.type.name).join(", ")}
        </button>
        {/* poke.type.name).join(", ") this used to join one 2 array elements with coma*/}
      </div>

      <div className="info">
        <p>
          Height: <span>{Pokemon.height}</span>
        </p>
        <p>
          Weight: <span>{Pokemon.weight}</span>
        </p>
        <p>
          Speed: <span>{Pokemon.stats[5].base_stat}</span>{" "}
        </p>
        <div className="secinfo">
          <span>{Pokemon.base_experience}</span>
          <p>experince </p>
        </div>
        <div className="secinfo">
          <span>{Pokemon.stats[1].base_stat}</span>
          <p>Attack</p>
        </div>
        <div className="secinfo">
          <span>{Pokemon.abilities[0].ability.name}</span>
          <p>Ability</p>
        </div>
      </div>
    </div>
  );
};

export default Card;

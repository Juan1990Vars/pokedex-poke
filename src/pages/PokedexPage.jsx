import { useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";
import { useEffect, useRef, useState } from "react";
import PokeCard from "../components/PokedexPage/PokeCard";
import SelectType from "../components/PokedexPage/SelectType";

const PokedexPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [typeSelector, setTypeSelector] = useState("allPokemons");

  console.log(typeSelector);

  const trainer = useSelector((store) => store.trainer);

  const inputSearch = useRef();

  const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20";
  const [pokemons, getPokemons, getTypePokemon] = useFetch(url);

  useEffect(() => {
    if (typeSelector === "allPokemons") {
      getPokemons();
    } else {
      getTypePokemon(typeSelector);
    }
    getPokemons();
  }, [typeSelector]);

  const handleSearch = (e) => {
    e.preventDefault();
    setInputValue(inputSearch.current.value.trim().toLowerCase());
  };

  const pokeFiltered = pokemons?.results.filter((poke) =>
    poke.name.includes(inputValue)
  );

  return (
    <div>
      <img className="poke__img1" src="poke2.png" alt="poke2" />
      <img className="poke__img2" src="pokedex.png" alt="pokedex" />
      <div className="pokem">
        <p className="pokem__p">
          <span className="pokem__span">Hi {trainer}, </span> here you can find
          your favorite pokemon
        </p>
        <div className="form">
          <form className="form__1" onSubmit={handleSearch}>
            <input
              className="form__search"
              ref={inputSearch}
              type="text"
              placeholder="Search pokemon by name"
            />
            <button className="form__btn1">Search</button>
          </form>
          <SelectType setTypeSelector={setTypeSelector} />
        </div>
        <div>
          {pokeFiltered?.map((poke) => (
            <PokeCard key={poke.url} url={poke.url} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokedexPage;

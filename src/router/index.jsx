import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { ProfilePokemon } from './../pages/ProfilePokemon';
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";

export const Router = () => {
  const [pokemonData, setPokemonData] = useState();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home setPokemonData={setPokemonData} />} />
        <Route path="/profile" element={<ProfilePokemon pokemonData={pokemonData} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
};
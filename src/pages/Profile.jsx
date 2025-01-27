import { Chip, Container, Divider, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import PokemonTable from "../components/PokemonTable";

export const Profile = ({ pokemonData }) => {
  

  const { name, sprites, moves } = pokemonData || {};
  const navigate = useNavigate();

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  const pokemonName = capitalizeFirstLetter(name);

  useEffect(() => {
    if (!pokemonData) {
      navigate("/");
    }
  }, []);

  if (!pokemonData) {
    return null;
  }

  return (
    <>
      <Navbar hideSearch />
      <Container maxWidth="md">
        <Paper elevation={3}>
          <Box display="flex" flexDirection="column" alignItems="center" p={5}>
            <Typography variant="h4">{pokemonName}</Typography>
            <Box
              display="flex"
              alignItems="center"
              width="100%"
              marginBottom="15px"
              sx={{
                flexDirection: {
                  xs: "column",
                  md: "row",
                },
              }}
            >
              <Box component="img" src={sprites.other.dream_world.front_default} width="50%" height="100%" />
              <PokemonTable pokemonData={pokemonData} />
            </Box>
            <Box width="50%">
              <Divider>Variações</Divider>
              <Box display="flex" justifyContent="space-between">
                <Box component="img" src={sprites.other.showdown.front_female} width="25%" height="25%"  />
                <Box component="img" src={sprites.other.showdown.front_shiny} width="25%" height="25%" />
                <Box component="img" src={sprites.other.showdown.front_shiny_female} width="25%" height="25%" />
              </Box>
              <Divider>Ataques</Divider>
              <Box textAlign="center" marginTop="15px">
                {moves.map((moveData, key) => (
                  <Chip key={key} sx={{ m: "5px" }} label={moveData.move.name} />
                ))}
              </Box>
            </Box>
          </Box>
        </Paper>
      </Container>
    </>
  );
};
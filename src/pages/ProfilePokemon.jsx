import { Chip, Container, Divider, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { navigate, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import PokemonTable from "../components/PokemonTable/PokemonTable";

export const ProfilePokemon = ({ pokemonData }) => {
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
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        p={5}
                    >
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
                            <Box
                                component="img"
                                src={sprites.other["official-artwork"].front_default}
                                width="50%"
                                height="100%"
                            />
                            <PokemonTable pokemonData={pokemonData} />
                        </Box>
                        <Box >
                            <Divider>Variações</Divider>
                            <Box display="flex" justifyContent="center">
                                <Box
                                    component="img"
                                    src={sprites.other["official-artwork"].front_shiny}
                                    width="25%"
                                    height="25%"
                                />
                              
                            </Box>
                            <Divider>Ataques</Divider>
                            <Box textAlign="center" marginTop="15px">
                                {moves.map((moveData, key) => (
                                    <Chip
                                        key={key}
                                        sx={{ m: "5px" }}
                                        label={moveData.move.name}
                                    />
                                ))}
                            </Box>
                        </Box>
                    </Box>
                </Paper>
            </Container>
        </>
    );
};

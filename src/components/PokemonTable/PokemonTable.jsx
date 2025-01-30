import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { typeHandler } from "../../utils/TypeHandler";





export default function PokemonTable({ pokemonData }) {
    const { height, weight, types, stats } = pokemonData;

    const translateStatName = (statName) => {
        const translations = {
            'hp': 'HP',
            'attack': 'Ataque',
            'defense': 'Defesa',
            'special-attack': 'Ataque Especial',
            'special-defense': 'Defesa Especial',
            'speed': 'Velocidade'
        };
        return translations[statName] || statName;
    };

    return (
        <TableContainer
            component={Paper}
            sx={{ height: "fit-content", maxWidth: "500px", boxShadow: "none" }}
        >
            <Table aria-label="a dense table">
                <TableBody>
                    <TableRow
                        sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                        }}
                    >
                        <TableCell>Altura </TableCell>
                        <TableCell>{height + "cm"}</TableCell>
                    </TableRow>
                    <TableRow
                        sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                        }}
                    >
                        <TableCell>Peso</TableCell>
                        <TableCell>{weight + "g"}</TableCell>
                    </TableRow>
                    <TableRow
                        sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                        }}
                    >
                        <TableCell>Tipo</TableCell>
                        <TableCell>{typeHandler(types)}</TableCell>
                    </TableRow>
                    {stats.map((stat, index) => (
                        <TableRow
                            key={index}
                            sx={{
                                "&:last-child td, &:last-child th": { border: 0 },
                            }}
                        >
                            <TableCell>{translateStatName(stat.stat.name)}</TableCell>
                            <TableCell>{stat.base_stat}</TableCell>
                        </TableRow>
                    ))}
                    
                </TableBody>
            </Table>
        </TableContainer>
    );
}

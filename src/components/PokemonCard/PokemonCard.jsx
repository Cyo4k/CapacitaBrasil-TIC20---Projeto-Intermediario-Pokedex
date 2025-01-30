import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import { typeHandler } from "../../utils/TypeHandler";

export default function PokemonCard({ name, image, types }) {
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    };

    const pokemonName = capitalizeFirstLetter(name);

    return (
        <Card className="card" sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="250"
                    image={image}
                    alt="green iguana"
                />
                <CardContent className="card-content">
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Typography gutterBottom variant="h5" component="div">
                            {pokemonName}
                        </Typography>
                        <Typography
                            gutterBottom
                            variant="caption"
                            component="div"
                        >
                            {typeHandler(types)}
                        </Typography>
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

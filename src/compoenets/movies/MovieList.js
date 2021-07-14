import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Container} from "@material-ui/core";
import axios from "axios";

const initState = []

const MovieList = () => {

    const [movies, setMovies] = useState(initState)
console.log(11111,movies)
    useEffect(() => {

        // axios.get("/data/movies.json")
        axios.get("http://localhost:8080/getMovies")
            .then(res => {
                setMovies(res.data.Movies.Items[0].Items)

            })

    }, [])

    const list = movies.map(m => <MediaCard key={m.RepresentationMovieCode} movie={m}></MediaCard>)


    return (
        <div>
            <Container fixed>
                {list}
            </Container>
        </div>
    );
};


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
        roots: {
            flexGrow: 1
        },
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default MovieList;

const MediaCard = ({movie}) => {

    // console.log(4,movie)

    const classes = useStyles();

    return (
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={movie.PosterURL}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {movie.MovieNameKR}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
    );
}

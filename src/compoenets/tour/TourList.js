import React, {useState} from 'react';
import tourService from "./tourService";
import planService from "./planService";
import Card from '@material-ui/core/Card';
import {makeStyles} from "@material-ui/core/styles";
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const TourList = () => {

    const classes = useStyles();

    const [spots, setSpots] = useState(tourService.getSpots())

    const list = spots.map((spot, idx) =>
        <Card className={classes.root} key={idx}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    // image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {spot.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <div>위도: {spot.lat}</div>   <div>경도: {spot.lng}</div>
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={() => planService.append(spot)}>
                    추가
                </Button>
                <Button size="small" color="primary" onClick={() => planService.remove(spot)}>
                    삭제
                </Button>
            </CardActions>
        </Card>
    )





    const searchByCat = (str)=>{
        const filteredSpots = tourService.getByCat(str)
        setSpots(filteredSpots)

        console.log(filteredSpots)
    }

    return (
        <div>
            <h2>TourList</h2>
            <div>
                <b onClick={()=>{searchByCat()}}>Categori &nbsp; ALL</b>
                <b onClick={()=>{searchByCat('산')}}>산</b>
                <b onClick={()=>{searchByCat('유적지')}}>유적지</b>
            </div>
            <ul>
                {list}
            </ul>
        </div>
    );
};

export default TourList;
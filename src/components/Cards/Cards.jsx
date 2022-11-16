import React, {useEffect,useState} from 'react';
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CallMadeIcon from "@mui/icons-material/CallMade";

import {
  Box,
  Button
} from "@material-ui/core";

import Rating from "@material-ui/lab/Rating";

import useStyles from './styles.js';



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));



const Cards = ({hotel, attraction, restaurant}) => {

  const classes = useStyles();
  const [place, setPlace] = useState({});
  useEffect(()=>{
    if(hotel){
      setPlace(hotel);
    }
    else if(attraction){
      setPlace(attraction);
    }
    else{
      setPlace(restaurant);
    }
  },[]);

  return (
    <>

        {place && <Card className={classes.card_hover} sx={{ maxWidth: 350,width:350, marginRight: "15px", marginLeft:'15px', marginBottom: "20px" }}>
        <CardMedia
          component="img"
          height="200"
          image={
            place.photo
              ? place.photo.images.large.url
              : "https://insights.ehotelier.com/wp-content/uploads/sites/6/2018/05/what-is-a-restaurant-1.jpg"
          }
          title={place.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {place.name}
          </Typography>
          <Box display="flex" justifyContent="space-between">
              <Rating value={Number(place.rating)} readOnly />
            <Typography gutterBottom variant="subtitle1">
              out of {place.num_reviews} reviews
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="subtitle1">Price</Typography>
            <Typography gutterBottom variant="subtitle1">
              {place.price_level}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="subtitle1">Ranking</Typography>
            <Typography gutterBottom variant="subtitle1">
              {place.ranking}
            </Typography>
          </Box>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}>
            Trip Advisor
          </Button>
          <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
            Website
          </Button>
      </CardActions>
      </Card>}
    </>
  );


}



export default Cards;
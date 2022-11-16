import { CssBaseline } from '@material-ui/core';
import React, {useEffect,useState} from 'react';
// import { useNavigate } from 'react-router-dom';

import { getPlacesData } from "../../api";

import Container from "@mui/material/Container";

import ResponsiveAppBar from '../../components/ResponsiveNavBar/ResponsiveNavBar';
import Cards from '../../components/Cards/Cards';
import Footer from '../../components/Footer/Footer';
import Sliders from "../../components/Sliders/Sliders";
import { isUserExists } from "../../api/common";

function Home(props) {

    const [hotels, setHotels] = useState([]);
    const [restaurants, setRestaurants] = useState([]);
    const [attractions, setAttractions] = useState([]);

    const [bounds, setBounds] = useState({"ne":{"lat":17.591167280575405,"lng":82.26751690981445},
    "sw":{"lat":15.886871922128833,"lng":78.97161847231445}
 });
    const [isLogged, setIsLogged] = useState();

    // CHECK USER IS LOGGED IN OR NOT
    useEffect(()=>{
        isUserExists().then((data)=>{
        setIsLogged(data);
        })
    },[isLogged]);

    useEffect(() => {
        getPlacesData(bounds.sw, bounds.ne, "attractions")
          .then((data) => {
            setAttractions(data?.filter((place,index) => place.name && place.num_reviews > 0 && index < 10));
            console.log(JSON.stringify(data) + "attractions");
          });

          getPlacesData(bounds.sw, bounds.ne, "restaurants")
          .then((data) => {
            setRestaurants(data?.filter((place,index) => place.name && place.num_reviews > 0 && index < 10));
            console.log(JSON.stringify(data) + "resturants");
          });

          getPlacesData(bounds.sw, bounds.ne, "hotels")
          .then((data) => {
            setHotels(data?.filter((place,index) => place.name && place.num_reviews > 0 && index < 10));
            console.log(JSON.stringify(data) + "hotels");
          });
          
      }, []);

    return (
        <>

        <CssBaseline />

        <ResponsiveAppBar isLogged={isLogged} />

        <Sliders />

        <h1 style={{textAlign:'center',color:'#d51739',margin:'30px'}}>ATTRACTIONS</h1>
        <Container sx={{display:'flex',width:'100%',margin:'30px auto',justifyContent:'center',position:'relative'}}>
            <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>

            {
                attractions?.map((attraction,index) => (
                    <Cards key={index} attraction={attraction} />
                ))
            }
            </div> 
        </Container>
        <h1 style={{textAlign:'center',color:'#d51739',margin:'30px'}}>HOTELS</h1>
        <Container sx={{display:'flex',width:'100%',margin:'30px auto',justifyContent:'center',position:'relative'}}>
            <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>

            {
                hotels?.map((hotel,index) => (
                    <Cards key={index} hotel={hotel} />
                ))
            }
            </div> 
        </Container>
        <h1 style={{textAlign:'center',color:'#d51739',margin:'30px'}}>RESTAURANTS</h1>
        <Container sx={{display:'flex',width:'100%',margin:'30px auto',justifyContent:'center',position:'relative'}}>
            <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>

            {
                restaurants?.map((restaurant,index) => (
                    <Cards key={index} restaurant={restaurant} />
                ))
            }
            </div> 
        </Container>

        <Footer />
        </>
    );
}

export default Home;

// 90315ff8eamsh6efb86cf2664b70p15c56fjsndbb19378988e
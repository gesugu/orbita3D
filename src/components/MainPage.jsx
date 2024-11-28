import React, {useState, useEffect} from 'react';
import kosmos from "../components/icons/kosmos.jpg"
import classes from "../components/MainPage.module.css"
import { Link, useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import PostService from '../API/PostService';
import MyLoader from '../components/UI/loader/MyLoader';
import {filteredProductAction, selectItemAction, selectItemAction2, getItemsAction} from "../store/PlanetsReducer"

const MainPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(true)
    const [isVisible, setIsVisible] = useState(false)

    function getItemById(item_id){
        navigate(`/item2/${item_id}`)
        console.log('success', item_id)
    }
  
    // const addToFavorites = (item_id) => {
    //     const selected = items.find((item) => item.id === item_id)
    //     if(selected){
    //         dispatch(selectItemAction([selected]))
    //     }
    // }
  
    // const moveToFavoritesPage = () => {
    //     navigate('/favorites')
    // }
  
    // const selectedItem = (item2_id) => {
    //     dispatch(selectItemAction([item2_id]))
    //     navigate(`/favorites/${item2_id}`)
    // }
  
    // const addToKorzina = (item_id2) => {
    //     const selected2 = items.find((item) => item.id === item_id2)
    //     if(selected2){
    //         dispatch(selectItemAction2([selected2]))
    //     }
    // }
  
      async function getItems() {
        const items = await PostService.getAll()
        
        setIsLoading(false)
        console.log(items);
        
        return dispatch(getItemsAction(items));
    }
  
    const items = useSelector(state => state.planetsReducer.items);
    useEffect(()=>{
      getItems()
    }, [])
    return (
        <div className={classes.mainPageParent}>
        <div className={classes.mainPage}>
            <img className={classes.mainPageImg} src={kosmos} alt={kosmos} />
            <div className={classes.MainPageP}>SPACE</div>
            <div className={classes.MainPageP0}>3D</div>
            <div className={classes.MainPageP1}>MODELS</div>
            <div className={classes.mainPageD}>
                <p className={classes.mainPageDP}>Welcome to orbita3d models</p>
                <hr className={classes.MainPageHr} />
                <p className={classes.mainPageDP0}>Unveil the Universe with Orbita3D -</p>
                <p className={classes.mainPageDP1}>Explore Planets and Stars in 3D</p>
            </div>
        </div>
        <div className={classes.mainPageBeta}>
        {isLoading ? (
                // <p>Error occured</p>
                <MyLoader />
            ) : (
                <div className={classes.mainPageItemsP}>
                    {
                        items.filter(item => item.type2 === "Specific").map((item, index) => {
                            return(
                                <div key={index} className={classes.mainPageItems}>
                                <div className={classes.smartphonesPageMaterialParent}>
                                </div>
                                <img onClick={() => getItemById(item.id)} className={classes.mainPageImgItems} src={item.image} alt="image" />
                                <div onClick={() => getItemById(item.id)} className={classes.mainPageDivP}>
                                <p onClick={() => getItemById(item.id)} className={classes.mainPagePObogrevatel}>{item.type}</p>
                                </div>
                            </div>
                            )
                        }
                        )
                    }
                </div>
            )}
        </div>
        </div>
    );
}

export default MainPage;
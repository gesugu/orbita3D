import React, { useState } from 'react';
import classes from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { searchProductAction } from '../store/PlanetsReducer';
import { Link } from 'react-router-dom';
import MyLoader from "../components/UI/loader/MyLoader"

const Header = () => {
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(true)
    const [isVisible, setIsVisible] = useState(true);
    const [filteredItems, setFilteredItems] = useState([]);
    return(
        <div className={classes.headerPage}>
        <div className={classes.headerPage3}>
        </div>
        <div className={classes.headerPage2}>
            <div className={classes.headerPageParentDP}>
          <h2 className={classes.h2Header}><Link className={classes.h2Header} to='/'>Orbita</Link></h2>
          <h2 className={classes.h2Header0}><Link className={classes.h2Header0} to='/'>3D</Link></h2>
          </div>
          <div className={classes.headerPageInputParent}>
          {/* <p className={classes.headerPageInputP}>Find...</p> */}
          <input
            className={classes.inputHeader}
            // onClick={() => setIsVisible(!isVisible)}
            // onChange={(e) => searchItems(e.target.value)}
            value={input}
            placeholder='Find...'
          />
          </div>
          <div className={classes.h2Parent}>
            <h2>
              <Link className={classes.h2Icons} to="/">
                Home
              </Link>
            </h2>
          </div>
          <div className={classes.h2Parent2}>
            <h2>
              <Link className={classes.h2Icons} to="/models">
                Models
              </Link>
            </h2>
          </div>
          <div className={classes.h2Parent3}>
            <h2>
              <Link className={classes.h2Icons} to="/korzina">
                Help
              </Link>
            </h2>
          </div>
        </div>
      </div>
    )
}

export default Header;
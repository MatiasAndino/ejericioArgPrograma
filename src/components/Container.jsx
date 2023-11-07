import React, { useState } from "react";
import SideBar from "./SideBar";
import imagen01 from '../images/01.webp'
import imagen02 from '../images/02.webp'
import imagen03 from '../images/03.webp'
import imagen04 from '../images/04.webp'
import imagen05 from '../images/05.webp'

const Container = () => {

    const imagenes = [imagen01, imagen02, imagen03, imagen04, imagen05]
    const [currentImage, setCurrentImage] = useState(imagenes[0]);

    return (
        <>
        <div className="col-sm-2">
            <SideBar setCurrentImage={ setCurrentImage } imagenes={ imagenes } />
          </div>
          <div className="col-sm-10">
            <img className="img-thumbnail" src={ currentImage } />
          </div>
        </>
    );
};

export default Container;
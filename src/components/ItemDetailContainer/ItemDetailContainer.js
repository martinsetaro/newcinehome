import ItemDetail from "../ItemDetail/ItemDetail";
import React, { useState, useEffect } from "react";
import FadeLoader from "react-spinners/FadeLoader";
import { useParams } from "react-router-dom";
import "../ItemDetailContainer/itemDetailContainer.scss";
import { db } from "../../FireBase/FireBase";
import {  getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [pelicula, setPelicula] = useState([]);
  const [cargando, setCargando] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    
    const referenciaItems = doc(db, "Peliculas", id);
    const datos = getDoc(referenciaItems);
    datos
      .then((resultado) => {
        if(resultado.exists()){
        setCargando(false);
        setPelicula({id:resultado.id, ...resultado.data()})
        };
      })

      .catch((error) => {})
      .finally(() => {});
  }, [id]);

  if (cargando) {
    return (
      <div className="contenedor_cargando">
        <FadeLoader color={"#ffab23"} size={240} />
      </div>
    );
  }

  return (
    <div className="listDetailContainer">
      <ItemDetail pelicula={pelicula} />
    </div>
  );
};

export default ItemDetailContainer;

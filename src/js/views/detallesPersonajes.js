import React, {useContext, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import fotodetalle from "../../img/fotodetalle.jpg";

export const DetallesPersonajes = () => {
    const {store, actions} = useContext(Context);
    const params = useParams();
    useEffect(() => {
        actions.getDetallesPersonaje(params.id);
    },[]);
    if (store.DetallesPersonaje) {
        return(
            <div className="container contenedor">
            <div className="infoPersonaje w-100 mt-4">
      <h1 className="text-dark">Info Personaje</h1></div>
      <div className="card m-2 text-center" style={{ width: "80rem" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={fotodetalle} className="img-fluid rounded-start" />
          </div>
          <div className="col-md-8">
          <div className="card-body mt-5">
            <h1 className="card-title text-dark fs-1">
              {store.DetallesPersonaje.properties.name}
            </h1>{" "}
            <p className="text-dark fs-2">
              <strong>Birth Year:</strong>{" "}
              {store.DetallesPersonaje.properties.birth_year}
            </p>
            <p className="text-dark fs-2">
              <strong>Height:</strong>{" "}
              {store.DetallesPersonaje.properties.height}
            </p>
            <p className="text-dark fs-2">
              <strong>Mass:</strong> {store.DetallesPersonaje.properties.mass}
            </p>
            <p className="text-dark fs-2">
              <strong>Hair Color:</strong>{" "}
              {store.DetallesPersonaje.properties.hair_color}
            </p>
            <p className="text-dark fs-2">
              <strong>Skin Color:</strong>{" "}
              {store.DetallesPersonaje.properties.skin_color}
            </p>
            <p className="text-dark fs-2">
              <strong>Eyes Color:</strong>{" "}
              {store.DetallesPersonaje.properties.eye_color}
            </p>
            <p className="text-dark fs-2">
              <strong>Gender:</strong>{" "}
              {store.DetallesPersonaje.properties.gender}
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
        );
    }else{
return<div>Cargando</div>
    }
};
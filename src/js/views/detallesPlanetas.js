import React, {useContext, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import fondoPlaneta from "../../img/fondoPlaneta.jpg"

export const DetallesPlanetas = () => {
    const {store, actions} = useContext(Context);
    const params = useParams();
    useEffect(() => {
        actions.getDetallesPlaneta(params.id);
    },[]);
    if (store.DetallesPlanetas) {
        return(
            <div className="container contenedor">
            <div className="infoPlaneta w-100 mt-4">
      <h1 className="text-dark">Info Planeta</h1></div>
      <div className="card m-2 text-center" style={{ width: "80rem" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={fondoPlaneta} className="img-fluid rounded-start" />
          </div>
          <div className="col-md-8">
          <div className="card-body mt-5">
            <h1 className="card-title text-dark fs-1">
              {store.DetallesPlanetas.properties.name}
            </h1>
            <p className="text-dark fs-2">
              <strong>Diametro:</strong>{" "}
              {store.DetallesPlanetas.properties.diameter}
            </p>
            <p className="text-dark fs-2">
              <strong>Periodo rotacional:</strong>{" "}
              {store.DetallesPlanetas.properties.rotation_period}
            </p>
            <p className="text-dark fs-2">
              <strong>Periodo orbital:</strong> {store.DetallesPlanetas.properties.orbital_period}
            </p>
            <p className="text-dark fs-2">
              <strong>Gravedad:</strong>{" "}
              {store.DetallesPlanetas.properties.gravity}
            </p>
            <p className="text-dark fs-2">
              <strong>Poblacion:</strong>{" "}
              {store.DetallesPlanetas.properties.population}
            </p>
            <p className="text-dark fs-2">
              <strong>Clima:</strong>{" "}
              {store.DetallesPlanetas.properties.climate}
            </p>
            <p className="text-dark fs-2">
              <strong>Terreno:</strong>{" "}
              {store.DetallesPlanetas.properties.terrain}
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
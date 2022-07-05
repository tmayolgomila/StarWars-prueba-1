import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Vader from "../../img/Vader.jpg"

export const Personajes = () => {
    const {store, actions} = useContext(Context);
    useEffect(() => {
        actions.getPersonajes();
    },[]);
    return(
        <>
        {store.Personaje.map((value, i) =>(
           <div 
           key={i}
           className="card" style={{width:"18rem"}}>
           <img src={Vader} class="card-img-top" alt="..."/>
           <div class="card-body">
             <h5 class="card-title">{value.name}</h5>
             <div className="cardbuttons">
              <Link
                className="btn btn-primary ms-2"
                to={"detallesPersonajes/" + value.uid}
              >
                +Info
              </Link>
              <button
                type="button"
                className="btn btn-outline-warning "
                onClick={() => actions.addFavoritos(value.name)}
              >
                <i className="far fa-heart"></i>
              </button>
            </div>
           </div>
         </div>
        )
        )
        
        }
        </>
    );
};
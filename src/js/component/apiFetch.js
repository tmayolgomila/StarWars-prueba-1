export const getPersonaje =async() =>{
    try{
        return fetch("https://www.swapi.tech/api/people", {
            method: "GET",
            
        })
        .then(response => response.json())
        .then(response=> response.results);
    }catch(error){
        return[];
    }
};

export const getDetallesPersonajes = async id => {
    try{
        return fetch(`https://www.swapi.tech/api/people/${id}`, {
            method: "GET"
        })
        .then(response => response.json())
        .then(response => response.result);
    }catch(error){
        return {};
    }
};
export const getPlaneta =async() =>{
    try{
        return fetch("https://www.swapi.tech/api/planets", {
            method: "GET",
            redirect: "follow"
        })
        .then(response => response.json())
        .then(response=> response.results);
    }catch(error){
        return[];
    }
};

export const getDetallesPlanetas = async id => {
    try{
        return fetch(`https://www.swapi.tech/api/planets/${id}`, {
            method: "GET"
        })
        .then(response => response.json())
        .then(response => response.result);
    }catch(error){
        return {};
    }
};


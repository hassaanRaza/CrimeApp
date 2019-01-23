function getCategories(){
    return new Promise((resolve, reject)=>{
        fetch('https://data.police.uk/api/crime-categories')
        .then(res => res.json())
        .then(res => resolve(res))
        .catch(e => reject(e))
    });
}

function getForces(){
    return new Promise((resolve, reject)=>{
        fetch('https://data.police.uk/api/forces')
        .then(res => res.json())
        .then(res => resolve(res))
        .catch(e => reject(e))
    });
}

function getCrimes(category, force){
    return new Promise((resolve, reject)=>{
        // if(category === undefined || force === undefined){
        //     fetch('https://data.police.uk/api/crimes-no-location?category=all-crime&force=leicestershire')
        // .then(res => res.json())
        // .then(res => resolve(res))
        // .catch(e => reject(e))
        // }
        // else{
            fetch('https://data.police.uk/api/crimes-no-location?category='+category+'&force='+force)
        .then(res => res.json())
        .then(res => resolve(res))
        .catch(e => reject(e))
        //}
        
    });
}

export {getCategories, getForces, getCrimes}
import Axios from "./caller.service"


/**
 * @param {number}
 * @returns {promise}
 */
let getAllCocktail = () => {
    return Axios.get('/cocktails');
}



/**
 * @param {number} cid 
 * @returns {promise}
 */
let getCocktail = (cid) => {
    return Axios.get('/cocktails/'+cid);
}

/**
 * @param {number} cockail
 * @returns {promise}
 */
let addCocktail = (cocktail) => {
    return Axios.put('/cocktails', cocktail)
}

/**
 * @param {number} cockail
 * @returns {promise}
 */
let uptdateCocktail = (cocktail) => {
    return Axios.patch('/cocktails/'+cid, cocktail);
} 

/**
 * Suppression 
 * @param {number} cid 
 * @returns {promise}
 */
let deleteCocktail = (cid) => {
    return Axios.delete('cocktails/'+cid)
}

export const cocktailService = {
    getCocktail, getAllCocktail, addCocktail, uptdateCocktail, deleteCocktail
}
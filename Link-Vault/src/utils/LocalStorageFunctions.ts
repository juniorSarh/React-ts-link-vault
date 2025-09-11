

export function readLocalStorage(){
    const CheckLocalStorage = localStorage.getItem("links");
    if(CheckLocalStorage){
        return CheckLocalStorage
    }else{
        localStorage.setItem("links", JSON.stringify([]));
    }
}
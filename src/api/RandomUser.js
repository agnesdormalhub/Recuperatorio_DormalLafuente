export async function getData(numero) {
    try{
    
    let resultado = await fetch("https://rickandmortyapi.com/api/character/");
    let json = await resultado.json();
    console.log(json);
    return json.results
    
    }catch(e){
        console.log('error:' + e)
    }  

} 
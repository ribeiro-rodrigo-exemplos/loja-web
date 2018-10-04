import axios from 'axios'; 

/*Mock de categorias*/

const categorias = [
    {name:'Roupas', id:1}, 
    {name: 'Eletronicos', id:2}
]; 

const produtos = [
    {id:1,name:'Camisa Nike Brasil 2018',description:'Camisa da seleção brasileira 2018',price:100.5,category:1, img:"http://localhost:8089/img/bolsonaro.jpg"},
    {id:2,name:'Camisa Barcelona Messi',description:'Camisa do Messi craque do Barcelona',price:200.3,category:1, img:"http://localhost:8089/img/bolsonaro.jpg"},
    {id:3,name:'Camisa Bolsonaro',description:'Camisa do bolsonaro candidatura 2018',price:30.2,category:1, img:"http://localhost:8089/img/bolsonaro.jpg"},
    {id:4,name:'Smarttv Sony',description:'Televisão inteligente da Sony',price:700.0,category:2, img:"http://localhost:8089/img/bolsonaro.jpg"}, 
    {id:5,name:'Playstation 4',description:'Melhor videogame',price:3000.8,category:2, img:"http://localhost:8089/img/bolsonaro.jpg"}
]; 


export default class StoreAPI{
    
    get categories(){
        return axios.get('http://localhost:3000/categories')
                    .then(resp => resp.data); 
    }

    get products (){
        return axios.get('http://localhost:3000/products')
                    .then(resp => resp.data);  
    }


}
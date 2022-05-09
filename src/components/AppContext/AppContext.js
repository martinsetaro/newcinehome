import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";




export const contexto = createContext();
const { Provider } = contexto;



const AppContext = ({children}) => {

    const [cart,setCart] = useState([]);


    const isInCart = (id)=>{
        return cart.find(producto => producto.id === id);
        
        
        }

    const addItem = (item,quantity) => {
        if (isInCart(item.id)) {
        const newCart = [...cart];   //se hace una copia del array original.
        for(const element of newCart){ //se recorre el array original.
            if(element.item.id == item.id){
                item.quantity = item.quantity + quantity;}
        }
        setCart(newCart);
    } else {
        setCart([...cart,{item:item,quantity:quantity}]);// se hace una copia del array original y se le agrega la cantidad.
    
    }
    

    
    const removeItem = (id)=>{
        const newCart = [...cart].map(producto => producto.id !== id);
        setCart(newCart);
    }
    
    const vaciarCarrito = ()=>{
        setCart([])
    }
    
    }



    return (           //aca va la constante con las variables que voy a utilizar.
        <Provider value={{cart,addItem}}> 
            {children}
        </Provider>
    );
}

export default AppContext;
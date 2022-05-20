import { createContext } from "react";
import { useState } from "react";





export const contexto = createContext();
const { Provider } = contexto;



const AppContext = ({children}) => {

    const [cart,setCart] = useState([]);


    const isInCart = (id)=>{
        return   cart.find(  producto  => producto.item.id === id);
        }


        

      
 
    const addItem = (item,quantity) => {

        if (isInCart(item.id)) {
          const newCart = [...cart]
        for(const  element  of  newCart){ //se recorre el array original.
            if(element.item.id === item.id){
                element.quantity = element.quantity + quantity;
           }
             setCart(newCart);
        }
       
    } else {
        setCart([...cart,{item:item,quantity:quantity}]);// se hace una copia del array original y se le agrega la cantidad.
    
    }}

    
    const removeItem = (id)=>{
        const newCart = [...cart].filter(producto => producto.item.id  !==  id);
        setCart(newCart);
    }
    
    const carroVacio = ()=>{
        setCart([])
    }
    
    
    


    return (           
        <Provider value={{ cart , addItem , carroVacio, removeItem ,isInCart }}> 
            {children}
        </Provider>
    );

}
export default AppContext
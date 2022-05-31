## Proyecto "Cine Home"

El nombre de mi proyecto es **CineHome** , es una página web del tipo E-commerce en la cuál se pueden comprar peliculas en formato Blue-ray y DVD originales de peliculas de los años 80' y 90'.

Cuenta con una sección donde se puede realizar el filtrado por genero.

Al seleccionar una pelicula, la página nos muestra infomación del titulo elegido, un contador que nos permite
agregar la cantidad a comprar y los botones correspondientes para ir al carrito o seguir comprando.

Una vez dentro del carrito, podemos seleccionar mayor cantidad de productos o finalizamos la compra.

Nos muestra un formulario donde debemos ingresar nuestros datos, para luego recibir un comprobante con un numero
de compra que sera registado y guardado en la base de datos, por algun eventual reclamo si existiese.

Finalizamos toda la compra, cuando volvemos a la pagina principal, el carrito de compras volvera vacio.
<hr>

## Herramientas utilizadas

Para el desarrollo de proyecto se utilizaron las siguientes herramientas:
- React Js - para el desarrollo de la página.
- Preprocesador SASS - para el estilo de la página.
- FireBase - para la base de datos.
- React spinner - Mostrar al usuario que se esta cargando algo en la página.
- Hot toast - para los modales (ej: añadido a carrito).
- Router DOM - para los enlaces entre componentes. 

<hr>

## Pasos para la instalación

 - 1.Mediante una terminal o consola de windows, instalamos Node Js.
 - 2.Node js trae por defecto NPM , esta herramienta se utiliza para compartir e instalar paquetes.
- 3.En la consola de windows nos ubicamos dentro de la carpeta donde queremos crear nuestro proyecto.
- 4.Una vez dentro, ejecutamos el siguiente codigo : **npm create-react-app "nombre de nuestra app"** y damos enter
   comenzara a descargar los archivos necesarios para comenzar a codear nuestro proyecto.
- 5.Finalizado el proceso de descarga, y dentro de la carpeta donde se descargaron nuestros archivos, ejecutamos el siguiente codigo: **npm start** , se ejecutara en nuestro navegador una página de muestra y estara listo y funcionando para comenzar a editar nuestro proyecto.
- 6.En mi caso utilize SASS para darle estilo a mi página y dentro de la consola o terminal de Visual Studio Code ejecutamos : **npm install -g sass**

<hr>

## Comentarios adicionales.

El proyecto se creo con la ultima version de React Js - **version 18.1**. La utilización de **Hooks**
(**useState** , **useEffect**) para reciclar funcionalidad entre los componentes.
Se utilizo también **React router DOM** para los enlaces entre componentes.
Para ahorrar tiempo y lineas de codigo, se utilizo **React Context** , nos provee una forma de pasar datos a través del árbol de componentes sin tener que pasar props manualmente en cada nivel.
Algo fundamental es la reutilización de componentes, uno de ellos puede ser en este caso el componente **ItemDetail** mediante un metodo **map()** se utiliza un solo componente para mostrar diferentes productos.


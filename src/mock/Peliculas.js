import volver from '../assets/img/volveralfuturo.png'
import elpadrino from '../assets/img/elpadrino.png'
import rambo from '../assets/img/rambo.png'
import batman from '../assets/img/batman.png'
import indianajones from '../assets/img/indianajones.png'
import superman from '../assets/img/superman.png'


const Peliculas = [
   {   id:1,
       nombre:'Volver al futuro',
       imagen:volver,
       precio:300,
       info:'El adolescente Marty McFly es amigo de Doc, un científico que ha construido una máquina del tiempo. Cuando los dos prueban el artefacto, un error fortuito hace que Marty llegue a 1955, año en el que sus padres iban al instituto y todavía no se habían conocido',
       protagonistas:'Michael J. Fox - Christopher Lloyd',
       anio:1985,
       genero:"ciencia ficcion"},

   {
       id:2,
       nombre:'El Padrino',
       imagen:elpadrino,
       precio:300,info:'Un joven emigrante se embarca en un viaje a Italia para ser padre de una familia de cinco hijos, pero su pasado se ve afectado por una misteriosa y despiadada situación que amenaza con destruir su vida.',
       protagonistas:'Marlon Brando - Al Pacino',
       anio:1972,
       genero:"drama"
       },

   {id:3,
       nombre:'Rambo First Blood',
       imagen:rambo,
       precio:300,
       info:'John Rambo es un veterano boina verde que luchó en Vietnam. Un día va a visitar a un viejo amigo del ejército pero se entera de que ha muerto. Algunos días después, la policía lo detiene por vagabundo y se enseña con él',
       protagonistas:'	Sylvester Stallone - Richard Crenna -Brian Dennehy',
       anio:1982,
       genero:"accion"
       },

       {id:4,
       nombre:'Batman',
       imagen:batman,
       precio:300,
       info:'Bruce Wayne vive obsesionado con el recuerdo de la muerte de sus padres. Atormentado, se va de Gotham y encuentra a un extraño personaje que lo entrena en todas las disciplinas físicas y mentales que le servirán para combatir el Mal.',
       protagonistas:'	Michael Keaton - Jack Nicholson',
       anio:1989,
       genero:"accion"
       },

       {id:5,
       nombre:'Indiana Jones',
       imagen:indianajones,
       precio:300,
       info:'Después de una infructuosa misión en Sudamérica, el Gobierno estadounidense encarga al arqueólogo Indiana Jones la búsqueda del Arca de la Alianza, una reliquia bíblica que contiene los diez mandamientos y que convierte en invencible a su portador.',
       protagonistas:'Harrison Ford - Karen Allen - Paul Freeman',
       anio:1989,
       genero:"accion"},
       {id:6,
       nombre:'Superman',
       imagen:superman,
       precio:300,
       info:'Desde una galaxia remota, un recién nacido es enviado por sus padres al espacio debido a la inminente destrucción del planeta donde viven. La nave aterriza en la Tierra y el niño es adoptado por unos granjeros que le inculcan los mejores valores humanos.',
       protagonistas:'	Christopher Reeve - Margot Kidder',
       anio:1978,
       genero:"ciencia ficcion"
       },
       
   ];

   export default Peliculas;
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDvKo3FozV3AS-NcTL8jMqCF_dLXEQubPs',
  authDomain: 'mi-porfolio-1d946.firebaseapp.com',
  projectId: 'mi-porfolio-1d946',
  storageBucket: 'mi-porfolio-1d946.appspot.com',
  messagingSenderId: '917615957603',
  appId: '1:917615957603:web:c910acbf646406743f0a56',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Usando la inicializacion de firebase usamos el almacenamiento de firebase
const storage = getStorage(app);
//Creamos un array de  de objetos que contiene la carpeta y las imagenes dentro de la carpeta
const folders = [
  {
    folderName: 'gestorcitas',
    imageNames: ['primera.PNG', 'cuarta.PNG', 'segunda.PNG'],
  },
  {
    folderName: 'gestorinventario',
    imageNames: [
      'login.PNG',
      'crearUsuario.PNG',
      'PanelAdministracion.PNG',
      'proveedores.PNG',
      'Productos.PNG',
      'Pedidos.PNG',
      'HistorialPedidos.PNG',
      'HistorialProductos.PNG',
      'Carrito.PNG',
      'suscriptores.PNG',
    ],
  },
  {
    folderName: 'gestortareas',
    imageNames: [
      'Login.PNG',
      'Registro.PNG',
      'paginaDondeAccedes.PNG',
      'primeraImagenProyecto.PNG',
    ],
  },
  {
    folderName: 'glucontrol',
    imageNames: ['1.PNG', '2.PNG', '3.PNG', '4.PNG', 'movil.png'],
  },
  {
    folderName: 'introASP',
    imageNames: ['1.PNG', '2.PNG', '3.PNG', '4.PNG', '5.PNG', '6.PNG'],
  },
];
//Creamos un metodo asincrono para obtener la url de cada imagen
export const getImageUrls = async () => {
  //De esas imagenes obtenemos en formato de array el identificador de todas las imagenes y convertimos
  //ese array de identificadores a un array de strings, el identificador es el nombre de la carpeta
  const allImageUrls: { [key: string]: string[] } = {};
  //Interamos el array de carpetaz
  for (const folder of folders) {
    //en cada iteracion se obtiene el nombre de la carpeta y las imagenes dentro de la
    //misma, esta tecnica se llama deconstruccion del array principal folders.
    const { folderName, imageNames } = folder;
    //Almacenamos en un array de string todas las url de todas las imagenes
    const imageUrls: string[] = [];
    //Dentro del bucle que itera las carpetas interamos el nombre de cada imagen
    for (const name of imageNames) {
      //con ref retornamos la url donde se almacena la imagen
      //a este metodo ref le pasamos el almacenamiento y despues se le pasa 2 parametros mas
      //entre apostrofes que recibe 2 argumentos el nombre de la carpeta folderName y luego
      //el nombre de la imagen dentro de esa carpeta name esto en conjunto forman la url
      //de donde esta la imagen
      const imageReference = ref(storage, `${folderName}/${name}`);

      try {
        //Usamos getDownloadURL que es un metodo de firebase para descargar la imagen este metodo
        //recibe la url anterior imagereference y la descarga
        const url = await getDownloadURL(imageReference);
        //y esa url lo metemos en el array de strings anterior imageUrls
        imageUrls.push(url);
      } catch (error) {
        console.log(error);
      }
    }
    // Asignamos el array de URLs de las imágenes (imageUrls) a una propiedad en el objeto allImageUrls.
    //El motivo por el cual tiene que recibir folderName de esta manera es primero porque es un array
    //y segundo porque es la clave que se va a usar que es el nombre de cada carpeta
    /*Basicamente decimos, despues de que me obtengas la url de todas las imagenes y sabemos
   que cada imagen pertenece a una carpeta en concreto, asignamos ese array de urls a un array
   mayor imageUrls que tendra la url de cada imagen, y como valor de la propiedad folderName(nombre de carpeta)
   */
    allImageUrls[folderName] = imageUrls;
  }

  return allImageUrls;
};

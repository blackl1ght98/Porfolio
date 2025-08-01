import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';

// Configuración de Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyDvKo3FozV3AS-NcTL8jMqCF_dLXEQubPs',
  authDomain: 'mi-porfolio-1d946.firebaseapp.com',
  projectId: 'mi-porfolio-1d946',
  storageBucket: 'mi-porfolio-1d946.appspot.com',
  messagingSenderId: '917615957603',
  appId: '1:917615957603:web:c910acbf646406743f0a56',
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

// Carpetas en Firebase Storage
const folders = ['gestorcitas', 'gestorinventario', 'gestortareas', 'glucontrol', 'introASP'];

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  async getImageUrls(): Promise<{ [key: string]: string[] }> {
    const allImageUrls: { [key: string]: string[] } = {};

    // Iterar sobre las carpetas
    for (const folderName of folders) {
      const folderRef = ref(storage, folderName);
      const imageUrls: string[] = [];

      try {
        // Listar todos los archivos en la carpeta
        const result = await listAll(folderRef);
        
        // Iterar sobre los archivos (items) en la carpeta
        for (const itemRef of result.items) {
          try {
            // Obtener la URL de descarga de cada archivo
            const url = await getDownloadURL(itemRef);
            imageUrls.push(url);
          } catch (error) {
            console.error(`Error al obtener la URL de ${itemRef.name}:`, error);
          }
        }

        // Asignar las URLs al objeto con la clave folderName
        allImageUrls[folderName] = imageUrls;
      } catch (error) {
        console.error(`Error al listar archivos en la carpeta ${folderName}:`, error);
        allImageUrls[folderName] = []; // Asignar un array vacío en caso de error
      }
    }

    return allImageUrls;
  }
}
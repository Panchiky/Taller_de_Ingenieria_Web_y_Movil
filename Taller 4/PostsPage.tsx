import { useState } from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonPage,
  IonSpinner,
  IonText,
  IonTitle,
  IonToolbar
} from "@ionic/react";

import "./PostsPage.css";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const PostsPage: React.FC = () => {
  // 1: Crear el estado para almacenar publicaciones.
  // Pista: const [posts, setPosts] = useState<Post[]>([]);

  // 2: Crear el estado para saber si los datos se están cargando.

  // 3: Crear el estado para almacenar errores.

  const cargarPosts = () => {
    // - Indicar que comenzó la carga.
    // - Utilizar fetch() para consultar: https://jsonplaceholder.typicode.com/posts
    // - Convertir la respuesta a JSON.
    // - Guardar los datos en el estado.
    // - Manejar errores.
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Taller 4: Ionic + React + APIs</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <div className="intro">
          <h1>Publicaciones</h1>
          <p>
            Presiona el botón para obtener información desde JSONPlaceholder.
          </p>

          <IonButton onClick={cargarPosts}>
            Cargar publicaciones
          </IonButton>
        </div>

        {/* 5: Mostrar un IonSpinner mientras se realiza la petición. */}

        {/* 6: Mostrar el mensaje de error cuando corresponda. */}

        <div className="posts-container">
          {/* 7: Recorrer las publicaciones utilizando posts.map(...).
              Por cada publicación crea un IonCard que muestre:
              - post.id
              - post.title
              - post.body
          */}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PostsPage;

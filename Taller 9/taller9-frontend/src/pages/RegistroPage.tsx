// Desafio
import { useState } from "react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonInputPasswordToggle,
  IonItem,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonRouter,
  useIonToast
} from "@ionic/react";

import { registrarUsuario } from "../services/api";
import "./LoginPage.css";

const RegistroPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [enviando, setEnviando] = useState(false);
  const router = useIonRouter();
  const [presentarToast] = useIonToast();

  const registrar = async (evento: React.FormEvent) => {
    evento.preventDefault();
    setEnviando(true);
    try {
      const usuario = await registrarUsuario(username, password);
      setPassword("");
      presentarToast({
        message: `Usuario "${usuario.username}" creado. Ya puedes iniciar sesión.`,
        color: "success",
        duration: 3000,
        position: "bottom"
      });
      router.push("/login", "root", "replace");
    } catch (error) {
      presentarToast({
        message: error instanceof Error ? error.message : String(error),
        color: "danger",
        duration: 3000,
        position: "bottom"
      });
    } finally {
      setEnviando(false);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Registro</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <form className="login" onSubmit={registrar}>
          <h1>Crear cuenta</h1>
          <p>Elige un nombre de usuario y una contraseña de al menos 8 caracteres.</p>

          <IonList>
            <IonItem>
              <IonInput
                label="Usuario"
                labelPlacement="stacked"
                value={username}
                autocomplete="username"
                placeholder="Por ejemplo: diana"
                onIonInput={(e) => setUsername(e.detail.value ?? "")}
              />
            </IonItem>
            <IonItem>
              <IonInput
                label="Contraseña"
                labelPlacement="stacked"
                type="password"
                value={password}
                autocomplete="new-password"
                onIonInput={(e) => setPassword(e.detail.value ?? "")}
              >
                <IonInputPasswordToggle slot="end" />
              </IonInput>
            </IonItem>
          </IonList>

          <IonButton type="submit" expand="block" disabled={enviando}>
            Registrarme
          </IonButton>
          <IonButton type="button" expand="block" fill="clear" onClick={() => router.push("/login", "back")}>
            Ya tengo cuenta
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default RegistroPage;

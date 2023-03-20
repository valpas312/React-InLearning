import Dispatcher from "../Dispatcher";

export function addBoton(texto) {
  Dispatcher.dispatch({
    type: "ADD_BOTON",
    texto
  });
}
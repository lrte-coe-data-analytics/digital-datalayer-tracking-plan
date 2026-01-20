# Documento de marcación
Fecha de creacion: Enero 2026  
Fecha ultima actualizacion: Enero 2026

## Table of content

---

## Inicio
Pantalla principal del app, aqui se encuentran secciones de interes para navegacion directa. Esta seccion es el punto de partida para cualquier tipo de navegacion dentro del app.

📘 `screen_view`:  
Este evento se lanza cuando se carga la pantalla de inicio dentro del app. No importa si es la primera o na n-ésima llegada a esta pantalla, todas las veces que se muestre se enviara un evento. Esto aplica para todos los tipos de usuarios que se encuentran dentro del app. Al ser un evento de usuario previamente loggeado, los datos del login se envia junto con el evento como se puede visualizar en su [implementacion](./00-home/screen_view.yaml).

📘 `carousel_banner`:  
Captura la inteaccion del usuario con el `carousel` que se presenta dentro de la pantalla de inicio. Este componente presenta distintos cards (que se pueden presentar como popup en algun momento) para que los estudiantes puedan seleccionar y dirigirse al destino correspondiente. Los datos del login se envia junto con el evento como se puede visualizar en su [implementacion](./00-home/carousel_banner.yaml).

📘 `card_cachimbo_upc`:  
Captura la interacion de **click** del usuario con el card relacionado a **Cachimbo UPC**. Los datos del login se envia junto con el evento como se puede visualizar en su [implementacion](./00-home/card_cachimbo.yaml).

📘 `icon_campana`:  
Cuando el usuario hace click en la campana de notificaciones, permite la captura de un grado de interes del usuario dentro de su formacion academica. Los datos del login se envia junto con el evento como se puede visualizar en su [implementacion](./00-home/icon_campana.yaml).

---

### ➡️ Explora y descubre
Esta sección presenta distintos Cards (imagenes + texto) que permiten navegar a ciertas secciones del app, los eventos hacen referencia a la accion de **click** en cada uno de estos elementos.  

Todos los elementos que pertenecen a esta seccion deben etiquetarse de forma idéntica con una variacion en funcion
del texto o label que se presentan dentro del mismo card.  
**Esta seccion se trabajar de la misma manera independientemente del tipo de usuario**.

⚠️ **Importancia**  
Estos eventos nos permiten identificar secciones de interes entre los usuarios del app.

⚙️ **Implementacion**  
Todos los elementos dentro de esta sección deben de contar con los siguientes atributos dentro de su
estructura a nivel de código:

```js
data-ui-element   = "card"
data-ui-label     = "{{card_label}}"
data-ui-hierarchy = "inicio > explora_y_descubre"
data-ui-url       = "{{url_destino}}"
```

Se puede visualizar el payload generico del evento dentro del siguiente fichero de [implementacion](./00-home/00-explora-y-descubre/global_event.yaml).  

Asimismo, se presentan estructuras rigidas que pueden ser usadas en el caso de que la implementacion parametrica se vea dificultada por algun motivo. Los archivos se pueden encontrar en el siguiente [folder](./00-home/00-explora-y-descubre/).

🩻 **Imagenes**  
Aqui se presentan vistas detalladas de la ubicacion de la seccion dentro del app.
TBD

---

### ➡️ Tu camino al exito
Seccion del app para los ingresantes (Cachimbos). Aqui se trabajan principalmente con los cards que los dirigen hacia las secciones de interes para este grupo de estudiantes.

⚠️ **Importancia**  
Estos eventos nos permiten identificar secciones de interes entre los usuarios del app.

⚙️ **Implementacion**  
Todos los elementos dentro de esta sección deben de contar con los siguientes atributos dentro de su
estructura a nivel de código:

```js
data-ui-element   = "card"
data-ui-label     = "{{card_label}}"
data-ui-hierarchy = "inicio > tu_camino_al_exito"
data-ui-url       = "{{url_destino}}"
```

Se puede visualizar el payload generico del evento dentro del siguiente fichero de [implementacion](./00-home/02-tu-camino-al-exito/global_event.yaml).  

Asimismo, se presentan estructuras rigidas que pueden ser usadas en el caso de que la implementacion parametrica se vea dificultada por algun motivo. Los archivos se pueden encontrar en el siguiente [folder](./00-home/02-tu-camino-al-exito/).

🩻 **Imagenes**  
Aqui se presentan vistas detalladas de la ubicacion de la seccion dentro del app.
TBD

---

Nota:  
La implementacion de este codigo esa basado en la estructura generica del evento [ui-interaction](../../00-snippets/ui-interaction.yaml) con algunas modificaciones de ser necesario. Todos estos eventos se pueden ver complementados tambien por la estructura de [datos de usuario loggeado](../../00-snippets/logged-user.yaml).
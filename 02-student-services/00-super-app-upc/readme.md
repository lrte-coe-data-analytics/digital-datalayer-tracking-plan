# Documento de marcación
Fecha de creacion: Enero 2026  
Fecha ultima actualizacion: Enero 2026

## Table of content

---

## Inicio
Pantalla principal del app, aqui se encuentran secciones de interes para navegacion directa.

### ➡️ Explora y descubre
Esta sección presenta distintos Cards (imagenes + texto) que permiten navegar a ciertas secciones del app.  
Todos los elementos que pertenecen a esta seccion deben etiquetarse de forma idéntica con una variacion en funcion
del texto o label que se presenta dentro del card.  

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

Estos atributos permitiran que la estructura de los eventos sea facil de mantener y de programar.
Se puede visualizar el payload generico del evento dentro del siguiente fichero de [implementacion](./00-home/00-explora-y-descubre/global_event.yaml).

Nota:  
La implementacion de este codigo esa basado en la estructura generica del evento [ui-interaction](../../00-snippets/ui-interaction.yaml) con algunas modificaciones de ser necesario. Todos estos eventos se pueden ver complementados tambien por la estructura de [datos de usuario loggeado](../../00-snippets/logged-user.yaml).
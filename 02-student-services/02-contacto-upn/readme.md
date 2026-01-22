# Documento de marcación
Fecha de creacion: 17 Enero 2026  
Fecha ultima actualizacion: 21 Enero 2026

---

## 🚀 Home

### Eventos generales

- 📘 `button_pregrado`: [payload](./00-home/button_pregrado.yaml)  

- 📘 `button_wa`: [payload](./00-home/button_wa.yaml)  

- 📘 `card_general_event`: [payload](./00-home/card_general_event.yaml)  
Evento generico para todos los cards que se encuentren presente en la seccion del home.  
Nos permitira trackear informacion sobre temas de interes.

### Search

- 📘 `screen_view`: [payload](./01-search/screen_view.yaml)  
Seguimiento de busquedas que ha realizado el usuario. Nos permite capturar datos sobre terminos de busqueda.

- 📘 `list_item_search`: [payload](./01-search/list_item_search.yaml)  
Seleccion de algun enlace producto de la busqueda dentro del portal. Podremos capturar el titulo de la seccion lo que permitira determinar temas de interes general.

---

Nota:  
La implementacion de este codigo esa basado en la estructura generica del evento [ui-interaction](../../00-snippets/ui-interaction.yaml) con algunas modificaciones de ser necesario. Todos estos eventos se pueden ver complementados tambien por la estructura de [datos de usuario loggeado](../../00-snippets/logged-user.yaml).
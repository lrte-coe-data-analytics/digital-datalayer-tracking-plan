# Documento de marcación (Portal)
Fecha de creacion: 17 Enero 2026  
Fecha ultima actualizacion: 21 Enero 2026

## Table of content
1. [🏗️ Arquitectura de Implementación](#-arquitectura-de-implementación)
2. [🏠 Home](#-home)
3. [🔍 Search](#-search)

---

## 🏗️ Arquitectura de Implementación

Al ser un portal de acceso público que **no requiere autenticación**, la estrategia de medición cambia respecto a los aplicativos privados:

1.  **Navegación Anónima:** No es necesario esperar ningún evento de `login` o `user_identified` para disparar los eventos de esta lista.
2.  **Inicialización:** Los eventos pueden dispararse inmediatamente ocurra la interacción (click) o la carga de página (view), confiando en la asignación automática de cookies (Client ID) de Google Analytics para mantener la sesión.
3.  **Independencia:** Los payloads definidos aquí son autónomos y no requieren heredar propiedades de un objeto `user_data`.

---

## 🏠 Home
Pantalla principal del portal público.

### Eventos generales

- 📘 `button_pregrado`: [payload](./00-home/button_pregrado.yaml)  
    Captura la intención de interés en la oferta académica de pregrado.

- 📘 `button_wa`: [payload](./00-home/button_wa.yaml)  
    Click en el botón flotante o enlace de WhatsApp. Mide la intención de contacto directo.

- 📘 `card_general_event`: [payload](./00-home/card_general_event.yaml)  
    **Evento Genérico.** Se utiliza para todos los cards informativos presentes en el home que no tengan un evento específico.  
    *Objetivo:* Trackear información sobre temas de interés (Noticias, Blog, Eventos) basado en el título del card.

## 🔍 Search
Funcionalidad de búsqueda interna del portal.

### Eventos de búsqueda

- 📘 `screen_view`: [payload](./01-search/screen_view.yaml)  
    **Seguimiento de Búsquedas.** Se dispara cuando se cargan los resultados de búsqueda.  
    *Dato Crítico:* Debe capturar el término de búsqueda (`search_term`) ingresado por el usuario.

- 📘 `list_item_search`: [payload](./01-search/list_item_search.yaml)  
    **Click en Resultado.** Se dispara cuando el usuario selecciona uno de los enlaces resultantes de la búsqueda.  
    *Objetivo:* Capturar el título de la sección seleccionada para determinar la relevancia de los resultados entregados.

---

Nota:  
La implementación de este código está basada en la estructura genérica del evento [ui-interaction](../../00-snippets/ui-interaction.yaml). A diferencia de los entornos privados, **no es necesaria** la implementación del snippet `logged-user` para este portal.
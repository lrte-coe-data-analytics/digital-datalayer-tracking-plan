# Guía Visual: Click/VerMasDetalles
**Payload General:** [click_vermasdetalles.yaml](../03-cursos/click_vermasdetalles.yaml)

---
## Instancia: Click/VerMasDetalles
- **Descripción:** Este evento mide los clics en Ver más Detalle de Cursos que se encuentra en la interna de la sección de Cursos y Notas.

![click_vermasdetalles](../assets/click_vermasdetalles.png)

**Data Layer (Payload):**
```yaml
{
  "event"           : "ui_interaction",                # Nombre fijo del evento
  "ui_location"     : "content_body",                      # Dónde está el elemento (content_body)
  "ui_element"      : "button",                       # Qué es el elemento (button)
  "ui_action"       : "click",                      # Qué hace (click)
  "ui_label"        : "click_vermasdetalles",                      # Identificador único del elemento (click_vermasdetalles)
  "ui_hierarchy"    : "portal_upc > cursos_y_notas",                     # Identificador semántico de la sección
  "link_url"        : null,                        # Si dirige a otro sitio o abre un modal (URL destino o null)
  "path_location"   : "{{path_actual_del_evento}}",    # URL y/o path de donde se da el evento
  "data_collected"  : null                            # Datos recopilados (mensajes de error, etc.)
}
```

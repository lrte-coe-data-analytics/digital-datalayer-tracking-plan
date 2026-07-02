# Guía Visual: Click/select-programa
**Payload General:** [click_select_programa.yaml](../03-cursos/click_select_programa.yaml)

---
## Instancia: Click/select-programa
- **Descripción:** Este evento mide los clics en la lista de Cursos que se encuentra en la interna de la sección de Cursos y Notas.

![click_select_programa](../assets/click_select_programa.png)

**Data Layer (Payload):**
```yaml
{
  "event"           : "ui_interaction",                # Nombre fijo del evento
  "ui_location"     : "content_body",                      # Dónde está el elemento (content_body)
  "ui_element"      : "button",                       # Qué es el elemento (button)
  "ui_action"       : "click",                      # Qué hace (click)
  "ui_label"        : "click_select_programa",                      # Identificador único del elemento (click_select_programa)
  "ui_hierarchy"    : "portal_upc > cursos_y_notas",                     # Identificador semántico de la sección
  "link_url"        : null,                        # Si dirige a otro sitio o abre un modal (URL destino o null)
  "path_location"   : "{{path_actual_del_evento}}",    # URL y/o path de donde se da el evento
  "data_collected"  : null                            # Datos recopilados (mensajes de error, etc.)
}
```

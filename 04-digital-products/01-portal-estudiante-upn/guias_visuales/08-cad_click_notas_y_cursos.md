# Guía Visual: Click/notas_y_cursos
**Payload General:** [click_notas_y_cursos.yaml](../08-cad/click_notas_y_cursos.yaml)

---
## Instancia: Click/notas_y_cursos
- **Descripción:** Este evento mide el clic a la interna de Notas y Cursos de CAD 2.0

![click_notas_y_cursos](../assets/click_notas_y_cursos.png)

**Data Layer (Payload):**
```yaml
{
  "event"           : "ui_interaction",                # Nombre fijo del evento
  "ui_location"     : "content_body",                      # Dónde está el elemento (content_body)
  "ui_element"      : "button",                       # Qué es el elemento (button)
  "ui_action"       : "click",                      # Qué hace (click)
  "ui_label"        : "click_notas_y_cursos",                      # Identificador único del elemento (click_notas_y_cursos)
  "ui_hierarchy"    : "portal_upn > cad_2",                     # Identificador semántico de la sección
  "link_url"        : null,                        # Si dirige a otro sitio o abre un modal (URL destino o null)
  "path_location"   : "{{path_actual_del_evento}}",    # URL y/o path de donde se da el evento
  "data_collected"  : null                            # Datos recopilados (mensajes de error, etc.)
}
```

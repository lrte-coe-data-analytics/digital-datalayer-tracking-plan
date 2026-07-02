# Guía Visual: Click/Abrir-CursosyNotas
**Payload General:** [click_abrir_cursosynotas.yaml](../03-cursos/click_abrir_cursosynotas.yaml)

---
## Instancia: Click/Abrir-CursosyNotas
- **Descripción:** Este evento mide los clics en los botones (Detalles, Asistencias y Notas) en cada curso, dentro de la lista de cursos en la sección de Cursos y Notas.

![click_abrir_cursosynotas](../assets/click_abrir_cursosynotas.png)

**Data Layer (Payload):**
```yaml
{
  "event"           : "ui_interaction",                # Nombre fijo del evento
  "ui_location"     : "content_body",                      # Dónde está el elemento (content_body)
  "ui_element"      : "button",                       # Qué es el elemento (button)
  "ui_action"       : "click",                      # Qué hace (click)
  "ui_label"        : "click_abrir_cursosynotas",                      # Identificador único del elemento (click_abrir_cursosynotas)
  "ui_hierarchy"    : "portal_cib > cursos_y_notas",                     # Identificador semántico de la sección
  "link_url"        : null,                        # Si dirige a otro sitio o abre un modal (URL destino o null)
  "path_location"   : "{{path_actual_del_evento}}",    # URL y/o path de donde se da el evento
  "data_collected"  : null                            # Datos recopilados (mensajes de error, etc.)
}
```

# Guía Visual: Click/horario_semanal
**Payload General:** [click_horario_semanal.yaml](../08-cad/click_horario_semanal.yaml)

---
## Instancia: Click/horario_semanal
- **Descripción:** Este evento mide el clic de Horario Semanal el Pop UP de Cursos en la interna de Cursos de CAD 2.0

![click_horario_semanal](../assets/click_horario_semanal.png)

**Data Layer (Payload):**
```yaml
{
  "event"           : "ui_interaction",                # Nombre fijo del evento
  "ui_location"     : "content_body",                      # Dónde está el elemento (content_body)
  "ui_element"      : "button",                       # Qué es el elemento (button)
  "ui_action"       : "click",                      # Qué hace (click)
  "ui_label"        : "click_horario_semanal",                      # Identificador único del elemento (click_horario_semanal)
  "ui_hierarchy"    : "portal > cad_2",                     # Identificador semántico de la sección
  "link_url"        : null,                        # Si dirige a otro sitio o abre un modal (URL destino o null)
  "path_location"   : "{{path_actual_del_evento}}",    # URL y/o path de donde se da el evento
  "data_collected"  : null,                            # Datos recopilados (mensajes de error, etc.)
  "csat_value"      : null                             # Solo para CSAT (0 a 5)
}
```

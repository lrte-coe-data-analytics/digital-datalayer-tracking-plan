# Guía Visual: Click/Remoto-HorarioPopup
**Payload General:** [click_remoto_horariopopup.yaml](../01-home/click_remoto_horariopopup.yaml)

---
## Instancia: Click/Remoto-HorarioPopup
- **Descripción:** Este evento mide el clic a la dirección del Aula virtual del Curso Virtual, dentro del Pop Up de Horario.

![click_remoto_horariopopup](../assets/click_remoto_horariopopup.png)

**Data Layer (Payload):**
```yaml
{
  "event"           : "ui_interaction",                # Nombre fijo del evento
  "ui_location"     : "content_body",                      # Dónde está el elemento (content_body)
  "ui_element"      : "button",                       # Qué es el elemento (button)
  "ui_action"       : "open_modal",                      # Qué hace (open_modal)
  "ui_label"        : "click_remoto_horariopopup",                      # Identificador único del elemento (click_remoto_horariopopup)
  "ui_hierarchy"    : "portal > dashboard",                     # Identificador semántico de la sección
  "link_url"        : null,                        # Si dirige a otro sitio o abre un modal (URL destino o null)
  "path_location"   : "{{path_actual_del_evento}}",    # URL y/o path de donde se da el evento
  "data_collected"  : null,                            # Datos recopilados (mensajes de error, etc.)
  "csat_value"      : null                             # Solo para CSAT (0 a 5)
}
```

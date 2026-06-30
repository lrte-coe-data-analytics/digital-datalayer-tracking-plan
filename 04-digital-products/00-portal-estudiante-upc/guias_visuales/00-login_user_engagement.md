# Guía Visual: user_engagement
**Payload General:** [user_engagement.yaml](../00-login/user_engagement.yaml)

---
## Instancia: user_engagement
- **Descripción:** Este evento mide todas las sesiones que tengan más de 1 minuto.

![user_engagement](../assets/user_engagement.png)

**Data Layer (Payload):**
```yaml
{
  "event"           : "ui_interaction",                # Nombre fijo del evento
  "ui_location"     : "content_body",                      # Dónde está el elemento (content_body)
  "ui_element"      : "button",                       # Qué es el elemento (button)
  "ui_action"       : "click",                      # Qué hace (click)
  "ui_label"        : "user_engagement",                      # Identificador único del elemento (user_engagement)
  "ui_hierarchy"    : "portal > todas",                     # Identificador semántico de la sección
  "link_url"        : null,                        # Si dirige a otro sitio o abre un modal (URL destino o null)
  "path_location"   : "{{path_actual_del_evento}}",    # URL y/o path de donde se da el evento
  "data_collected"  : null,                            # Datos recopilados (mensajes de error, etc.)
  "csat_value"      : null                             # Solo para CSAT (0 a 5)
}
```

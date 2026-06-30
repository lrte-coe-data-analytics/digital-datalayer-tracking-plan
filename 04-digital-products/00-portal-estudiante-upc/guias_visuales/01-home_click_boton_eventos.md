# Guía Visual: Click/Boton-Eventos
**Payload General:** [click_boton_eventos.yaml](../01-home/click_boton_eventos.yaml)

---
## Instancia: Click/Boton-Eventos
- **Descripción:** Este evento mide el clic en Registrarse en los Eventos.

![click_boton_eventos](../assets/click_boton_eventos.png)

**Data Layer (Payload):**
```yaml
{
  "event"           : "ui_interaction",                # Nombre fijo del evento
  "ui_location"     : "content_body",                      # Dónde está el elemento (content_body)
  "ui_element"      : "button",                       # Qué es el elemento (button)
  "ui_action"       : "click",                      # Qué hace (click)
  "ui_label"        : "click_boton_eventos",                      # Identificador único del elemento (click_boton_eventos)
  "ui_hierarchy"    : "portal > eventos",                     # Identificador semántico de la sección
  "link_url"        : null,                        # Si dirige a otro sitio o abre un modal (URL destino o null)
  "path_location"   : "{{path_actual_del_evento}}",    # URL y/o path de donde se da el evento
  "data_collected"  : null,                            # Datos recopilados (mensajes de error, etc.)
  "csat_value"      : null                             # Solo para CSAT (0 a 5)
}
```

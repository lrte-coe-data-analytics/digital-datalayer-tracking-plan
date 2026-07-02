# Guía Visual: Click/Desplegable-Dashboard
**Payload General:** [click_desplegable_dashboard.yaml](../01-home/click_desplegable_dashboard.yaml)

---
## Instancia: Click/Desplegable-Dashboard
- **Descripción:** Este evento mide el icono de agrandar (Levantar el Pop Up), dentro de la lista de Notas.

![click_desplegable_dashboard](../assets/click_desplegable_dashboard.png)

**Data Layer (Payload):**
```yaml
{
  "event"           : "ui_interaction",                # Nombre fijo del evento
  "ui_location"     : "content_body",                      # Dónde está el elemento (content_body)
  "ui_element"      : "button",                       # Qué es el elemento (button)
  "ui_action"       : "click",                      # Qué hace (click)
  "ui_label"        : "click_desplegable_dashboard",                      # Identificador único del elemento (click_desplegable_dashboard)
  "ui_hierarchy"    : "portal_upc > dashboard",                     # Identificador semántico de la sección
  "link_url"        : null,                        # Si dirige a otro sitio o abre un modal (URL destino o null)
  "path_location"   : "{{path_actual_del_evento}}",    # URL y/o path de donde se da el evento
  "data_collected"  : null                            # Datos recopilados (mensajes de error, etc.)
}
```

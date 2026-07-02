# Guía Visual: Click/Item-Notificaciones
**Payload General:** [click_item_notificaciones.yaml](../01-home/click_item_notificaciones.yaml)

---
## Instancia: Click/Item-Notificaciones
- **Descripción:** Este evento mide los clic a las notificaciones

![click_item_notificaciones](../assets/click_item_notificaciones.png)

**Data Layer (Payload):**
```yaml
{
  "event"           : "ui_interaction",                # Nombre fijo del evento
  "ui_location"     : "drawer",                      # Dónde está el elemento (drawer)
  "ui_element"      : "button",                       # Qué es el elemento (button)
  "ui_action"       : "click",                      # Qué hace (click)
  "ui_label"        : "click_item_notificaciones",                      # Identificador único del elemento (click_item_notificaciones)
  "ui_hierarchy"    : "portal_upc > notificaciones",                     # Identificador semántico de la sección
  "link_url"        : null,                        # Si dirige a otro sitio o abre un modal (URL destino o null)
  "path_location"   : "{{path_actual_del_evento}}",    # URL y/o path de donde se da el evento
  "data_collected"  : null                            # Datos recopilados (mensajes de error, etc.)
}
```

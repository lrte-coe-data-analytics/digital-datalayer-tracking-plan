# Guía Visual: Click/AbrirNotificaciones
**Payload General:** [click_abrirnotificaciones.yaml](../01-home/click_abrirnotificaciones.yaml)

---
## Instancia: Click/AbrirNotificaciones
- **Descripción:** Este evento mide los Clic a abrir la notificaciones 

![click_abrirnotificaciones](../assets/click_abrirnotificaciones.png)

**Data Layer (Payload):**
```yaml
{
  "event"           : "ui_interaction",                # Nombre fijo del evento
  "ui_location"     : "drawer",                      # Dónde está el elemento (drawer)
  "ui_element"      : "button",                       # Qué es el elemento (button)
  "ui_action"       : "click",                      # Qué hace (click)
  "ui_label"        : "click_abrirnotificaciones",                      # Identificador único del elemento (click_abrirnotificaciones)
  "ui_hierarchy"    : "portal_upn > notificaciones",                     # Identificador semántico de la sección
  "link_url"        : null,                        # Si dirige a otro sitio o abre un modal (URL destino o null)
  "path_location"   : "{{path_actual_del_evento}}",    # URL y/o path de donde se da el evento
  "data_collected"  : null                            # Datos recopilados (mensajes de error, etc.)
}
```

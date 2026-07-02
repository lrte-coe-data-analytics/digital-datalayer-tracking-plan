# Guía Visual: Click/Banner-Home
**Payload General:** [click_banner_home.yaml](../01-home/click_banner_home.yaml)

---
## Instancia: Click/Banner-Home
- **Descripción:** Este evento mide el clic en el banner en la Home.

![click_banner_home](../assets/click_banner_home.png)

**Data Layer (Payload):**
```yaml
{
  "event"           : "ui_interaction",                # Nombre fijo del evento
  "ui_location"     : "banner_section",                      # Dónde está el elemento (banner_section)
  "ui_element"      : "button",                       # Qué es el elemento (button)
  "ui_action"       : "click",                      # Qué hace (click)
  "ui_label"        : "click_banner_home",                      # Identificador único del elemento (click_banner_home)
  "ui_hierarchy"    : "portal_cib > banner",                     # Identificador semántico de la sección
  "link_url"        : null,                        # Si dirige a otro sitio o abre un modal (URL destino o null)
  "path_location"   : "{{path_actual_del_evento}}",    # URL y/o path de donde se da el evento
  "data_collected"  : null                            # Datos recopilados (mensajes de error, etc.)
}
```

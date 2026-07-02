# Guía Visual: Click/AvisoPopup-Home
**Payload General:** [click_avisopopup_home.yaml](../01-home/click_avisopopup_home.yaml)

---
## Instancia: Click/AvisoPopup-Home
- **Descripción:** Este evento mide el clic en los Avisos que se cargan en los Pop Up de Avisos.

![click_avisopopup_home](../assets/click_avisopopup_home.png)

**Data Layer (Payload):**
```yaml
{
  "event"           : "ui_interaction",                # Nombre fijo del evento
  "ui_location"     : "content_body",                      # Dónde está el elemento (content_body)
  "ui_element"      : "button",                       # Qué es el elemento (button)
  "ui_action"       : "open_modal",                      # Qué hace (open_modal)
  "ui_label"        : "click_avisopopup_home",                      # Identificador único del elemento (click_avisopopup_home)
  "ui_hierarchy"    : "portal_upc > avisos",                     # Identificador semántico de la sección
  "link_url"        : null,                        # Si dirige a otro sitio o abre un modal (URL destino o null)
  "path_location"   : "{{path_actual_del_evento}}",    # URL y/o path de donde se da el evento
  "data_collected"  : null                            # Datos recopilados (mensajes de error, etc.)
}
```

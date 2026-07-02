# Guía Visual: Click/PopupBtn-Home
**Payload General:** [click_popupbtn_home.yaml](../01-home/click_popupbtn_home.yaml)

---
## Instancia: Click/PopupBtn-Home
- **Descripción:** Este evento mide el clic en el Banner del Pop Up.

![click_popupbtn_home](../assets/click_popupbtn_home.png)

**Data Layer (Payload):**
```yaml
{
  "event"           : "ui_interaction",                # Nombre fijo del evento
  "ui_location"     : "modal_window",                      # Dónde está el elemento (modal_window)
  "ui_element"      : "button",                       # Qué es el elemento (button)
  "ui_action"       : "open_modal",                      # Qué hace (open_modal)
  "ui_label"        : "click_popupbtn_home",                      # Identificador único del elemento (click_popupbtn_home)
  "ui_hierarchy"    : "portal_cib > pop_up",                     # Identificador semántico de la sección
  "link_url"        : null,                        # Si dirige a otro sitio o abre un modal (URL destino o null)
  "path_location"   : "{{path_actual_del_evento}}",    # URL y/o path de donde se da el evento
  "data_collected"  : null                            # Datos recopilados (mensajes de error, etc.)
}
```

# Guía Visual: Click/PopupCard-Home
**Payload General:** [click_popupcard_home.yaml](../01-home/click_popupcard_home.yaml)

---
## Instancia: Click/PopupCard-Home
- **Descripción:** Este evento mide el clic en el Banner de un Card Pop Up.

![click_popupcard_home](../assets/click_popupcard_home.png)

**Data Layer (Payload):**
```yaml
{
  "event"           : "ui_interaction",                # Nombre fijo del evento
  "ui_location"     : "modal_window",                      # Dónde está el elemento (modal_window)
  "ui_element"      : "card",                       # Qué es el elemento (card)
  "ui_action"       : "open_modal",                      # Qué hace (open_modal)
  "ui_label"        : "click_popupcard_home",                      # Identificador único del elemento (click_popupcard_home)
  "ui_hierarchy"    : "portal > pop_up",                     # Identificador semántico de la sección
  "link_url"        : null,                        # Si dirige a otro sitio o abre un modal (URL destino o null)
  "path_location"   : "{{path_actual_del_evento}}",    # URL y/o path de donde se da el evento
  "data_collected"  : null,                            # Datos recopilados (mensajes de error, etc.)
  "csat_value"      : null                             # Solo para CSAT (0 a 5)
}
```

# Guía Visual: Click/popup_cur_home_cad
**Payload General:** [click_popup_cur_home_cad.yaml](../08-cad/click_popup_cur_home_cad.yaml)

---
## Instancia: Click/popup_cur_home_cad
- **Descripción:** Este evento mide el clic al levantar el Pop UP de Cursos en la Home de CAD 2.0

![click_popup_cur_home_cad](../assets/click_popup_cur_home_cad.png)

**Data Layer (Payload):**
```yaml
{
  "event"           : "ui_interaction",                # Nombre fijo del evento
  "ui_location"     : "content_body",                      # Dónde está el elemento (content_body)
  "ui_element"      : "button",                       # Qué es el elemento (button)
  "ui_action"       : "open_modal",                      # Qué hace (open_modal)
  "ui_label"        : "click_popup_cur_home_cad",                      # Identificador único del elemento (click_popup_cur_home_cad)
  "ui_hierarchy"    : "portal > cad_2",                     # Identificador semántico de la sección
  "link_url"        : null,                        # Si dirige a otro sitio o abre un modal (URL destino o null)
  "path_location"   : "{{path_actual_del_evento}}",    # URL y/o path de donde se da el evento
  "data_collected"  : null,                            # Datos recopilados (mensajes de error, etc.)
  "csat_value"      : null                             # Solo para CSAT (0 a 5)
}
```

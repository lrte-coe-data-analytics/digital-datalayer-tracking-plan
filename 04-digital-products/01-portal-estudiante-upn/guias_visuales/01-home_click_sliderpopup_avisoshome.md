# Guía Visual: Click/SliderPopup-AvisosHome
**Payload General:** [click_sliderpopup_avisoshome.yaml](../01-home/click_sliderpopup_avisoshome.yaml)

---
## Instancia: Click/SliderPopup-AvisosHome
- **Descripción:** Este evento mide el clic en las flechas de navegación que se cargan en los Pop Up de Avisos.

![click_sliderpopup_avisoshome](../assets/click_sliderpopup_avisoshome.png)

**Data Layer (Payload):**
```yaml
{
  "event"           : "ui_interaction",                # Nombre fijo del evento
  "ui_location"     : "content_body",                      # Dónde está el elemento (content_body)
  "ui_element"      : "button",                       # Qué es el elemento (button)
  "ui_action"       : "open_modal",                      # Qué hace (open_modal)
  "ui_label"        : "click_sliderpopup_avisoshome",                      # Identificador único del elemento (click_sliderpopup_avisoshome)
  "ui_hierarchy"    : "portal_upn > avisos",                     # Identificador semántico de la sección
  "link_url"        : null,                        # Si dirige a otro sitio o abre un modal (URL destino o null)
  "path_location"   : "{{path_actual_del_evento}}",    # URL y/o path de donde se da el evento
  "data_collected"  : null                            # Datos recopilados (mensajes de error, etc.)
}
```

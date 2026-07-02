# Guía Visual: Click/popup_ver_horario
**Payload General:** [click_popup_ver_horario.yaml](../08-cad/click_popup_ver_horario.yaml)

---
## Instancia: Click/popup_ver_horario
- **Descripción:** Este evento mide el clic al levantar el Pop UP de Horarios en la interna de Cursos de CAD 2.0

![click_popup_ver_horario](../assets/click_popup_ver_horario.png)

**Data Layer (Payload):**
```yaml
{
  "event"           : "ui_interaction",                # Nombre fijo del evento
  "ui_location"     : "content_body",                      # Dónde está el elemento (content_body)
  "ui_element"      : "button",                       # Qué es el elemento (button)
  "ui_action"       : "open_modal",                      # Qué hace (open_modal)
  "ui_label"        : "click_popup_ver_horario",                      # Identificador único del elemento (click_popup_ver_horario)
  "ui_hierarchy"    : "portal_upn > cad_2",                     # Identificador semántico de la sección
  "link_url"        : null,                        # Si dirige a otro sitio o abre un modal (URL destino o null)
  "path_location"   : "{{path_actual_del_evento}}",    # URL y/o path de donde se da el evento
  "data_collected"  : null                            # Datos recopilados (mensajes de error, etc.)
}
```

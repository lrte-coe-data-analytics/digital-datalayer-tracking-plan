# Guía Visual: Click/home_cursos_cad
**Payload General:** [click_home_cursos_cad.yaml](../08-cad/click_home_cursos_cad.yaml)

---
## Instancia: Click/home_cursos_cad
- **Descripción:** Este evento mide el clic al modulo de Cursos en la Home de CAD 2.0

![click_home_cursos_cad](../assets/click_home_cursos_cad.png)

**Data Layer (Payload):**
```yaml
{
  "event"           : "ui_interaction",                # Nombre fijo del evento
  "ui_location"     : "content_body",                      # Dónde está el elemento (content_body)
  "ui_element"      : "button",                       # Qué es el elemento (button)
  "ui_action"       : "click",                      # Qué hace (click)
  "ui_label"        : "click_home_cursos_cad",                      # Identificador único del elemento (click_home_cursos_cad)
  "ui_hierarchy"    : "portal_upn > cad_2",                     # Identificador semántico de la sección
  "link_url"        : null,                        # Si dirige a otro sitio o abre un modal (URL destino o null)
  "path_location"   : "{{path_actual_del_evento}}",    # URL y/o path de donde se da el evento
  "data_collected"  : null                            # Datos recopilados (mensajes de error, etc.)
}
```

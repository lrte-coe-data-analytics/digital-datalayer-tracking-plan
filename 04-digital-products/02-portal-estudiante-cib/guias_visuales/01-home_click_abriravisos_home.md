# Guía Visual: Click/AbrirAvisos-Home
**Payload General:** [click_abriravisos_home.yaml](../01-home/click_abriravisos_home.yaml)

---
## Instancia: Click/AbrirAvisos-Home
- **Descripción:** Este evento mide el clic en los Avisos.

![click_abriravisos_home](../assets/click_abriravisos_home.png)

**Data Layer (Payload):**
```yaml
{
  "event"           : "ui_interaction",                # Nombre fijo del evento
  "ui_location"     : "content_body",                      # Dónde está el elemento (content_body)
  "ui_element"      : "button",                       # Qué es el elemento (button)
  "ui_action"       : "click",                      # Qué hace (click)
  "ui_label"        : "click_abriravisos_home",                      # Identificador único del elemento (click_abriravisos_home)
  "ui_hierarchy"    : "portal_cib > avisos",                     # Identificador semántico de la sección
  "link_url"        : null,                        # Si dirige a otro sitio o abre un modal (URL destino o null)
  "path_location"   : "{{path_actual_del_evento}}",    # URL y/o path de donde se da el evento
  "data_collected"  : null                            # Datos recopilados (mensajes de error, etc.)
}
```

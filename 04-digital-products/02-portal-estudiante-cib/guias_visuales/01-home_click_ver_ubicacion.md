# Guía Visual: Click/Ver-ubicacion
**Payload General:** [click_ver_ubicacion.yaml](../01-home/click_ver_ubicacion.yaml)

---
## Instancia: Click/Ver-ubicacion
- **Descripción:** Este evento mide el clic en Ver úbicacion en los Eventos.

![click_ver_ubicacion](../assets/click_ver_ubicacion.png)

**Data Layer (Payload):**
```yaml
{
  "event"           : "ui_interaction",                # Nombre fijo del evento
  "ui_location"     : "content_body",                      # Dónde está el elemento (content_body)
  "ui_element"      : "button",                       # Qué es el elemento (button)
  "ui_action"       : "click",                      # Qué hace (click)
  "ui_label"        : "click_ver_ubicacion",                      # Identificador único del elemento (click_ver_ubicacion)
  "ui_hierarchy"    : "portal_cib > eventos",                     # Identificador semántico de la sección
  "link_url"        : null,                        # Si dirige a otro sitio o abre un modal (URL destino o null)
  "path_location"   : "{{path_actual_del_evento}}",    # URL y/o path de donde se da el evento
  "data_collected"  : null                            # Datos recopilados (mensajes de error, etc.)
}
```

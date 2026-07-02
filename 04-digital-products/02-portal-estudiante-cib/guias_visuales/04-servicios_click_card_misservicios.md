# Guía Visual: Click/Card-MisServicios
**Payload General:** [click_card_misservicios.yaml](../04-servicios/click_card_misservicios.yaml)

---
## Instancia: Click/Card-MisServicios
- **Descripción:** Este evento mide el clic en los card de Mis Servicios en la sección de Mis Servicios

![click_card_misservicios](../assets/click_card_misservicios.png)

**Data Layer (Payload):**
```yaml
{
  "event"           : "ui_interaction",                # Nombre fijo del evento
  "ui_location"     : "content_body",                      # Dónde está el elemento (content_body)
  "ui_element"      : "card",                       # Qué es el elemento (card)
  "ui_action"       : "click",                      # Qué hace (click)
  "ui_label"        : "click_card_misservicios",                      # Identificador único del elemento (click_card_misservicios)
  "ui_hierarchy"    : "portal_cib > mis_servicios",                     # Identificador semántico de la sección
  "link_url"        : null,                        # Si dirige a otro sitio o abre un modal (URL destino o null)
  "path_location"   : "{{path_actual_del_evento}}",    # URL y/o path de donde se da el evento
  "data_collected"  : null                            # Datos recopilados (mensajes de error, etc.)
}
```

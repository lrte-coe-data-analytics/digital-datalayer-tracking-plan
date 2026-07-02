# Guía Visual: Click/Card-Eventos
**Payload General:** [click_card_eventos.yaml](../01-home/click_card_eventos.yaml)

---
## Instancia: Click/Card-Eventos
- **Descripción:** Este evento mide el clic en los Card de Eventos. 

![click_card_eventos](../assets/click_card_eventos.png)

**Data Layer (Payload):**
```yaml
{
  "event"           : "ui_interaction",                # Nombre fijo del evento
  "ui_location"     : "content_body",                      # Dónde está el elemento (content_body)
  "ui_element"      : "card",                       # Qué es el elemento (card)
  "ui_action"       : "click",                      # Qué hace (click)
  "ui_label"        : "click_card_eventos",                      # Identificador único del elemento (click_card_eventos)
  "ui_hierarchy"    : "portal_upn > eventos",                     # Identificador semántico de la sección
  "link_url"        : null,                        # Si dirige a otro sitio o abre un modal (URL destino o null)
  "path_location"   : "{{path_actual_del_evento}}",    # URL y/o path de donde se da el evento
  "data_collected"  : null                            # Datos recopilados (mensajes de error, etc.)
}
```

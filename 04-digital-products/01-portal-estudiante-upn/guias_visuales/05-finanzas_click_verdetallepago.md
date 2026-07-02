# Guía Visual: Click-VerDetallePago
**Payload General:** [click_verdetallepago.yaml](../05-finanzas/click_verdetallepago.yaml)

---
## Instancia: Click-VerDetallePago
- **Descripción:** Este evento mide el clic en Ver Detalle de Pago en Obligaciones por Pagar. 

![click_verdetallepago](../assets/click_verdetallepago.png)

**Data Layer (Payload):**
```yaml
{
  "event"           : "ui_interaction",                # Nombre fijo del evento
  "ui_location"     : "content_body",                      # Dónde está el elemento (content_body)
  "ui_element"      : "button",                       # Qué es el elemento (button)
  "ui_action"       : "click",                      # Qué hace (click)
  "ui_label"        : "click_verdetallepago",                      # Identificador único del elemento (click_verdetallepago)
  "ui_hierarchy"    : "portal_upn > obligaciones_por_pagar",                     # Identificador semántico de la sección
  "link_url"        : null,                        # Si dirige a otro sitio o abre un modal (URL destino o null)
  "path_location"   : "{{path_actual_del_evento}}",    # URL y/o path de donde se da el evento
  "data_collected"  : null                            # Datos recopilados (mensajes de error, etc.)
}
```

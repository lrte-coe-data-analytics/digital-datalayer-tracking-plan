# Guía Visual: card_facturacion
**Payload General:** [../05-finanzas/card_facturacion.yaml](../05-finanzas/card_facturacion.yaml)

---
## Instancia: card_facturacion
- **Descripción:** Click en el card de Facturación.

![card_facturacion](../assets/card_facturacion.png)

**Data Layer (Payload):**
```yaml
{
  "event"       : "ui_interaction",   # Nombre fijo del evento
  "ui_location" : "content_body",     # Dónde está el elemento
  "ui_element"  : "card",             # Qué es el elemento
  "ui_action"   : "click",            # Qué hace (open_modal, navigation, etc.)
  "ui_label"    : "facturacion",      # Esto debe enviar el texto principal del card
  "ui_hierarchy": "finanzas",         # Identificador semantico de la seccion donde se ubica.
  "link_url"    : "{{url_desino}}"    # Si te dirige hacia algun otro lugar, abre algun modal o cambia de vista o pagina web.
}
```

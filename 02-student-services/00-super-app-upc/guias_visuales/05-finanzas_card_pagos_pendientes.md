# Guía Visual: card_pagos_pendientes
**Payload General:** [../05-finanzas/card_pagos_pendientes.yaml](../05-finanzas/card_pagos_pendientes.yaml)

---
## Instancia: card_pagos_pendientes
- **Descripción:** Click en el card de Mis Pagos Pendientes.

![card_pagos_pendientes](../assets/card_pagos_pendientes.png)

**Data Layer (Payload):**
```yaml
{
  "event"       : "ui_interaction",         # Nombre fijo del evento
  "ui_location" : "content_body",           # Dónde está el elemento
  "ui_element"  : "card",                   # Qué es el elemento
  "ui_action"   : "click",                  # Qué hace (open_modal, navigation, etc.)
  "ui_label"    : "mis_pagos_pendientes",   # Esto debe enviar el texto principal del card
  "ui_hierarchy": "finanzas",               # Identificador semantico de la seccion donde se ubica.
  "link_url"    : "{{url_destino}}"          # Si te dirige hacia algun otro lugar, abre algun modal o cambia de vista o pagina web.
}
```

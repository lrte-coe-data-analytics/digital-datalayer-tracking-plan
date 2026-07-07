# Guía Visual: card_whatsapp
**Payload General:** [../05-ayuda/card_whatsapp.yaml](../05-ayuda/card_whatsapp.yaml)

---
## Instancia: card_whatsapp
- **Descripción:** Click en el card de WhatsApp en la sección Ayuda.

![card_whatsapp](../assets/card_whatsapp.png)

**Data Layer (Payload):**
```yaml
{
  "event"       : "ui_interaction",   # Nombre fijo del evento
  "ui_location" : "content_body",     # Dónde está el elemento
  "ui_element"  : "card",             # Qué es el elemento
  "ui_action"   : "click",            # Qué hace (open_modal, navigation, etc.)
  "ui_label"    : "whatsapp",         # Esto debe enviar el texto principal del elemento
  "ui_hierarchy": "ayuda",            # Identificador semantico de la seccion donde se ubica.
  "link_url"    : "{{url_destino}}"    # Si te dirige hacia algun otro lugar, abre algun modal o cambia de vista o pagina web.
}
```

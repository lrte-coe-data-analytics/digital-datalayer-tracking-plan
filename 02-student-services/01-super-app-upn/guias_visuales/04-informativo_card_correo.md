# Guía Visual: card_correo
**Payload General:** [../04-informativo/card_correo.yaml](../04-informativo/card_correo.yaml)

---
## Instancia: card_correo
- **Descripción:** Este evento se activa al interactuar con el elemento correspondiente.

![card_correo](../assets/card_correo.png)

**Data Layer (Payload):**
```yaml
{
  "event"       : "ui_interaction",   # Nombre fijo del evento
  "ui_location" : "content_body",     # Dónde está el elemento
  "ui_element"  : "card",             # Qué es el elemento
  "ui_action"   : "click",            # Qué hace (open_modal, navigation, etc.)
  "ui_label"    : "correo_upn",       # Esto debe enviar el texto principal del elemento
  "ui_hierarchy": "informativo",      # Identificador semantico de la seccion donde se ubica.
  "link_url"    : "{{url_destino}}"    # Si te dirige hacia algun otro lugar, abre algun modal o cambia de vista o pagina web.
}
```

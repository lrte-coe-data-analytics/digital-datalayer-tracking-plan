# Guía Visual: card_explora
**Payload General:** [../02-ayuda/card_explora.yaml](../02-ayuda/card_explora.yaml)

---
## Instancia: card_explora
- **Descripción:** Card presente en la pantalla de ayuda (usuario `docente`).

![card_explora](../assets/ayuda_card_explora.png)

**Data Layer (Payload):**
```yaml
{
  "event"       : "ui_interaction",   # Nombre fijo del evento
  "ui_location" : "content_body",     # Dónde está el elemento
  "ui_element"  : "card",             # Qué es el elemento
  "ui_action"   : "click",            # Qué hace (open_modal, navigation, etc.)
  "ui_label"    : "explora_upc",      # Esto debe enviar el texto principal del elemento
  "ui_hierarchy": "ayuda",            # Identificador semantico de la seccion donde se ubica.
  "link_url"    : "{{url_desino}}"    # Si te dirige hacia algun otro lugar, abre algun modal o cambia de vista o pagina web.
}
```

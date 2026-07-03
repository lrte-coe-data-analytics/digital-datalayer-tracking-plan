# Guía Visual: card_ava
**Payload General:** [../01-home/card_ava.yaml](../01-home/card_ava.yaml)

---
## Instancia: card_ava
- **Descripción:** Captura la interacción de **click** del usuario con el card relacionado a **AVA UPN**.

![card_ava](../assets/card_ava.png)

**Data Layer (Payload):**
```yaml
{
  "event"       : "ui_interaction",   # Nombre fijo del evento
  "ui_location" : "content_body",     # Dónde está el elemento
  "ui_element"  : "card",             # Qué es el elemento
  "ui_action"   : "click",            # Qué hace (open_modal, navigation, etc.)
  "ui_label"    : "ava_upn",          # Esto debe enviar el texto principal del elemento
  "ui_hierarchy": "inicio",           # Identificador semantico de la seccion donde se ubica.
  "link_url"    : "{{url_destino}}"    # Si te dirige hacia algun otro lugar, abre algun modal o cambia de vista o pagina web.
}
```

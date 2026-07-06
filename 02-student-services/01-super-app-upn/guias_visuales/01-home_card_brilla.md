# Guía Visual: card_brilla
**Payload General:** [../01-home/card_brilla.yaml](../01-home/card_brilla.yaml)

---
## Instancia: card_brilla
- **Descripción:** Captura la interacción de **click** del usuario con el card relacionado a **Brilla UPN**.

![card_brilla](../assets/card_brilla.png)

**Data Layer (Payload):**
```yaml
{
  "event"       : "ui_interaction",   # Nombre fijo del evento
  "ui_location" : "content_body",     # Dónde está el elemento
  "ui_element"  : "card",             # Qué es el elemento
  "ui_action"   : "click",            # Qué hace (open_modal, navigation, etc.)
  "ui_label"    : "brilla_con_upn",   # Esto debe enviar el texto principal del elemento
  "ui_hierarchy": "inicio",           # Identificador semantico de la seccion donde se ubica.
  "link_url"    : "{{url_destino}}"    # Si te dirige hacia algun otro lugar, abre algun modal o cambia de vista o pagina web.
}
```

# Guía Visual: card_queremos_conocerte
**Payload General:** [../00-home/02-cachimbo/card_queremos_conocerte.yaml](../00-home/02-cachimbo/card_queremos_conocerte.yaml)

---
## Instancia: card_queremos_conocerte
- **Descripción:** Click en el card Queremos Conocerte en la sección Cachimbo.

![card_queremos_conocerte](../assets/card_queremos_conocerte.png)

**Data Layer (Payload):**
```yaml
{
  "event"       : "ui_interaction",                # Nombre fijo del evento
  "ui_location" : "content_body",                  # Dónde está el elemento
  "ui_element"  : "card",                          # Qué es el elemento
  "ui_action"   : "click",                         # Qué hace (open_modal, navigation, etc.)
  "ui_label"    : "credencial_virtual",            # Esto debe enviar el texto principal del elemento
  "ui_hierarchy": "inicio > cachimbo",             # Identificador semantico de la seccion donde se ubica.
  "link_url"    : "{{url_destino}}"                 # Si te dirige hacia algun otro lugar, abre algun modal o cambia de vista o pagina web.
}
```

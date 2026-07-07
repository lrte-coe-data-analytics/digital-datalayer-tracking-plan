# Guía Visual: card_atencion_campus
**Payload General:** [../05-ayuda/card_atencion_campus.yaml](../05-ayuda/card_atencion_campus.yaml)

---
## Instancia: card_atencion_campus
- **Descripción:** Click en el card de Atención en Campus en la sección Ayuda.

![card_atencion_campus](../assets/card_atencion_campus.png)

**Data Layer (Payload):**
```yaml
{
  "event"       : "ui_interaction",       # Nombre fijo del evento
  "ui_location" : "content_body",         # Dónde está el elemento
  "ui_element"  : "card",                 # Qué es el elemento
  "ui_action"   : "click",                # Qué hace (open_modal, navigation, etc.)
  "ui_label"    : "atencion_en_campus",   # Esto debe enviar el texto principal del elemento
  "ui_hierarchy": "ayuda",                # Identificador semantico de la seccion donde se ubica.
  "link_url"    : "{{url_destino}}"        # Si te dirige hacia algun otro lugar, abre algun modal o cambia de vista o pagina web.
}
```

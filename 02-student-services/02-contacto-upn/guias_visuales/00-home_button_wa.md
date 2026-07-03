# Guía Visual: button_wa
**Payload General:** [../00-home/button_wa.yaml](../00-home/button_wa.yaml)

---
## Instancia: button_wa
- **Descripción:** Click en el botón flotante o enlace de WhatsApp. Mide la intención de contacto directo.

![button_wa](../assets/button_wa.png)

**Data Layer (Payload):**
```yaml
{
  "event"       : "ui_interaction",     # Nombre fijo del evento
  "ui_location" : "content_body",       # Dónde está el elemento
  "ui_element"  : "button",             # Qué es el elemento
  "ui_action": "filter_apply",              # Qué hace (open_modal, navigation, etc.)
  "ui_label"    : "wa_working_adult",   # Identificador único o texto del elemento
  "ui_hierarchy": "home",               # Identificador semantico de la seccion donde se ubica.
  "link_url"    : "{{url_destino}}"
# Si te dirige hacia algun otro lugar, abre algun modal o cambia de vista o pagina web.}
```

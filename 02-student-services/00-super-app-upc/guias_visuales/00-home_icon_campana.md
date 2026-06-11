# Guía Visual: icon_campana
**Payload General:** [../00-home/icon_campana.yaml](../00-home/icon_campana.yaml)

---
## Instancia: icon_campana
- **Descripción:** Cuando el usuario hace click en la campana de notificaciones.

![icon_campana](../assets/icon_campana.png)

**Data Layer (Payload):**
```yaml
{
  "event"       : "ui_interaction",   # Nombre fijo del evento
  "ui_location" : "header",           # Dónde está el elemento
  "ui_element"  : "icon",             # Qué es el elemento
  "ui_action"   : "click",            # Qué hace (open_modal, navigation, etc.)
  "ui_label"    : "notificaciones",   # Esto debe enviar el texto principal del elemento.
  "ui_hierarchy": "inicio",           # Identificador semantico de la seccion donde se ubica.
  "link_url"    : "{{url_desino}}"    # Si te dirige hacia algun otro lugar, abre algun modal o cambia de vista o pagina web.
}
```

# Guía Visual: card_biblioteca_virtual
**Payload General:** [../01-home/00-mis-servicios/card_biblioteca_virtual.yaml](../01-home/00-mis-servicios/card_biblioteca_virtual.yaml)

---
## Instancia: card_biblioteca_virtual
- **Descripción:** Click en el card Biblioteca Virtual en la sección Mis servicios del inicio.

![card_biblioteca_virtual](../assets/card_biblioteca_virtual.png)

**Data Layer (Payload):**
```yaml
{
  "event"       : "ui_interaction",           # Nombre fijo del evento
  "ui_location" : "content_body",             # Dónde está el elemento
  "ui_element"  : "card",                     # Qué es el elemento
  "ui_action"   : "click",                    # Qué hace (open_modal, navigation, etc.)
  "ui_label"    : "biblioteca_virtual",       # Esto debe enviar el texto principal del elemento
  "ui_hierarchy": "inicio > mis_servicios",   # Identificador semantico de la seccion donde se ubica.
  "link_url"    : "{{url_destino}}"            # Si te dirige hacia algun otro lugar, abre algun modal o cambia de vista o pagina web.
}
```

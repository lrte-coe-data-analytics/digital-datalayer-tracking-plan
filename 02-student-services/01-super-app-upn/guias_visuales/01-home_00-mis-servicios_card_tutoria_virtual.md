# Guía Visual: card_tutoria_virtual
**Payload General:** [../01-home/00-mis-servicios/card_tutoria_virtual.yaml](../01-home/00-mis-servicios/card_tutoria_virtual.yaml)

---
## Instancia: card_tutoria_virtual
- **Descripción:** Click en el card Tutoría Virtual en la sección Mis servicios del inicio.

![card_tutoria_virtual](../assets/card_tutoria_virtual.png)

**Data Layer (Payload):**
```yaml
{
  "event"       : "ui_interaction",           # Nombre fijo del evento
  "ui_location" : "content_body",             # Dónde está el elemento
  "ui_element"  : "card",                     # Qué es el elemento
  "ui_action"   : "click",                    # Qué hace (open_modal, navigation, etc.)
  "ui_label"    : "tutoria_virtual",          # Esto debe enviar el texto principal del elemento
  "ui_hierarchy": "inicio > mis_servicios",   # Identificador semantico de la seccion donde se ubica.
  "link_url"    : "{{url_destino}}"            # Si te dirige hacia algun otro lugar, abre algun modal o cambia de vista o pagina web.
}
```

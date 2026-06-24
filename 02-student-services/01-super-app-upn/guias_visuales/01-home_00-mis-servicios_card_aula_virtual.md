# Guía Visual: card_aula_virtual
**Payload General:** [../01-home/00-mis-servicios/card_aula_virtual.yaml](../01-home/00-mis-servicios/card_aula_virtual.yaml)

---
## Instancia: card_aula_virtual
- **Descripción:** Click en el card Aula Virtual en la sección Mis servicios del inicio.

![card_aula_virtual](../assets/card_aula_virtual.png)

**Data Layer (Payload):**
```yaml
{
  "event"       : "ui_interaction",           # Nombre fijo del evento
  "ui_location" : "content_body",             # Dónde está el elemento
  "ui_element"  : "card",                     # Qué es el elemento
  "ui_action"   : "click",                    # Qué hace (open_modal, navigation, etc.)
  "ui_label"    : "aula_virtual",             # Esto debe enviar el texto principal del elemento
  "ui_hierarchy": "inicio > mis_servicios",   # Identificador semantico de la seccion donde se ubica.
  "link_url"    : "{{url_desino}}"            # Si te dirige hacia algun otro lugar, abre algun modal o cambia de vista o pagina web.
}
```

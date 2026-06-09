# Guía Visual: card_credencial_virtual
**Payload General:** [../03-perfil/card_credencial_virtual.yaml](../03-perfil/card_credencial_virtual.yaml)

---
## Instancia: card_credencial_virtual
- **Descripción:** Ingreso a visualización de la credencial del estudiante.

![card_credencial_virtual](../assets/card_credencial_virtual.png)

**Data Layer (Payload):**
```yaml
{
  "event"       : "ui_interaction",       # Nombre fijo del evento
  "ui_location" : "content_body",         # Dónde está el elemento
  "ui_element"  : "card",                 # Qué es el elemento
  "ui_action"   : "click",                # Qué hace (open_modal, navigation, etc.)
  "ui_label"    : "credencial_virtual",   # Esto debe enviar el texto principal del elemento
  "ui_hierarchy": "perfil",               # Identificador semantico de la seccion donde se ubica.
  "link_url"    : "{{url_desino}}"        # Si te dirige hacia algun otro lugar, abre algun modal o cambia de vista o pagina web.
}
```

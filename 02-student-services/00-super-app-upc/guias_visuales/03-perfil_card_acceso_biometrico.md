# Guía Visual: card_acceso_biometrico
**Payload General:** [../03-perfil/card_acceso_biometrico.yaml](../03-perfil/card_acceso_biometrico.yaml)

---
## Instancia: card_acceso_biometrico
- **Descripción:** Evento capturado al momento de hacer click en el card "Acceso biometrico".

![card_acceso_biometrico](../assets/card_acceso_biometrico.png)

**Data Layer (Payload):**
```yaml
{
  "event"       : "ui_interaction",      # Nombre fijo del evento
  "ui_location" : "content_body",        # Dónde está el elemento
  "ui_element"  : "card",                # Qué es el elemento
  "ui_action"   : "click",               # Qué hace (open_modal, navigation, etc.)
  "ui_label"    : "acceso_biometrico",   # Esto debe enviar el texto principal del elemento
  "ui_hierarchy": "perfil",              # Identificador semantico de la seccion donde se ubica.
  "link_url"    : "{{url_desino}}"       # Si te dirige hacia algun otro lugar, abre algun modal o cambia de vista o pagina web.
}
```

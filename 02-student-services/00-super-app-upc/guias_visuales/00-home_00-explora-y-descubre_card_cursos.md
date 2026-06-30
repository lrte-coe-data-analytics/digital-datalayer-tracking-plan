# Guía Visual: card_cursos
**Payload General:** [../00-home/00-explora-y-descubre/card_cursos.yaml](../00-home/00-explora-y-descubre/card_cursos.yaml)

---
## Instancia: card_cursos
- **Descripción:** Click en el card Cursos en la sección Explora y descubre.

![card_cursos](../assets/card_cursos.png)

**Data Layer (Payload):**
```yaml
{
  "event"       : "ui_interaction",                # Nombre fijo del evento
  "ui_location" : "content_body",                  # Dónde está el elemento
  "ui_element"  : "card",                          # Qué es el elemento
  "ui_action"   : "click",                         # Qué hace (open_modal, navigation, etc.)
  "ui_label"    : "card_cursos",                   # Esto debe enviar el texto principal del card
  "ui_hierarchy": "inicio > explora_y_descubre",   # Identificador semantico de la seccion donde se ubica.
  "link_url"    : "{{url_desino}}"                 # Si te dirige hacia algun otro lugar, abre algun modal o cambia de vista o pagina web.
}
```

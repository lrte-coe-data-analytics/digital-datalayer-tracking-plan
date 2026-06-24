# Guía Visual: widget_cursos
**Payload General:** [../00-home/03-dashboard/widget_cursos.yaml](../00-home/03-dashboard/widget_cursos.yaml)

---
## Instancia: widget_cursos
- **Descripción:** Click en el widget Cursos en la sección Dashboard.

![widget_cursos](../assets/dashboard_card_cursos.png)

**Data Layer (Payload):**
```yaml
{
  "event"       : "ui_interaction",                # Nombre fijo del evento
  "ui_location" : "content_body",                  # Dónde está el elemento
  "ui_element"  : "widget",                          # Qué es el elemento
  "ui_action"   : "click",                         # Qué hace (open_modal, navigation, etc.)
  "ui_label"    : "widget_cursos",                   # Esto debe enviar el texto principal del card
  "ui_hierarchy": "inicio > dashboard",   # Identificador semantico de la seccion donde se ubica.
  "link_url"    : "{{url_desino}}"                 # Si te dirige hacia algun otro lugar, abre algun modal o cambia de vista o pagina web.
}
```

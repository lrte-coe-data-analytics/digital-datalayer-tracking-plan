# Guía Visual: card_curso_historico
**Payload General:** [../06-academico/card_curso_historico.yaml](../06-academico/card_curso_historico.yaml)

---
## Instancia: card_curso_historico
- **Descripción:** Este evento se activa al interactuar con el elemento correspondiente.

![card_curso_historico](../assets/academico_nueva_seccion.png)

**Data Layer (Payload):**
```yaml
{
  "event"       : "ui_interaction",         # Nombre fijo del evento
  "ui_location" : "content_body",           # Dónde está el elemento
  "ui_element"  : "card",                   # Qué es el elemento
  "ui_action"   : "click",                  # Qué hace (open_modal, navigation, etc.)
  "ui_label"    : "curso_historico",        # Esto debe enviar el texto principal del elemento
  "ui_hierarchy": "academico",              # Identificador semantico de la seccion donde se ubica.
  "link_url"    : "{{url_destino}}"          # Si te dirige hacia algun otro lugar, abre algun modal o cambia de vista o pagina web.
}
```

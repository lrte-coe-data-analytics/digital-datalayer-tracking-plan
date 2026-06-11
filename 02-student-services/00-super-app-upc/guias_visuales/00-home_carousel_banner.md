# Guía Visual: carousel_banner
**Payload General:** [../00-home/carousel_banner.yaml](../00-home/carousel_banner.yaml)

---
## Instancia: carousel_banner
- **Descripción:** Captura la interacción del usuario con el `carousel` de la pantalla de inicio.

![carousel_banner](../assets/carousel_banner.png)

**Data Layer (Payload):**
```yaml
{
  "event"       : "ui_interaction",   # Nombre fijo del evento
  "ui_location" : "content_body",     # Dónde está el elemento
  "ui_element"  : "carousel",         # Qué es el elemento
  "ui_action"   : "click",            # Qué hace (open_modal, navigation, etc.)
  "ui_label"    : "{{nombre}}",       # Identificador único o texto del elemento
  "ui_hierarchy": "inicio",           # Identificador semantico de la seccion donde se ubica.
  "link_url"    : "{{url_destino}}"   # Si te dirige hacia algun otro lugar, abre algun modal o cambia de vista o pagina web.
}
```

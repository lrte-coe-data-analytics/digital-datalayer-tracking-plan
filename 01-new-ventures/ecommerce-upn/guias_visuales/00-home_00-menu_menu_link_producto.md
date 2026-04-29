# Guía Visual: menu_link_producto
**Payload General:** [../00-home/00-menu/menu_link_producto.yaml](../00-home/00-menu/menu_link_producto.yaml)

---
## Instancia: menu_link_producto
- **Descripción:** Cuando el usuario hace click en algun producto para ir a su seccion respectiva.

![menu_link_producto](../assets/menu_link_producto.png)

**Data Layer (Payload):**
```yaml
{
  "event"       : "ui_interaction",    # Nombre fijo del evento
  "ui_location" : "navigation_menu",   # Dónde está el elemento
  "ui_element"  : "text_link",         # Qué es el elemento
  "ui_action"   : "click",             # Qué hace (open_modal, navigation, etc.)
  "ui_label"    : "{{nombre}}",        # Identificador único o texto del elemento
  "ui_hierarchy": "{{home > menu}}",   # Identificador semantico de la seccion donde se ubica.
  "link_url"    : "{{url_destino}}"    # Si te dirige hacia algun otro lugar, abre algun modal o cambia de vista o pagina web.
}
```

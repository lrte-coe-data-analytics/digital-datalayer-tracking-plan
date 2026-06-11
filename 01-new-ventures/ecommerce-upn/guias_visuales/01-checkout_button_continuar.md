# Guía Visual: button_continuar
**Payload General:** [../01-checkout/button_continuar.yaml](../01-checkout/button_continuar.yaml)

---
## Instancia: button_continuar
- **Descripción:** Una vez compleado los datos (validados) el usuario da click al boton siguiente (step 2).

![button_continuar](../assets/button_continuar.png)

**Data Layer (Payload):**
```yaml
{
  "event"       : "ui_interaction",   # Nombre fijo del evento
  "ui_location" : "content_body",     # Dónde está el elemento
  "ui_element"  : "button",           # Qué es el elemento
  "ui_action"   : "click",            # Qué hace (open_modal, navigation, etc.)
  "ui_label"    : "continuar",        # Identificador único o texto del elemento
  "ui_hierarchy": "checkout",         # Identificador semantico de la seccion donde se ubica.
  "link_url"    : "{{url_destino}}"   # Si te dirige hacia algun otro lugar, abre algun modal o cambia de vista o pagina web.
}
```

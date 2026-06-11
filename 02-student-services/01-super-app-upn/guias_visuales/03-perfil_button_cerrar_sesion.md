# Guía Visual: button_cerrar_sesion
**Payload General:** [../03-perfil/button_cerrar_sesion.yaml](../03-perfil/button_cerrar_sesion.yaml)

---
## Instancia: button_cerrar_sesion
- **Descripción:** *(Corregido typo: carpeta `03-perfil`)* Trackeo de cierre de sesión. Importante para limpiar el estado del usuario en el DataLayer.

![button_cerrar_sesion](../assets/button_cerrar_sesion.png)

**Data Layer (Payload):**
```yaml
{
  "event"       : "ui_interaction",   # Nombre fijo del evento
  "ui_location" : "content_body",     # Dónde está el elemento
  "ui_element"  : "button",           # Qué es el elemento
  "ui_action"   : "click",            # Qué hace (open_modal, navigation, etc.)
  "ui_label"    : "cerrar_sesion",    # Identificador único o texto del elemento
  "ui_hierarchy": "perfil",           # Identificador semantico de la seccion donde se ubica.
  "link_url"    : "{{url_destino}}"   # Si te dirige hacia algun otro lugar, abre algun modal o cambia de vista o pagina web.
}
```

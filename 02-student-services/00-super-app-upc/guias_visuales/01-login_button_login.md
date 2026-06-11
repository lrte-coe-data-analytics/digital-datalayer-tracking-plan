# Guía Visual: button_login
**Payload General:** [../01-login/button_login.yaml](../01-login/button_login.yaml)

---
## Instancia: button_login
- **Descripción:** Evento que captura la interacción específica del clic en el botón "Ingresar". Sirve para medir la intención de acceso antes de la validación.

![button_login](../assets/button_login.png)

**Data Layer (Payload):**
```yaml
{
  "event"       : "ui_interaction",   # Nombre fijo del evento
  "ui_location" : "content_body",     # Dónde está el elemento
  "ui_element"  : "button",           # Qué es el elemento
  "ui_action"   : "click",            # Qué hace (open_modal, navigation, etc.)
  "ui_label"    : "iniciar_sesion",   # Identificador único o texto del elemento
  "ui_hierarchy": "login",            # Identificador semantico de la seccion donde se ubica.
  "link_url"    : "{{url_destino}}"   # Si te dirige hacia algun otro lugar, abre algun modal o cambia de vista o pagina web.
}
```

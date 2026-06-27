# Guía Visual: error (03-error)
**Payload General:** [../03-error/error.yaml](../03-error/error.yaml)

---
## Instancia: entendido
- **Descripción:** Cuando se despliega una ventana modal de error durante el flujo de convalidación y el usuario hace clic en el botón de aceptar/entendido.

![entendido](../assets/03-error_error.png)

**Data Layer (Payload):**
```yaml
{
  "event"            : "ui_interaction",                       # Nombre fijo del evento
  "ui_location"      : "modal_window",                         # Dónde está el elemento
  "ui_element"       : "modal_window",                         # Qué es el elemento
  "ui_action"        : "click",                                # Qué hace (open_modal, navigation, etc.)
  "ui_label"         : "entendido",                            # Identificador único o texto del elemento. (En este caso es "Entendido")
  "ui_hierarchy"     : "{{seccion_actual}}",                   # Identificador semantico de la seccion donde se ubica. 
  "path_location"    : "{{path_actual_del_evento}}",           # Path de donde se mide el evento.
  "data_collected"   : "{{data_recopilada}}",                  # Se recomienda recopilar el mensaje de error, para reportes posteriores.
  "user_code"        : "{{id_usuario}}"                        # Codigo de usuario (prospecto, código de Hubspot), para identificación de un usuario.
}
```

# Guía Visual: Click/validar-celular-reenviar-otp
**Payload General:** [click_validar_celular_reenviar_otp.yaml](../02-perfil/click_validar_celular_reenviar_otp.yaml)

---
## Instancia: Click/validar-celular-reenviar-otp
- **Descripción:** Este evento mide el clic a validar el SMS que valida el número de Celular, al cambio de Perfil

![click_validar_celular_reenviar_otp](../assets/click_validar_celular_reenviar_otp.png)

**Data Layer (Payload):**
```yaml
{
  "event"           : "ui_interaction",                # Nombre fijo del evento
  "ui_location"     : "content_body",                      # Dónde está el elemento (content_body)
  "ui_element"      : "button",                       # Qué es el elemento (button)
  "ui_action"       : "click",                      # Qué hace (click)
  "ui_label"        : "click_validar_celular_reenviar_otp",                      # Identificador único del elemento (click_validar_celular_reenviar_otp)
  "ui_hierarchy"    : "portal_upn > perfil",                     # Identificador semántico de la sección
  "link_url"        : null,                        # Si dirige a otro sitio o abre un modal (URL destino o null)
  "path_location"   : "{{path_actual_del_evento}}",    # URL y/o path de donde se da el evento
  "data_collected"  : null                            # Datos recopilados (mensajes de error, etc.)
}
```

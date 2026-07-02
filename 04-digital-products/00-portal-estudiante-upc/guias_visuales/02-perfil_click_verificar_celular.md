# Guía Visual: Click/verificar-celular
**Payload General:** [click_verificar_celular.yaml](../02-perfil/click_verificar_celular.yaml)

---
## Instancia: Click/verificar-celular
- **Descripción:** Este evento mide el clic a la sección de verificar el número de celular, para hacer el cambio o editar el perfil. 

![click_verificar_celular](../assets/click_verificar_celular.png)

**Data Layer (Payload):**
```yaml
{
  "event"           : "ui_interaction",                # Nombre fijo del evento
  "ui_location"     : "content_body",                      # Dónde está el elemento (content_body)
  "ui_element"      : "button",                       # Qué es el elemento (button)
  "ui_action"       : "click",                      # Qué hace (click)
  "ui_label"        : "click_verificar_celular",                      # Identificador único del elemento (click_verificar_celular)
  "ui_hierarchy"    : "portal_upc > perfil",                     # Identificador semántico de la sección
  "link_url"        : null,                        # Si dirige a otro sitio o abre un modal (URL destino o null)
  "path_location"   : "{{path_actual_del_evento}}",    # URL y/o path de donde se da el evento
  "data_collected"  : null                            # Datos recopilados (mensajes de error, etc.)
}
```

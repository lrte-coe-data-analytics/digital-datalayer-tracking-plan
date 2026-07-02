# Guía Visual: Click/Editar-MiPerfil
**Payload General:** [click_editar_miperfil.yaml](../02-perfil/click_editar_miperfil.yaml)

---
## Instancia: Click/Editar-MiPerfil
- **Descripción:** Este evento mide el clic al icono de Editar mi Perfil, dentro de Mi Perfil. 

![click_editar_miperfil](../assets/click_editar_miperfil.png)

**Data Layer (Payload):**
```yaml
{
  "event"           : "ui_interaction",                # Nombre fijo del evento
  "ui_location"     : "content_body",                      # Dónde está el elemento (content_body)
  "ui_element"      : "button",                       # Qué es el elemento (button)
  "ui_action"       : "click",                      # Qué hace (click)
  "ui_label"        : "click_editar_miperfil",                      # Identificador único del elemento (click_editar_miperfil)
  "ui_hierarchy"    : "portal_cib > perfil",                     # Identificador semántico de la sección
  "link_url"        : null,                        # Si dirige a otro sitio o abre un modal (URL destino o null)
  "path_location"   : "{{path_actual_del_evento}}",    # URL y/o path de donde se da el evento
  "data_collected"  : null                            # Datos recopilados (mensajes de error, etc.)
}
```

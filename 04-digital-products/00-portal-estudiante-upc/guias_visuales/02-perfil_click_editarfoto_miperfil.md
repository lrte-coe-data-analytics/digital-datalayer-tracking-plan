# Guía Visual: Click/EditarFoto-MiPerfil
**Payload General:** [click_editarfoto_miperfil.yaml](../02-perfil/click_editarfoto_miperfil.yaml)

---
## Instancia: Click/EditarFoto-MiPerfil
- **Descripción:** Este evento mide el clic a editar la foto de perfil del alumno.

![click_editarfoto_miperfil](../assets/click_editarfoto_miperfil.png)

**Data Layer (Payload):**
```yaml
{
  "event"           : "ui_interaction",                # Nombre fijo del evento
  "ui_location"     : "content_body",                      # Dónde está el elemento (content_body)
  "ui_element"      : "button",                       # Qué es el elemento (button)
  "ui_action"       : "click",                      # Qué hace (click)
  "ui_label"        : "click_editarfoto_miperfil",                      # Identificador único del elemento (click_editarfoto_miperfil)
  "ui_hierarchy"    : "portal > perfil",                     # Identificador semántico de la sección
  "link_url"        : null,                        # Si dirige a otro sitio o abre un modal (URL destino o null)
  "path_location"   : "{{path_actual_del_evento}}",    # URL y/o path de donde se da el evento
  "data_collected"  : null,                            # Datos recopilados (mensajes de error, etc.)
  "csat_value"      : null                             # Solo para CSAT (0 a 5)
}
```

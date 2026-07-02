# Guía Visual: titulacion_subirDocumentos
**Payload General:** [titulacion_subirdocumentos.yaml](../07-tramites/titulacion_subirdocumentos.yaml)

---
## Instancia: titulacion_subirDocumentos
- **Descripción:** Este evento mide el clic en subida de documentos del grado de Titulación dentro de los tramites que se va a realizar.

![titulacion_subirdocumentos](../assets/titulacion_subirdocumentos.png)

**Data Layer (Payload):**
```yaml
{
  "event"           : "ui_interaction",                # Nombre fijo del evento
  "ui_location"     : "content_body",                      # Dónde está el elemento (content_body)
  "ui_element"      : "button",                       # Qué es el elemento (button)
  "ui_action"       : "click",                      # Qué hace (click)
  "ui_label"        : "titulacion_subirdocumentos",                      # Identificador único del elemento (titulacion_subirdocumentos)
  "ui_hierarchy"    : "portal_upn > tramites",                     # Identificador semántico de la sección
  "link_url"        : null,                        # Si dirige a otro sitio o abre un modal (URL destino o null)
  "path_location"   : "{{path_actual_del_evento}}",    # URL y/o path de donde se da el evento
  "data_collected"  : null                            # Datos recopilados (mensajes de error, etc.)
}
```

# Guía Visual: titulacion_preferenciasDiploma
**Payload General:** [titulacion_preferenciasdiploma.yaml](../07-tramites/titulacion_preferenciasdiploma.yaml)

---
## Instancia: titulacion_preferenciasDiploma
- **Descripción:** Este evento mide el clic de la Preferencias del grado de Titulación dentro de los tramites que se va a realizar.

![titulacion_preferenciasdiploma](../assets/titulacion_preferenciasdiploma.png)

**Data Layer (Payload):**
```yaml
{
  "event"           : "ui_interaction",                # Nombre fijo del evento
  "ui_location"     : "content_body",                      # Dónde está el elemento (content_body)
  "ui_element"      : "button",                       # Qué es el elemento (button)
  "ui_action"       : "click",                      # Qué hace (click)
  "ui_label"        : "titulacion_preferenciasdiploma",                      # Identificador único del elemento (titulacion_preferenciasdiploma)
  "ui_hierarchy"    : "portal_upn > tramites",                     # Identificador semántico de la sección
  "link_url"        : null,                        # Si dirige a otro sitio o abre un modal (URL destino o null)
  "path_location"   : "{{path_actual_del_evento}}",    # URL y/o path de donde se da el evento
  "data_collected"  : null                            # Datos recopilados (mensajes de error, etc.)
}
```

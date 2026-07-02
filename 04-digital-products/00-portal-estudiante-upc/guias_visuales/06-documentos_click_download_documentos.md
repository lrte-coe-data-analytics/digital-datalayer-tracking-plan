# Guía Visual: Click/download-Documentos
**Payload General:** [click_download_documentos.yaml](../06-documentos/click_download_documentos.yaml)

---
## Instancia: Click/download-Documentos
- **Descripción:** Este evento mide el clic en el icono de Descarga de un documento. 

![click_download_documentos](../assets/click_download_documentos.png)

**Data Layer (Payload):**
```yaml
{
  "event"           : "ui_interaction",                # Nombre fijo del evento
  "ui_location"     : "content_body",                      # Dónde está el elemento (content_body)
  "ui_element"      : "button",                       # Qué es el elemento (button)
  "ui_action"       : "click",                      # Qué hace (click)
  "ui_label"        : "click_download_documentos",                      # Identificador único del elemento (click_download_documentos)
  "ui_hierarchy"    : "portal_upc > documentos",                     # Identificador semántico de la sección
  "link_url"        : null,                        # Si dirige a otro sitio o abre un modal (URL destino o null)
  "path_location"   : "{{path_actual_del_evento}}",    # URL y/o path de donde se da el evento
  "data_collected"  : null                            # Datos recopilados (mensajes de error, etc.)
}
```

# Guía Visual: Error (01-nivel1)
**Payload General:** [../01-nivel1/error.yaml](../01-nivel1/error.yaml)

---
## Instancia: seguimiento_error
- **Descripción:** Este evento mide cuando hay un error al enviar las respuestas de las Preguntas de Autoconocimiento.

![seguimiento_error](../assets/seguimiento_error.png)

**Data Layer (Payload):**
```yaml
{
  "event"              : "ui_interaction",                          
  "ui_location"        : "navigation",                               
  "ui_element"         : "modal_window",                             
  "ui_action"          : "impression",                               
  "ui_label"           : "error",                                 # Identificador único o texto del elemento. (En este caso es "Error").
  "ui_hierarchy"       : "{{Sección donde se da el error}}",      # Identificador semántico de la sección donde se ubica.
  "path_location"      : "{{path_actual_del_evento}}",            # Path de donde se mide el evento.
  "data_collected"     : "{{data_recopilada}}",                   # Error que se muestra en el mensaje.
}
```


# Guía Visual: subir-record-notas (01-convalidacion)
**Payload General:** [../01-convalidacion/subir-record-notas.yaml](../01-convalidacion/subir-record-notas.yaml)

---
## Instancia: subir_record_notas
- **Descripción:** Cuando el usuario interactúa con el botón o área de carga de documentos para subir su récord de notas.

![subir_record_notas](../assets/01-convalidacion_subir-record-notas.png)

**Data Layer (Payload):**
```yaml
{
  "event"            : "ui_interaction",                    # Nombre fijo del evento
  "ui_location"      : "form_container",                    # Dónde está el elemento
  "ui_element"       : "button",                            # Qué es el elemento
  "ui_action"        : "click",                             # Qué hace (open_modal, navigation, etc.)
  "ui_label"         : "subir_record_notas",                # Identificador único o texto del elemento. (En este caso es "subir record de notas")
  "ui_hierarchy"     : "home > convalidacion",              # Identificador semantico de la seccion donde se ubica. En este caso convalidación.
  "path_location"    : "/convalidacion",                    # Path de donde se mide el evento.
}
```

# Guía Visual: subir-record-notas (02-documentos)
**Payload General:** [../02-documentos/subir-record-notas.yaml](../02-documentos/subir-record-notas.yaml)

---
## Instancia: subir_record_notas
- **Descripción:** Cuando el usuario interactúa con el botón para subir su récord de notas.

![subir_record_notas](../assets/02-documentos_subir-record-notas.png)

**Data Layer (Payload):**
```yaml
{
  "event"            : "ui_interaction",                    # Nombre fijo del evento
  "ui_location"      : "form_container",                    # Dónde está el elemento
  "ui_element"       : "button",                            # Qué es el elemento
  "ui_action"        : "click",                             # Qué hace (open_modal, navigation, etc.)
  "ui_label"         : "subir_record_notas",                # Identificador único o texto del elemento. (En este caso es "subir record de notas")
  "ui_hierarchy"     : "home > documentos",                 # Identificador semantico de la seccion donde se ubica. En este caso documentos.
  "path_location"    : "/documentos",                       # Path de donde se mide el evento.
}
```

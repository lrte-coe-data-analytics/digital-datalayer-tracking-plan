# Guía Visual: Preguntas (02-test-autoconocimiento)
**Payload General:** [../02-test-autoconocimiento/preguntas.yaml](../02-test-autoconocimiento/preguntas.yaml)

---
## Instancia: siguiente
- **Descripción:** Clic al botón "Siguiente", en el Test de Autoconocimiento. Para todas las 23 preguntas.

### Valores de Jerarquía y URL por Pregunta

| Pregunta | `ui_hierarchy` | `path_location` |
|---|---|---|
| 1 | `home > autoconocimiento > pregunta_01` | `/conocete/encuesta?pregunta=1` |
| 2 | `home > autoconocimiento > pregunta_02` | `/conocete/encuesta?pregunta=2` |
| ... | ... | ... |
| 23 | `home > autoconocimiento > pregunta_23` | `/conocete/encuesta?pregunta=23` |

---

![siguiente](../assets/seguimos.png)

**Data Layer (Payload):**
```yaml
{
  "event"              : "ui_interaction",                           
  "ui_location"        : "content_body",                             
  "ui_element"         : "button",                                   
  "ui_action"          : "submit",                                   
  "ui_label"           : "{{numero_de_pregunta}}",                    # Identificador único. Número de pregunta que se responde con zero-padding (ej. 01, 02 ... 23).
  "ui_hierarchy"       : "home > autoconocimiento > pregunta_{n_pregunta}",  # Identificador semántico de la sección. n_pregunta va con zero-padding (ej. pregunta_01).
  "path_location"      : "/conocete/encuesta?pregunta={{n_pregunta}}", # Path de donde se mide el evento. En este caso son 23 preguntas.
  "data_collected"     : "{{data_recopilada}}"                        # Se guarda lo que llena el usuario (pregunta y respuesta).
}
```

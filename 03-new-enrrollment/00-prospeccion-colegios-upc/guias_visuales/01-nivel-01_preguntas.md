# Guía Visual: Preguntas (01-nivel-01)
**Payload General:** [../01-nivel-01/preguntas.yaml](../01-nivel-01/preguntas.yaml)

---
## Instancia: siguiente
- **Descripción:** Este evento mide cuando se envían las respuestas de las Preguntas de Autoconocimiento.

### Valores de Jerarquía y URL por Pregunta

| Pregunta | `ui_hierarchy` | `path_location` |
|---|---|---|
| 1 | `home > nivel_01 > pregunta_01` | `/conocete/encuesta?pregunta=1` |
| 2 | `home > nivel_01 > pregunta_02` | `/conocete/encuesta?pregunta=2` |
| 3 | `home > nivel_01 > pregunta_03` | `/conocete/encuesta?pregunta=3` |

---

![siguiente](../assets/siguiente.png)

**Data Layer (Payload):**
```yaml
{
  "event"              : "ui_interaction",                           
  "ui_location"        : "content_body",                             
  "ui_element"         : "button",                                  
  "ui_action"          : "submit",                                   
  "ui_label"           : "{{nombre_del_boton}}",                 # Identificador único o texto del botón presionado (ej: "Vamos por más" en la captura).
  "ui_hierarchy"       : "home > nivel_01 > pregunta_{n_pregunta}", # Identificador semántico de la sección. n_pregunta va con zero-padding (ej. pregunta_01).
  "path_location"      : "/conocete/encuesta?pregunta={{n_pregunta}}", # Path de donde se mide el evento (ej. pregunta=1).
  "data_collected"     : "{{data_recopilada}}"                    # Se guarda la pregunta y respuesta seleccionada por el usuario.
}
```

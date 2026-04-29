# Guía Visual: Preguntas (02-test-autoconocimiento)
**Payload General:** [../02-test-autoconocimiento/preguntas.yaml](../02-test-autoconocimiento/preguntas.yaml)

---
## Instancia: seguimos
- **Descripción:** Clic al botón "Seguimos", en el Test de Autoconocimiento. Para todas las 100 preguntas.

![seguimos](../assets/seguimos.png)

**Data Layer (Payload):**
```yaml
{
  "event"              : "ui_interaction",                           
  "ui_location"        : "content_body",                             
  "ui_element"         : "button",                                   
  "ui_action"          : "submit",                                   
  "ui_label"           : "{{numero_de_pregunta}}",                    # Identificador único o texto del elemento, en este caso debe ir el número de la pregunta que se responde. Ejemplo 1,2,3, etc.
  "ui_hierarchy"       : "home > autoconocimiento > pregunta[1-98]",  # Identificador semántico de la sección donde se ubica. (En este caso es autoconocimiento > acompañado por el número de pregunta que se responde).
  "path_location"      : "/conocete/encuesta?pregunta=[1-98]",        # Path de donde se mide el evento.En este caso se mide por el número de preguntas, para este caso son 98 preguntas.
  "data_collected"     : "{{data_recopilada}}",                       # Se guarda lo que llena el usuario.
}
```


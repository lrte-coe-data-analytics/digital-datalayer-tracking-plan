# Guía Visual: Valoracion Carreras (02-test-autoconocimiento)
**Payload General:** [../02-test-autoconocimiento/valoracion_carreras.yaml](../02-test-autoconocimiento/valoracion_carreras.yaml)

---
## Instancia: no mucho
- **Descripción:** Clic al botón "No" o "Si" para las carreras que la IA propone.

![no_mucho](../assets/no_mucho.png)

**Data Layer (Payload):**
```yaml
{
  "event"              : "ui_interaction",                          
  "ui_location"        : "content_body",                             
  "ui_element"         : "button",                                   
  "ui_action"          : "click",                                    
  "ui_label"           : "{{si|no}}",                                      # Identificador único o texto del elemento, depende de la pregunta. (En este caso es "Sí" o "No").
  "ui_hierarchy"       : "home > autoconocimiento > valoracion_carreras",  # Identificador semántico de la sección donde se ubica. (En este caso es autoconocimiento > valoración de carreras).
  "path_location"      : "/conocete/test-vocacional/carreras",             # Path de donde se mide el evento.
  "data_collected"     : "{{data_recopilada}}",                            # Aquí debe ir la carrera que es aceptada o rechazada. (Odontología, Derecho, etc.).
}
```


# Guía Visual: Fin (01-nivel1)
**Payload General:** [../01-nivel1/fin.yaml](../01-nivel1/fin.yaml)

---
## Instancia: excelente
- **Descripción:** Clic al botón "Excelente", en las Preguntas de Autoconocimiento. Que indica la finalización del módulo.

![excelente](../assets/excelente.png)

**Data Layer (Payload):**
```yaml
{
  "event"              : "ui_interaction",                           
  "ui_location"        : "content_body",                             
  "ui_element"         : "button",                                   
  "ui_action"          : "click",                                    
  "ui_label"           : "excelente",                                # Identificador único o texto del elemento. (En este caso es "Excelente").
  "ui_hierarchy"       : "home > nivel1",                            # Identificador semántico de la sección donde se ubica. (En este caso es Nivel 1)
  "path_location"      : "/conocete/exito",                          # Path de donde se mide el evento.
}
```


# Guía Visual: Inicio (01-nivel-01)
**Payload General:** [../01-nivel-01/inicio.yaml](../01-nivel-01/inicio.yaml)

---
## Instancia: comenzar_la_aventura
- **Descripción:** Clic al botón Comenzar la Aventura, de las Preguntas de Autoconocimiento.

![comenzar_la_aventura](../assets/comenzar_la_aventura.png)

**Data Layer (Payload):**
```yaml
{
  "event"              : "ui_interaction",                           
  "ui_location"        : "content_body",                             
  "ui_element"         : "button",                                   
  "ui_action"          : "click",                                    
  "ui_label"           : "comenzar_la_aventura",                                   
  "ui_hierarchy"       : "home > nivel_01",                            
  "path_location"      : "/conocete"                   # Path de donde se mide el evento.     
}
```

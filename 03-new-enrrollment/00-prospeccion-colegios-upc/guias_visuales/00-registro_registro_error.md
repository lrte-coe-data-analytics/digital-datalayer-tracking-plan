# Guía Visual: Registro Error (00-registro)
**Payload General:** [../00-registro/registro_error.yaml](../00-registro/registro_error.yaml)

---
## Instancia: entendido_error
- **Descripción:** Este evento sale cuando "Sale Error" en el proceso de Registro.

![entendido_error](../assets/entendido_error.png)

**Data Layer (Payload):**
```yaml
{
  "event"            : "ui_interaction",                             
  "ui_location"      : "screen_view",                                
  "ui_element"       : "modal_window",                               
  "ui_action"        : "impression",                                 
  "ui_label"         : "error",                                      
  "ui_hierarchy"     : "home > registro",                            
  "path_location"    : "{{path_actual_del_evento}}",           # Path de donde se mide el evento.
  "data_collected"   : "{{data_recopilada}}",                  # Mensaje de error que se muestra en el mensaje.
}
```


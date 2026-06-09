# Guía Visual: Registro Exitoso (00-registro)
**Payload General:** [../00-registro/registro_exitoso.yaml](../00-registro/registro_exitoso.yaml)

---
## Instancia: registro_exitoso
- **Descripción:** Este evento se envía cuando se crea un Registro en la Plataforma, cuando se llena el Formulario de identificación. (Como indica la imagen)

![registro_exitoso](../assets/registro_exitoso.png)

**Data Layer (Payload):**
```yaml
{
  "event"          : "ui_interaction",                               
  "ui_location"    : "form_container",                                  
  "ui_element"     : "button",                                       
  "ui_action"      : "submit",                                       
  "ui_label"       : "registro_exitoso",                             
  "ui_hierarchy"   : "home > registro",                              
  "path_location"  : "/registro/datos-personales",            # Path de donde se mide el evento.
  "user_code"      : "{{id_usuario}}"                         # Código de usuario (alumno o prospecto, código de HubSpot)
}
```


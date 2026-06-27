# Guía Visual: paso-inicial (00-inicio)
**Payload General:** [../00-inicio/paso-inicial.yaml](../00-inicio/paso-inicial.yaml)

---
## Instancia: generar_simulacion
- **Descripción:** Cuando el usuario hace clic en el botón "Generar simulación" para iniciar el flujo de convalidación rápida.

![generar_simulacion](../assets/00-inicio_paso-inicial.png)

**Data Layer (Payload):**
```yaml
{
  "event"            : "ui_interaction",                    # Nombre fijo del evento
  "ui_location"      : "form_container",                    # Dónde está el elemento
  "ui_element"       : "button",                            # Qué es el elemento
  "ui_action"        : "click",                             # Qué hace (open_modal, navigation, etc.)
  "ui_label"         : "generar_simulacion",                # Identificador único o texto del elemento. Se usa "generar_simulacion" por su valor semántico para diferenciar este evento del botón "Continuar" general, a pesar de que el texto literal en el botón sea "Continuar". (En este caso es 'Generar simulación')
  "ui_hierarchy"     : "home",                              # Identificador semántico de la sección donde se úbica. En este caso es home.
  "path_location"    : "/",                                 # Path de donde se mide el evento.
  "data_collected"   : "{{data_recopilada}}",               # Se recomienda guardar los datos de la respuesta del Formulario como: Carrera previa, Carrera Objetivo, Si terminó o no la Carrera.
  "user_code"        : "{{id_usuario}}"                     # Código de usuario (prospecto, código de Hubspot), para identificación de un usuario.
}
```

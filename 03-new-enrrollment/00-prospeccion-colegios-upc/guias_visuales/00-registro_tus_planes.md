# Guía Visual: Tus Planes (00-registro)
**Payload General:** [../00-registro/tus_planes.yaml](../00-registro/tus_planes.yaml)

Este evento de interacción se dispara cada vez que el usuario hace clic en el botón "Continuar" para avanzar en los pasos del formulario del proceso de Registro.

### Resumen de Instancias por Paso

| Instancia (asset) | Pregunta del paso | `ui_hierarchy` | `path_location` | `data_collected` (ejemplo) |
|---|---|---|---|---|
| `enviar_solicitud_03` | ¿Qué tal vas con el tema de la universidad? | `home > registro > donde_estas_tu` | `/registro/donde-estas-tu` | "Ni idea que estudiar" |
| `enviar_solicitud_00` | ¿Qué carrera tienes en mente? | `home > registro > tus_planes` | `/registro/tus-planes/carrera` | "Diseño Gráfico\|Administración y Finanzas\|Otros" |
| `enviar_solicitud_01` | ¿Dónde quieres estudiar? | `home > registro > tus_planes` | `/registro/tus-planes/donde-estudiar` | "Lima" |
| `enviar_solicitud_02` | ¿En qué modalidad quieres estudiar? | `home > registro > tus_planes` | `/registro/tus-planes/modalidad` | "Presencial" |
| `enviar_solicitud_04` | ¿Qué universidad tienes en mente? | `home > registro > tus_planes` | `/registro/tus-planes/universidad` | "Universidad Peruana Cayetano Heredia\|Universidad del Pacífico\|Otros" |

---
## Instancia: enviar_solicitud_03 — ¿Qué tal vas con el tema de la universidad?
- **Descripción:** Este evento se envía cuando el usuario hace clic en el botón "Continuar" dentro del paso "¿Qué tal vas con el tema de la universidad?" del formulario de registro.

![enviar_solicitud_03](../assets/enviar_solicitud_03.png)

**Data Layer (Payload):**
```yaml
{
  "event"          : "ui_interaction", 
  "ui_location"    : "content_body",          
  "ui_element"     : "button",                  
  "ui_action"      : "click",                         
  "ui_label"       : "continuar",                       
  "ui_hierarchy"   : "home > registro > donde_estas_tu",                 
  "path_location"  : "/registro/donde-estas-tu",           # Path de donde se mide el evento.
  "data_collected" : "Ni idea que estudiar"                # Se envían las opciones que elige en el formulario, en este caso es "Ni idea que estudiar", como indica la imagen de ejemplo.
}
```

---
## Instancia: enviar_solicitud_00 — ¿Qué carrera tienes en mente?
- **Descripción:** Este evento se envía cuando el usuario hace clic en el botón "Continuar" dentro del paso "¿Qué carrera tienes en mente?" del formulario de registro.

![enviar_solicitud_00](../assets/enviar_solicitud_00.png)

**Data Layer (Payload):**
```yaml
{
  "event"          : "ui_interaction", 
  "ui_location"    : "content_body",          
  "ui_element"     : "button",                  
  "ui_action"      : "click",                         
  "ui_label"       : "continuar",                       
  "ui_hierarchy"   : "home > registro > tus_planes",                 
  "path_location"  : "/registro/tus-planes/carrera",                     # Path de donde se mide el evento.
  "data_collected" : "Diseño Gráfico|Administración y Finanzas|Otros"    # Se envían las opciones de las carreras que coloca en el formulario separadas con el símbolo "|" por cada opción, en este caso son esas 3 opciones "(Diseño Gráfico, Administración y Finanzas, Finanzas)" como indica la imagen de ejemplo.
}
```

---
## Instancia: enviar_solicitud_01 — ¿Dónde quieres estudiar?
- **Descripción:** Este evento se envía cuando el usuario hace clic en el botón "Continuar" dentro del paso "¿Dónde quieres estudiar?" del formulario de registro.

![enviar_solicitud_01](../assets/enviar_solicitud_01.png)

**Data Layer (Payload):**
```yaml
{
  "event"          : "ui_interaction", 
  "ui_location"    : "content_body",          
  "ui_element"     : "button",                  
  "ui_action"      : "click",                         
  "ui_label"       : "continuar",                       
  "ui_hierarchy"   : "home > registro > tus_planes",                 
  "path_location"  : "/registro/tus-planes/donde-estudiar",     # Path de donde se mide el evento.           
  "data_collected" : "Lima"                                     # Se envían las opciones que elige en el formulario, en este caso es "Lima", como indica la imagen de ejemplo.
}
```

---
## Instancia: enviar_solicitud_02 — ¿En qué modalidad quieres estudiar?
- **Descripción:** Este evento se envía cuando el usuario hace clic en el botón "Continuar" dentro del paso "¿En qué modalidad quieres estudiar?" del formulario de registro.

![enviar_solicitud_02](../assets/enviar_solicitud_02.png)

**Data Layer (Payload):**
```yaml
{
  "event"          : "ui_interaction", 
  "ui_location"    : "content_body",          
  "ui_element"     : "button",                  
  "ui_action"      : "click",                         
  "ui_label"       : "continuar",                       
  "ui_hierarchy"   : "home > registro > tus_planes",                 
  "path_location"  : "/registro/tus-planes/modalidad",   # Path de donde se mide el evento.             
  "data_collected" : "Presencial"                        # Se envían las opciones que elige en el formulario, en este caso es "Presencial", como indica la imagen de ejemplo.
}
```

---
## Instancia: enviar_solicitud_04 — ¿Qué universidad tienes en mente?
- **Descripción:** Este evento se envía cuando el usuario hace clic en el botón "Continuar" dentro del paso "¿Qué universidad tienes en mente?" del formulario de registro.

![enviar_solicitud_04](../assets/enviar_solicitud_04.png)

**Data Layer (Payload):**
```yaml
{
  "event"          : "ui_interaction", 
  "ui_location"    : "content_body",          
  "ui_element"     : "button",                  
  "ui_action"      : "click",                         
  "ui_label"       : "continuar",                       
  "ui_hierarchy"   : "home > registro > tus_planes",                 
  "path_location"  : "/registro/tus-planes/universidad",                                       # Path de donde se mide el evento (corregido).            
  "data_collected" : "Universidad Peruana Cayetano Heredia|Universidad del Pacífico|Otros"     # Se envían las opciones de las universidades que coloca en el formulario separadas con el símbolo "|" por cada opción, en este caso son esas 3 opciones como indica la imagen de ejemplo.
}
```

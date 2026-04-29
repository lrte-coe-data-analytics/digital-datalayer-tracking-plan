# Guía Visual: Tus Planes (00-registro)
**Payload General:** [../00-registro/tus_planes.yaml](../00-registro/tus_planes.yaml)

---
## Instancia: enviar_solicitud
- **Descripción:** Este evento sale cuando se envian los datos principales de la encuesta dentro del proceso de Registro.

#### Tus Planes - ¿Que tal vas con el tema de la universidad?
- **Descripción:** Este evento se envía cuando el usuario hace clic en el boton "Continuar" dentro del paso "¿Que tal vas con el tema de la universidad?" del formulario de registro.

![enviar_solicitud](../assets/enviar_solicitud_03.png)

**Data Layer (Payload):**
```yaml
{
  "event"          : "ui_interaction", 
  "ui_location"    : "content_body",          
  "ui_element"     : "button",                  
  "ui_action"      : "click",                         
  "ui_label"       : "continuar",                       
  "ui_hierarchy"   : "home > registro > donde estas",                 
  "path_location"  : "/registro/donde-estas-tu",           # Path de donde se mide el evento.
  "data_collected" : "Ni idea que estudiar",               # Se envían las opciones que elige en el formulario, en este caso es "Ni idea que estudiar", como indica la imagen de ejemplo.
}
```

#### Tus Planes - ¿Que Carrera Tienes en Mente?
- **Descripción:** Este evento se envía cuando el usuario hace clic en el boton "Continuar" dentro del paso "¿Que Carrera Tienes en Mente?" del formulario de registro.

![enviar_solicitud](../assets/enviar_solicitud_00.png)

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
  "data_collected" : "Diseño Gráfico|Administración y Finanzas|Otros",   # Se envían las opciones de las carreras que coloca en el formulario separadas con el símbolo "|" por cada opción, en este caso son esas 3 opciones "(Diseño Gráfico, Administración y Finanzas, Finanzas)" como indica la imagen de ejemplo.
}
```

#### Tus Planes - ¿Donde quieres estudiar?
- **Descripción:** Este evento se envía cuando el usuario hace clic en el boton "Continuar" dentro del paso "¿Donde quieres estudiar?" del formulario de registro.

![enviar_solicitud](../assets/enviar_solicitud_01.png)

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
  "data_collected" : "Lima",                                    # Se envían las opciones que elige en el formulario, en este caso es "Lima", como indica la imagen de ejemplo.
}
```

#### Tus Planes - ¿En que modalidad quieres estudiar?
- **Descripción:** Este evento se envía cuando el usuario hace clic en el boton "Continuar" dentro del paso "¿En que modalidad quieres estudiar?" del formulario de registro.

![enviar_solicitud](../assets/enviar_solicitud_02.png)

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
  "data_collected" : "Presencial",                       # Se envían las opciones que elige en el formulario, en este caso es "Presencial", como indica la imagen de ejemplo.
}
```

#### Tus Planes - ¿Que universidad tienes en mente?
- **Descripción:** Este evento se envía cuando el usuario hace clic en el boton "Continuar" dentro del paso "¿Que universidad tienes en mente?" del formulario de registro.

![enviar_solicitud](../assets/enviar_solicitud_04.png)

**Data Layer (Payload):**
```yaml
{
  "event"          : "ui_interaction", 
  "ui_location"    : "content_body",          
  "ui_element"     : "button",                  
  "ui_action"      : "click",                         
  "ui_label"       : "continuar",                       
  "ui_hierarchy"   : "home > registro > tus_planes",                 
  "path_location"  : "/registro/tus-planes/modalidad",                                         # Path de donde se mide el evento.            
  "data_collected" : "Universidad Peruana Cayetano Heredia|Universidad del Pacifico|Otros"     # Se envían las opciones de las universidades que coloca en el formulario separadas con el símbolo "|" por cada opción, en este caso son esas 3 opciones "(Universidad Peruana Cayetano Heredia, Universidad del Pacifico, Otros)" como indica la imagen de ejemplo.
}
```


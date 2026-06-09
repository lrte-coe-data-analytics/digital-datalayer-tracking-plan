# Guía Visual: Button Csat Enviar (04-csat)
**Payload General:** [../04-csat/button_csat_enviar.yaml](../04-csat/button_csat_enviar.yaml)

---
## Instancia: autoconocimiento_enviar_csat
- **Descripción:** Se envían las marcaciones de CSAT de Autoconocimiento.

![autoconocimiento_enviar_csat](../assets/enviar.png)

**Data Layer (Payload):**
```yaml
{
  "event"           : "ui_interaction",                              
  "ui_location"     : "form_container",                                 
  "ui_element"      : "button",                                      
  "ui_action"       : "submit",                                      
  "ui_label"        : "enviar_csat",                                 # Identificador único o texto del elemento. (En este caso es "Enviar CSAT").
  "ui_hierarchy"    : "home > autoconocimiento > csat",              # Identificador semántico de la sección donde se ubica. (En este caso es home > autoconocimiento > csat)
  "path_location"   : "/conocete/test-vocacional/csat",              # Path de donde se mide el evento (corregido).
  "csat_value"      : "{{valor_de_csat}}",                           # Valor de las estrellas (1-5).
  "data_collected"  : "{{data_recopilada}}"                          # Mensaje del CSAT.
}
```

---
## Instancia: explora_enviar_csat
- **Descripción:** Se envían las marcaciones de CSAT de Explora.

![explora_enviar_csat](../assets/explora_enviar_csat.png)

**Data Layer (Payload):**
```yaml
{
  "event"           : "ui_interaction",                              
  "ui_location"     : "form_container",                                 
  "ui_element"      : "button",                                      
  "ui_action"       : "submit",                                      
  "ui_label"        : "enviar_csat",                      # Identificador único o texto del elemento. (En este caso es "Enviar CSAT").
  "ui_hierarchy"    : "home > explora > csat",            # Identificador semántico de la sección donde se ubica. (En este caso es home > explora > csat)
  "path_location"   : "/explora/csat",                    # Path de donde se mide el evento (corregido).
  "csat_value"      : "{{valor_de_csat}}",                # Valor de las estrellas (1-5).
  "data_collected"  : "{{data_recopilada}}"               # Mensaje del CSAT.
}
```

---
## Instancia: visualiza_enviar_csat
- **Descripción:** Se envían las marcaciones de CSAT de Visualiza.

![visualiza_enviar_csat](../assets/visualiza_enviar_csat.png)

**Data Layer (Payload):**
```yaml
{
  "event"           : "ui_interaction",                              
  "ui_location"     : "form_container",                                 
  "ui_element"      : "button",                                      
  "ui_action"       : "submit",                                      
  "ui_label"        : "enviar_csat",                      # Identificador único o texto del elemento. (En este caso es "Enviar CSAT").
  "ui_hierarchy"    : "home > visualiza > csat",          # Identificador semántico de la sección donde se ubica. (En este caso es home > visualiza > csat)
  "path_location"   : "/visualiza/csat",                  # Path de donde se mide el evento (corregido).
  "csat_value"      : "{{valor_de_csat}}",                # Valor de las estrellas (1-5).
  "data_collected"  : "{{data_recopilada}}"               # Mensaje del CSAT.
}
```

---
## Instancia: imagina_enviar_csat
- **Descripción:** Se envían las marcaciones de CSAT de Imagina.

![imagina_enviar_csat](../assets/imagina_enviar_csat.png)

**Data Layer (Payload):**
```yaml
{
  "event"           : "ui_interaction",                              
  "ui_location"     : "form_container",                                 
  "ui_element"      : "button",                                      
  "ui_action"       : "submit",                                      
  "ui_label"        : "enviar_csat",                      # Identificador único o texto del elemento. (En este caso es "Enviar CSAT").
  "ui_hierarchy"    : "home > imagina > csat",            # Identificador semántico de la sección donde se ubica. (En este caso es home > imagina > csat)
  "path_location"   : "/imagina/csat",                    # Path de donde se mide el evento (corregido).
  "csat_value"      : "{{valor_de_csat}}",                # Valor de las estrellas (1-5).
  "data_collected"  : "{{data_recopilada}}"               # Mensaje del CSAT.
}
```

---
## Instancia: globalizate_enviar_csat
- **Descripción:** Se envían las marcaciones de CSAT de Globalizate.

![globalizate_enviar_csat](../assets/globalizate_enviar_csat.png)

**Data Layer (Payload):**
```yaml
{
  "event"           : "ui_interaction",                              
  "ui_location"     : "form_container",                                 
  "ui_element"      : "button",                                      
  "ui_action"       : "submit",                                      
  "ui_label"        : "enviar_csat",                      # Identificador único o texto del elemento. (En este caso es "Enviar CSAT").
  "ui_hierarchy"    : "home > globalizate > csat",        # Identificador semántico de la sección donde se ubica. (En este caso es home > globalizate > csat)
  "path_location"   : "/globalizate/csat",                # Path de donde se mide el evento (corregido).
  "csat_value"      : "{{valor_de_csat}}",                # Valor de las estrellas (1-5).
  "data_collected"  : "{{data_recopilada}}"               # Mensaje del CSAT.
}
```

---
## Instancia: transforma_enviar_csat
- **Descripción:** Se envían las marcaciones de CSAT de Transforma.

![transforma_enviar_csat](../assets/transforma_enviar_csat.png)

**Data Layer (Payload):**
```yaml
{
  "event"           : "ui_interaction",                              
  "ui_location"     : "form_container",                                 
  "ui_element"      : "button",                                      
  "ui_action"       : "submit",                                      
  "ui_label"        : "enviar_csat",                      # Identificador único o texto del elemento. (En este caso es "Enviar CSAT").
  "ui_hierarchy"    : "home > transforma > csat",         # Identificador semántico de la sección donde se ubica. (En este caso es home > transforma > csat)
  "path_location"   : "/transforma/csat",                 # Path de donde se mide el evento (corregido).
  "csat_value"      : "{{valor_de_csat}}",                # Valor de las estrellas (1-5).
  "data_collected"  : "{{data_recopilada}}"               # Mensaje del CSAT.
}
```

---
## Instancia: recordatorio_csat
- **Descripción:** El usuario hace clic en "Entendido" para descartar el recordatorio que le pide calificar la experiencia antes de continuar.

![explora_enviar_csat_error](../assets/explora_enviar_csat_error.png)

**Data Layer (Payload):**
```yaml
{
  "event"           : "ui_interaction",                              
  "ui_location"     : "modal_window",                                
  "ui_element"      : "button",                                      
  "ui_action"       : "click",                                      
  "ui_label"        : "entendido",                                 
  "ui_hierarchy"    : "{{seccion_actual}} > csat",            # Identificador semántico de la sección donde se ubica (ej. home > explora > csat).
  "path_location"   : "{{path_actual_del_evento}}"            # Path de donde se mide el evento.
}
```

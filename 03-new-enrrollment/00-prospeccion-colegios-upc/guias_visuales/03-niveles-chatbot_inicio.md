# Guía Visual: Inicio (03-niveles-chatbot)
**Payload General:** [../03-niveles-chatbot/inicio.yaml](../03-niveles-chatbot/inicio.yaml)

---
## Instancia: explora_vamos
- **Descripción:** Clic al botón "Vamos", en Nivel Explora.

![explora_vamos](../assets/explora_vamos.png)

**Data Layer (Payload):**
```yaml
{
  "event"              : "ui_interaction",                           
  "ui_location"        : "content_body",                             
  "ui_element"         : "button",                                   
  "ui_action"          : "click",                                    
  "ui_label"           : "vamos",                       # Identificador único o texto del elemento. (En este caso es "Vamos").
  "ui_hierarchy"       : "home > explora",              # Identificador semántico de la sección donde se ubica. (En este caso es explora)
  "path_location"      : "/explora",                    # Path de donde se mide el evento.
}
```

---
## Instancia: visualiza_vamos
- **Descripción:** Clic al botón "Vamos", de Visualiza

![visualiza_vamos](../assets/visualiza_vamos.png)

**Data Layer (Payload):**
```yaml
{
  "event"              : "ui_interaction",                           
  "ui_location"        : "content_body",                             
  "ui_element"         : "button",                                   
  "ui_action"          : "click",                                    
  "ui_label"           : "vamos",                       # Identificador único o texto del elemento. (En este caso es "Vamos").
  "ui_hierarchy"       : "home > visualiza",            # Identificador semántico de la sección donde se ubica. (En este caso es visualiza)
  "path_location"      : "/visualiza",                  # Path de donde se mide el evento.
}
```

---
## Instancia: imagina_comencemos
- **Descripción:** Clic al botón "Comencemos", de Imagina

![imagina_comencemos](../assets/imagina_comencemos.png)

**Data Layer (Payload):**
```yaml
{
  "event"              : "ui_interaction",                           
  "ui_location"        : "content_body",                             
  "ui_element"         : "button",                                   
  "ui_action"          : "click",                                    
  "ui_label"           : "comencemos",                # Identificador único o texto del elemento. (En este caso es "Comencemos").
  "ui_hierarchy"       : "home > imagina",            # Identificador semántico de la sección donde se ubica. (En este caso es imagina)
  "path_location"      : "/imagina",                  # Path de donde se mide el evento.
}
```

---
## Instancia: globalizate_comencemos
- **Descripción:** Clic al botón "Comencemos", de Globalizate

![globalizate_comencemos](../assets/globalizate_comencemos.png)

**Data Layer (Payload):**
```yaml
{
  "event"              : "ui_interaction",                           
  "ui_location"        : "content_body",                             
  "ui_element"         : "button",                                   
  "ui_action"          : "click",                                    
  "ui_label"           : "comencemos",                    # Identificador único o texto del elemento. (En este caso es "Comencemos").
  "ui_hierarchy"       : "home > globalizate",            # Identificador semántico de la sección donde se ubica. (En este caso es globalizate)
  "path_location"      : "/globalizate",                  # Path de donde se mide el evento.
}
```

---
## Instancia: transforma_comencemos
- **Descripción:** Clic al botón de "Comencemos" al Nivel de Transforma.

![transforma_comencemos](../assets/transforma_comencemos.png)

**Data Layer (Payload):**
```yaml
{
  "event"              : "ui_interaction",                           
  "ui_location"        : "content_body",                             
  "ui_element"         : "button",                                   
  "ui_action"          : "click",                                    
  "ui_label"           : "quiero_saber_mas",             # Identificador único o texto del elemento. (En este caso es "Quiero saber más").
  "ui_hierarchy"       : "home > transforma",            # Identificador semántico de la sección donde se ubica. (En este caso es transforma)
  "path_location"      : "/transforma",                  # Path de donde se mide el evento.
}
```


# Guía Visual: Descargar (03-niveles-chatbot)
**Payload General:** [../03-niveles-chatbot/descargar.yaml](../03-niveles-chatbot/descargar.yaml)

---
## Instancia: transforma_descargarGuia
- **Descripción:** Clic al botón de "Descargar Guia" al Nivel de Transforma.

![transforma_descargarGuia](../assets/transforma_descargarGuia.png)

**Data Layer (Payload):**
```yaml
{
  "event"              : "ui_interaction",                           
  "ui_location"        : "modal_window",                             
  "ui_element"         : "button",                                   
  "ui_action"          : "submit",                                   
  "ui_label"           : "descargar_por_wp",                         # Identificador único o texto del elemento, en este caso es "Enviar por WhatsApp".
  "ui_hierarchy"       : "home > transforma",                        # Identificador semántico de la sección donde se ubica. (En este caso es home > transforma)
  "path_location"      : "/transforma/ganaste-proposito",            # Path de donde se mide el evento.
}
```


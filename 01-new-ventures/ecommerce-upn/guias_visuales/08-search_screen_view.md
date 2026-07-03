# Guía Visual: screen_view
**Payload General:** [../08-search/screen_view.yaml](../08-search/screen_view.yaml)

---
## Instancia: screen_view
- **Descripción:** Cuando el usuario realiza una busqueda de manera directa.

![screen_view](../assets/screen_view.png)

**Data Layer (Payload):**
```yaml
{
  "event"         : "screen_view",           # Nombre unificado del evento
  "screen_name"   : "search_view",           # Nombre legible (Ej: "Home", "Zona cachimbos")
  "screen_type"   : "search_results",        # Tipo técnico de la pantalla
  "screen_section": "inicio",                # Agrupación temática macro (Content Group)
  "category_l1"   : null,
  "category_l2"   : null,
  "category_l3"   : null,
  "entity_id"     : null,                    # (Opcional) ID del producto/post/item
  "entity_name"   : null,                    # (Opcional) Nombre de la entidad principal
  "search_term"   : "{{search_keywords}}",   # (Opcional) Lo que escribió el usuario
  "result_count"  : null
# (Opcional) Cantidad de resultados encontrados}
```

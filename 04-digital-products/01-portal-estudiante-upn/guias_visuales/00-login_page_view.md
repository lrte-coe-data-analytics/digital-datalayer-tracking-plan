# Guía Visual: page_view
**Payload General:** [page_view.yaml](../00-login/page_view.yaml)

---
## Instancia: page_view
- **Descripción:** Es el evento que corresponde a que se muestre una vista y/o cambia la URL 

![page_view](../assets/page_view.png)

**Data Layer (Payload):**
```yaml
{
  "event"         : "page_view",                  # Nombre unificado del evento
  "screen_name"   : "page_view",              # Nombre legible de la pantalla/URL
  "screen_type"   : "dashboard",                  # Tipo técnico de la pantalla (dashboard, listing, form, detail, etc.)
  "screen_section": "todas",           # Agrupación temática macro (Content Group)
  "category_l1"   : null,
  "category_l2"   : null,
  "category_l3"   : null,
  "entity_id"     : null,                         # (Opcional) ID del producto/post/item
  "entity_name"   : null,                         # (Opcional) Nombre de la entidad principal
  "search_term"   : null,                         # (Opcional) Lo que escribió el usuario
  "result_count"  : null                          # (Opcional) Cantidad de resultados encontrados
}
```

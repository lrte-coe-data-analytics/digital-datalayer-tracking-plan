# Guía Visual: page_view_pago_no_verificado
**Payload General:** [../01-checkout/page_view_pago_no_verificado.yaml](../01-checkout/page_view_pago_no_verificado.yaml)

---
## Instancia: page_view_pago_no_verificado
- **Descripción:** Cuando el pago no puede ser validado y el usuario de click en el boton "Escribenos" (Step 5).

![page_view_pago_no_verificado](../assets/page_view_pago_no_verificado.png)

**Data Layer (Payload):**
```yaml
{
  "event"         : "page_view",            # Nombre unificado del evento
  "screen_name"   : "pago_no_verificado",   # Nombre legible (Ej: "Home", "Zona cachimbos")
  "screen_type"   : "error",                # Tipo técnico de la pantalla
  "screen_section": "checkout",             # Agrupación temática macro (Content Group)
  "category_l1"   : null,
  "category_l2"   : null,
  "category_l3"   : null,
  "entity_id"     : null,
  "entity_name"   : null,
  "search_term"   : null,
  "result_count"  : null
}
```

# Guía Visual: login
**Payload General:** [../00-login/login.yaml](../00-login/login.yaml)

---
## Instancia: login
- **Descripción:** **⚠️ Evento Crítico de Sesión.** Este evento tiene una doble función: 1.  **Como evento:** Se envía cuando el proceso de validación de credenciales es exitoso. 2.  **Como estado (Hydration):** Este payload debe enviarse **siempre** al inicio de cada sesión o recarga de página para "recordarle" al DataLayer quién es el usuario actual. Sin este paso, el resto de eventos en el app saldrán como anónimos.

![login](../assets/login.png)

**Data Layer (Payload):**
```yaml
{
  "user_id"             : "{{id_usuario}}",        # Codigo de usuario (estudiante, docente)
  "user_ciclo_academico": "{{ciclo_academico}}",   # Ciclo academico del usuario
  "user_unidad_negocio" : "{{unidad_negocio}}",    # UG, CAD, EPE, etc.
  "user_producto"       : "{{producto}}",          # Producto o carrera.
  "user_categoria"      : "{{categoria}}"          # Si es estudiante, docente, administrador, etc.
}
```

# Aceleradora Digital - Tracking Plan

Índice de eventos construidos por el equipo de **Digital, Data & Analytics** para el seguimiento y trazabilidad de los proyectos digitales.

---

## 👥 Squads y Proyectos

A continuación se detallan los squads y proyectos incluidos en este plan de marcación:

### 🛍️ 1. New Ventures (`01-new-ventures/`)
*   [ecommerce-cbt](./01-new-ventures/ecommerce-cbt/readme.md) — Canal de E-commerce Cibertec (CBT): checkout, cursos cortos, programas y certificaciones.
*   [ecommerce-upc](./01-new-ventures/ecommerce-upc/readme.md) — Canal de E-commerce UPC: checkout y cursos de especialización.
*   [ecommerce-upn](./01-new-ventures/ecommerce-upn/readme.md) — Canal de E-commerce UPN: checkout y búsqueda de cursos.

### 🎓 2. Student Services (`02-student-services/`)
*   [00-super-app-upc](./02-student-services/00-super-app-upc/readme.md) — Super App UPC: aplicación para alumnos activos (home, login, cursos, finanzas, perfil).
*   [01-super-app-upn](./02-student-services/01-super-app-upn/readme.md) — Super App UPN: aplicación para alumnos activos (home, académico, ayuda, trámites, CAD 2.0).
*   [02-contacto-upn](./02-student-services/02-contacto-upn/readme.md) — Portal público de contacto UPN: buscador y canales de atención (sin autenticación).

### 📝 3. New Enrollment (`03-new-enrrollment/`)
*   [00-prospeccion-colegios-upc](./03-new-enrrollment/00-prospeccion-colegios-upc/readme.md) — Prospección de colegios UPC: registro, gamificación, test vocacional y chatbot.
*   [01-mvp-convalidador-upn](./03-new-enrrollment/01-mvp-convalidador-upn/readme.md) — MVP del Convalidador Académico UPN.
*   [02-prospeccion-colegios-upn](./03-new-enrrollment/02-prospeccion-colegios-upn/readme.md) — Prospección de colegios UPN: registro y test "Descubre tus poderes".
*   [03-ia-prospectora-upn](./03-new-enrrollment/03-ia-prospectora-upn/readme.md) — IA Prospectora UPN: formulario de registro, documentos y pagos.

### 🌐 4. Digital Products (`04-digital-products/`)
*   [00-portal-estudiante-upc](./04-digital-products/00-portal-estudiante-upc/readme.md) — Portal del Estudiante UPC: dashboard, cursos, finanzas, documentos y perfil.
*   [01-portal-estudiante-upn](./04-digital-products/01-portal-estudiante-upn/readme.md) — Portal del Estudiante UPN: incluye módulos exclusivos de CAD 2.0 y Trámites académicos.
*   [02-portal-estudiante-cib](./04-digital-products/02-portal-estudiante-cib/readme.md) — Portal del Estudiante CIB (Cibertec).

---

## 🧩 Diccionarios Maestros (`00-snippets/`)

Esquemas base que definen los parámetros estándar de todos los eventos del repositorio. **Cualquier nuevo evento debe respetar estos esquemas.**

*   [ui_interaction](./00-snippets/ui_interaction.yaml) — Evento estándar de interacción de UI (clicks, impresiones, modales, etc.)
*   [page_view](./00-snippets/page_view.yaml) — Evento de carga de página o pantalla (web y app).
*   [logged_user](./00-snippets/logged_user.yaml) — Objeto de usuario logueado (para apps privadas con autenticación).
*   [purchase](./00-snippets/purchase.yaml) — Evento de compra GA4 (e-commerce).
*   [begin_checkout](./00-snippets/begin_checkout.yaml) — Inicio del flujo de pago GA4.
*   [add_payment_info](./00-snippets/add_payment_info.yaml) — Método de pago seleccionado GA4.

---

## 📸 Guía para Subir Fotos y Actualizar Guías Visuales

Para mantener el tracking plan con documentación visual interactiva (pantallazos o capturas de flujo), sigue estos pasos:

### Paso 1: Tomar la captura de pantalla
1. Realiza una captura del elemento interactivo, formulario o modal que genera el evento en producción o staging.
2. Guarda la imagen en formato **PNG** (ejemplo: `subir-dni.png`). Se recomienda usar nombres en minúsculas y separados por guiones.

### Paso 2: Guardar la imagen en `assets/`
Coloca la captura dentro de la carpeta `assets/` del subproyecto correspondiente. Por ejemplo:
```
03-new-enrrollment/03-ia-prospectora-upn/assets/subir-dni.png
```

### Paso 3: Crear o actualizar el archivo en `guias_visuales/`
1. En la carpeta `guias_visuales/` de ese mismo subproyecto, abre o crea el archivo markdown que corresponda (ejemplo: `02-documentos_subir-dni.md`).
2. Agrega la referencia a la imagen usando la ruta relativa a la carpeta `assets/`:
   ```markdown
   ![subir_dni](../assets/subir-dni.png)
   ```
3. Copia el payload YAML correspondiente debajo como referencia técnica.

### Paso 4: Referenciar la Guía Visual en el `readme.md` del subproyecto
En el `readme.md` principal del subproyecto, añade el enlace de la guía al lado del payload:
```markdown
- 📘 `subir-dni`: [payload](./02-documentos/subir-dni.yaml) | [guía visual](./guias_visuales/02-documentos_subir-dni.md)
```
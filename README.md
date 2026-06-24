# Aceleradora Digital - Tracking Plan

Índice de eventos construidos por el equipo de **Digital, Data & Analytics** para el seguimiento y trazabilidad de los proyectos digitales.

---

## 👥 Squads y Proyectos

A continuación se detallan los squads y proyectos incluidos en este plan de marcación:

### 🛍️ 1. New Ventures (`01-new-ventures/`)
*   [ecommerce-cbt](file:///c:/Users/Walter/digital-datalayer-tracking-plan/01-new-ventures/ecommerce-cbt) — Canal de E-commerce CBT.
*   [ecommerce-upc](file:///c:/Users/Walter/digital-datalayer-tracking-plan/01-new-ventures/ecommerce-upc) — Canal de E-commerce UPC.
*   [ecommerce-upn](file:///c:/Users/Walter/digital-datalayer-tracking-plan/01-new-ventures/ecommerce-upn) — Canal de E-commerce UPN.

### 🎓 2. Student Services (`02-student-services/`)
*   [00-super-app-upc](file:///c:/Users/Walter/digital-datalayer-tracking-plan/02-student-services/00-super-app-upc) — Super App UPC para alumnos.
*   [01-super-app-upn](file:///c:/Users/Walter/digital-datalayer-tracking-plan/02-student-services/01-super-app-upn) — Super App UPN para alumnos.
*   [02-contacto-upn](file:///c:/Users/Walter/digital-datalayer-tracking-plan/02-student-services/02-contacto-upn) — Formularios y canales de contacto UPN.

### 📝 3. New Enrollment (`03-new-enrrollment/`)
*   [00-prospeccion-colegios-upc](file:///c:/Users/Walter/digital-datalayer-tracking-plan/03-new-enrrollment/00-prospeccion-colegios-upc) — Prospección de colegios UPC.
*   [01-mvp-convalidador-upn](file:///c:/Users/Walter/digital-datalayer-tracking-plan/03-new-enrrollment/01-mvp-convalidador-upn) — MVP del Convalidador Académico UPN.
*   [02-prospeccion-colegios-upn](file:///c:/Users/Walter/digital-datalayer-tracking-plan/03-new-enrrollment/02-prospeccion-colegios-upn) — Prospección de colegios UPN.
*   [03-ia-prospectora-upn](file:///c:/Users/Walter/digital-datalayer-tracking-plan/03-new-enrrollment/03-ia-prospectora-upn) — IA Prospectora de matrícula UPN.

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
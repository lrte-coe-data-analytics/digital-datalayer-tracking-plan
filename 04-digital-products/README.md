# Digital Products - Tracking Plan
Módulo de Marcación para el **Portal del Estudiante** de las marcas UPC, UPN y CIB (Cibertec).

---

## 👥 Proyectos y Marcas

A continuación se detallan los accesos a los documentos de marcación de cada portal:

*   [00-portal-estudiante-upc](./00-portal-estudiante-upc) — Portal del Estudiante UPC.
*   [01-portal-estudiante-upn](./01-portal-estudiante-upn) — Portal del Estudiante UPN (incluye los módulos exclusivos de CAD 2.0 y Trámites académicos).
*   [02-portal-estudiante-cib](./02-portal-estudiante-cib) — Portal del Estudiante CIB (Cibertec).

---

## 🏗️ Directrices del Proyecto

Todos los planes de marcación de este módulo se rigen bajo los siguientes lineamientos:
1. **Consistencia con Snippets:** Se utilizan exclusivamente los esquemas maestros definidos en [00-snippets](../00-snippets). No se añaden parámetros personalizados ajenos a la taxonomía global.
2. **Homologación de Eventos:**
    * **page_view:** Captura la visualización de páginas y cambios de ruta en entorno web.
    * **ui_interaction:** Captura los clics e interacciones con el menú, dashboard, perfil, documentos y demás componentes interactivos.
    * **login:** Inicializa el estado del alumno logueado (código de usuario, carrera, ciclo, unidad de negocio y rol).
3. **Depuración de Eventos:** Se han excluido todos los eventos definidos como redundantes o sin KPI asociado por el COE, garantizando un plan de marcación limpio y de alto valor estratégico.

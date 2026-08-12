# Documento de Marcación: Checkout & Cursos Especializados (UPC)
**Fecha de creación:** 29 Enero 2026
**Fecha última actualización:** 01 Agosto 2026

## Table of content
1. [🏗️ Arquitectura de Implementación](#-arquitectura-de-implementación)
2. [🏠 Home (Navegación)](#-home-navegación)
3. [🛒 Checkout (Embudo de Ventas)](#-checkout-embudo-de-ventas)
4. [🎓 Cursos y Especializaciones](#-cursos-y-especializaciones)

---

## 🏗️ Arquitectura de Implementación

### 🌐 Entornos utilizados

Durante la implementación y validación del tracking se utilizan los siguientes entornos:

- **Sitio web (Desarrollo / QA):** https://educacioncontinua.upc.edu.pe/
- **CERTI (Validación de eventos):** https://educacioncontinua-cert-upc.stage01.link/

> **Nota:** El desarrollo y las pruebas funcionales del tracking se realizan sobre el sitio de Educación Continua UPC. La validación técnica de los eventos enviados al `dataLayer` y/o herramientas de analítica se realiza mediante la plataforma CERTI.

Para asegurar la medición del rendimiento del sitio y la eficacia de las campañas, se deben seguir estas reglas:

1. **Persistencia de Sesión:** Los eventos deben estar vinculados a un ID de sesión consistente para permitir la reconstrucción del embudo de conversión desde el Home hasta el Purchase.
2. **Estándar de E-commerce:** Los eventos del módulo `01-checkout` siguen el esquema de objetos de comercio electrónico (GA4). Es vital que el objeto `items` esté presente en todos los eventos del flujo para trackear SKUs, nombres de cursos y categorías.

---

## 🏠 Home (Navegación)
Eventos capturados en los elementos globales de navegación inicial.

- 📘 `menu_link_producto`: [payload](./00-home/00-menu/menu_link_producto.yaml) | [guía visual](./guias_visuales/00-home_00-menu_menu_link_producto.md)  
    Captura el click en los enlaces de productos dentro del menú. Permite identificar qué categorías generan más interés inicial.
- 📘 `menu_cintillo_cerrar`: [payload](./00-home/00-menu/menu_cintillo_cerrar.yaml) | [guía visual](./guias_visuales/00-home_00-menu_menu_cintillo_cerrar.md)  
    Mide la tasa de rechazo o interacción con los banners promocionales superiores.

---

## 🛒 Checkout (Embudo de Ventas)
Este módulo mide la eficiencia de la pasarela y los estados del proceso de pago.

### Flujo Principal
- 📗 `begin_checkout`: [payload](./01-checkout/begin_checkout.yaml) | [guía visual](./guias_visuales/01-checkout_begin_checkout.md)  
    Se dispara cuando el usuario inicia el proceso de pago. Debe incluir el valor total estimado y la lista de productos.
- 📘 `button_continuar`: [payload](./01-checkout/button_continuar.yaml) | [guía visual](./guias_visuales/01-checkout_button_continuar.md)  
    Cuando el usuario rellena todo el form, y hace clic en Continuar.
- 📘 `button_validar_coupon`: [payload](./01-checkout/button_validar_coupon.yaml) | [guía visual](./guias_visuales/01-checkout_button_validar_coupon.md)  
    Cuando el usuario hace clic en el botón validar cupón.
- 📗 `add_payment_info`: [payload](./01-checkout/add_payment_info.yaml) | [guía visual](./guias_visuales/01-checkout_add_payment_info.md)  
    Registra el tipo de método de pago seleccionado (TC, Débito, Transferencia).
- 🏆 `purchase`: [payload](./01-checkout/purchase.yaml) | [guía visual](./guias_visuales/01-checkout_purchase.md)  
    **Evento de Conversión.** Se dispara tras la confirmación de la pasarela. Parámetros obligatorios: `transaction_id`, `value`, `tax`, y `currency`.

### Estados de Pago y Errores
- 📘 `page_view_pago_no_verificado`: [payload](./01-checkout/page_view_pago_no_verificado.yaml) | [guía visual](./guias_visuales/01-checkout_page_view_pago_no_verificado.md)  
    **Estado Pendiente.** Se dispara cuando la transacción entra en proceso de validación (pago pendiente de confirmación técnica o bancaria).
- 📘 `page_view_pago_no_completado`: [payload](./01-checkout/page_view_pago_no_completado.yaml) | [guía visual](./guias_visuales/01-checkout_page_view_pago_no_completado.md)  
    **Estado Fallido.** Identifica fricciones técnicas o rechazos directos de la pasarela/banco en la última etapa.
- 📘 `button_pago_no_completado`: [payload](./01-checkout/button_pago_no_completado.yaml) | [guía visual](./guias_visuales/01-checkout_button_pago_no_completado.md)  
    Acción del usuario tras el error (ej. botón para reintentar o regresar al home).

---

## 🎓 Cursos y Especializaciones
Mapeo de la interacción con el catálogo educativo.

- 📘 `page_view_curso`: [payload](./page_view_curso.yaml) | [guía visual](./guias_visuales/page_view_curso.md)  
    Equivalente al `view_item`. Registra qué cursos específicos están siendo visualizados.

### ⚙️ Implementación de Listas (Módulos 02 y 04)
Se utiliza una lógica de eventos genéricos para optimizar el mantenimiento tanto para Cursos (`02-cursos-especializacion`) como para Programas (`04-programas-especializacion`):
- 📘 `list_item_grupo_curso`: Captura el click en el card del curso. Debe enviar la posición del item en la lista para análisis de CTR.  
  [Payload Cursos](./02-cursos-especializacion/list_item_grupo_curso.yaml) | [Payload Programas](./04-programas-especializacion/list_item_grupo_curso.yaml)
- 📘 `button_mas_cursos`: Mide la profundidad de navegación en el catálogo (paginación o ver más).  
  [Payload Cursos](./02-cursos-especializacion/button_mas_cursos.yaml) | [Payload Programas](./04-programas-especializacion/button_mas_cursos.yaml)
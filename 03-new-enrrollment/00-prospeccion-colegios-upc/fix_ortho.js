const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'guia_visual.md');
let text = fs.readFileSync(filePath, 'utf-8');

const replacements = [
    [/#\s*Se envia las opciones que elige/g, '# Se envían las opciones que elige'],
    [/#\s*Se envia las opciones de las/g, '# Se envían las opciones de las'],
    [/separados con el simbolo/g, 'separadas con el símbolo'],
    [/Codigo de usuario/g, 'Código de usuario'],
    [/código de Hubspot/g, 'código de HubSpot'],
    [/alumno o prespecto/g, 'alumno o prospecto'],
    [/Identificador semántico de la seccion/gi, 'Identificador semántico de la sección'],
    [/seccion donde se ubica\./g, 'sección donde se ubica.'],
    [/ubica\.\(En este caso/g, 'ubica. (En este caso'],
    [/ubica\.\(En este caso se/g, 'ubica. (En este caso es'],
    [/\(En este caso se home/g, '(En este caso es home'],
    [/En este caso se mide por el número de preguntas, para este caso son 3 Preguntas\./g, 'En este caso se mide por el número de preguntas, para este caso son 3 preguntas.'],
    [/En este caso se mide por el número de preguntas, para este caso son 98 Preguntas\./g, 'En este caso se mide por el número de preguntas, para este caso son 98 preguntas.'],
    [/Identificador único o texto del elemento, depende de la pregunta\. para el caso/g, 'Identificador único o texto del elemento, depende de la pregunta. Para el caso'],
    [/Identificador único o texto del elemento\. \(En este caso es excelente\)\./g, 'Identificador único o texto del elemento. (En este caso es excelente).'],
    [/Identificador único o texto del elemento\. \(En este caso es Error\)\./g, 'Identificador único o texto del elemento. (En este caso es Error).'],
    [/Identificador único o texto del elemento, depende de la pregunta\.\(En este caso es Si o NO\)/g, 'Identificador único o texto del elemento, depende de la pregunta. (En este caso es Sí o No).'],
    [/\(En este caso es autoconocimiento > valoracion de carreras\)\./g, '(En este caso es autoconocimiento > valoración de carreras).'],
    [/Aqui debe ir la carrera que es aceptada o rechazada\.\(Odontologia, Derecho, etc\)/g, 'Aquí debe ir la carrera que es aceptada o rechazada. (Odontología, Derecho, etc.).'],
    [/Identificador único o texto del elemento\. \(En este caso es Exito\)\./g, 'Identificador único o texto del elemento. (En este caso es Éxito).'],
    [/Identificador único o texto del elemento, \(En este caso es Enviar por WhatsAPP\)\./g, 'Identificador único o texto del elemento. (En este caso es Enviar por WhatsApp).'],
    [/Identificador único o texto del elemento, en este caso es Enviar por WhatsAPP\./g, 'Identificador único o texto del elemento, en este caso es Enviar por WhatsApp.'],
    [/Identificador único o texto del elemento\. \(En este caso es Vamos\)/g, 'Identificador único o texto del elemento. (En este caso es Vamos).'],
    [/Identificador único o texto del elemento\. \(En este caso es Entendido\)/g, 'Identificador único o texto del elemento. (En este caso es Entendido).'],
    [/Identificador único o texto del elemento\. \(En este caso es Comencemos\)/g, 'Identificador único o texto del elemento. (En este caso es Comencemos).'],
    [/Identificador único o texto del elemento\. \(En este caso es Vamos por más\)/g, 'Identificador único o texto del elemento. (En este caso es Vamos por más).'],
    [/Identificador único o texto del elemento\. \(En este caso es "quiero saber mas"\)/g, 'Identificador único o texto del elemento. (En este caso es "quiero saber más").'],
    [/Identificador único o texto del elemento\. \(En este caso es "video transforma"\)/g, 'Identificador único o texto del elemento. (En este caso es "video transforma").'],
    [/Identificador único o texto del elemento\. \(En este caso es Enviar CSAT\)/g, 'Identificador único o texto del elemento. (En este caso es Enviar CSAT).'],
    [/Identificador único o texto del elemento\. \(En este caso es Enviar Emociones\)/g, 'Identificador único o texto del elemento. (En este caso es Enviar Emociones).'],
    [/Mensaje del CSAT\s*$/gm, 'Mensaje del CSAT.'],
    [/no estoy intersado/g, 'no estoy interesado'],
    [/# Mensaje de Error que se muestra en el mensaje/g, '# Mensaje de error que se muestra en el mensaje'],
    [/código de Hubspot/g, 'código de HubSpot'],
    [/se envia cuando/g, 'se envía cuando'],
    [/# Se envia/g, '# Se envía'],
    [/# Este evento sale/g, '# Este evento sale'],
    [/\(En este caso se/g, '(En este caso es'],
];

for (const [pattern, rep] of replacements) {
    text = text.replace(pattern, rep);
}

fs.writeFileSync(filePath, text, 'utf-8');
console.log('Update finished.');

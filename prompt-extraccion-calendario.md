# Prompt de extracción del calendario académico (uso anual)

Este prompt se ejecuta **una vez al año** para actualizar las fechas de `calendario.js`.

## Cómo usarlo

1. Consigue el PDF del **Calendario Académico** del año (documento oficial de la universidad).
2. Abre una IA que acepte PDF (Gemini, ChatGPT, Claude, etc.).
3. Adjunta el PDF y pega **todo el bloque de instrucciones de abajo** (desde "Actúa como…").
4. Copia el objeto `window.CALENDARIO_ACADEMICO = { … };` que devuelva.
5. Pégalo en `calendario.js` reemplazando el objeto existente. Listo.

> Revisa siempre el resultado contra el PDF antes de dejarlo definitivo: la IA puede
> equivocarse en una fecha. Verifica sobre todo **inicio y término del período lectivo**
> y las **semanas de receso**, que son las que afectan todo el cálculo.

---

## Instrucciones para la IA (copiar desde aquí)

Actúa como asistente de datos. Te adjunto el PDF del Calendario Académico universitario de un año. Tu tarea es **extraer únicamente los eventos que afectan la planificación docente de un semestre de 17 semanas** y devolverlos en un objeto JavaScript con la estructura exacta que se indica más abajo.

### Qué SÍ debes extraer (y nada más)

Para **cada uno de los dos semestres** (primer y segundo semestre académico):

1. **Inicio del período lectivo** (fecha en que empiezan las clases). Debe ser el **lunes** de la semana 1.
2. **Término del período lectivo** (fecha en que terminan las clases).
3. **Semanas de receso sin clases** (ej.: "Semana Vida Universitaria", "Receso de Fiestas Patrias"). Son semanas explícitamente marcadas como SIN clases ni evaluaciones.
4. **Hitos de notas dentro del período lectivo**: fecha límite para construir la estructura de notas por resultado de aprendizaje, y revisiones de ingreso de calificaciones.
5. **Cierre de asignaturas y actas de evaluación** del semestre.
6. **Período especial de reforzamiento y evaluación**.

### Qué debes IGNORAR (no lo incluyas)

Todo lo administrativo que no cambia la planificación de clases: matrícula, resultados PAES, inducción/nivelación, receso institucional, inscripción de asignaturas y evaluación docente, distribución de nóminas, resoluciones de Consejos de Carrera, apelaciones, postergaciones, suspensión de beneficios, movilidad nacional/internacional, aniversarios y semanas de actividades que no suspendan clases.

### Formato de salida (obligatorio)

Devuelve **solo** el objeto JavaScript, sin texto adicional, sin explicaciones, sin bloque de código markdown alrededor. Usa exactamente estos nombres de campos y estas reglas:

- Fechas en formato **ISO `YYYY-MM-DD`**.
- Evento de un solo día: **omite** el campo `fin`.
- `inicioLectivo` debe ser el **lunes** de la semana 1.
- Campo `tipo`, uno de: `"sin_docencia"`, `"hito_notas"`, `"cierre_actas"`, `"reforzamiento"`.
- Agrega `posteriorALectivo: true` a los eventos cuya fecha caiga **después** del `finLectivo` de su semestre (típicamente el cierre de actas y el reforzamiento).
- `s1` = primer semestre académico; `s2` = segundo semestre académico.
- Ajusta `anio` y `fuente` (código/identificador del decreto o documento) a los del PDF.

Plantilla exacta a completar con los datos del PDF:

```js
window.CALENDARIO_ACADEMICO = {
  anio: 2026,
  fuente: "DU-CPO-2025-04766",
  semestres: {
    s1: {
      etiqueta: "Primer Semestre 2026",
      inicioLectivo: "2026-03-16",
      finLectivo: "2026-07-17",
      eventos: [
        { nombre: "Límite para construir la estructura de notas por resultado de aprendizaje",
          tipo: "hito_notas", inicio: "2026-04-06" },
        { nombre: "Revisión de ingreso de calificaciones por RA y de asistencia (detección de riesgo)",
          tipo: "hito_notas", inicio: "2026-05-11", fin: "2026-05-15" },
        { nombre: "Semana Vida Universitaria",
          tipo: "sin_docencia", inicio: "2026-05-18", fin: "2026-05-22" },
        { nombre: "Cierre de asignaturas y actas de evaluación 1° semestre",
          tipo: "cierre_actas", inicio: "2026-07-27", posteriorALectivo: true },
        { nombre: "Período especial de reforzamiento y evaluación",
          tipo: "reforzamiento", inicio: "2026-07-20", fin: "2026-08-14", posteriorALectivo: true }
      ]
    },
    s2: {
      etiqueta: "Segundo Semestre 2026",
      inicioLectivo: "2026-08-17",
      finLectivo: "2026-12-24",
      eventos: [
        { nombre: "Límite para construir la estructura de notas por resultado de aprendizaje",
          tipo: "hito_notas", inicio: "2026-09-04" },
        { nombre: "Receso de Fiestas Patrias",
          tipo: "sin_docencia", inicio: "2026-09-14", fin: "2026-09-18" },
        { nombre: "Revisión de ingreso de calificaciones por RA y de asistencia (detección de riesgo)",
          tipo: "hito_notas", inicio: "2026-10-12", fin: "2026-10-16" },
        { nombre: "Semana Vida Universitaria",
          tipo: "sin_docencia", inicio: "2026-10-26", fin: "2026-10-30" },
        { nombre: "Cierre de asignaturas y actas de evaluación 2° semestre",
          tipo: "cierre_actas", inicio: "2027-01-15", posteriorALectivo: true },
        { nombre: "Período especial de reforzamiento y evaluación",
          tipo: "reforzamiento", inicio: "2027-01-04", fin: "2027-01-22", posteriorALectivo: true }
      ]
    }
  }
};
```

El ejemplo de arriba corresponde al calendario 2026. Reemplaza **todas** las fechas, `nombre`, `anio`, `fuente` y `etiqueta` con los datos reales del PDF que te adjunto. Si algún evento no existe en el PDF de ese año, omítelo. Si aparece uno nuevo del mismo tipo relevante, agrégalo respetando el formato.

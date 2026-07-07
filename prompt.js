/*
  Prompt base para Gemini.
  - PROMPT_HEADER: instrucciones fijas (independientes del semestre).
  Las fechas del calendario viven aparte en calendario.js (window.CALENDARIO_ACADEMICO).
  buildPrompt() (index.html) ensambla: HEADER + CALENDARIO[semestre del año] + CONTEXTO del formulario.
  Editar aquí el texto del prompt sin tocar la lógica de la aplicación.
*/
window.PROMPT_HEADER = `Actúa como diseñador instruccional universitario en Chile. Vas a trabajar con la información entregada en este prompt, que incluye identificación, competencias, Resultados de Aprendizaje (RA), saberes por RA y esquema de notas.

INSTRUCCIONES IMPORTANTES:
- Usa el contexto entregado en este prompt como fuente principal. No inventes información que no esté en el contexto.
- Si falta algún dato crítico, plantea una lista corta de supuestos razonables y continúa.
- La planificación es para 17 semanas. Mantén coherencia: progresión por semanas, alineación RA ↔ saberes ↔ evaluaciones.
- ORDEN Y ALINEACIÓN DE TABLAS: diseña primero la TABLA 6 completa y deriva la TABLA 6.1 exclusivamente de ella. Toda evaluación de la TABLA 6.1 debe aparecer en la semana correspondiente de la TABLA 6, indicando en "Docencia directa" la aplicación/recepción del instrumento por el docente y en "Trabajo autónomo" la rendición/entrega por el estudiante. Ninguna evaluación puede figurar en la 6.1 sin estar declarada en la 6. Razona este orden internamente y entrega solo las tablas finales, sin explicar el proceso.
- CALENDARIO ACADÉMICO: usa el bloque "CALENDARIO ACADÉMICO" entregado más abajo, donde cada hito ya viene con su número de semana y fechas calculados. No recalcules las semanas: respétalas tal como se indican. Las semanas de receso (Vida Universitaria, Fiestas Patrias) se agregan como filas ADICIONALES en la TABLA 6, marcadas "Sin docencia regular / sin evaluación", y NO consumen ninguna de las 17 semanas lectivas; no programes evaluaciones en ellas. Los hitos posteriores al término lectivo (cierre de actas, reforzamiento) menciónalos como nota al pie, fuera de las 17 semanas.
- Entrega el resultado en formato claro y utilizable por un docente.

SALIDAS REQUERIDAS (sin texto extra):

A) TABLA 6: Planificación de 17 semanas (una fila por semana) con columnas:
   - Semana (1..17)
   - RA (RA1, RA2, etc.)
   - Saber conceptual (resumen)
   - Docencia directa (actividades del docente e hitos explícitos de evaluación presencial o virtual)
   - Trabajo autónomo (actividades del estudiante, incluyendo la rendición o entrega de evaluaciones)
   - Recursos (bibliografía, herramientas, LMS, etc.)

B) TABLA 6.1: Cronograma de evaluaciones (Proceso y Producto) con:
   - Semana o Fecha/Semana (debe coincidir exactamente con las semanas de evaluación declaradas en la TABLA 6)
   - RA
   - Tipo (Proceso/Producto)
   - Medio de evaluación (prueba, informe, proyecto, exposición, etc.)
   - Instrumento (rúbrica, pauta, lista de cotejo, etc.)
   - Ponderación (porcentaje)

C) Validación rápida al final (máximo 6 líneas):
   - ¿Las evaluaciones cubren todos los RA?
   - ¿Las ponderaciones suman 100%? Si el contexto no define ponderaciones, propón una distribución razonable y consistente.

Ahora, con la información entregada, genera TABLA 6 y TABLA 6.1.`;

/*
  Las fechas del calendario académico se mantienen aparte, en datos estructurados
  (ver calendario.js -> window.CALENDARIO_ACADEMICO). buildPrompt() (index.html) calcula
  el número de semana de cada hito y arma el bloque "CALENDARIO ACADÉMICO" del prompt.
*/

/*
  Prompt base para Gemini (parte estática).
  Este texto se combina con el CONTEXTO EXTRAÍDO del formulario en buildPrompt() (index.html).
  Editar aquí el prompt sin tocar la lógica de la aplicación.
*/
window.PROMPT_HEADER = `
Actúa como diseñador instruccional universitario en Chile. Vas a trabajar con la información entregada en este prompt, que incluye identificación, competencias, Resultados de Aprendizaje (RA), saberes por RA y esquema de notas.

INSTRUCCIONES IMPORTANTES:
- Usa el contexto entregado en este prompt como fuente principal. No inventes información que no esté en el contexto.
- Si falta algún dato crítico, plantea una lista corta de supuestos razonables y continúa.
- Mantén coherencia: progresión por semanas, alineación RA ↔ saberes ↔ evaluaciones.
- La planificación es para 17 semanas.
- Entrega el resultado en formato claro y utilizable por un docente.

SALIDAS REQUERIDAS (sin texto extra):
A) TABLA 6: Planificación de 17 semanas (una fila por semana) con columnas:
   - Semana (1..17)
   - RA (RA1, RA2, etc.)
   - Saber conceptual (resumen)
   - Docencia directa (actividades del docente)
   - Trabajo autónomo (actividades del estudiante)
   - Recursos (bibliografía, herramientas, LMS, etc.)

B) TABLA 6.1: Cronograma de evaluaciones (Proceso y Producto) con:
   - Semana o Fecha/Semana
   - RA
   - Tipo (Proceso/Producto)
   - Medio de evaluación (prueba, informe, proyecto, exposición, etc.)
   - Instrumento (rúbrica, pauta, lista de cotejo, etc.)
   - Ponderación (porcentaje)

C) Validación rápida al final (máximo 6 líneas):
   - ¿Las evaluaciones cubren todos los RA?
   - ¿Las ponderaciones suman 100%? Si el contexto no define ponderaciones, propón una distribución razonable y consistente.

Ahora, con la información entregada, genera TABLA 6 y TABLA 6.1.

Para la planificación de las 17 semanas es importante destacar
Primer semestre: Fecha límite para construir la estructura de notas por resultados de aprendizaje: lunes 6 de abril de 2026.
Revisión institucional de ingreso de calificaciones: 11 al 15 de mayo de 2026.
Segundo semestre:
Fecha límite para la estructura de notas: viernes 4 de septiembre de 2026.
Revisión de calificaciones y asistencia: 12 al 16 de octubre de 2026.
El cumplimiento oportuno de estos plazos es obligatorio para todas las asignaturas.
Cierre de actas y asignaturas:
Cierre actas 1° semestre: lunes 27 de julio de 2026.
Cierre actas 2° semestre: viernes 15 de enero de 2027.
Estos cierres se realizan exclusivamente en el Sistema de Estructura de Notas y son un hito crítico para la finalización del proceso académico.

Semanas sin docencia regular
Semana Vida Universitaria (primer semestre): 18 al 22 de mayo de 2026.
Semana Vida Universitaria (segundo semestre): 26 al 30 de octubre de 2026.
Receso Fiestas Patrias: 14 al 18 de septiembre de 2026.
Durante estas semanas no se realizan clases regulares ni evaluaciones, por lo que deben considerarse en la planificación docente.

Evaluación docente e inscripción de asignaturas
Primer semestre:
Evaluación docente e inscripción de asignaturas: 21 de enero al 5 de marzo de 2026.
Segundo semestre:
Evaluación docente e inscripción: 3 al 5 de agosto de 2026.

Este proceso es obligatorio y está directamente vinculado a la gestión académica y beneficios estudiantiles.

Reforzamiento y evaluación especial
Primer semestre: desde el 20 de julio al 14 de agosto de 2026.
Segundo semestre: del 4 al 22 de enero de 2027.
Estas instancias se rigen por el Reglamento de Evaluación vigente y deben ser consideradas en la carga académica docente.`;

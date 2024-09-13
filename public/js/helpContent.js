// Contenido de ayuda
const helpContent = {
    'identificacion': `
<h5><i class="fas fa-info-circle"></i> Ayuda: Identificación</h5>
<p>Encuentra información útil sobre cómo llenar la sección de Identificación:</p>
<div class="help-item"><i class="fas fa-tag"></i><p><strong>Código:</strong> El código se compone de tres partes:

1.Seccional: Selecciona la ubicación (ej. "ARM", "BOG", "MED").
2.Programa: Selecciona el código del programa académico (tres dígitos).
3.Materia: Introduce el código de la materia (número entre 00 y 99).
Ejemplo: "ARM-111-01" </p></div>
<div class="help-item"><i class="fas fa-university"></i><p><strong>Facultad:</strong> Selecciona la facultad correspondiente.</p></div>
<div class="help-item"><i class="fas fa-book"></i><p><strong>Programa:</strong> Selecciona el programa académico.</p></div>
<div class="help-item"><i class="fas fa-chalkboard"></i><p><strong>Nombre del Curso:</strong> Introduce el nombre del curso.</p></div>
<div class="help-item"><i class="fas fa-user-edit"></i><p><strong>Elaborado por:</strong> Introduce el nombre del responsable de elaborar el microcurrículo.</p></div>
<div class="help-item"><i class="fas fa-calendar-day"></i><p><strong>Fecha última actualización:</strong> Selecciona la fecha en la que se realizó la última actualización del microcurrículo.</p></div>
<div class="help-item"><i class="fas fa-calendar-check"></i><p><strong>Fecha aprobación del Comité Curricular:</strong> Selecciona la fecha en que el Comité Curricular aprobó el microcurrículo.</p></div>
<div class="help-item"><i class="fas fa-language"></i><p><strong>Idioma:</strong> Selecciona el idioma en el que se impartirá el curso.</p></div>
<div class="help-item"><i class="fas fa-credit-card"></i><p><strong>Tipo de crédito:</strong> Selecciona si el curso es Teórico, Práctico o Teórico-Práctico.</p></div>
<div class="help-item"><i class="fas fa-hashtag"></i><p><strong>Número de créditos:</strong> Selecciona el número de créditos académicos del curso.</p></div>
<div class="help-item"><i class="fas fa-book-open"></i><p><strong>Prerrequisitos:</strong> Describe los cursos o conocimientos previos necesarios para inscribir el curso.</p></div>
<div class="help-item"><i class="fas fa-brain"></i><p><strong>Saberes y Competencias:</strong> Describe los conocimientos y habilidades que los estudiantes adquirirán al completar el curso.</p></div>
    `,


     'estructura-curricular': `
        <h5><i class="fas fa-info-circle"></i> Ayuda: Estructura Curricular</h5>
    <p>Encuentra información útil sobre cómo llenar la sección de Estructura Curricular:</p>
    <div class="help-item">
        <i class="fas fa-sitemap"></i>
        <p><strong>Estructura Curricular:</strong> Detalla los componentes del curso y su organización.</p>
    </div>
    <h5 class="mt-4"><i class="fas fa-info-circle"></i> Instrucciones:</h5>
    <div class="mt-4">
        <div class="help-item mb-3">
            <i class="fas fa-calendar-alt"></i>
            <p><strong>Semestre:</strong> Seleccione el semestre en el que se imparte el curso.</p>
        </div>
        <div class="help-item mb-3">
            <i class="fas fa-graduation-cap"></i>
            <p><strong>Prerrequisitos:</strong> Ingrese los cursos o conocimientos previos necesarios para tomar este curso.</p>
        </div>
        <div class="help-item">
            <i class="fas fa-book-open"></i>
            <p><strong>Saberes y Competencias Previas:</strong> Describa los saberes y competencias que los estudiantes deben tener antes de tomar este curso.</p>
        </div>
    </div>
    `,


    'propositos-formativos': `
    <h5><i class="fas fa-info-circle"></i> Ayuda: Propósitos Formativos</h5>
<p>Encuentra información útil sobre cómo llenar la sección de Propósitos Formativos:</p>
<div class="help-item">
    <i class="fas fa-briefcase"></i>
    <p><strong>Competencias del Graduado Asociadas al Curso:</strong> Se transcriben las competencias del graduado asociadas al curso con su respectiva numeración.</p>
</div>
<div class="help-item mt-3">
    <i class="fas fa-graduation-cap"></i>
    <p><strong>Resultados de Aprendizaje del Graduado:</strong> Según los Resultados de aprendizaje de las competencias del graduado, se toman los que se relacionan directamente con el curso. Se transcriben los RRAA del graduado con el número que le corresponde (Ej: 1.2 y 2.3.).</p>
</div>
<div class="help-item mt-3">
    <i class="fas fa-lightbulb"></i>
    <p><strong>Aporte al Perfil del Graduado:</strong> Explica cómo el curso contribuye al perfil general del graduado.</p>
</div>
<div class="help-item mt-3">
    <i class="fas fa-star"></i>
    <p><strong>Competencia Principal del Curso:</strong> Es una competencia que expresa el máximo ideal de formación del curso, respecto a los desafíos del conocimiento, el contexto y la perspectiva de humanidad. (antes: resultado de aprendizaje principal del curso).</p>
</div>
<div class="help-item mt-3">
    <i class="fas fa-star"></i>
    <p><strong>Resultados de Aprendizaje Asociados a la Competencia Principal:</strong> Aquí se traen los (indicadores de competencia) de la competencia principal del curso</p>
</div>
    `,


    'competencias-especificas-curso': `
      <h5><i class="fas fa-info-circle"></i> Ayuda: Competencias Específicas del Curso</h5>
<p>Encuentra información útil sobre cómo llenar la sección de Competencias Específicas del Curso:</p>
<div class="help-item">
    <i class="fas fa-tachometer-alt"></i>
    <p><strong>Competencias Específicas:</strong> Las competencias específicas son las habilidades, conocimientos, valores y pensamientos necesarios para realizar correctamente una tarea. Se componen de un verbo que indica el nivel, un conocimiento, el contexto en que se aplica y un criterio humano. Estas competencias se organizan de forma progresiva, desde la más básica hasta el Resultado de Aprendizaje, siendo la Competencia Principal del Curso la última. Expresan cómo se evidenciará el logro de la competencia, a través de comportamientos observables. Al usar textos para evidenciarlas, es importante considerar el tipo de texto según el nivel de competencia esperado.
</p>
</div>
<div class="help-item mt-3">
    <i class="fas fa-check-circle"></i>
    <p><strong>Resultados de Aprendizaje:</strong>Expresan la forma en la cual se evidenciará el cumplimiento de la competencia. Son comportamientos manifiestos, evidencias representativas, señales, pistas, rasgos o conjuntos de rasgos observables en el desempeño. 

Si va a utilizar textos escritos para evidenciar las competencias específicas, tenga en cuenta el tipo de texto que va a exigir, según el nivel de competencia esperado (cuadro de ejemplos de textos por nivel de competencia).
</p>
</div>

    `,


    'competencias-genericas-transversales': `
        <h5><i class="fas fa-info-circle"></i> Ayuda: Competencias Genéricas Transversales</h5>
        <p>Encuentra información útil sobre cómo llenar la sección de Competencias Genéricas Transversales:</p>
        <div class="help-item"><i class="fas fa-lightbulb"></i><p><strong>Competencias Genéricas:</strong> Describe las competencias generales que son aplicables a múltiples áreas de estudio.</p></div>

         <div class="help-item"><i class="fas fa-graduation-cap"></i><p><strong>Resultado de Aprendizaje:</strong> Para completar esta sección, siga estos pasos:

Especifique el curso: En cada resultado de aprendizaje, reemplace el espacio en blanco con el nombre de la asignatura correspondiente.

Personalización del resultado: Asegúrese de que los resultados reflejen el desarrollo y las expectativas específicas del curso, tales como el uso adecuado del lenguaje, la claridad y coherencia en la redacción, y la autenticidad en el trabajo, respetando las normas de derechos de autor.

Ejemplo:

"El estudiante Grancolombiano escribe los textos exigidos para el desarrollo de la asignatura Comunicación Escrita haciendo uso adecuado de las reglas ortográficas, demostrando respeto por la lengua castellana."
.</p></div>
    `,


    'consistencia-curricular': `
        <h5><i class="fas fa-info-circle"></i> Ayuda: Consistencia Curricular</h5>
<p>Encuentra información útil sobre cómo llenar la sección de Consistencia Curricular:</p>
<div class="help-item">
    <i class="fas fa-star"></i>
    <p><strong>Horizontal:</strong> Describe la coherencia y alineación de los contenidos del curso en relación con otros cursos del mismo semestre.</p>
</div>
<div class="help-item mt-3">
    <i class="fas fa-star"></i>
    <p><strong>Vertical:</strong> Detalla la conexión y progresión de los contenidos del curso con los niveles anteriores y posteriores del programa.</p>
</div>
<div class="help-item mt-3">
    <i class="fas fa-random"></i>
    <p><strong>Transversal:</strong> Explica cómo el curso integra conocimientos y habilidades de otras áreas o disciplinas.</p>
</div>

    `,


    'aportes-curso-proyecto-integrador': `
    <h5><i class="fas fa-info-circle"></i> Ayuda: Aportes del Curso al Proyecto Integrador</h5>
    <p>Encuentra información útil sobre cómo llenar la sección de Aportes del Curso al Proyecto Integrador:</p>
    <div class="help-item">
        <i class="fas fa-lightbulb"></i>
        <p><strong>Saberes y Habilidades:</strong> Describe los conocimientos y habilidades que el curso aporta al proyecto integrador.</p>
    </div>
    <div class="help-item mt-3">
        <i class="fas fa-link"></i>
        <p><strong>Estrategias de Articulación:</strong> Explica las estrategias utilizadas para vincular el curso con el proyecto integrador y cómo estas estrategias facilitan la integración.</p>
    </div>
    `,


    'plan-tematico': `
        <h5><i class="fas fa-info-circle"></i> Ayuda: Plan Temático</h5>
        <p>Encuentra información útil sobre cómo llenar la sección de Plan Temático:</p>
        <div class="help-item"><i class="fas fa-list-alt"></i><p><strong>Plan Temático:</strong> Describe los temas y subtemas del curso.</p></div>
    `,


    'medios-educativos': `
        <h5><i class="fas fa-info-circle"></i> Ayuda: Medios Educativos</h5>
        <p>Encuentra información útil sobre cómo llenar la sección de Medios Educativos:</p>
        <div class="help-item"><i class="fas fa-chalkboard-teacher"></i><p><strong>Medios Educativos:</strong> Describe los recursos y materiales educativos que se utilizarán.</p></div>
    `,


    'material-apoyo': `
        <h5><i class="fas fa-info-circle"></i> Ayuda: Material de Apoyo</h5>
        <p>Encuentra información útil sobre cómo llenar la sección de Material de Apoyo:</p>
        <div class="help-item"><i class="fas fa-book-open"></i><p><strong>Material de Apoyo:</strong> Lista los materiales de apoyo adicionales.</p></div>
    `,


    'plan-lector': `
        <h5><i class="fas fa-info-circle"></i> Ayuda: Plan Lector</h5>
        <p>Encuentra información útil sobre cómo llenar la sección de Plan Lector:</p>
        <div class="help-item"><i class="fas fa-book-reader"></i><p><strong>Plan Lector:</strong> Detalla el plan de lecturas obligatorias.</p></div>
    `,


    'mecanismos-evaluacion': `
        <h5><i class="fas fa-info-circle"></i> Ayuda: Mecanismos de Evaluación</h5>
        <p>Encuentra información útil sobre cómo llenar la sección de Mecanismos de Evaluación:</p>
        <div class="help-item"><i class="fas fa-clipboard-check"></i><p><strong>Mecanismos de Evaluación:</strong> Describe los métodos de evaluación que se utilizarán.</p></div>
    `,


    'instrumentos-evaluacion': `
        <h5><i class="fas fa-info-circle"></i> Ayuda: Instrumentos de Evaluación</h5>
        <p>Encuentra información útil sobre cómo llenar la sección de Instrumentos de Evaluación:</p>
        <div class="help-item"><i class="fas fa-poll-h"></i><p><strong>Instrumentos de Evaluación:</strong> Detalla los instrumentos específicos para evaluar el desempeño de los estudiantes.</p></div>
    `,


    'perfil-docente': `
        <h5><i class="fas fa-info-circle"></i> Ayuda: Perfil del Docente</h5>
        <p>Encuentra información útil sobre cómo llenar la sección de Perfil del Docente:</p>
        <div class="help-item"><i class="fas fa-user-tie"></i><p><strong>Perfil del Docente:</strong> Describe las competencias y experiencias que debe tener el docente del curso.</p></div>
    `
};

// Función para actualizar el contenido de ayuda
function updateHelpContent(section) {
    console.log("Sección:", section);
    const helpSection = document.querySelector('.help-section');
    helpSection.innerHTML = helpContent[section] || '<h5><i class="fas fa-info-circle"></i> Ayuda</h5><p>No hay información de ayuda disponible para esta sección.</p>';
}

// Agregar el evento click a los enlaces del menú lateral
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const section = this.getAttribute('data-section');
        updateHelpContent(section);
    });
});

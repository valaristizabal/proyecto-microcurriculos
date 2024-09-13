

// Función para mostrar el perfil del docente
function showTeacherProfile() {
    const content = `
        <div class="container mt-4">
            <h2 class="h4 mb-4">
                <i class="fas fa-user-tie"></i> Perfil del Docente
            </h2>
            <form id="perfil-docente-form">
                <div class="form-group">
                    <label for="perfil-docente">
                        <i class="fas fa-user-edit"></i> Perfil docente
                    </label>
                    <textarea class="form-control" id="perfil-docente" rows="10" placeholder="Ingrese el perfil que se busca en el docente que dicte el espacio académico"
                        oninput="guardarDatosPerfilDocente()"></textarea>
                </div>
                <div class="form-group text-right mt-4">
                    <button type="button" class="btn btn-secondary" onclick="showEvaluationInstruments()">
                        <i class="fas fa-arrow-left"></i> Volver
                    </button>
                    <button type="button" class="btn btn-primary" onclick="enviarDatosMicrocurriulo()">
                        <i class="fas fa-check-circle"></i> Finalizar
                    </button>
                    <button type="button" class="btn btn-success" onclick="limpiarCamposPerfilDocente()">
                        <i class="fas fa-trash-alt"></i> Limpiar campos
                    </button>
                </div>
            </form>
        </div>
    `;
    document.getElementById('content-section').innerHTML = content;
    updateActiveNavLink('perfil-docente');

    // Cargar los datos almacenados en localStorage al cargar el formulario
    cargarDatosPerfilDocente();
}


function updateActiveNavLink(section) {
    // Elimina la clase 'active' de todos los enlaces de navegación
    document.querySelectorAll('.main-sidebar .nav-link').forEach(link => {
        link.classList.remove('active-custom');
    });

    // Agrega la clase 'active' al enlace correspondiente
    const activeLink = document.querySelector(`.main-sidebar .nav-link[data-section="${section}"]`);
    if (activeLink) {
        activeLink.classList.add('active-custom');
    } else {
        console.error(`No se encontró el enlace para la sección: ${section}`);
    }
}

function guardarDatosPerfilDocente() {
    const perfilDocente = document.getElementById('perfil-docente').value;

    // Almacena los datos en localStorage
    localStorage.setItem('perfilDocente', perfilDocente);

    console.log('Datos del perfil del docente guardados');
}

function cargarDatosPerfilDocente() {
    const perfilDocente = localStorage.getItem('perfilDocente');
    
    if (perfilDocente !== null) {
        document.getElementById('perfil-docente').value = perfilDocente;
    }
}

function limpiarCamposPerfilDocente() {
    // Limpiar el campo del perfil docente
    document.getElementById('perfil-docente').value = '';

    // También puedes eliminar los datos almacenados en localStorage
    localStorage.removeItem('perfilDocente');

    console.log('Campos del perfil del docente limpiados');
}

//ENVIAR A LA BASE DE DATOS AL FINALIZAR

function enviarDatosMicrocurriulo(){
    /*PARTE DE IDENTIFICACIÓN*/
    const codigoParteUno = localStorage.getItem('codigo-parte-uno');
    const codigoParteDos = localStorage.getItem('codigo-parte-dos');
    const codigoParteTres = localStorage.getItem('codigo-parte-tres');
    const codigoCompleto = `${codigoParteUno}${codigoParteDos}${codigoParteTres}`;
    const facultad = localStorage.getItem('facultad');
    const programa = localStorage.getItem('programa');
    const idioma = localStorage.getItem('idioma');
    const nombreCurso = localStorage.getItem('nombre-curso'); 
    const fechaUltimaActualizacion = new Date().toISOString().split("T")[0];
    const fechaAprobacion = localStorage.getItem('fecha-aprobacion');
    const elaboradoPor = localStorage.getItem('elaborado-por');
    const tipoCredito = localStorage.getItem('tipo-credito');
    const numeroCreditos = localStorage.getItem('numero-credito');
    const semestre = localStorage.getItem('semestre');
    const prerrequisitos = localStorage.getItem('prerrequisitos');
    const saberesCompetencias = localStorage.getItem('saberes-competencias');

    //instrumentos de evaluación
    const evaluationRubric = 'Rúbrica de evaluación de desempeños (Esta rúbrica se desarrolla en el plan de aprendizaje)';

    //perfil docente
    const perfilDocente = localStorage.getItem('perfilDocente');

    /*PARTE DE PROPOSITOS FORMATIVOS*/
    
    const competenciasGraduado = localStorage.getItem('competencias-graduado');
    const resultadosAprendizajeGraduado = localStorage.getItem('resultados-aprendizaje-graduado');
    const aporteCursoPerfilGraduado = localStorage.getItem('aporte-curso-perfil-graduado');
    const competenciaPrincipal = localStorage.getItem('competencia-principal');
    const resultadosCompetenciaPrincipal = localStorage.getItem('resultados-competencia-principal');

    /*PARTE DE COMPETENCIAS ESPECIFCA DEL CURSO*/
    
    const competenciasEspecificas = localStorage.getItem('competencias-especificas');
    const resultadosAprendizajeCompetenciasEspecificas = localStorage.getItem('resultados-aprendizaje-competencias-especificas');

    /*PARTE DE COMPETENCIAS GENÉRICAS TRANSVERSALES*/
    
    const competenciasGenericas = localStorage.getItem('competencias-genericas-1');
    const resultadosAprendizajeGenerica = localStorage.getItem('resultados-aprendizaje-generico-1');

    /*PARTE DE CONSISTENCIA CURRICULAR*/

    const horizontal = localStorage.getItem('horizontal');
    const vertical = localStorage.getItem('vertical');
    const transversal = localStorage.getItem('transversal');

    /*PARTE DE APORTES DEL CURSO AL PROYECTO INTEGRADOR*/
    
    const saberesHabilidades = localStorage.getItem('saberes-habilidades');
    const estrategiasArticulacion = localStorage.getItem('estrategias-articulacion');

    /*PARTE DE PLAN TEMÁTICO*/
    
    const nombrePlanTematico = localStorage.getItem('nombre-plan-tematico');
    const ejesTematicos = localStorage.getItem('ejes-tematicos');
    const observacion = localStorage.getItem('observacion');

    /*PARTE DE MEDIOS EDUCATIVOS*/
    
    const tipoRecurso = localStorage.getItem('recurso-educativo');
    const ubicacionConvenio = localStorage.getItem('ubicacion-convenio');

    /*PARTE MATERIAL DE APOYO*/

    const bibliografia = localStorage.getItem('bibliografia');
    const ubicacion = localStorage.getItem('ubicacion');

    /*PARTE PLAN LECTOR*/
    
    const lecturaObligatoria = localStorage.getItem('lectura-obligatoria');
    const estrategiasSeguimiento = localStorage.getItem('estrategias-seguimiento');

    /*PARTE MECANISMOS DE EVALUACIÓN*/

    
    const resultadosAprendizaje = localStorage.getItem('resultados-aprendizaje');
    const mecanismosEvaluacion = localStorage.getItem('mecanismos-evaluacion');

    //guardados en la tabla Microcurriculos
    const identificacionMicrucurriculos= {
        id_materia: codigoCompleto,
        cod_facultad: facultad,
        cod_programa: programa,
        idioma: idioma,
        nombre_curso: nombreCurso,
        fecha_ultima_actualizacion: fechaUltimaActualizacion,
        fecha_aprobacion: fechaAprobacion,
        cedula_elaboro: elaboradoPor,
        tipo_credito: tipoCredito,
        nro_creditos: numeroCreditos,
        semestre: semestre,
        prerrequisitos: prerrequisitos,
        saberes_competencias_previas: saberesCompetencias,
        instrumentos_evaluacion: evaluationRubric,
        perfil_docente: perfilDocente
    }
    console.log(identificacionMicrucurriculos); 

    //guardados en la tabla PropositosFormativos y sus subtablas
    const propositosFormativosMicrocurriculos = {
        competencias_graduado_asociadas_curso: competenciasGraduado, //subtabla
        resultados_aprendizaje_graduado_asociados_curso: resultadosAprendizajeGraduado, //subtabla
        aporte_perfil_graduado: aporteCursoPerfilGraduado,
        competencia_principal_curso: competenciaPrincipal,
        resultados_aprendizaje_competencia_principal_curso: resultadosCompetenciaPrincipal
    }

    //guardados en la tabla CompetenciasEspecificasGenericas y sus subtablas
    const competenciasEspecificasMicrocurriculos = {
        descripcion_competencia_especifica: competenciasEspecificas, //subtabla
        indicadores_competencia_especifica: resultadosAprendizajeCompetenciasEspecificas //subtabla
    }

    console.log(competenciasEspecificasMicrocurriculos); 
    //guardados en la tabla CompetenciasEspecificasGenericas y sus subtablas
    const competenciasGenericasMicrocurriculos = {
        descripcion_competencia_generica: competenciasGenericas, //subtabla
        indicadores_competencia_generica: resultadosAprendizajeGenerica //subtabla
    }
    console.log(competenciasGenericasMicrocurriculos); 

    //guardados en la tabla ConsistenciaCurricular
    const consistenciaCurricularMicrocurriculos = {
        horizontal: horizontal,
        vertical: vertical,
        transversal: transversal
    }

    //guardados en la tabla AportesCursoProyectoIntegrador y sus subtablas
    const proyectoIntegradorMicrocurriculos = {
        saberes_habilidades: saberesHabilidades, //subtabla
        estrategias_articulacion: estrategiasArticulacion //subtabla
    }

    //guardados en la tabla PlanesTematicos y sus subtablas
    const planTematicoMicrocurriculos = {
        nombre_plan_tematico: nombrePlanTematico,
        ejes_tematicos: ejesTematicos, //subtabla - actividad eje temático en la subtabla
        observacion: observacion
    }

    //guardados en la tabla MediosEducativosMaterialesApoyo
    const mediosEducativosMicrocurriculos = {
        tipo_recurso: tipoRecurso,
        ubicacion_convenio: ubicacionConvenio
    }
    
    //guardados en la tabla MediosEducativosMaterialesApoyo
    const materialApoyoMicrocurriculos = {
        bibliografia: bibliografia,
        ubicacion: ubicacion
    }

    //guardados en la tabla PlanesLectores

    const planLectorMicrocurriculos = {
        texto_lectura_obligatoria: lecturaObligatoria,
        citacion_normas_APA: lecturaObligatoria,
        estrategia_seguimiento: estrategiasSeguimiento
    }
    console.log(planLectorMicrocurriculos); 

    //guardados en la tabla MecanismosEvaluacion y sus subtablas
    const mecanismosEvaluacionMicrocurriculos = {
        resultados_aprendizaje_mecanismos_evaluacion: resultadosAprendizaje, //subtabla
        descripcion_mecanismos_evaluacion: mecanismosEvaluacion //subtabla
    }


    const dataEnviar = {
        identificacionMicrucurriculos,
        propositosFormativosMicrocurriculos,
        competenciasEspecificasMicrocurriculos,
        competenciasGenericasMicrocurriculos,
        consistenciaCurricularMicrocurriculos,
        proyectoIntegradorMicrocurriculos,
        planTematicoMicrocurriculos,
        mediosEducativosMicrocurriculos,
        materialApoyoMicrocurriculos,
        planLectorMicrocurriculos,
        mecanismosEvaluacionMicrocurriculos
    }

    fetch('/guardar-microcurriculo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataEnviar)
    })
    .then(response => response.json())
    .then(dataEnviar => {
        Swal.fire({
            icon: 'success',
            title: '¡Éxito!',
            text: 'Su microcurrículo se ha guardado exitosamente.',
        });
    })
    .catch((error) => {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Hubo un problema al guardar el microcurrículo.',
        });
        console.error('Error:', error);
    });
   
}
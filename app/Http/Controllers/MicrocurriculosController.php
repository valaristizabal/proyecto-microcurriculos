<?php

namespace App\Http\Controllers;

use App\Models\AportesCursoProyectoIntegrador;
use App\Models\CompetenciasEspecificas;
use App\Models\CompetenciasEspecificasGenericas;
use App\Models\CompetenciasGenericas;
use App\Models\CompetenciasGraduadoAsociadasCurso;
use App\Models\ConsistenciaCurricular;
use App\Models\DescripcionCompetencia;
use App\Models\DescripcionCompetenciaEspecifica;
use App\Models\DescripcionCompetenciaGenerica;
use App\Models\DescripcionMecanismoEvaluacion;
use App\Models\EjesTematicos;
use App\Models\EstrategiasArticulacion;
use App\Models\IndicadoresCompetencia;
use App\Models\IndicadoresCompetenciaEspecifica;
use App\Models\IndicadoresCompetenciaGenerica;
use App\Models\MaterialApoyo;
use App\Models\MecanismosEvaluacion;
use App\Models\MediosEducativos;
use App\Models\MediosEducativosMaterialesApoyo;
use App\Models\Microcurriculos;
use App\Models\PlanesLectores;
use App\Models\PlanesTematicos;
use App\Models\PropositosFormativos;
use App\Models\ResultadosAprendizajeCompetenciaPrincipalCurso;
use App\Models\ResultadosAprendizajeGraduadoAsociadosCurso;
use App\Models\ResultadosAprendizajeMecanismoEvaluacion;
use App\Models\SaberesHabilidades;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class MicrocurriculosController extends Controller{
    public function guardarMicrocurriculo(Request $request){
        $validatedData = $request->validate([
            'identificacionMicrucurriculos' => 'required|array',
            'propositosFormativosMicrocurriculos' => 'required|array',
            'competenciasEspecificasMicrocurriculos' => 'required|array',
            'competenciasGenericasMicrocurriculos' => 'required|array',
            'consistenciaCurricularMicrocurriculos' => 'required|array',
            'proyectoIntegradorMicrocurriculos' => 'required|array',
            'planTematicoMicrocurriculos' => 'required|array',
            'mediosEducativosMicrocurriculos' => 'required|array',
            'materialApoyoMicrocurriculos' => 'required|array',
            'planLectorMicrocurriculos' => 'required|array',
            'mecanismosEvaluacionMicrocurriculos' => 'required|array',
        ]);

        DB::beginTransaction();
        try{
            $identificacionMicrocurriculosData = $validatedData['identificacionMicrucurriculos'];
            $propositosFormativosMicrocurriculosData = $validatedData['propositosFormativosMicrocurriculos'];
            $competenciasEspecificasMicrocurriculosData = $validatedData['competenciasEspecificasMicrocurriculos'];
            $competenciasGenericasMicrocurriculosData = $validatedData['competenciasGenericasMicrocurriculos'];
            $consistenciaCurricularMicrocurriculosData = $validatedData['consistenciaCurricularMicrocurriculos'];
            $proyectoIntegradorMicrocurriculosData = $validatedData['proyectoIntegradorMicrocurriculos'];
            $planTematicoMicrocurriculosData = $validatedData['planTematicoMicrocurriculos'];
            $mediosEducativosMicrocurriculosData = $validatedData['mediosEducativosMicrocurriculos'];
            $materialApoyoMicrocurriculosData = $validatedData['materialApoyoMicrocurriculos'];
            $planLectorMicrocurriculosData = $validatedData['planLectorMicrocurriculos'];
            $mecanismosEvaluacionMicrocurriculosData = $validatedData['mecanismosEvaluacionMicrocurriculos'];


            //subtablas de propositos formativos
            $competenciasGraduadoAsociadasCurso = CompetenciasGraduadoAsociadasCurso::create([
                'descripcion_competencias_graduado_asociadas_curso' => $propositosFormativosMicrocurriculosData['competencias_graduado_asociadas_curso']
            ]);

            $resultadosAprendizajeGraduadoAsociadosCurso = ResultadosAprendizajeGraduadoAsociadosCurso::create([
                'descripcion_resultados_aprendizaje_graduado_asociados_curso' => $propositosFormativosMicrocurriculosData['resultados_aprendizaje_graduado_asociados_curso']
            ]);

            $resultadosAprendizajeCompetenciaPrincipalCurso = ResultadosAprendizajeCompetenciaPrincipalCurso::create([
                'descripcion_resultados_aprendizaje_competencia_principal_curso' => $propositosFormativosMicrocurriculosData['resultados_aprendizaje_competencia_principal_curso']
            ]);

            //subtablas de competencias especificas

            $descripcionCompetenciaEspecifica = DescripcionCompetenciaEspecifica::create([
                'descripcion_competencia_especifica' => $competenciasEspecificasMicrocurriculosData['descripcion_competencia_especifica']
            ]);

            $indicadoresCompetenciaEspecifica = IndicadoresCompetenciaEspecifica::create([
                'descripcion_indicadores_competencia_especifica' => $competenciasEspecificasMicrocurriculosData['indicadores_competencia_especifica']
            ]);

            //subtablas de competencias genéricas

            $descripcionCompetenciaGenerica = DescripcionCompetenciaGenerica::create([
                'descripcion_competencia_generica' => $competenciasGenericasMicrocurriculosData['descripcion_competencia_generica']
            ]);

            $indicadoresCompetenciaGenerica = IndicadoresCompetenciaGenerica::create([
                'descripcion_indicadores_competencia_generica' => $competenciasGenericasMicrocurriculosData['indicadores_competencia_generica']
            ]);

            //subtablas de aportes curso proyecto integrador

            $saberesHabilidades = SaberesHabilidades::create([
            'descripcion_saberes_habilidades' => $proyectoIntegradorMicrocurriculosData['saberes_habilidades']
            ]);

            $estrategiasArticulacion = EstrategiasArticulacion::create([
                'descripcion_estrategias_articulacion' => $proyectoIntegradorMicrocurriculosData['estrategias_articulacion']
            ]);

            //subtabla de plan tematico

            $ejesTematicos = EjesTematicos::create([
                'actividad_eje_tematico'=> $planTematicoMicrocurriculosData['ejes_tematicos']
            ]);
        
            //subtablas de mecanismos de evaluación

            $resultadosAprendizajeMecanismoEvaluacion = ResultadosAprendizajeMecanismoEvaluacion::create([
                'descripcion_resultados_aprendizaje_mecanismo_evaluacion' => $mecanismosEvaluacionMicrocurriculosData['resultados_aprendizaje_mecanismos_evaluacion']
            ]);

            $descripcionMecanismoEvaluacion = DescripcionMecanismoEvaluacion::create([
                'descripcion_mecanismo_evaluacion' => $mecanismosEvaluacionMicrocurriculosData['descripcion_mecanismos_evaluacion']
            ]);

            //tabla de propositos formativos completa
            $propositosFormativos = PropositosFormativos::create([
                'id_competencias_graduado_asociadas_curso' => $competenciasGraduadoAsociadasCurso->id_competencias_graduado_asociadas_curso,
                'id_resultados_aprendizaje_graduado_asociados_curso' => $resultadosAprendizajeGraduadoAsociadosCurso->id_resultados_aprendizaje_graduado_asociados_curso,
                'id_resultados_aprendizaje_competencia_principal_curso' => $resultadosAprendizajeCompetenciaPrincipalCurso->id_resultados_aprendizaje_competencia_principal_curso,
                'aporte_perfil_graduado' => $propositosFormativosMicrocurriculosData['aporte_perfil_graduado'],
                'competencia_principal_curso' => $propositosFormativosMicrocurriculosData['competencia_principal_curso']
            ]);

            //tabla de competencias especificas completa
            $competenciasEspecificas = CompetenciasEspecificas::create([
                'id_descripcion_competencia_especifica' =>$descripcionCompetenciaEspecifica->id_descripcion_competencia_especifica,
                'id_indicadores_competencia_especifica' => $indicadoresCompetenciaEspecifica->id_indicadores_competencia_especifica
            ]);

            
            //tabla de competencias genéricas transversales completa
            
            $competenciasGenericas = CompetenciasGenericas::create([
                'id_descripcion_competencia_generica' =>$descripcionCompetenciaGenerica->id_descripcion_competencia_generica,
                'id_indicadores_competencia_generica' => $indicadoresCompetenciaGenerica->id_indicadores_competencia_generica
            ]);

            

            //tabla de consistencia curricular completa

            $consistenciaCurricular = ConsistenciaCurricular::create([
                'horizontal' => $consistenciaCurricularMicrocurriculosData['horizontal'],
                'vertical' => $consistenciaCurricularMicrocurriculosData['vertical'],
                'transversal' => $consistenciaCurricularMicrocurriculosData['transversal']
            ]);

            //tabla de proyecto integrador completa

            $proyectoIntegrador = AportesCursoProyectoIntegrador::create([
                'id_saberes_habilidades' => $saberesHabilidades->id_saberes_habilidades,
                'id_estrategias_articulacion' => $estrategiasArticulacion->id_estrategias_articulacion
            ]);

            //tabla de plan temático completa

            $planTematico = PlanesTematicos::create([
                'id_ejes_tematicos' => $ejesTematicos->id_ejes_tematicos,
                'nombre_plan_tematico'=> $planTematicoMicrocurriculosData['nombre_plan_tematico'],
                'observacion' => $planTematicoMicrocurriculosData['observacion']
            ]);

            //tabla de medios educativos completa

            $mediosEducativos = MediosEducativos::create([
                'tipo_recurso' => $mediosEducativosMicrocurriculosData['tipo_recurso'],
                'ubicacion_convenio'=> $mediosEducativosMicrocurriculosData['ubicacion_convenio']
            ]);

            //tabla de material de apoyo completa
            $materialApoyo = MaterialApoyo::create([
                'bibliografia' => $materialApoyoMicrocurriculosData['bibliografia'],
                'ubicacion'=> $materialApoyoMicrocurriculosData['ubicacion']
            ]);

            //tabla de plan lector completa
            $planLector = PlanesLectores::create([
                'texto_lectura_obligatoria' => $planLectorMicrocurriculosData['texto_lectura_obligatoria'],
                'citacion_normas_APA' => $planLectorMicrocurriculosData['citacion_normas_APA'],
                'estrategia_seguimiento' => $planLectorMicrocurriculosData['estrategia_seguimiento']
            ]);

            //tabla de mecanismos de evaluación completa
            $mecanismoEvaluacion = MecanismosEvaluacion::create([
                'id_resultados_aprendizaje_mecanismo_evaluacion' => $resultadosAprendizajeMecanismoEvaluacion->id_resultados_aprendizaje_mecanismo_evaluacion,
                'id_descripcion_mecanismo_evaluacion' => $descripcionMecanismoEvaluacion->id_descripcion_mecanismo_evaluacion
            ]);

            //tabla de microcurriculos

            $microcurriculos = Microcurriculos::create([
                'id_materia' => $identificacionMicrocurriculosData['id_materia'],
                'cod_facultad' => $identificacionMicrocurriculosData['cod_facultad'],
                'cod_programa' => $identificacionMicrocurriculosData['cod_programa'],
                'idioma' => $identificacionMicrocurriculosData['idioma'],
                'nombre_curso' => $identificacionMicrocurriculosData['nombre_curso'],
                'fecha_ultima_actualizacion' => $identificacionMicrocurriculosData['fecha_ultima_actualizacion'],
                'fecha_aprobacion' => $identificacionMicrocurriculosData['fecha_aprobacion'],
                'cedula_elaboro' => $identificacionMicrocurriculosData['cedula_elaboro'],
                'cedula_reviso' => isset($identificacionMicrocurriculosData['cedula_reviso']) ? $identificacionMicrocurriculosData['cedula_reviso'] : null,
                'tipo_credito' => $identificacionMicrocurriculosData['tipo_credito'],
                'nro_creditos' => $identificacionMicrocurriculosData['nro_creditos'],
                'semestre' => $identificacionMicrocurriculosData['semestre'],
                'prerrequisitos' => $identificacionMicrocurriculosData['prerrequisitos'],
                'saberes_competencias_previas' => $identificacionMicrocurriculosData['saberes_competencias_previas'],
                'instrumentos_evaluacion' => $identificacionMicrocurriculosData['instrumentos_evaluacion'],
                'perfil_docente' => $identificacionMicrocurriculosData['perfil_docente'],
                'id_propositos_formativos' => $propositosFormativos->id_propositos_formativos,
                'id_competencias_especificas' => $competenciasEspecificas->id_competencias_especificas,
                'id_competencias_genericas' => $competenciasGenericas->id_competencias_genericas,
                'id_consistencia_curricular' => $consistenciaCurricular->id_consistencia_curricular,
                'id_aportes_curso_proyecto_integrador' => $proyectoIntegrador->id_aportes_curso_proyecto_integrador,
                'id_plan_tematico' => $planTematico->id_plan_tematico,
                'id_medios_educativos' => $mediosEducativos->id_medios_educativos,
                'id_material_apoyo' => $materialApoyo->id_material_apoyo,
                'id_plan_lector' => $planLector->id_plan_lector,
                'id_mecanismo_evaluacion' => $mecanismoEvaluacion->id_mecanismo_evaluacion
                ]);
                DB::commit();
                return response()->json([
                    'data' => $microcurriculos
                ]);
             } catch (\Exception $e) {
                DB::rollBack();
                Log::error($e->getMessage()); // Esto guardará el error en el archivo de log.
                return response()->json(['error' => 'Ocurrió un error al guardar'], 500);
            }
        }
    }
    
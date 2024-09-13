document.addEventListener('DOMContentLoaded', function () {
    const sections = [
        'showIdentification',
        'showCurricularStructure',
        'showEducationalPurposes',
        'showCompetenciasEspecificas',
        'showGenericCompetencies',
        'showConsistencyCurricular',
        'showCourseContributions',
        'showThematicPlan',
        'showEducationalMedia',
        'showSupportMaterials',
        'showReadingPlan',
        'showEvaluationMechanisms',
        'showEvaluationInstruments',
        'showTeacherProfile'
    ];
    
    let completedSections = [];

    sections.forEach(section => {
        const link = document.querySelector(`.nav-link[onclick="${section}()"]`);
        if (link) {
            link.addEventListener('click', () => {
                if (!completedSections.includes(section)) {
                    completedSections.push(section);
                    updateProgressBar();
                }
            });
        }
    });

    function updateProgressBar() {
        const progress = (completedSections.length / sections.length) * 100;
        const progressBar = document.getElementById('progress-bar');
        progressBar.style.width = `${progress}%`;
        progressBar.setAttribute('aria-valuenow', progress);
        progressBar.innerText = `${Math.round(progress)}%`;
    }
});

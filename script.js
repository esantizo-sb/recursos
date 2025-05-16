document.addEventListener('DOMContentLoaded', function() {
    // Set current year in the footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Apply animations to elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.card, .step, .welcome-content, .welcome-image');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('fade-in');
                
                // Add a slight delay for the sliding animation
                setTimeout(() => {
                    element.classList.add('slide-up');
                }, 100);
            }
        });
    };
    
    // Run animation check on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Initial check for elements in view
    animateOnScroll();
    
    // Modal functionality
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = document.querySelector('.close');
    
    // Function to open modal with specific content
    function openModal(title, content) {
        modalTitle.textContent = title;
        modalBody.innerHTML = content;
        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    }
    
    // Close modal function
    function closeModal() {
        modal.classList.remove('show');
        setTimeout(() => {
            modalTitle.textContent = '';
            modalBody.innerHTML = '';
        }, 300);
        document.body.style.overflow = ''; // Re-enable scrolling
    }
    
    // Close modal when clicking the X button
    closeBtn.addEventListener('click', closeModal);
    
    // Close modal when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // Footer links functionality
    document.getElementById('privacy-link').addEventListener('click', function(e) {
        e.preventDefault();
        openModal('Política de Privacidad', `
            <p>Este portal está diseñado para uso exclusivo del personal autorizado de la institución educativa.</p>
            <p>La información contenida en los recursos enlazados debe tratarse con confidencialidad y utilizarse únicamente para fines educativos y administrativos dentro del marco de la institución.</p>
            <p>No se permite la distribución, copia o modificación de los recursos sin la autorización expresa del Prof. Elvis Santizo.</p>
        `);
    });
    
    document.getElementById('terms-link').addEventListener('click', function(e) {
        e.preventDefault();
        openModal('Términos de Uso', `
            <p>Al utilizar este portal, usted acepta:</p>
            <ul>
                <li>Utilizar los recursos únicamente para los fines educativos y administrativos previstos.</li>
                <li>No compartir sus credenciales de acceso con personas no autorizadas.</li>
                <li>Mantener la confidencialidad de la información de los estudiantes.</li>
                <li>Reportar cualquier uso indebido o problema técnico al administrador.</li>
                <li>Respetar los derechos de autor y propiedad intelectual de todos los materiales.</li>
            </ul>
        `);
    });
    
    document.getElementById('contact-link').addEventListener('click', function(e) {
        e.preventDefault();
        openModal('Contacto', `
            <p>Para consultas relacionadas con los recursos o el funcionamiento del portal, puede contactar a:</p>
            <div class="contact-info">
                <p><strong>Prof. Elvis Santizo</strong></p>
                <p><i class="fas fa-envelope"></i> correo@ejemplo.com</p>
                <p><i class="fas fa-phone"></i> (123) 456-7890</p>
                <p><i class="fas fa-building"></i> Departamento Académico</p>
            </div>
            <p class="contact-note">Horario de atención: Lunes a Viernes, 8:00 AM - 4:00 PM</p>
        `);
    });
    
    // Add hover effect to cards for better interaction
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.card-icon i');
            icon.style.transform = 'scale(1.2)';
            icon.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.card-icon i');
            icon.style.transform = 'scale(1)';
        });
    });
    
    // Add resource description modals for detailed information
    const resourceInfo = {
        'informe-rendimiento': {
            title: 'Informe de Bajo Rendimiento',
            content: `
                <p>Este recurso contiene documentos para el seguimiento y análisis del rendimiento académico de los estudiantes que presentan dificultades de aprendizaje o bajo desempeño escolar.</p>
                <h4>Contenido:</h4>
                <ul>
                    <li>Formatos para registro de estudiantes con bajo rendimiento</li>
                    <li>Plantillas para entrevistas con padres de familia</li>
                    <li>Formularios de seguimiento académico</li>
                    <li>Guías para implementación de estrategias de mejora</li>
                </ul>
                <h4>Instrucciones de uso:</h4>
                <ol>
                    <li>Identifique a los estudiantes que requieren seguimiento especial</li>
                    <li>Complete los formatos correspondientes con la información requerida</li>
                    <li>Documente las intervenciones realizadas y los resultados obtenidos</li>
                    <li>Actualice periódicamente los registros según el progreso observado</li>
                </ol>
            `
        },
        'notas-unidad': {
            title: 'Notas II Unidad',
            content: `
                <p>Repositorio de documentos relacionados con el registro y seguimiento de calificaciones correspondientes a la segunda unidad académica del periodo escolar.</p>
                <h4>Elementos incluidos:</h4>
                <ul>
                    <li>Planillas de registro de calificaciones</li>
                    <li>Criterios de evaluación aplicables</li>
                    <li>Rúbricas para actividades específicas</li>
                    <li>Informes de rendimiento por grupo</li>
                </ul>
                <h4>Recomendaciones:</h4>
                <p>Mantenga actualizado el registro de calificaciones siguiendo el calendario académico establecido. Asegúrese de aplicar los criterios de evaluación de manera consistente para todos los estudiantes.</p>
            `
        },
        'secundaria-planificacion': {
            title: 'Secundaria: Planificación Anual y Diario',
            content: `
                <p>Colección de documentos para la planificación educativa en el nivel de secundaria, incluyendo formatos para planificación anual y registro diario de actividades.</p>
                <h4>Componentes principales:</h4>
                <ul>
                    <li>Plantillas de planificación anual por asignatura</li>
                    <li>Formatos de planificación semanal y diaria</li>
                    <li>Guías para diseño de secuencias didácticas</li>
                    <li>Ejemplos de planes completos por área</li>
                </ul>
                <h4>Proceso recomendado:</h4>
                <ol>
                    <li>Revise el currículo oficial y adáptelo a su contexto</li>
                    <li>Complete la planificación anual al inicio del ciclo escolar</li>
                    <li>Derive las planificaciones semanales y diarias</li>
                    <li>Registre las adaptaciones y ajustes realizados durante la implementación</li>
                </ol>
            `
        },
        'primaria-planificacion': {
            title: 'Primaria: Planificación Anual y Diario',
            content: `
                <p>Recursos para la planificación educativa en el nivel primario, adaptados a las características específicas de este nivel educativo y a las necesidades de los estudiantes en esta etapa de desarrollo.</p>
                <h4>Documentos disponibles:</h4>
                <ul>
                    <li>Formatos de planificación anual por grado</li>
                    <li>Plantillas para registro diario de actividades</li>
                    <li>Guías para integración de competencias transversales</li>
                    <li>Recursos para adaptaciones curriculares</li>
                </ul>
                <h4>Aspectos a considerar:</h4>
                <p>En la planificación para nivel primario, es fundamental considerar el desarrollo integral de los estudiantes, incluyendo aspectos cognitivos, socioemocionales y psicomotrices. Los recursos proporcionados facilitan este enfoque holístico.</p>
            `
        },
        'revision-tareas': {
            title: 'Revisión de Tareas',
            content: `
                <p>Herramientas para la gestión eficiente del proceso de asignación, seguimiento y evaluación de tareas escolares, facilitando la retroalimentación oportuna a los estudiantes.</p>
                <h4>Recursos incluidos:</h4>
                <ul>
                    <li>Listas de verificación para revisión de tareas</li>
                    <li>Formatos para retroalimentación estructurada</li>
                    <li>Sistemas de registro del cumplimiento de tareas</li>
                    <li>Guías para asignación de tareas significativas</li>
                </ul>
                <h4>Beneficios:</h4>
                <p>La implementación sistemática de estos recursos permite optimizar el tiempo dedicado a la revisión de tareas, garantizar la consistencia en los criterios de evaluación y proporcionar información valiosa tanto a estudiantes como a padres de familia sobre el progreso académico.</p>
            `
        },
        'registro-notas': {
            title: 'Registro de Notas',
            content: `
                <p>Sistema centralizado para el registro, cálculo y análisis de calificaciones, diseñado para facilitar la gestión académica y el seguimiento del rendimiento de los estudiantes.</p>
                <h4>Características principales:</h4>
                <ul>
                    <li>Hojas de cálculo con fórmulas predefinidas</li>
                    <li>Sistema de ponderación de evaluaciones</li>
                    <li>Generación automática de estadísticas por grupo</li>
                    <li>Visualización de tendencias de rendimiento</li>
                </ul>
                <h4>Instrucciones básicas:</h4>
                <ol>
                    <li>Ingrese los datos de los estudiantes en la hoja correspondiente</li>
                    <li>Registre las calificaciones obtenidas en cada evaluación</li>
                    <li>Consulte los promedios y estadísticas generados automáticamente</li>
                    <li>Utilice las funciones de filtrado para análisis específicos</li>
                </ol>
            `
        },
        'reciclado-tareas': {
            title: 'Reciclado de Tareas por Unidad',
            content: `
                <p>Repositorio organizado de actividades y tareas clasificadas por unidad temática, que permite la reutilización y adaptación de recursos previamente desarrollados.</p>
                <h4>Organización del recurso:</h4>
                <ul>
                    <li>Clasificación por unidades temáticas</li>
                    <li>Categorización por nivel de complejidad</li>
                    <li>Agrupación por tipo de competencia desarrollada</li>
                    <li>Vinculación con recursos didácticos complementarios</li>
                </ul>
                <h4>Recomendaciones de uso:</h4>
                <p>Al reutilizar tareas de ciclos anteriores, considere realizar adaptaciones que respondan a las características específicas del grupo actual y a los resultados de aprendizaje observados. El reciclado de tareas debe entenderse como un punto de partida que requiere personalización.</p>
            `
        }
    };
    
    // Add click event for resource description
    cards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Only open modal if not clicking on the button
            if (!e.target.classList.contains('btn') && !e.target.closest('.btn')) {
                const resourceId = this.getAttribute('data-resource');
                const info = resourceInfo[resourceId];
                if (info) {
                    openModal(info.title, info.content);
                }
            }
        });
    });
    
    // Add Material Design ripple effect to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mousedown', function(e) {
            const ripple = document.createElement('span');
            const rect = button.getBoundingClientRect();
            
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size/2;
            const y = e.clientY - rect.top - size/2;
            
            ripple.style.width = ripple.style.height = `${size}px`;
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            ripple.classList.add('ripple');
            
            button.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

const searchBar = document.getElementById('resource-search');
if (searchBar) {
    searchBar.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const cards = document.querySelectorAll('.card');
        
        cards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('p').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

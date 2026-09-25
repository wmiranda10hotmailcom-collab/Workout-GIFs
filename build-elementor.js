const fs = require('fs');
const path = require('path');

const cssContent = fs.readFileSync(path.join(__dirname, 'styles.css'), 'utf8');
const jsContent = fs.readFileSync(path.join(__dirname, 'app.js'), 'utf8');
const htmlContent = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');

// Extraer el contenido del <body> de index.html
const bodyMatch = htmlContent.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
if (!bodyMatch) {
  console.error("No se pudo encontrar el tag <body>");
  process.exit(1);
}

let innerBody = bodyMatch[1];
// Remover el <script src="./app.js"></script> porque lo inyectaremos en línea
innerBody = innerBody.replace(/<script\s+src=["']\.\/app\.js["']\s*><\/script>/gi, '');

const elementorTemplate = `<!-- ==========================================================================
     ==========================================================================
     WORKOUT GIFS • NETFLIX-STYLE STREAMING MEMBERSHIP PLATFORM FOR ELEMENTOR
     ==========================================================================
     
     HOW TO USE IN ELEMENTOR:
     1. In Elementor, create a new page or template with full width ("Elementor Canvas" or "Elementor Full Width").
     2. Add an "HTML" widget (or shortcode).
     3. Copy ALL the code from this file and paste it into the HTML widget.
     4. Save and Publish. You're done! Your full streaming experience will be active.
     
     PROJECT CUSTOMIZATION VARIABLES (CUSTOM VARIABLES):
     NICHE: [NICHE] -> High-Performance Fitness, Biomechanics & Exercise Streaming
     TARGET AUDIENCE AGE: [AUDIENCE_AGE] -> 20 to 50 years old
     TARGET AUDIENCE GENDER: [AUDIENCE_GENDER] -> Unisex (Female & Male Training Modules)
     MEMBERSHIP AREA NAME: [MEMBERSHIP_NAME] -> Workout GIFs
     VISUAL STYLE: [VISUAL_STYLE] -> Netflix Dark Cinema Premium
     PRIMARY COLOR: [PRIMARY_COLOR] -> #E50914 (Crimson Netflix Red)
     SECONDARY COLOR: [SECONDARY_COLOR] -> #FF5A1F (Athletic Neon Orange)
     ========================================================================== -->

<!-- 1. TYPOGRAPHY & ICONS -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Poppins:wght@500;600;700;800;900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.1/css/all.min.css">

<!-- 2. ESTILOS CSS SCOPEADOS (AISLADOS PARA ELEMENTOR) -->
<style>
${cssContent}
</style>

<!-- 3. ESTRUCTURA HTML DE LA PLATAFORMA -->
<div class="ff-app-root">
${innerBody.trim()}
</div>

<!-- 4. LÓGICA JAVASCRIPT FRONT-END COMPLETA -->
<script>
(function() {
${jsContent}
})();
</script>
`;

fs.writeFileSync(path.join(__dirname, 'elementor-membership-template.html'), elementorTemplate, 'utf8');
console.log("¡elementor-membership-template.html generado exitosamente!");

// Este script garante que o tema e a música se mantenham iguais em todas as páginas
function verificarTema() {
    if (localStorage.getItem('tema') === 'dark') {
        document.body.classList.add('dark-mode');
        const icon = document.getElementById('themeIcon');
        if(icon) icon.innerText = '☀️';
    }
}

function toggleTheme() {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('tema', isDark ? 'dark' : 'light');
    const icon = document.getElementById('themeIcon');
    if(icon) icon.innerText = isDark ? '☀️' : '🌙';
}

// Aplica assim que o script carregar
verificarTema();

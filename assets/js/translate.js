// Tradutor
const toggleLanguageButton = document.getElementById('toggle-language');
let currentLanguage = 'pt-br';

toggleLanguageButton.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'pt-br' ? 'en' : 'pt-br';
    toggleLanguageButton.innerHTML = currentLanguage === 'pt-br' 
        ? '<i class="ri-global-line"></i> PT-BR' 
        : '<i class="ri-global-line"></i> EN';

    document.querySelectorAll('[data-lang]').forEach(element => {
        if (element.getAttribute('data-lang') === currentLanguage) {
            element.classList.remove('hidden');
        } else {
            element.classList.add('hidden');
        }
    });
});
var arrLang = {
  'en': {
    'about': 'About Us',
    'instructions' : 'Instructions',
    'news' : "News",
    'platforms' : 'Platforms',
    'faq' : 'FAQ',
    'contact': 'Contact Us',
    'languages': 'Languages',
    'en':'English',
    'es': 'Spanish',
    'homeMobile': 'Home',
    'aboutMobile': 'About Us',
    'instructionsMobile' : 'Instructions',
    'newsMobile' : "News",
    'platformsMobile' : 'Platforms',
    'faqMobile' : 'FAQ',
    'contactMobile': 'Contact Us',
    'languagesMobile': 'Languages',
    'login': 'Login',
    'registration': 'Registration'
    },
    'es': {
        'about': 'Sobre nosotros',
        'instructions' : 'Instrucciones',
        'news' : 'Noticias',
        'platforms' : 'Plataformas',
        'faq' : 'Preguntas frecuentes',
        'contact': 'Contáctenos',
        'languages': 'Idiomas',
        'en':'Inglés',
        'es': 'Español',
        'homeMobile': 'Inicio',
        'aboutMobile': 'Sobre nosotros',
        'instructionsMobile' : 'Instrucciones',
        'newsMobile' : 'Noticias',
        'platformsMobile' : 'Plataformas',
        'faqMobile' : 'Preguntas frecuentes',
        'contactMobile': 'Contáctenos',
        'languagesMobile': 'Idiomas',
        'login': 'Iniciar sesión',
        'registration': 'Registrate gratis',

    },
};

// Process translation

jQuery(document).ready(function($){
    $(function() {
        $('.translate').click(function() {
            var lang = $(this).attr('id');
            localStorage.setItem('selectedLanguage', lang);


            $('.lang').each(function(index, item) {
                $(this).text(arrLang[lang][$(this).attr('key')] ) ;
            });
        });
    });


    $(function() {
        $(".ruLang").on("click", function () {
            $(".ruLang").hide();
            $(".engLang").show();
        })

        $(".engLang").on("click", function () {
            $(".engLang").hide();
            $(".ruLang").show();
        })
    });

    let selectedLang = localStorage.getItem('selectedLanguage');

    if (selectedLang) {
        if (selectedLang == "es") {
            $(".ruLang").hide();
            $(".engLang").show();
        } else {
            $(".ruLang").show();
            $(".engLang").hide();
        }
        $('.lang').each(function(index, item) {
            $(this).text(arrLang[selectedLang][$(this).attr('key')] );
        });
    }
});


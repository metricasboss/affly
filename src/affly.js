(function(windowConversion, cookieName){

    var options = {
        windowConversion: cookieName || 30,
        cookieName: windowConversion || 'affly_origin'
    };

    /**
	 * Cria um objeto com os parametros encontrados na URL
	 * @private
	 * @returns {Object} com parametros encontrados na URL
     */
     var getQueryString = function(){
        var params = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
            params[key] = value;
        });

        return params;

    }

    var origin = getQueryString();

    /**
	 * Seta o cookie que controla o disparo no GTM
	 * @private
	 * @returns {Cookie} com a origem do acesso do usuario
    */
    var setAfflyOriginCookie = function(){
        if(origin.utm_source){
            var d = new Date();
                d.setTime(d.getTime() + (options.windowConversion * 24 * 60 * 60 * 1000));
            var expires = "expires="+ d.toUTCString();
            return document.cookie = "affly_origin" + "=" + origin.utm_source + ";" + expires + ";path=/";
        }
        return false;
    }

    /**
	 * Deleta o cookie setado pelo acesso do usuario
	 * @private
	 * @returns {Cookie} resetado
    */
    var deleteAfflyOriginCookie = function() {
        return document.cookie = 'affly_origin=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    };


    /**
	 * Deleta o cookie setado pelo acesso do usuario
	 * @private
	 * @returns {Cookie} resetado
    */
    var ifAfflyCookieExists = function(){
        var allCookiesAsArray = document.cookie.split(';');

        for(var i = 0; i < allCookiesAsArray.length; i++) {
            var cookie = allCookiesAsArray[i];
            while (cookie.charAt(0)==' ') {
                cookie = cookie.substring(1);
            }
            if (cookie.indexOf(options.cookieName) == 0) {
                return cookie.substring(name.length,cookie.length);
            }
        }
        return false;
    }

    /**
	 * Verifica a presença do google adwords no acesso
	 * @private
	 * @returns {boolean} caso o usuario venha do google ou nao
    */
    var checkPaidGoogleOrigin = function(){
        var referrer = document.referrer,
            patt = new RegExp("(https|http):\/\/www\.google\.com\.br");

        if(patt.test(referrer)){
            if((origin['utm_source'] === 'google' && origin['utm_medium'] === 'cpc') || origin['gclid']){
                return true;
            }
            return false;
        }
        return false;
    }

    var init = function(){
        if(!ifAfflyCookieExists()){
            setAfflyOriginCookie();
        }else if(checkPaidGoogleOrigin()){
            deleteAfflyOriginCookie();
        }
    }
    return init()
})();

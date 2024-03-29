	# affly.js

> Controlador de cookies para implementação de pixels de afiliados

## Por que?
Implementar pixels de afiliados não deveria ser algo difícil e além de não ter um monte de passos o mesmo deveria ser algo padrão entre todos os afiliados, hoje cada afiliado trata a implementação de pixels nos parceiros de uma maneira diferente e alguns na maioria das vezes ainda deixa na responsabilidade do cliente o controle de disparo do pixel.

Por isso criamos o Affly, um controlador de cookies que baseado na origem do acesso, marca a o navegador para o futuro disparo na hora da aquisição por parte do usuário.

## Instalação

Para realizar a instalação e configuração do mesmo será necessário a utilização do [Google Tag Manager](googletagmanager.com), caso você não esteja familiarizado com o google tag manager a [métricas boss](https://metricasboss.com.br/categorias/google-tag-manager?utm_source=github&utm_medium=documentacao) tem diversos posts em português falando sobre o assunto.

Após estar com o seu google tag manager criado e instalado, será necessário criar uma tag customizada para implementação do script abaixo, segue o passo a passo.


## Script para instalação
``` html
<script>
!function(e,n){var r={windowConversion:n||30,cookieName:e||"affly_origin"},o=function(){var e={};window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(n,r,o){e[r]=o});return e},t=o(),i=function(){if(t.utm_source){var e=new Date;e.setTime(e.getTime()+24*r.windowConversion*60*60*1e3);var n="expires="+e.toUTCString();return document.cookie="affly_origin="+t.utm_source+";"+n+";path=/"}return!1},u=function(){return document.cookie="affly_origin=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"},c=function(){for(var e=document.cookie.split(";"),n=0;n<e.length;n++){for(var o=e[n];" "==o.charAt(0);)o=o.substring(1);if(0==o.indexOf(r.cookieName))return o.substring(name.length,o.length)}return!1},f=function(){var e=document.referrer,n=new RegExp("(https|http)://www.google.com.br");return!!n.test(e)&&!!("google"===t.utm_source&&"cpc"===t.utm_medium||t.gclid)},a=function(){c()?f()&&u():i()};return a()}();
</script>
```

## Instalação para os preguiçosos ;)
Caso voce já esteja familiarizado com o Google Tag Manager, você já sabe que é possível importar um container via json, então só copiar o [json](https://github.com/metricasboss/affly/blob/master/export/GTM-MC32K4F_v1.json) e exportar no GTM.

## Customização opcional

Existem 2 parâmetros customizáveis no nosso plugin, um para configurar a janela e conversão e outro para configurar o nome do cookie que será setado. Os mesmos podem ser passados na própria execução da função, como o código abaixo especifica:

``` html
<script>
!function(e,n){var o={windowConversion:e||30,cookieName:n||"affly_origin"},r=function(){var e={};window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(n,o,r){e[o]=r});return e},t=r(),i=function(){if(t.utm_source){var e=new Date;e.setTime(e.getTime()+24*o.windowConversion*60*60*1e3);var n="expires="+e.toUTCString();return document.cookie=o.cookieName+"="+t.utm_source+";"+n+";path=/"}return!1},u=function(){return document.cookie=o.cookieName+"=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"},c=function(){for(var e=document.cookie.split(";"),n=0;n<e.length;n++){for(var r=e[n];" "==r.charAt(0);)r=r.substring(1);if(0==r.indexOf(o.cookieName))return r.substring(name.length,r.length)}return!1},a=function(){var e=document.referrer,n=new RegExp("(https|http)://www.google.com.br");return!!n.test(e)&&!!("google"===t.utm_source&&"cpc"===t.utm_medium||t.gclid)},m=function(){c()?a()&&u():i()};return m()}();
</script>
```

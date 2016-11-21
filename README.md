# affly.js

> Controlador de cookies para implementação de pixels de afiliados

## Por que?
Implementar pixels de afiliados não deveria ser algo difícil e além de não ter um monte de passos o mesmo deveria ser algo padrão entre todos os afiliados, hoje cada afiliado trata a implementação de pixels nos parceiros de uma maneira diferente e alguns na maioria das vezes ainda deixa na responsabilidade do cliente o controle de disparo do pixel.

Por isso criamos o Affly, um controlador de cookies que baseado na origem do acesso, marca a o navegador para o futuro disparo na hora da aquisição por parte do usuário.

## Instalação

Para realizar a instalação e configuração do mesmo será necessário a utilização do [Google Tag Manager](googletagmanager.com), caso você não esteja familiarizado com o google tag manager a [métricas boss](http://metricasboss.com.br/google-tag-manager/?utm_source=github&utm_medium=documentacao) tem diversos posts em português falando sobre o assunto.

Após estar com o seu google tag manager criado e instalado, será necessário criar uma tag customizada para implementação do script abaixo, segue o passo a passo.


### 1.  Abra o seu google tag manager e na tela inicial de seu container clique em "adicionar uma nova tag"
![Tutorial parte 1](http://metricasboss.com.br/img/affly/affly-tutorial.png)

### 2.  Clique no botão configuração da tag
![Tutorial parte 2](http://metricasboss.com.br/img/affly/affly-tutorial-2.png)

### 3.  Selecione o item HTML customizado
![Tutorial parte 3](http://metricasboss.com.br/img/affly/affly-tutorial-3.png)

### 4.  No campo HTML copie e cole o script abaixo
![Tutorial parte 4](http://metricasboss.com.br/img/affly/affly-tutorial-4.png)

``` html
<script>
!function(e,n){var r={windowConversion:n||30,cookieName:e||"affly_origin"},o=function(){var e={};window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(n,r,o){e[r]=o});return e},t=o(),i=function(){if(t.utm_source){var e=new Date;e.setTime(e.getTime()+24*r.windowConversion*60*60*1e3);var n="expires="+e.toUTCString();return document.cookie="affly_origin="+t.utm_source+";"+n+";path=/"}return!1},u=function(){return document.cookie="affly_origin=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"},c=function(){for(var e=document.cookie.split(";"),n=0;n<e.length;n++){for(var o=e[n];" "==o.charAt(0);)o=o.substring(1);if(0==o.indexOf(r.cookieName))return o.substring(name.length,o.length)}return!1},f=function(){var e=document.referrer,n=new RegExp("(https|http)://www.google.com.br");return!!n.test(e)&&!!("google"===t.utm_source&&"cpc"===t.utm_medium||t.gclid)},a=function(){c()?f()&&u():i()};return a()}();
</script>
```

### 5. Clique no botão acionamento
![Tutorial parte 5](http://metricasboss.com.br/img/affly/affly-tutorial-5.png)

### 6. Seleciona a opção All pages
![Tutorial parte 6](http://metricasboss.com.br/img/affly/affly-tutorial-6.png)

### 7. Clique no botão salvar
![Tutorial parte 7](http://metricasboss.com.br/img/affly/affly-tutorial-7.png)

### 8. Adicione um nome a sua tag e pronto xD
![Tutorial parte 8](http://metricasboss.com.br/img/affly/affly-tutorial-8.png)

## Instalação para os preguiçosos ;)
Caso voce já esteja familiarizado com o Google Tag Manager, você já sabe que é possível importar um container via json, então só copiar o [json](/metricasboss/affly/blob/master/export/GTM-MC32K4F_v1.json) e exportar no GTM.

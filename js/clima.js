function getClima() {

    $.ajax({
        method: 'get',
        crossDomain: true,
        url: 'https://api.openweathermap.org/data/2.5/weather?id=3468879&appid=adeafbe00672365246115bf587aff214',
        dataType: 'json',
        success: function (data) {


            descricao = traduzirDescricao(data.weather[0].description);
            $('#situacao').html(descricao);

            temperatura = data.main.temp - 273;
            $('#temperatura').html(temperatura +"º");
            
            $('#pressaoAr').html(data.main.speed);
            
            $('#temperaturaMaxima').html(data.main.speed);
            
            $('#temperaturaMinima').html(data.main.speed);
            
            $('#umidade').html(data.main.speed);
           
            $('#velocidadevento').html(data.main.speed);
            
            var dataAmanhecer = new Date(data.sys.sunrise*1000);
            var descDataAmanhecer = dataAmanhecer.getHours()+':'+dataAmanhecer.getMinutes();
            $('#amanhecer').html(descDataAmanhecer);
            
            var porDoSol = new Date(data.sys.sunset*1000);
            var descPorDoSol = porDoSol.getHours()+':'+porDoSol.getMinutes();
            $('#pordosol').html(descPorDoSol);
            
            var icone = data.weather[0].icon;
            var caminhoIcone ='img/icones/'+icone+'.png';
            $('#icone').attr('src',caminhoIcone);
        },
        error: function (argument) {
            alert('Falha ao obter dados!');
        }
    });
    }
    
    function traduzirDescricao(descricao) {
        descricaoTraduzida = "";

        if (descricao == "clear sky") {
            descricaoTraduzida = "Céu limpo";
        } else if (descricao == "few clouds") {
            descricaoTraduzida = "Poucas nuvens";
        } else if (descricao == "scattered clouds") {
            descricaoTraduzida = "Nuvens dispersas";
        } else if (descricao == "broken clouds") {
            descricaoTraduzida = "Nuvens quebradas";
        } else if (descricao == "shower rain") {
            descricaoTraduzida = "Chuva de banho";
        } else if (descricao == "rain") {
            descricaoTraduzida = "Chuva";
        } else if (descricao == "thunderstorm") {
            descricaoTraduzida = "Trovoada";
        } else if (descricao == "snow") {
            descricaoTraduzida = "Neve";
        } else if (descricao == "mist") {
            descricaoTraduzida = "Névoa";

        }
        return descricaoTraduzida;
    }




    window.onload = function () {
        getClima();
    }
    ;
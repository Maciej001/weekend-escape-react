const cities_array = 
  [
        {"_id":6453366,"name":"Oslo","country":"NO","coord":{"lon":10.73367,"lat":59.911831},"zoom": 4, "airportCode": "OSL"},
        {"_id":3164603,"name":"Venezia","country":"IT","coord":{"lon":12.32667,"lat":45.43861}, "zoom": 5, "airportCode": "VCE"},
        {"_id":2950159,"name":"Berlin","country":"DE","coord":{"lon":13.41053,"lat":52.524368}, "zoom": 4, "airportCode": "TXL"},
        {"_id":2643743,"name":"London","country":"GB","coord":{"lon":-0.12574,"lat":51.50853}, "zoom": 4, "airportCode": "LON"},
        {"_id":3183875, "name":"Tirana","country":"AL","coord":{"lon":19.81889,"lat":41.327499},"zoom": 4, "airportCode": "TIA"},
        {"_id":2761369,"name":"Vienna","country":"AT","coord":{"lon":16.37208,"lat":48.208488},"zoom": 4, "airportCode": "VIE"},
        {"_id":3337389,"name":"Brussels","country":"BE","coord":{"lon":4.34526,"lat":50.851151},"zoom": 5, "airportCode": "BRU"},
        {"_id":3191281,"name":"Sarajevo","country":"BA","coord":{"lon":18.35644,"lat":43.84864},"zoom": 6, "airportCode": "SJJ"},
        {"_id":727011,"name":"Sofia","country":"BG","coord":{"lon":23.32415,"lat":42.69751},"zoom": 6, "airportCode": "SOF"},
        {"_id":3201047,"name":"Dubrovnik","country":"HR","coord":{"lon":18.092159,"lat":42.648071},"zoom": 6, "airportCode": "DBV"},
        {"_id":146384,"name":"Limassol","country":"CY","coord":{"lon":33.033329,"lat":34.674999},"zoom": 6, "airportCode": "LCA"},
        {"_id":3067696,"name":"Prague","country":"CZ","coord":{"lon":14.42076,"lat":50.088039},"zoom": 5, "airportCode": "PRG"},
        {"_id":2618425,"name":"Copenhagen","country":"DK","coord":{"lon":12.56553,"lat":55.675941},"zoom": 6, "airportCode": "CPH"},
        {"_id":588409,"name":"Tallinn","country":"EE","coord":{"lon":24.753531,"lat":59.436958},"zoom": 6, "airportCode": "TLL"},
        {"_id":658226,"name":"Helsinki","country":"FI","coord":{"lon":24.93417,"lat":60.17556},"zoom": 6, "airportCode": "HEL"},
        {"_id":6455259,"name":"Paris","country":"FR","coord":{"lon":2.35236,"lat":48.856461},"zoom": 4, "airportCode": "PAR"},
        {"_id":6447142,"name":"Marseille","country":"FR","coord":{"lon":5.4,"lat":43.299999},"zoom": 4, "airportCode": "MRS"},
        {"_id":264371,"name":"Athens","country":"GR","coord":{"lon":23.716221,"lat":37.97945},"zoom": 4, "airportCode": "ATH"},
        {"_id":3054643,"name":"Budapest","country":"HU","coord":{"lon":19.039909,"lat":47.498009},"zoom": 5, "airportCode": "BUD"},
        {"_id":6692263,"name":"Reykjavik","country":"IS","coord":{"lon":-21.85799,"lat":64.118401},"zoom": 6, "airportCode": "REK"},
        {"_id":2964574,"name":"Dublin","country":"IE","coord":{"lon":-6.26719,"lat":53.34399},"zoom": 6, "airportCode": "DUB"},
        {"_id":3169070,"name":"Roma","country":"IT","coord":{"lon":12.4839,"lat":41.894741},"zoom": 5, "airportCode": "ROM"},
        {"_id":456172,"name":"Riga","country":"LV","coord":{"lon":24.1,"lat":56.950001},"zoom": 6, "airportCode": "RIX"},
        {"_id":593116,"name":"Vilnius","country":"LT","coord":{"lon":25.2798,"lat":54.689159},"zoom": 6, "airportCode": "VNO"},
        {"_id":2960316,"name":"Luxembourg","country":"LU","coord":{"lon":6.13,"lat":49.611671},"zoom": 6, "airportCode": "LUX"},
        {"_id":785842,"name":"Skopje","country":"MK","coord":{"lon":21.433331,"lat":42},"zoom": 6, "airportCode": "SKP"},
        {"_id":2562770,"name":"Malta","country":"MT","coord":{"lon":14.43333,"lat":35.916672},"zoom": 6, "airportCode": "MLA"},
        {"_id":3193044,"name":"Podgorica","country":"ME","coord":{"lon":19.263611,"lat":42.441109},"zoom": 6, "airportCode": "TGD"},
        {"_id":2759794,"name":"Amsterdam","country":"NL","coord":{"lon":4.88969,"lat":52.374031},"zoom": 5, "airportCode": "AMS"},
        {"_id":756135,"name":"Warsaw","country":"PL","coord":{"lon":21.01178,"lat":52.229771},"zoom": 4, "airportCode": "WAW"},
        {"_id":2267057,"name":"Lisbon","country":"PT","coord":{"lon":-9.13333,"lat":38.716671},"zoom": 4, "airportCode": "LIS"},
        {"_id":683506,"name":"Bucharest","country":"RO","coord":{"lon":26.10626,"lat":44.432251},"zoom": 6, "airportCode": "BUH"},
        {"_id":792680,"name":"Belgrade","country":"RS","coord":{"lon":20.46513,"lat":44.804008},"zoom": 6, "airportCode": "BEG"},
        {"_id":3060972,"name":"Bratislava","country":"SK","coord":{"lon":17.106741,"lat":48.148159},"zoom": 6, "airportCode": "BTS"},
        {"_id":6359304,"name":"Madrid","country":"ES","coord":{"lon":-3.68275,"lat":40.489349},"zoom": 5, "airportCode": "MAD"},
        {"_id":6356055,"name":"Barcelona","country":"ES","coord":{"lon":2.12804,"lat":41.399422},"zoom": 5, "airportCode": "BCN"},
        {"_id":2514256,"name":"Malaga","country":"ES","coord":{"lon":-4.42034,"lat":36.720161},"zoom": 4, "airportCode": "AGP"},
        {"_id":2512989,"name":"Palma","country":"ES","coord":{"lon":2.65024,"lat":39.569389},"zoom": 6, "airportCode": "PMI"},
        {"_id":6360186,"name":"Las Palmas","country":"ES","coord":{"lon":-15.43898,"lat":28.116541},"zoom": 4, "airportCode": "LPA"}
  ];

Meteor.methods({

  generateCities() {
    
    Cities.remove({});

    _.each(cities_array, (city) => {

        let document = {
            cityCode:     city._id,
            name:         city.name,
            countryCode:  city.country,
            coord:        {
                            lat: city.coord.lat,
                            lng: city.coord.lon
                          },
            zoom:         city.zoom,
            airportCode:  city.airportCode,
            image: "cities_images/" + city.name.toLowerCase() + ".jpg"
        }

        check(document, {
            cityCode:       Number,
            name:           String,
            countryCode:    String,
            coord:          {
                                lat: Number,
                                lng: Number
                              },
            zoom:           Number,
            airportCode:    String,
            image:          String
        });
        
        Cities.insert(document);
    });
  },

  downloadCurrentWeather: function() {
    CurrentWeathers.remove({});

    let cities = Cities.find();
    let weatherURL = "http://api.openweathermap.org/data/2.5/group?id=";

    // Create API call URL
    cities.forEach((city) => {
        weatherURL += city.cityCode + ",";
    });

    weatherURL = weatherURL.substring(0, weatherURL.length - 1); // remove last ','
    weatherURL += "&units=metric&APPID=" + WEATHER_KEY;
    
     var  weather = [],
          myForecast = {};

    HTTP.get(weatherURL, function(err, results){
        _.each(results.data.list, function(city_weather){
          
            var icon = "",
                weather_type = 3;

            switch(city_weather.weather[0].icon) {
                case "01d":
                case "01n":
                    icon = "wi wi-day-sunny";
                    weather_type = 5;
                    break;
                case "02d":
                case "02n":
                    icon = "wi wi-day-cloudy";
                    weather_type = 5;
                    break;
                case "03d":
                case "03n":
                    icon = "wi wi-cloud";
                    weather_type = 4;
                    break;
                case "04d":
                case "04n":
                    icon = "wi wi-cloudy";
                    weather_type = 3
                    break;
                case "09d":
                case "09n":
                case "10d":
                case "10n":
                    icon = "wi wi-rain";
                    weather_type = 2;
                    break;
                case "11d":
                case "11n":
                    icon = "wi wi-thunderstorm";
                    weather_type = 2;
                    break;
                case "13d":
                case "13n":
                    icon = "wi wi-snow";
                    weather_type = 1;
                    break;
                case "50d":
                case "50n":
                    icon = "wi wi-fog";
                    weather_type = 3;
                    break;
                default: 
                    icon = "";
                    break;
            };

            // find City._id
            let city = Cities.findOne({cityCode: city_weather.id});
            let document = {
                cityId:                 city._id,
                cityCode:               city_weather.id,
                city:                   city_weather.name,
                temp:                   city_weather.main.temp,
                temp_min:               city_weather.main.temp_min,
                temp_max:               city_weather.main.temp_max,
                humidity:               city_weather.main.humidity,
                pressure:               city_weather.main.pressure,
                wind:                   city_weather.wind.speed,
                wind_deg:               city_weather.wind.deg,
                clouds:                 city_weather.clouds.all,
                sunrise:                city_weather.sys.sunrise,
                sunset:                 city_weather.sys.sunset,
                weatherMain:            city_weather.weather[0].main,
                weatherDescription:     city_weather.weather[0].description,
                weatherIcon:            icon,
                weatherType:            weather_type
            }

            check(document, {
                cityId:                 String,
                cityCode:               Number,
                city:                   String,
                temp:                   Number,
                temp_min:               Number,
                temp_max:               Number,
                humidity:               Number,
                pressure:               Number,
                wind:                   Number,
                wind_deg:               Number,
                clouds:                 Number,
                sunrise:                Number,
                sunset:                 Number,
                weatherMain:            String,
                weatherDescription:     String,
                weatherIcon:            String,
                weatherType:            Number
            });

            CurrentWeathers.insert(document);

        });
    });

  },

  downloadForecast() {
    Forecasts.remove({});

    let cities = Cities.find();
    let forecastURL = "http://api.openweathermap.org/data/2.5/forecast?id=";

        forecastURL += "2643743" + "&units=metric&appid=" + WEATHER_KEY;

        HTTP.get(forecastURL, function(err, results) {
            if (err) throw new Meteor.Error(err);

            let forecasts = [];

            _.each(results.data.list, (forecast) => {
                forecasts.push({
                    timeDate:               new Date(forecast.dt_txt),
                    temp:                   forecast.main.temp,
                    temp_min:               forecast.main.temp_min,
                    temp_max:               forecast.main.temp_max,
                    pressure:               forecast.main.pressure,
                    humidity:               forecast.main.humidity,
                    weatherId:              forecast.weather.id,
                    weatherMain:            forecast.weather.main,
                    weatherDescription:     forecast.weather.description,
                    clouds:                 forecast.clouds.all,
                    wind:                   { speed: forecast.wind.speed, deg: forecast.wind.deg },
                    rain:                   forecast.rain ? forecast.rain : {},
                    snow:                   forecast.snow ? forecast.snow : {}
                });
            });

            var city = Cities.findOne({ cityCode: results.data.city.id });

            Forecasts.insert({
                cityId:     city._id,
                cityCode:   results.data.city.id,
                city:       results.data.city.name,
                list:       forecasts
            });


        });

  },

});
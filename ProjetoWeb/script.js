
//variaveis
var campinas = { lat: -22.909795, lng: -47.061777 };
var map;

//função mapa
function initMap() {

  //inicializando mapa
  map = new google.maps.Map(document.getElementById('o_mapa'),
    {
      center: campinas,
      zoom: 10

    });

  //Macardor casa do lago
  var contentStringCasaDoLago = "Você clicou na Casa do Lago";

  infoWindowCasaDoLago = new google.maps.InfoWindow({
    content: contentStringCasaDoLago
  });

  var markerCasaDoLago = new google.maps.Marker({
    position: { lat: -22.812362, lng: -47.068840 },
    map: map,
    title: 'Casa do Lago'
  });

  markerCasaDoLago.addListener('click', function () {
    infoWindowCasaDoLago.open(map, markerCasaDoLago);
  });



  //Marcador Maria fumaça
  var contentStringMariaFumaca = "Você clicou na Maria Fumaça";

  infoWindowMariaFumaca = new google.maps.InfoWindow({
    content: contentStringMariaFumaca
  });

  var markerMariaFumaca = new google.maps.Marker({
    position: { lat: -22.858741, lng: -47.0298874 },
    map: map,
    title: 'Maria Fumaça'
  });

  markerMariaFumaca.addListener('click', function () {
    infoWindowMariaFumaca.open(map, markerMariaFumaca);
  });


  //Marcador Torre do Castelo
  var contentStringTorreDoCastelo = "Você clicou na Torre do Castelo";

  var infoWindowTorreDoCastelo = new google.maps.InfoWindow({
    content: contentStringTorreDoCastelo
  });

  var markerTorreDoCastelo = new google.maps.Marker({
    position: { lat: -22.890208, lng: -47.076623 },
    map: map,
    title: 'Torre do Castelo'
  });

  markerTorreDoCastelo.addListener('click', function () {
    infoWindowTorreDoCastelo.open(map, markerTorreDoCastelo);
  });


  //Marcador Estação Cultura
  var contentStringEstacaoCultura = "Você clicou na Estação Cultura";

  var infoWindowEstacaoCultura = new google.maps.InfoWindow({
    content: contentStringEstacaoCultura
  });

  var markerEstacaoCultura = new google.maps.Marker({
    position: { lat: -22.908759, lng: -47.066765 },
    map: map,
    title: 'Estação Cultura'
  });

  markerEstacaoCultura.addListener('click', function () {
    infoWindowEstacaoCultura.open(map, markerEstacaoCultura);
  });


  //Marcador MUCA
  var contentStringMuca = "Você clicou no Museu do Café";

  var infoWindowMusca = new google.maps.InfoWindow({
    content: contentStringMuca
  });

  var markerMuca = new google.maps.Marker({
    position: { lat: -22.871748, lng: -47.046653 },
    map: map,
    title: 'Museu do Café'
  });

  markerMuca.addListener('click', function () {
    infoWindowMuca.open(map, markerMuca);
  });


  //Marcador Teatro Castro Mendes
  var contentStringCastroMendes = "Você clicou no Teatro Municipal José de Castro mendes";

  var infoWindowCastroMendes = new google.maps.InfoWindow({
    content: contentStringCastroMendes
  });

  var markerCastroMendes = new google.maps.Marker({
    position: { lat: -22.911011, lng: -47.065169 },
    map: map,
    title: 'Teatro Municipal Castro Mendes'
  });

  markerCastroMendes.addListener('click', function () {
    infoWindowCastroMendes.open(map, markerCastroMendes);
  });


  //Marcador Catedral
  var contentStringCatedral = "Você clicou na Catedral Metropolitana de Campinas";

  var infoWindowCatedral = new google.maps.InfoWindow({
    content: contentStringCatedral
  });

  var markerCatedral = new google.maps.Marker({
    position: { lat: -22.906014, lng: -47.060283 },
    map: map,
    title: 'Catedral Metropolitana de Campinas'
  });

  markerCatedral.addListener('click', function () {
    infoWindowCatedral.open(map, markerCatedral);
  });


  //Marcador Museu da PUC
  var contentStringMuseuPuc = "Você clicou no Museu Universitário da PUC-Campinas";

  var infoWindowMuseuPuc = new google.maps.InfoWindow({
    content: contentStringMuseuPuc
  });

  var markerMuseuPuc = new google.maps.Marker({
    position: { lat: -22.900687, lng: -47.060886 },
    map: map,
    title: ' Museu Universitário da PUC-Campinas'
  });

  markerMuseuPuc.addListener('click', function () {
    infoWindowMuseuPuc.open(map, markerMuseuPuc);
  });

  //Marcador Museu de Arte Contemporânea de Campinas 
  var contentStringMACC = "Você clicou no Museu de Arte Contemporânea de Campinas ";

  var infoWindowMACC = new google.maps.InfoWindow({
    content: contentStringMACC
  });

  var markerMACC = new google.maps.Marker({
    position: { lat: -22.901247, lng: -47.056648 },
    map: map,
    title: 'Museu de Arte Contemporânea de Campinas '
  });

  markerMACC.addListener('click', function () {
    infoWindowMACC.open(map, markerMACC);
  });


  //Marcador Museu da Unicamp
  var contentStringMuseuUnicamp = "Você clicou no Museu Exploratório de Ciências - Unicamp";

  var infoWindowMuseuUnicamp = new google.maps.InfoWindow({
    content: contentStringMuseuUnicamp
  });

  var markerMuseuUnicamp = new google.maps.Marker({
    position: { lat: -22.814960, lng: -47.057769 },
    map: map,
    title: 'Museu Exploratório de Ciências - Unicamp'
  });

  markerMuseuUnicamp.addListener('click', function () {
    infoWindowMuseuUnicamp.open(map, markerMuseuUnicamp);
  });


  //Marcador Casa da Cultura
  var contentStringCasaCultura = "Você clicou na Casa de Cultura Fazenda Roseira";

  var infoWindowCasaCultura = new google.maps.InfoWindow({
    content: contentStringCasaCultura
  });

  var markerCasaCultura = new google.maps.Marker({
    position: { lat: -22.923652, lng: -47.118284 },
    map: map,
    title: 'Casa de Cultura Fazenda Roseira'
  });

  markerCasaCultura.addListener('click', function () {
    infoWindowCasaCultura.open(map, markerCasaCultura);
  });

}
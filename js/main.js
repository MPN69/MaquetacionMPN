$(document).ready(function(){
  if(window.location.href.indexOf("index")>-1){
    $(function(){
        $('.bxslider').bxSlider({
          mode: 'fade',
          captions: true,
          slideWidth: 1200,

        });
      });
    };
      //post
      if(window.location.href.indexOf("index")>-1){
      var posts=[
        {
          title:"titulo1",
          date: "publicado el dia "+ moment().format("DD")+ "de "+ moment().format("MMMM")+ " del "+moment().format("YYYY"),
          content:"s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {          
          title:"titulo2",
        date: "publicado el dia "+ moment().format("DD")+ "de "+ moment().format("MMMM")+ " del "+moment().format("YYYY"),
        content:"s simply dummy" },
        {          
          title:"titulo3",
        date: "publicado el dia "+ moment().format("DD")+ "de "+ moment().format("MMMM")+ " del "+moment().format("YYYY"),
        content:"s simply dummy" },
      ];
      console.log(posts);
      //recorrer el JSON para enviar al index
      posts.forEach((item)=>{
        var post = ` <article class="post">
        <h2>${item.title}</h2>
        <span class="date">${item.date}</span>
        <p>
        ${item.content}
        </p>
        <a href="#" class="button-more">Articulo Completo</a>
    </article>`;

    $("#posts").append(post);

      });
    };
      //Selector de tema

  var theme = $("#theme");

  $("#toRed").click(function(){
    theme.attr("href","css/red.css");
    alert("La pagina ha cambiado de tema");
  });

  $("#toGreen").click(function(){
    theme.attr("href","css/green.css");
    alert("La pagina ha cambiado de tema");
  });

  $("#toBlue").click(function(){
    theme.attr("href","css/blue.css");
    alert("La pagina ha cambiado de tema");
  });

  //Login LocalStorage
  $("#login form").submit(function(){
    let form_name=$("#form_name").val();
    //alert(form_name);
    //console.log(form_name);
    localStorage.setItem("form_name",form_name);
    window.open('perfil.html');
  });
  
  var form_name=localStorage.getItem("form_name");

  if(form_name!=null && form_name!="unfined"){
    //Si el nombre existe
    let about_parrafo=$("#about p");
    $("#about p").html("<b>Bienvenido "+form_name+"</b>");
    about_parrafo.append("<br><a href = '#' id = 'logout'>Cerrar Secion</a>");
    $("#login").hide();

    $("#logout").click(function(){
      location.href="file:///C:/Users/maste/OneDrive/Documentos/3erSem/Desarrollo%20Web/maquetacion2/maquetacionCss/index.html";
      location.href;
      localStorage.clear();
      location.reload();
    });
  }
});



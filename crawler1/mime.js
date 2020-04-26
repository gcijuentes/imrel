$( document ).ready(function() {
    console.log( "ready!" );


$('#inicia').click(function() {

	console.log('iniciamos!');

inserts = "";

for (var i = 1; i < 5; i++) {
	console.log('Holie');
	$.post('http://www.mime.mineduc.cl/mime-web/mvc/mime/ficha', 
	
	
	{rbd:i, region:"Todas las regiones", comuna:"Seleccione Comuna", rbd1:i}, function(data, textStatus, xhr) {
			sql1 = "INSERT INTO establecimientos(rbd, nombre, ";
			sql2 = "( '" + $(data).find("#rbd").val()+"', '"+$(data).find("table:nth-child(1)").first().find("td").html()+"'" ;		$(data).find("table.tabla_form:nth-child(1) tr").each(function(index, el) {
			switch(index){
				case 0: //comuna
					if($(el).find("td:nth-child(2)").length){
						sql1 += "direccion, ";
						sql2 += ", '"+$(el).find("td:nth-child(2)").html().trim().replace(/\t/g, "").replace(/\n/g, "")+"', ";
					}
				break;
				case 2: //comuna
					if($(el).find("td:nth-child(2)").length){
						sql1 += "nombreComuna, ";
						sql2 += " '"+$(el).find("td:nth-child(2)").html().replace(/ /g,"").replace(/\t/g, "").replace(/\n/g, "")+"', ";
					}
				break;
				case 3: //telefono
					if($(el).find("td:nth-child(2)").length){
						sql1 += "telefono, ";
						sql2 += " '"+$(el).find("td:nth-child(2)").html().replace(/ /g,"").replace(/\t/g, "").replace(/\n/g, "")+"', ";
					}
				break;
				case 4: //email
					if($(el).find("td:nth-child(2) a").length){
						sql1 += "email, ";
						sql2 += " '"+$(el).find("td:nth-child(2) a").html().replace(/ /g,"").replace(/\t/g, "").replace(/\n/g, "")+"', ";
					}
				break;
				case 5: //pagina web 
					if($(el).find("td:nth-child(2) a").length){
						sql1 += "web, ";
						sql2 += " '"+$(el).find("td:nth-child(2) a").html().replace(/ /g,"").replace(/\t/g, "").replace(/\n/g, "")+"', ";
					}
				break;
				case 6: //director
					if($(el).find("td:nth-child(2)").length){
						sql1 += "director, ";
						sql2 += " '"+$(el).find("td:nth-child(2)").html().replace(/  /g,"").replace(/\t/g, "").replace(/\n/g, "")+"', ";
					}
				break;
				
			}
		});
			//sql1 = sql1.substring(0, sql1.length-2);
			//sql1 += ") values";
			//sql2 += ");";
			//sql  = sql1 + sql2;
			// inserts.push(sql);
			//inserts += sql+"\n";

			console.log(sql1);

			sql1 = sql1.substring(0, sql1.length-2);
			sql1 += ") values";
			console.log('paso 1');
			console.log(sql1);
			console.log('paso 2');

			console.log('paso 3');
			console.log(sql2);
			sql2 = sql2.substring(0, sql2.length-2);
			sql2 += ");";
			console.log('paso 4');
			console.log(sql2);

			sql  = sql1 + sql2;
			console.log('paso 5');
			console.log(sql);
			console.log($(data).find("#rbd").val());
			
			$.post('http://127.0.0.1/lermi.com/crawler1/save.php', {sql: sql}, function(data, textStatus, xhr) {
				console.log(data);
			});
			
	}, "html");
};

});


});

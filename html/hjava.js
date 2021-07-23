	//Для IE через XMLHttpRequest, fetch не поддерживает
	
	document.getElementById("h").innerHTML ="<h1>История изменений объектов в хранилищах</h1>";
	document.getElementById("error").innerHTML ="";
	document.getElementById("reporttype").innerHTML = "Вид отчета: <select id=\"selectreporttype\" onchange=\"OnReportTypeChange (this)\"><option value=\"\" hidden disabled selected>выберите тип отчета...</option><option>История хранилища за период</option><option>История объекта метаданных</option></select>";
	txt = ""; 
	//if (strtype == "История объекта метаданных") {
	function getbasesobject (){
		var txt = "";
		xmlhttp = new XMLHttpRequest(); 
		xmlhttp.open("GET", "https://ваш_веб_вервер/имя_опубликованной_базы/hs/myservice/bases", true); 
		xmlhttp.onreadystatechange = function() { 
		  if (this.readyState == 4 && this.status == 200) { 
				myObj = JSON.parse(this.responseText); 
				txt += "<select id = \"selectbase\" onchange=\"OnBaseChange (this)\"><option value=\"\" hidden disabled selected>выберите хранилище...</option>"; 
				for (x in myObj) { 
				   txt += "<option>" + myObj[x].idbase+"</option>";
				} 
				txt += "</select>";  
				document.getElementById("base").innerHTML = "Хранилище: " + txt; 
				document.getElementById("type").innerHTML = "Тип объекта: <select id=\"selecttype\" onchange=\"OnTypeChange (this)\"><option>HTTPСервис</option><option>WebСервис</option><option>WSСсылка</option><option>БизнесПроцесс</option><option>ГруппаКоманд</option><option>Документ</option><option>ЖурналДокументов</option><option>Задача</option><option>Интерфейс</option><option>Константа</option><option>КритерийОтбора</option><option>НумераторДокументов</option><option>Обработка</option><option>ОбщаяКартинка</option><option>ОбщаяКоманда</option><option>ОбщаяФорма</option><option>ОбщийМакет</option><option>ОбщийМодуль</option><option>ОбщийРеквизит</option><option>ОпределяемыйТип</option><option>Отчет</option><option>ПакетXDTO</option><option>ПараметрСеанса</option><option>ПараметрФункциональныхОпций</option><option>Перечисление</option><option>ПланВидовРасчета</option><option>ПланВидовХарактеристик</option><option>ПланОбмена</option><option>ПланСчетов</option><option>ПодпискаНаСобытие</option><option>Подсистема</option><option>Последовательность</option><option>РегистрБухгалтерии</option><option>РегистрНакопления</option><option>РегистрРасчета</option><option>РегистрСведений</option><option>РегламентноеЗадание</option><option>Роль</option><option>Справочник</option><option>Стиль</option><option>ФункциональнаяОпция</option><option>ХранилищеНастроек</option><option>ЭлементСтиля</option><option>Язык</option></select>";
			}
		  if (this.readyState == 4 && this.status !== 200) { 
				console.log(this.status); 
				document.getElementById("error").innerHTML = "Проблема с веб-сервисом(Код ошибки: "+this.status+")";
			}		
			
		} 
		xmlhttp.onerror = function() { 
			document.getElementById("error").innerHTML = "Проблема с веб-сервисом";
		};
		xmlhttp.send();
	}
	
	function OnBaseChange (select) {
		var e = document.getElementById("selecttype");
		var strtype = e.options[e.selectedIndex].value;		
		var txt="";
		xmlhttp = new XMLHttpRequest(); 
		xmlhttp.open("GET", "https://ваш_веб_вервер/имя_опубликованной_базы/hs/myservice/meta/" + select.options[select.selectedIndex].value+"/"+strtype, true); 
		xmlhttp.onreadystatechange = function() { 
			if (this.readyState == 4 && this.status == 200) { 
			   data = JSON.parse(this.responseText); 
			   txt += "<select class=\"hmetaselect\" onchange=\"OnMetaChange (this)\"><option value=\"\" hidden disabled selected>выберите объект...</option>"; 
				for (x in data) {
				   txt += "<option>" + data[x].idmeta+"</option>";
				}
				txt += "</select>";
			} 
		document.getElementById("meta").innerHTML = "Метаданные: " + txt 	
		}
		xmlhttp.send();				
	}
	function OnTypeChange (select) {
		var e = document.getElementById("selectbase");
		var strbase = e.options[e.selectedIndex].value;
		if (strbase !== "") {
			var txt="";
			xmlhttp = new XMLHttpRequest(); 
			xmlhttp.open("GET", "https://ваш_веб_вервер/имя_опубликованной_базы/hs/myservice/meta/" + strbase + "/" + select.options[select.selectedIndex].value, true); 
			xmlhttp.onreadystatechange = function() { 
				if (this.readyState == 4 && this.status == 200) { 
				   data = JSON.parse(this.responseText); 
				   txt += "<select class=\"hmetaselect\" onchange=\"OnMetaChange (this)\"><option value=\"\" hidden disabled selected>выберите объект...</option>"; 
					for (x in data) {
					   txt += "<option>" + data[x].idmeta+"</option>";
					}
					txt += "</select>";
				} 
			document.getElementById("meta").innerHTML = "Метаданные: " + txt 	
			}
			xmlhttp.send();				
		}
	}
	function OnMetaChange (select) {
		var e = document.getElementById("selectbase");
		var strbase = e.options[e.selectedIndex].value;
		var strmeta = select.options[select.selectedIndex].value;
		document.getElementById("choise").innerHTML = "<h4>Выбранный объект: " + strmeta +"("+strbase +")<h4>" ;
		var txt="";
		xmlhttp = new XMLHttpRequest(); 
		xmlhttp.open("GET", "https://ваш_веб_вервер/имя_опубликованной_базы/hs/myservice/changes/" + strbase+ "/" + strmeta, true); 
		xmlhttp.onreadystatechange = function() { 
			if (this.readyState == 4 && this.status == 200) { 
			   data = JSON.parse(this.responseText); 
			   txt += "<table class=\"htable\"><thead><tr><th>Дата изменений</th><th>Разработчик</th><th>Комментарий</th></tr></thead>"; 
				for (x in data) {
				   txt +="<tr><td>" + data[x].hdata + "</td>" + "<td>" + data[x].huser + "</td>" +"<td>" + data[x].hrem + "</td></tr>";
				}
				txt += "</table>";
			} 
		document.getElementById("history").innerHTML = txt 	
		}
		xmlhttp.send();							
			
	}
	function getbaseshistory (){
		var txt = "";
		xmlhttp = new XMLHttpRequest(); 
		xmlhttp.open("GET", "https://ваш_веб_вервер/имя_опубликованной_базы/hs/myservice/bases", true); 
		xmlhttp.onreadystatechange = function() { 
		  if (this.readyState == 4 && this.status == 200) { 
				myObj = JSON.parse(this.responseText); 
				txt += "<select id = \"selectbase\">"; 
				for (x in myObj) { 
				   txt += "<option>" + myObj[x].idbase+"</option>";
				} 
				txt += "</select>";  
				document.getElementById("base").innerHTML = "Хранилище: " + txt; 
				var date = new Date();
				document.getElementById("firstmonth").innerHTML ="<select id=\"selectfirstmonth\" onchange=\"OnFirstChange(this)\"><option>01</option><option>02</option><option>03</option><option>04</option><option>05</option><option>06</option><option>07</option><option>08</option><option>09</option><option>10</option><option>11</option><option>12</option></select>";
				document.getElementById("selectfirstmonth").selectedIndex = date.getMonth();
				document.getElementById("firstyear").innerHTML ="<select id=\"selectfirstyear\" onchange=\"OnFirstChange(this)\"><option>2016</option><option>2017</option><option>2018</option><option>2019</option><option>2020</option><option>2021</option></select>";		
				document.getElementById("selectfirstyear").selectedIndex = date.getFullYear() - 2016;
				document.getElementById("firstday").innerHTML = "Начальная дата: "+OnDateChange("selectfirstday","selectfirstmonth","selectfirstyear");	
				document.getElementById("selectfirstday").selectedIndex = 0;
				
				document.getElementById("secondmonth").innerHTML ="<select id=\"selectsecondmonth\" onchange=\"OnSecondChange(this)\"><option>01</option><option>02</option><option>03</option><option>04</option><option>05</option><option>06</option><option>07</option><option>08</option><option>09</option><option>10</option><option>11</option><option>12</option></select>";
				document.getElementById("selectsecondmonth").selectedIndex = date.getMonth();
				document.getElementById("secondyear").innerHTML ="<select id=\"selectsecondyear\" onchange=\"OnSecondChange(this)\"><option>2016</option><option>2017</option><option>2018</option><option>2019</option><option>2020</option><option>2021</option></select>";		
				document.getElementById("selectsecondyear").selectedIndex = date.getFullYear() - 2016;
				document.getElementById("secondday").innerHTML = "Конечная дата: "+OnDateChange("selectsecondday","selectsecondmonth","selectsecondyear");				
				document.getElementById("selectsecondday").selectedIndex = date.getDate();
				document.getElementById("repbutton").innerHTML = "<input type=\"button\" value=\"Сформировать\" onclick=\"onCreateReport()\">";
			}
		  if (this.readyState == 4 && this.status !== 200) { 
				console.log(this.status); 
				document.getElementById("error").innerHTML = "Проблема с веб-сервисом(Код ошибки: "+this.status+")";
			}		
			
		} 
		xmlhttp.onerror = function() { 
			document.getElementById("error").innerHTML = "Проблема с веб-сервисом";
		};
		xmlhttp.send();
	}

	function OnReportTypeChange(select) {
			document.getElementById("base").innerHTML ="";		
			document.getElementById("type").innerHTML ="";		
			document.getElementById("meta").innerHTML ="";			
			document.getElementById("choise").innerHTML ="";
			document.getElementById("history").innerHTML ="";
			//
			document.getElementById("firstday").innerHTML ="";		
			document.getElementById("firstmonth").innerHTML ="";		
			document.getElementById("firstyear").innerHTML ="";			
			document.getElementById("secondday").innerHTML ="";		
			document.getElementById("secondmonth").innerHTML ="";		
			document.getElementById("secondyear").innerHTML ="";			
			document.getElementById("repbutton").innerHTML ="";
			var txt = "";
			if (select.options[select.selectedIndex].value == "История объекта метаданных") {
				getbasesobject();	
			} else {
				getbaseshistory ();
			}
	}
	function OnDateChange (idd,idm,idy) {
		var e = document.getElementById(idm);
		var intmonth = +e.options[e.selectedIndex].value;
		var e = document.getElementById(idy);
		var intyear = +e.options[e.selectedIndex].value;
		
		let days = new Date(intyear, intmonth, 0).getDate();
		var strdays = "<select id=\""+ idd +"\">";
		for (let i = 1; i <= days; i++) {
			if (i < 10 ) {
				strdays +=  "<option>0" + i + "</option>";
			} else {	
				strdays +=  "<option>" + i + "</option>";
			}
		}
		return strdays;
	
	}
	function OnFirstChange (select) {
		OnDateChange ("selectfirstday","selectfirstmonth","selectfirstyear");
	}
	function OnSecondChange (select) {
		OnDateChange ("selectsecondday","selectsecondmonth","selectsecondyear");
	}
	function onCreateReport() {
		var e = document.getElementById("selectbase");
		var strbase = e.options[e.selectedIndex].value;
		var e1 = document.getElementById("selectfirstday");
		var e2 = document.getElementById("selectfirstmonth");
		var e3 = document.getElementById("selectfirstyear");
		var firstday = e3.options[e3.selectedIndex].value + e2.options[e2.selectedIndex].value + e1.options[e1.selectedIndex].value;
		var e1 = document.getElementById("selectsecondday");
		var e2 = document.getElementById("selectsecondmonth");
		var e3 = document.getElementById("selectsecondyear");
		var secondday = e3.options[e3.selectedIndex].value + e2.options[e2.selectedIndex].value + e1.options[e1.selectedIndex].value;
		document.getElementById("choise").innerHTML = "<h4>Отчет по базе \"" + strbase +"\" за период с: "+firstday +" по "+secondday+"<h4>" ;
		var txt="";
		xmlhttp = new XMLHttpRequest(); 
		xmlhttp.open("GET", "https://ваш_веб_вервер/имя_опубликованной_базы/hs/myservice/repchanges/" + strbase+ "/" + firstday+"/"+secondday, true); 
		xmlhttp.onreadystatechange = function() { 
			if (this.readyState == 4 && this.status == 200) { 
			   data = JSON.parse(this.responseText); 
			   txt += "<table class=\"htable\"><thead><tr><th colspan=\"3\">Метаданные</th></tr><tr><th>Дата изменений</th><th>Разработчик</th><th>Комментарий</th></tr></thead>"; 
				for (x in data) {
				   txt +="<tr><td colspan=\"3\"><strong>" + data[x].hmeta  + "</strong></td></tr>";
				   filds = data[x].hhistory;
					for (y in filds) {
						txt +="<tr><td>" + filds[y].hdata + "</td><td>" + filds[y].huser + "</td><td>" +filds[y].hrem + "</td></tr>";
					}
				}
				txt += "</table>";
			} 
			document.getElementById("history").innerHTML = txt 	
		}
		xmlhttp.send();			
	}
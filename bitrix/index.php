<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header-ext.php");
$APPLICATION->SetTitle(" ");
?>

<div id="h"></div>
<div> <br/> </div>
<div id="reporttype"></div>
<div> <br/> </div>
<div id="firstday" style=display:inline></div>
<div id="firstmonth"  style=display:inline></div>
<div id="firstyear"  style=display:inline></div>
<div id="secondday" style=display:inline></div>
<div id="secondmonth"  style=display:inline></div>
<div id="secondyear"  style=display:inline></div>
<div> <br/> </div>
<div id="base" style=display:inline></div>
<div id="repbutton" style=display:inline></div>
<div id="type"  style=display:inline></div>
<div> <br/> </div>

<div id="meta"></div>
<div> </div>
<div id="choise"></div>
<div id="history"></div>		
<div id="error">Браузер не поддерживает JavaScript или поддержка отключена в настройках.</div>
<script language="javascript" src="hjava.js" type="text/javascript"> </script>

<style>
.site-block__body{
   width:100% !important;
}
.header, .footer, .site-panel{
   display:none;
}
/*
h1 {
  font-size: 20px;
}
h4 {
  font-size: 12px;
}
select.hmetaselect {
  width: 480px;
}
table.htable {
  border: 1px solid #1FA445;
  background-color: #EEEEEE;
  width: 100%;
  text-align: left;
  border-collapse: collapse;
}
table.htable td, table.htable th {
  border: 1px solid #AAAAAA;
  padding: 3px 2px;
}
table.htable tbody td {
  font-size: 13px;
  color: #333333;
}
table.htable thead {
  background: #52A474;
  background: -moz-linear-gradient(top, #7dbb97 0%, #63ad82 66%, #52A474 100%);
  background: -webkit-linear-gradient(top, #7dbb97 0%, #63ad82 66%, #52A474 100%);
  background: linear-gradient(to bottom, #7dbb97 0%, #63ad82 66%, #52A474 100%);
  border-bottom: 2px solid #444444;
}
table.htable thead th {
  font-size: 15px;
  font-weight: bold;
  color: #FFFFFF;
  border-left: 2px solid #D0E4F5;
}
table.htable thead th:first-child {
  border-left: none;
}
table.htable tfoot {
  font-size: 14px;
  font-weight: bold;
  color: #FFFFFF;
  background: #D0E4F5;
  background: -moz-linear-gradient(top, #dcebf7 0%, #d4e6f6 66%, #D0E4F5 100%);
  background: -webkit-linear-gradient(top, #dcebf7 0%, #d4e6f6 66%, #D0E4F5 100%);
  background: linear-gradient(to bottom, #dcebf7 0%, #d4e6f6 66%, #D0E4F5 100%);
  border-top: 2px solid #444444;
}
table.htable tfoot td {
  font-size: 14px;
}
table.htable tfoot .links {
  text-align: right;
}
table.htable tfoot .links a{
  display: inline-block;
  background: #1C6EA4;
  color: #FFFFFF;
  padding: 2px 8px;
  border-radius: 5px;
}
*/


h1 {
  font-size: 20px;
}
h4 {
  font-size: 12px;
}
select.hmetaselect {
  width: 480px;
}
table.htable {
  border: 1px solid #1FA445;
  background-color: #EEEEEE;
  width: 100%;
  text-align: left;
  border-collapse: collapse;
}
table.htable td, table.htable th {
  border: 1px solid #AAAAAA;
  padding: 3px 2px;
  text-align: left;
}
table.htable tbody td {
  font-size: 13px;
  color: #333333;
}
table.htable thead {
  background: #52A474;
  background: -moz-linear-gradient(top, #7dbb97 0%, #63ad82 66%, #52A474 100%);
  background: -webkit-linear-gradient(top, #7dbb97 0%, #63ad82 66%, #52A474 100%);
  background: linear-gradient(to bottom, #7dbb97 0%, #63ad82 66%, #52A474 100%);
  border-bottom: 2px solid #444444;
}
table.htable thead th {
  font-size: 15px;
  font-weight: bold;
  color: #FFFFFF;
  border-left: 2px solid #D0E4F5;
}
table.htable thead th:first-child {
  border-left: none;
}

table.htable tfoot {
  font-size: 14px;
  font-weight: bold;
  color: #FFFFFF;
  background: #D0E4F5;
  background: -moz-linear-gradient(top, #dcebf7 0%, #d4e6f6 66%, #D0E4F5 100%);
  background: -webkit-linear-gradient(top, #dcebf7 0%, #d4e6f6 66%, #D0E4F5 100%);
  background: linear-gradient(to bottom, #dcebf7 0%, #d4e6f6 66%, #D0E4F5 100%);
  border-top: 2px solid #444444;
}
table.htable tfoot td {
  font-size: 14px;
}
table.htable tfoot .links {
  text-align: right;
}
table.htable tfoot .links a{
  display: inline-block;
  background: #1C6EA4;
  color: #FFFFFF;
  padding: 2px 8px;
  border-radius: 5px;
}


</style>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>
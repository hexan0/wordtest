function onOpen() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  var entries = [
    {
      name : "スクレイピング開始",
      functionName : "weblio_scraping"
    }
  ];
  sheet.addMenu("スクリプト実行", entries);
  //メインメニュー部分に[スクリプト実行]メニューを作成して、
  //下位項目のメニューを設定している
};

function weblio_scraping(){
  /*var sheetOpen = 
    SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1f7BdrOFHsoROKWYJSxn-DysBNn75ogvHXqfV5uCKc9U/');
  var sheet = sheetOpen.getSheetByName("weblio");
  var max_r = sheet.getLastRow() - 1;
  var r;
  var url = "https://ejje.weblio.jp/content/";
  var xTitle = "//*[@id='h1Query']";*/
  //sheet.getRange("B" + 2).setValue(url+"critical");
  //sheet.getRange("C" + 2).setValue("=IMPORTXML(B2,\""+xTitle+"\")");
  //Utilities.sleep(1 * 1000);
  
  var alphabet = ["","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  //var words=[];
  
  var result=0;
  console.log(result);
  //語数順に適当な単語出力(20で109200語)
  for(var k=1;k<=20;k++){
    //for(var n=1;n<=k;n++){
      //for(var i=1;i<=26;i++){
        //words.push("");
        result++;
        console.log(result);
      //}
    //}
  }
  console.log(result);
}

export class DateGenerator {

  static generate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var hh = today.getHours();
    var minutes = today.getMinutes();
    var ss = today.getSeconds();
    var yyyy = today.getFullYear();

    var ddStr = dd.toString();
    var mmStr = mm.toString();
    var yyyyStr = yyyy.toString();
    var hhStr = hh.toString();
    var ssStr = ss.toString();
    var minutesStr = minutes.toString();

    if(dd<10){
      var ddStr = '0'+dd;
    }
    if(mm<10){
      mmStr ='0'+mm;
    }
    if(ss<10){
      ssStr = '0'+ss;
    }
    if(minutes<10){
      minutesStr = '0'+minutes;
    }
    if(hh<10){
      hhStr = '0'+hh;
    }

    var todayStr = ddStr+'-'+mmStr+'-'+yyyyStr + 'T'+hhStr+':'+minutesStr+':'+ssStr ;

    return todayStr;
  }
}

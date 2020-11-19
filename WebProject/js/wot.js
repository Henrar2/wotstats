function check(){
    var c = document.getElementById("search").value;
      if(c.length <= 2){
        alert(`"${c}" is not a valid username\nUsername must be at least 3 characters long`);
      }
      else{
        start();
      }
  }

  // 1st Api Load. Search all users   
    function start(){
    isLoading=true;
    document.getElementById("tableHead").innerHTML='<div class="loading"><p><p></span>';
    var username = document.getElementById("search").value;
    var xmlhttp = new XMLHttpRequest();
    var url = "https://api.worldoftanks.eu/wot/account/list/?application_id=a09f6a40597e0735d4bce02b167c66a9&search="+username;
    xmlhttp.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200) {
        var list = JSON.parse(this.responseText);
        console.log(list);
        display(list);
        }
    }
    xmlhttp.open("GET",url,true);
    xmlhttp.getAllResponseHeaders;
    xmlhttp.send();
    }
  
  //2nd Api Load for user with id
    function user(id){
      isLoading = true;
      document.getElementById("tableHead").innerHTML='<div class="loading"><p><p></span>';
      console.log(id);
      var xmlhttp = new XMLHttpRequest();
      var url = "https://api.worldoftanks.eu/wot/account/info/?application_id=a09f6a40597e0735d4bce02b167c66a9&account_id="+id;
      xmlhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
          var list = JSON.parse(this.responseText);
          console.log(list);
          displayUser(list,id);
        }
      }
      xmlhttp.open("GET",url,true);
      xmlhttp.getAllResponseHeaders;
      xmlhttp.send();
    }

    //Dipslay the user specific stats
    function displayUser(list,id){
      isLoading = false;
      console.log(id);
      var nickname = list.data[id].nickname;
      var battles = list.data[id].statistics.all.battles;
      var wins = list.data[id].statistics.all.wins;
      var winRatio = (wins/battles)*100;
      winRatio = winRatio.toFixed(2);
      var out = ' <table id="tableHead"><th>Username</th><th>Battles</th><th>Victories</th><th>Win Ratio %</th></table>' ;
        out+= '<tr class="data"><td>'+nickname+'</td><td>'+battles+'</td><td>'+wins+'</td><td>'+winRatio+'</td></tr>';
        document.getElementById("tableHead").innerHTML = out;
    }

    //Display all users with 
    function display(list){
      isLoading=false;
        var out = ' <table id="tableHead"><th>Username</th><th>Account Id</th></table>' ;
        var i;
        for(i=0;i<list.data.length;i++){
          var id = list.data[i].account_id;
          out+='<tr class="data" onclick="user('+id+')"><td>'+list.data[i].nickname+'</td>'+'<td>'+id+'</td></tr>'; 
        }
        document.getElementById("tableHead").innerHTML = out;
    }  

var pause = 0;
var x = 0;

function parar(){
	pause = parseInt($('#pause').val());
	if(pause === 0){
		x = 0;
	}
	
	if(x===0){
		$('#pause').val('1');
		$('#btnPause').html('Play');
		$('#btn').removeClass('disabled');
		x = 1;
	}else{
		$('#pause').val('0');
		$('#btnPause').html('Pause');

		x = 0;
		cronometro(2);
	}
}

function cronometro(aux){
	if(aux == 1){
		minuto = 0;
		segundo = 0;
		horas = 48;

		if(segundo != 0 || minuto != 0 || horas != 0){
			segundo = segundo +1;
			$('#pause').val('0');
			$('#btn').addClass('disabled');
			$('#btnPause').html('Pause');
			$('#btnPause').removeClass('hide');
			$('#btnStop').removeClass('hide');
		}
			}
	if(aux == 1){
		
		$('#btn').addClass('disabled');
	}
	
	if(minuto > 0 && segundo === 0){
		segundo = 60;
		minuto--;
	}

	if(horas > 0 && minuto === 0){
		minuto = 59;
		horas--;
	}
	if((segundo-1)>=0){
		segundo=segundo-1;
		if(segundo == 0 && minuto == 0 && horas === 0){
			time="00:00:00";
			$('#btn').removeClass('disabled');
		}else if(segundo <10 && minuto === 0 && horas === 0){
			time="00:00"+segundo;
		}else if (minuto >= 1){
			time=(horas < 10 ? '0'+horas : horas)+":"+(minuto < 10 ? '0'+minuto : minuto)+":"+(segundo < 10 ? '0'+segundo : segundo);
		}else{
			time = segundo;
		}
		pause = parseInt($('#pause').val());
		if(pause === 0){
			tempo.innerText=time;
			setTimeout('cronometro();',1000);
		}
	}
}

function stop(){
	location.reload();
}
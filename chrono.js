$(document).ready(function() {

	var Chrono = function(output, ms, curentTime) {
		this.inter;
		this.curentTime = curentTime;
		this.ms = ms;
		this.output = output;
		if (this.curentTime === undefined /*|| curentTime === NaN*/ ) {
			this.curentTime = 0;
		}
		if (this.ms === undefined) {
			this.ms = 1000;
		} else {
			this.ms = ms;
		}
		//button = $('body').html("<button ></button>")
		span = $('body').append(($('<span/>').attr('id', this.output)).html("<span id='heure'>0</span>:<span id='min'>0</span>:<span id='sec'>0</span>"));
		this.sec = 0;
		this.start = function() {
			$(this.output).html(this.sec);
			if (this.inter === undefined) {
				this.inter = setInterval(function time() {
					//console.log(this.inter);
					this.sec++;
					console.log(this.sec)
					$('#sec').html(sec)
					//$(output).children("#sec").html('this.sec / 100');
				}, this.ms);
			}
		};
		this.pause = function() {
			clearInterval(this.inter);
			this.inter = undefined;
		};
		this.stop = function() {
			clearInterval(this.inter);
			this.inter = undefined;
			this.sec = 0;
			$(this.output).html(this.sec);
		};
		this.lap = function() {
			$('body').append(($('<span/>').attr('id', 'laps').html(this.sec)));
		};
		this.resetall = function() {
			clearInterval(this.inter);
			this.inter = undefined;
		}
	};
	var chronometre = new Chrono('#chrono', 1000);
	//var chronometre2 = new Chrono('#chrono2', 100); 

	$('button').click(function() {
		tool = $(this).text();
    //premier.tool();
    //console.log(tool)
    if (tool == 'start') {
    	chronometre.start();
      //chronometre2.start();
  } else if (tool == 'pause') {
  	chronometre.pause();
      //chronometre2.pause();
  } else if (tool == 'stop') {
  	chronometre.stop();
      //chronometre2.stop();
  } else if (tool == 'lap') {
  	chronometre.lap();
      //chronometre2.lap();
  } else if (tool == 'reset all') {
  	chronometre.resetall();
      //chronometre2.resetall();
  }
});
});


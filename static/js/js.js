var myCards=new Array();var numCards2=$(".card-row").attr("name");$(".choose1").click(function(){var currentId=$(this).attr('id');var setid=$(".card-row").attr("id");var cardnum=$(".card-row").attr("name");$(this).fadeTo('fast',0.1,function(){if($(this).hasClass("choose1")){myCards[cardnum-numCards2]=$(this).attr("id");numCards2--;if(numCards2>1){$('#choose-cards').text("Please choose "+numCards2+" more cards.");}
if(numCards2==1){$('#choose-cards').text("Please choose "+numCards2+" more card.");}
if(numCards2==0){$(".friend-pane").fadeOut('slow');var nextStep="/set/"+setid+".php?s=";var allCards=myCards.join("");nextStep=nextStep+window.spreadID+"&c="+allCards;window.location.href=nextStep;}}
$(this).attr("src","/img/small/"+currentId+".png");$(this).fadeTo('fast',1,function(){$(this).removeClass('choose1');});});});
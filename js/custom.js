// JavaScript Document
var keyRef = [];
var Score = 0;
var userChoice = ['Z', 'Z', 'Z', 'Z', 'Z'];

function getResult(userQuestion, userKey)
{
	if (userKey == 1) userKey ='A';
	if (userKey == 2) userKey ='B';
	if (userKey == 3) userKey ='C';
	if (userKey == 4) userKey ='D';
	userChoice[userQuestion] = userKey;
	console.log(userChoice);
}


function renderData()
{
	makeQuestionArr();
	var S='';		
 	for (var i = 0; i<Arr.length; i++)
	{		
		var Temp='';
		Temp += '<section id="Q'+(i+1)+'" class="full-page">';				
			Temp += '<table>';
				Temp += '<tr>';
					Temp += '<td></td>';
					Temp += '<td class="center">';
						Temp += '<h1 id="Q'+(i+1)+'_Q" class="question">Question ' +(i+1)+ ': <br>' + question[Arr[i]-1] + '</h1>';
					Temp += '</td>';
					Temp += '<td></td>';
				Temp += '</tr>';
				
				Temp += '<tr>';
					Temp += '<td></td>';
					Temp += '<td class="center">';
						Temp += '<div id="Q'+(i+1)+'_Ans" class="answer">';
						var Answer = answer[Arr[i]-1].split('@');				 
						Temp += '<input type="radio" name="'+i+'" onclick="getResult('+i+',1)"><span>A. '+Answer[0]+'</span></input><br>';
						Temp += '<input type="radio" name="'+i+'" onclick="getResult('+i+',2)"><span>B. '+Answer[1]+'</span></input><br>';
						Temp += '<input type="radio" name="'+i+'" onclick="getResult('+i+',3)"><span>C. '+Answer[2]+'</span></input><br>';								
						Temp += '<input type="radio" name="'+i+'" onclick="getResult('+i+',4)"><span>D. '+Answer[3]+'</span></input><br>';
					Temp += '</div>';
					Temp += '</td>';
					Temp += '<td></td>';
				Temp += '</tr>';

				Temp += '<tr>';
					Temp += '<td></td>';
					Temp += '<td style="text-align: center" class="center">';
						Temp += '<a class="btn" href="#Q'+(i+2)+'">Next</a>';
					Temp+='</td>';
					Temp += '<td></td>';
				Temp += '</tr>';								
			Temp += '</table>';						
		Temp += '</section>';
		S = S + Temp;
	}
	//document.getElementById('questionsBlock').innerHTML = S;
	$('#content').html(S);

	for (var k=0; k<Arr.length; k++)
	{
		keyRef[k] = result[Arr[k]-1];
	}
	console.log(keyRef);
}


function renderResult()
{	
	Score = 0;
	var comment = ['Bad', 'Fairly bad', 'Normal', 'Good', 'Best'];
	for (var i = 0; i<userChoice.length; i++)
	{
		if (userChoice[i] == keyRef[i])
		{
			Score = Score + 1;
		}
	}

	var tag_1 = document.getElementById("myScore");
	tag_1.innerHTML = Score*20;
	var tag_2 = document.getElementById("myComment");
	tag_2.innerHTML = comment[Score];
}

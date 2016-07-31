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
						Temp += '<label for="'+i+'A"><input type="radio" name="'+i+'" id="'+i+'A" onclick="getResult('+i+',1)"><span class="answer">A. '+Answer[0]+'</span></input></label>';
						Temp += '<label for="'+i+'B"><input type="radio" name="'+i+'" id="'+i+'B" onclick="getResult('+i+',2)"><span class="answer">B. '+Answer[1]+'</span></input></label>';
						Temp += '<label for="'+i+'C"><input type="radio" name="'+i+'" id="'+i+'C" onclick="getResult('+i+',3)"><span class="answer">C. '+Answer[2]+'</span></input></label>';								
						Temp += '<label for="'+i+'D"><input type="radio" name="'+i+'" id="'+i+'D" onclick="getResult('+i+',4)"><span class="answer">D. '+Answer[3]+'</span></input></label>';
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
}


function renderResult()
{	
	Score = 0;
	var comment = ['Bad', 'Fairly bad', 'Normal', 'Upper Normal', 'Good', 'Best'];
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

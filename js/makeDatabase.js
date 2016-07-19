var Arr = [];
var count = 0;
var question = [
'Which one of the five is least like the other four?',
'Which number should come next in the series? 1 - 1 - 2 - 3 - 5 - 8 - 13',
'Which one of the five choices makes the best comparison? PEACH is to HCAEP as 46251 is to:',
'Mary, who is sixteen years old, is four times as old as her brother. How old will Mary be when she is twice as old as her brother?',
'Which one of the numbers does not belong in the following series? 2 - 3 - 6 - 7 - 8 - 14 - 15 - 30',
'Which one of the five choices makes the best comparison? Finger is to Hand as Leaf is to:',
'If you rearrange the letters "CIFAIPC" you would have the name of a(n):',
'Choose the number that is 1/4 of 1/2 of 1/5 of 200:',
'John needs 13 bottles of water from the store. John can only carry 3 at a time. What is the minimum number of trips John needs to make to the store?',
'Choose the word most similar to "Trustworthy":',
'If you rearrange the letters "LNGEDNA" you have the name of a(n):',
'Which one of the numbers does not belong in the following series? 2 - 3 - 6 - 7 - 8 - 14 - 15 - 30',
'Ralph likes 25 but not 24; he likes 400 but not 300; he likes 144 but not 145. Which does he like:',
'How many four-sided figures appear in the diagram below?',
'What is the missing number in the sequence shown below? 1 - 8 - 27 - ? - 125 - 216',
'Which one of the following things is the least like the others?',
'11,42,88,250,732,1842,3996,?',
'115,125,140,160,9185,44215,129250,?',
'1,1.5,3.5,8,16,28.5,?',
'1,4,10,22,46,94,190,?',
'72,108,162,243,359,517,723,982,?',
'13,39,117,273,546,988,1664,2652,?',
'101,102,204,408,725,1176,1792,?',
'11,110,210,313,425,564,784,?',
'55,88,132,286,627,1210,2068,?',
'20,30,45,89,203,406,793,1420,?',
'if ONE * THREE * FIVE = 225 --- then NINE * SEVEN + TWELVE = X --- 225 + X = Y --- 10,18,32,56,93,146,? ---? + Y = Z --- Solve for Z',
'What is the box suggesting.',
'Fill in the bottom right quarter of the box.(bottom right 16 boxes) The top left 16 boxes would be:  abcd,2ad,3abc,4d,5,6b,7c,8,9c,10,11c,12,13,14,15,16b',
'AABCEHACBACDEE?',
'The fourth box is blank, if it was not what number would correspond with it? Clue:1,5,10,20,50',
'This box is asking a question. What is the answer?',
'In the following series 2, 3, 5, 7, 11, 13 the next number will be',
'If someone is omninescient then that person knows',
'PGPGGPGPPGPGG is to ~/~//~/~~/~// as GPGGPGPPGPG is to',
'A man walks into a hardware store with $111.50. He grabs three cans of paint each costing $24.79 and puts them into his shopping cart. He also grabs two paintbrushes, ($4.95 apiece) a roller, ($13.95) and a pack of batteries ($3.99) for his radio. After 6',
'EEZSHNCIT unscrambled is the name of a(n)',
'The area surrounding a blackhole where the intense pull of gravity',
'The weakest force in quantum physics is',
'Rasputin (also known as the Mad Monk) was killed by which of the following methods:',
'Dissociative Identity Disorder is an example of a psychosis.',
'In music, a sforzando refers to',
'KKAOGNB unscrambled is the name of a(n)',
'25201014106149 is to infinity as 2520149185205 is to eternity.',
'If something is eradicated from existence as though it has never existed then it has been'];

var answer = [
'Dog@Mouse@Lion@Snake',
'8@13@21@26',
'25641@15264@26451@51462',
'24@20@25@28',
'Three@Seven@Eight@Fifteen',
'Twig@Tree@Branch@Blossom',
'City@Animal@Ocean@Country',
'2@5@10@25',
'3@4@5@6',
'Resolute@Tenacity@Relevant@Reliable',
'Animal@Country@State@Ocean',
'48@5@29@1',
'10@50@200@1600',
'10@16@22@25',
'36@45@46@64',
'Poem@Novel@Statue@Flower',
'7713@7730@7721@7726',
'295101@290084@294290@250192',
'48@51.5@45@46.5',
'371@382@390@399',
'1230@1277@1298@1261',
'4057@4043@4020@4100',
'2581@2527@2796@2614',
'1228@1247@1250@1211',
'3255@3212@3321@3272',
'2372@2411@2401@2355',
'4908@4561@4768@4898',
'123456789@126485704@673258719@627456934',
'1,2,3,4,5,6acd,7,8,9,10,11,12,13,14,15,16d@1abc,2,3,4ab,5,6,7d,8,9,10,11,12,13,14ad,15d,16c@1c,2,3,4,5b,6,7c,8,9c,10,11ab,12,13c,14,15,16d@1,2,3c,4d,5,6,7,8,9ab,10,11,12d,13cd,14,15,16',
'BM@KR@HI@CE',
'-3@36@0@7',
'36@4@2@16',
'15@17@16@19',
'something@everything@nothing@none of the above',
'/~//~//~/~/@~/~//~/~//~@~/~~/~//~/~@/~//~/~~/~/',
'TRUE@False@Neither@None of the above',
'poet@philosopher@composer@artist',
'the event horizon@the singularity@a wormhole@spaghetification',
'electromagnetism@gravity@a strong nuclear force@a weak nuclear force',
'gunshot@drowning@stabbed@beheaded',
'TRUE@False@Neither@None of the above',
'dynamics@tempo@polyphony@none of the above',
'city@plant@nation@animal',
'true@false@neither@none of the above',
'obliterated@annihilated@expunged@demolished'
];
var result = ['D','C','B','A','C','A','C','B','C','D','B','A','D','D','D','D','D','C','D','B','C','B','D','B','B','D','B','A','C','C','D','B','B','C','D','A','B','A','B','B','B','A','A','B','C'];

function randomNumber(length, nameArr)
{
	var Rand = new Uint32Array(1);
	window.crypto.getRandomValues(Rand);
	Rand = Rand[0];
	/* https://developer.mozilla.org/en-US/docs/Web/API/RandomSource/getRandomValues */
	Rand = Rand % length + 1;
	if (nameArr == 'question')
	{
		for (var i = 0; i<=count; i++)		
			if (Arr[i] == Rand)			
				Rand = randomNumber(length, 'question');
	}
	return Rand;
}

function makeQuestionArr()
{
	console.log(Arr);
	for (var i=0; i<5;i++)
	{
		count = i;
		Arr[i] = randomNumber(question.length, 'question');
	}	
}
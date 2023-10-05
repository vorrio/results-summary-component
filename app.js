"use strict";

const scoresJsonUrl = "./data.json";

fetch(scoresJsonUrl)
	.then((res)=>{
		if(!res.ok) throw new Error("not a valid response");
		return res.json();
	})
	.then((scores)=>{

		const scoreList = document.querySelector(".score-list");
		const totalScore = document.querySelector(".total-score")

		let scoreSum = 0;
		
		scores.forEach(score => {
			
			const scoreValue = score.score;
			const scoreName = score.category;
			const scoreIcon = score.icon;

			scoreSum += scoreValue;

			scoreList.innerHTML += `
				<li class="score-list-item">
				<div class="category">
					<img src="${scoreIcon}">
					<span class="score-name">${scoreName}</span>
				</div>
				<div class="score">
					<span class="obtained-score">${scoreValue}</span>
					<span class="max-score">&nbsp;/ 100</span>
				</div>
				</li>
			`;
			
		});

    totalScore.innerHTML = (scoreSum / scores.length).toFixed(0);
	})
	.catch((err)=>{
		throw new Error(`unable to fatch JSON. Error ${err.message}`)
	})
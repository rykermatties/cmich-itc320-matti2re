"use strict";
const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#calculate").addEventListener("click", processEntry);

});

const processEntry = () =>
{
	$("#income").focus();
	const income = parseFloat($("#income").value);
	if(isNaN(income) || income < 0)
	{
		alert("Income must be a valid number");
	}
	else
	{
		$("#tax").value = calculateTax(income);
	}
	
}

const calculateTax = (income) =>
{
	var taxableIncome = 0;
	if(income > 0 && income <= 9875)
	{
		taxableIncome = (income * .1);

	}
	else if(income > 9875 && income <= 40125)
	{
		taxableIncome = (income * .12) + 987.5;

	}
	else if(income > 40125 && income <= 85525)
	{
		taxableIncome = (income * .22) + 4617.5;

	}
	else if(income > 85525 && income <= 163300)
	{
		taxableIncome = (income * .24) + 14605.5;

	}
	else if(income > 163300 && income <= 207350)
	{
		taxableIncome = (income * .32) + 33271.5;

	}
	else if(income > 207350 && income <= 518400)
	{
		taxableIncome = (income * .35) + 47367.5;

	}
	else if(income > 518400)
	{
		taxableIncome = (income * .37) + 156235;

	}

	return taxableIncome.toFixed(2);
}
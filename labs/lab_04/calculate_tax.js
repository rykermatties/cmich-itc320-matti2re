"use strict";
const $ = selector => document.querySelector(selector);

const processEntries = () =>
{
	$("#subtotal").focus();
	const subtotal = parseFloat($("#subtotal").value);
	const taxRate = parseFloat($("#tax").value);

	if(isNaN(subtotal) || subtotal < 0 || subtotal > 10000)
	{
		alert("Subtotal must be > 0 and < 10000");
	}
	else if(isNaN(taxRate) || taxRate < 0 || taxRate > 12)
	{
		alert("Tax Rate must be > 0 and < 12");
	}
	else
	{
		$("#salesTax").value = (subtotal * (taxRate/100)).toFixed(2);
		const salesTax = parseFloat($("#salesTax").value);
		$("#total").value = (subtotal + salesTax).toFixed(2);
	}
}
	

	var clearEntries = () =>
	{
		$("#subtotal").focus();
		$("#salesTax").value = "";
		$("#total").value = "";
	}

	var clearSubtotal = () =>
	{
		$("#subtotal").value = "";
	}

	var clearTax = () =>
	{
		$("#tax").value = "";
	}


	document.addEventListener("DOMContentLoaded", () => {
		// add event handlers
		$("#subtotal").focus();
		$("#calculate").addEventListener("click", processEntries);
		$("#clear").addEventListener("click", () => {clearEntries(); clearSubtotal(); clearTax();});
		$("#subtotal").addEventListener("click", clearSubtotal);
		$("#tax").addEventListener("click", clearTax);
	});
	



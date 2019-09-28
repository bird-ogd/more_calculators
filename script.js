var result = [];

function get_slider(slider) {
	return parseInt(document.querySelector(slider).value);
}

function annual_growth(start_value, end_value, years) {
	result["start_value"] = start_value;
	result["end_value"] = end_value;
	result["ag_years"] = years;
	result["annual_growth"] = (((parseFloat(end_value) / parseFloat(start_value))**(1 / parseFloat(years)) - 1) * 100).toFixed(2) + "%";
}

function compound_interest(principal, rate, periods, years) {
	rate = rate / 100;
	result["principal"] = principal;
	result["rate"] = (rate * 100).toFixed(0) + "%";
	result["periods"] = periods;
	result["ci_years"] = years;
	result["compound_interest"] = (principal * (1 + rate / periods)**(periods * years)).toFixed(2);
}

function pro_rata(monthly_amount, days, days_in_year) {
	if(days_in_year == 365) {
		result["leap_year"] = "No";
	} else if(days_in_year == 366) {
		result["leap_year"] = "Yes";
	}
	result["pro_rata"] = (((monthly_amount * 12) / days_in_year) * days).toFixed(2);
	result["monthly_amount"] = monthly_amount;
	result["number_days"] = days;
}

function updateResults() {
	var slider1 = get_slider("#slider1");
	var slider2 = get_slider("#slider2");
	var slider3 = get_slider("#slider3");
	var slider4 = get_slider("#slider4");
	var slider5 = get_slider("#slider5");
	var slider6 = get_slider("#slider6");
	var slider7 = get_slider("#slider7");
	var slider9 = get_slider("#slider9");
	var slider10 = get_slider("#slider10");
	var slider11 = get_slider("#slider11");
	
	var items = [	"start_value",
					"end_value",
					"ag_years",
					"annual_growth",
					"principal",
					"rate",
					"periods",
					"ci_years",
					"compound_interest",
					"pro_rata", 
					"leap_year", 
					"monthly_amount",
					"number_days"
				];

	annual_growth(slider1, slider2, slider3);
	pro_rata(slider9, slider10, slider11);
	compound_interest(slider4, slider5, slider6, slider7);

	for(var i = 0; i < items.length; i++) {
		document.getElementById(items[i]).innerHTML = result[items[i]].toLocaleString();
	}
}

var slides = document.querySelectorAll(".slides");

for(i = 0; i < slides.length; i++) {
	slides[i].addEventListener("input", updateResults);
}
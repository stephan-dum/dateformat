
var months = ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"];
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

var options = {	
	d(date) {
		return date.getDate();
	},
	m(date) {
		var month = date.getMonth()+1;
		return month>9?month:'0'+month;
	},
	Y(date) {
		return date.getFullYear();
	},
	y(date) {
		return date.getYear();
	},
	a(date) {
		return days[date.getDay()];
	},
	H(date) {
		return date.getHours();
	},
	i(date) {
		return date.getMinutes();
	},
	s(date) {
		return date.getSeconds();
	},
	M(date) {
		return months[date.getMonth()];
	},
	z(date) {
		return date.getTimezoneOffset();
	}
}

var reg = new RegExp('%([a-z])', 'gi');

function parser(date, format) {
	if(!format && !date.format) {
		return Date.prototype.toString.call(date);
	}
	
	return (format || date.format).replace(reg, function(match, id) {
		return options[id](date);
	});
}

class FormatableDate extends Date {
	constructor(format, ...date) {
		super(...date);
		
		this.format = format || '%a %M %d %Y %H:%i:%s GMT%z';
	}
	toString(format) {
		return parser(this, format);
	}
	toJSON() {
		return parser(this, format);
	}
}

export FormatableDate;

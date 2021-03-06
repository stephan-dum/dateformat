# DateFormat

A light wight [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) wrapper that adds SQL like format capabilities


## prototype

#### constructor([`String format`, [`...dateArgs`]])

- **`format`** (optional) the format to be used by default
- **`dateArgs`** (optional) arguments passed to the nativ Date constructor

#### setFormat(`format`)
  
- **`format`** used as default format
		
#### toString([`format`])
- **`format`** (optional) if format is not present the constructor format will be used. if none is present Date.prototype.toString will be returned.
   
#### toJSON()
- returns `this.getTime` aiming to ease convertions to json
		
## static properties
#### months `Array<String>`
- 3 digit representation of months in english 
- overwrite this to change the month naming
		
#### days `Array<String>`
- 3 digit representation of weekdays in english
- overwrite this to change the day naming

#### formats `Object<replacement, function(Date)>`
the replacement handler host object. One can implement additional handlers here, these are the embedded options:

- `%d` day of month
- `%D` day of month with leading 0 if < 10
- `%m` day of month
- `%M` day of month with leading 0 if < 10
- `%b` name of month provided by DateFormat.months
- `%y` year in 2 digits
- `%Y` year in 4 digit 
- `%a` name of day provided by DateFormat.days
- `%W` number of the week in the year
- `%H` hours
- `%i` minutes
- `%s` seconds
- `%z` timezone offset
		
## Usage

```javascript
var date = new DateFormat("%D.%M.%y", 2017, 2, 15, 12, 30);
		
date.toString(); //02.15.17
		
date.toString("%M.%Y") //02.2017
		
date.setFormat("%H:%i");
		
date.toString(); //12:30
```

> toString and toJSON will also get called implicit

```javascript
var date = new DateFormat("%m", 2017, 2);
		
"month: "+date // month: 2
"2" == date // true
		
var obj = {
	date : date
};
		
JSON.stringify(obj); // { "date" : "1488322800000" }
```


## Licence

Public Domain

NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

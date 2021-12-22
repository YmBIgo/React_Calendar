// 入力・現在日付 or 日付 で、カレンダー形式の配列を返す

type CurrentDateType = {
	date_string: number;
	date: Date;
}

function get_calendar_from_date(date?: Date): (number | CurrentDateType)[] {
	if (date == undefined){
		date = new Date();
	}
	let this_year: number  = date.getFullYear();
	let this_month: number = date.getMonth() - 1;
	// get first date
	let first_date: Date = new Date(this_year, this_month, 1)
	// get last date
	let last_date: Date  = get_month_last_date(this_year, this_month)
	// calendar amount
	let calendar_dates: number = get_calendar_info(first_date, last_date)
	let calendar_result: (number|CurrentDateType)[] = create_calendar(calendar_dates, first_date, last_date);
	// 
	return calendar_result
}

function get_month_last_date(year: number, month: number): Date{
	let last_date: Date = new Date(year, month+1, 1)
	let last_date_date: number = last_date.getDate()
	last_date.setDate(last_date_date - 1)
	return last_date
}

function get_calendar_info(first_date: Date, last_date: Date): number{
	// return value should be 1.month_amount 
	let first_date_yobi: number = first_date.getDay()
	let date_amount: number = last_date.getDate()
	let calendar_amount: number = first_date_yobi + date_amount
	if (calendar_amount > 35) {
		return 42
	} else {
		return 35
	}
}

function create_calendar(date_amount: number, first_date: Date, last_date: Date): Array<number | CurrentDateType>{
	// margin
	let date_margin: number = first_date.getDay();
	let date_margin_array: number[] = Array(date_margin).fill(0)
	// calendar
	let month_date_amount: number = last_date.getDate();
	let month_date_array: CurrentDateType[] = [];
	for(var i = first_date; i <= last_date; i.setDate(i.getDate()+1)){
		let current_date_str: number = i.getDate()
		let current_date : Date = new Date(i.getFullYear(), i.getMonth(), i.getDate())
		let current_date_data : CurrentDateType = {date_string: current_date_str, date: current_date};
		month_date_array.push(current_date_data)
	}
	// margin
	let date_margin_last: number = date_amount - date_margin_array.length - month_date_array.length
	let date_margin_last_array: number[] = Array(date_margin_last).fill(0)
	//
	let calendar_array : (CurrentDateType | number)[] = [...date_margin_array, ...month_date_array, ...date_margin_last_array]
	return calendar_array
}

let sample_date = new Date(2022, 7, 20)

let calendar_results : (number | CurrentDateType)[] = get_calendar_from_date(sample_date)
console.log(calendar_results)
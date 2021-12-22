import React, {useState, useEffect} from "react"
import CalendarComponent from "./components/CalendarComponent"
import {useSelector} from "react-redux"

import './App.css';
import AddEventModal from "./components/AddEventModal"

function App() {

  const events = useSelector(state => state.events)
  const [date, setDate] = useState("2021-10-10");
  const useeffect_counter = 0

  useEffect(() => {
    setDate(current_date())
  }, [useeffect_counter])

  const current_date = () => {
    let current_date = new Date()
    let current_date_string = fixDateData(current_date)
    return current_date_string
  }

  const onChangeDate = (e) => {
    let changed_date = e.target.value
    setDate(changed_date)
  }

  const splitDateDate = (date) => {
    let date_array = date.split("-").map(item => parseInt(item))
    return date_array
  }

  const fixDateData = (date) => {
    let fixed_year  = parseInt(date.getFullYear())
    let fixed_month = parseInt(date.getMonth());
    let fixed_date = date.getDate();
    if (fixed_month.toString().length == 1) {
      fixed_month = "0" + date.getMonth().toString()
    }
    if (fixed_date.toString().length == 1) {
      fixed_date = "0" + date.getDate().toString()
    }
    if (fixed_month == "00") {
      fixed_month = "12"
      fixed_year -= 1
    }
    let date_data = fixed_year + "-" + fixed_month + "-" + fixed_date
    return date_data
  }

  const onMovePrevMonth = (e) => {
    let date_input = document.getElementsByClassName("date-input")[0];
    let [year, month, date] = splitDateDate(date_input.value)
    let fixed_month = month - 1
    let fixed_year = year
    if (fixed_month == 0) { fixed_month = 11; fixed_year = year - 1; }
    let new_date = new Date(fixed_year, fixed_month, 1)
    let new_date_string = fixDateData(new_date)
    setDate(new_date_string)
  }

  const onMoveNextMonth = (e) => {
    let date_input = document.getElementsByClassName("date-input")[0];
    let [year, month, date] = splitDateDate(date_input.value)
    let new_date = new Date(year, month+1, 1);
    let new_date_string = fixDateData(new_date);
    setDate(new_date_string)
  }

  return (
    <React.Fragment>
      <div className="App">
        <div>
          <button
          onClick={e => onMovePrevMonth(e)}
          >
          ＜前の月
          </button>
          <input className="date-input"
                 type="date"
                 value={date}
                 onChange={e => onChangeDate(e)}
          />
          <button
          onClick={e => onMoveNextMonth(e)}
          >
          次の月＞
          </button>

          <span>{events.length}</span>

        </div>
        <CalendarComponent date={date} />
      </div>
      <AddEventModal />
    </React.Fragment>
  );
}

export default App;

import { defaults } from "lodash";
import React, { useEffect, useState } from "react";
import * as moment from "moment";
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";
import { Chart as chartjs } from "chart.js/auto";
import { getStatistic } from "../../services/me.service";
import DisableElement from "../DisableElement";
import "./style.scss";

function Statistics() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isLoading, setIsLoading] = useState(false);
  const [yardStatisticModel, setYardStatisticModel] = useState([]);
  const [numberOfBookingsByHours, setNumberOfBookingsByHours] = useState([]);
  const [maxBookings, setMaxBookings] = useState(0);
  const [hasData, setHasData] = useState(false);

  useEffect(() => {
    if (startDate && endDate) {
      getStatisticObject();
      setHasData(true);
    }
  }, [startDate, endDate])

  const getStatisticObject = () => {
    setIsLoading(true);
    getStatistic({ startTime: moment(startDate).format("yyyy-MM-DD"), endTime: moment(endDate).format("yyyy-MM-DD") })
      .then((res) => {
        setYardStatisticModel(res.yardStatistic);
        setNumberOfBookingsByHours(res.bookingStatisticByTime);
        setMaxBookings(Math.round(res.maxOfBooking + 0.2 * res.maxOfBooking))
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  return (
    <div className="pt-4 w-100">
      <div className="d-flex justify-content-around">
        <div className="page-title"><h3>Statistics</h3></div>
        <div className="start-date d-flex justify-content-center mb-4 row">
          <label htmlFor="play-date" className="text-start">
            Start Date
          </label>
          <span className="col-1 lh-44 signup__icon-wrapper booking__icon-wrapper">
            <i className="far fa-clock"></i>
          </span>
          <input
            id="play-date"
            className="col-10 outline-none p-2 signup__input-border"
            type="date"
            placeholder="Date"
            value={startDate}
            onChange={(e) => {
              setStartDate(e.target.value);
            }}
            required
          />
        </div>
        <div className="end-date d-flex justify-content-center mb-4 row">
          <label htmlFor="play-date" className="text-start">
            End Date
          </label>
          <span className="col-1 lh-44 signup__icon-wrapper booking__icon-wrapper">
            <i className="far fa-clock"></i>
          </span>
          <input
            id="play-date"
            className="col-10 outline-none p-2 signup__input-border"
            type="date"
            placeholder="Date"
            value={endDate}
            onChange={(e) => {
              setEndDate(e.target.value);
            }}
            required
          />
        </div>
      </div>

      {isLoading ? (
        <div
          className="w-100 d-flex justify-content-center align-items-center"
          style={{ height: "50vh" }}
        >
          <DisableElement />
        </div>
      ) : (
        <div className="pt-4 w-100">
          <div className=" pt-4 w-100">
            <div className="d-flex">
              <div className="doughnut-chart col-4 text-center border border-1">
                <h2 className="pie-title">Yard Business Contribution</h2>
                <Pie
                  data={{
                    labels: yardStatisticModel.map(yardModel => yardModel.yardName),
                    datasets: [
                      {
                        label: "Booking",
                        data: yardStatisticModel.map(yardModel => yardModel.totalIncome),
                        backgroundColor: yardStatisticModel.map(yardModel => "rgba(255, 99, 132, 1)"),
                        borderColor: "white",
                        borderWidth: 1,
                      },
                    ],
                  }}
                  height={600}
                  width={900}
                  options={{
                    plugins: {
                      legend: {
                        display: false,
                      },
                    },


                  }}
                />
              </div>

              <div className=" col-8 border border-1">
                <div>
                  <h3 class="chart-title">Booking Statistic</h3>
                  <div>
                    <Bar
                      data={{
                        labels: yardStatisticModel.map(yardModel => yardModel.yardName.split(" ")),
                        datasets: [
                          {
                            label: "Booking",
                            data: yardStatisticModel.map(yardModel => yardModel.numberOfBookings),
                            backgroundColor: "#0000FF",
                            borderColor: "white",
                            borderWidth: 1,
                          },
                          {
                            label: "Cancel",
                            data: yardStatisticModel.map(yardModel => yardModel.numberOfBookingCanceled),
                            backgroundColor: "#FF0000",
                            borderColor: "white",
                          },
                          {
                            label: "Played",
                            data: yardStatisticModel.map(yardModel => yardModel.numberOfBookingPlayed),
                            backgroundColor: "#00FF00",
                            borderColor: "white",
                          },
                        ],
                      }}
                      height={400}
                      width={600}
                      options={{
                        maintainAspectRatio: false,
                        scales: {
                          y:
                          {
                            max: maxBookings,
                            beginAtZero: true,
                            ticks: {
                              precision: 0
                            }
                          }
                        },
                        legend: {
                          labels: {
                            fontSize: 25,
                          },
                        },
                      }}
                    />
                  </div>
                </div>
              </div>

            </div>
            <div className="d-flex row">
              <div className="pt-4 w-100">
                <div className=" border border-2">
                  <h3 class="chart-title">Booking In Time</h3>
                  <div className="line-chart">
                    <Line
                      data={{
                        labels: [
                          "00:00", "00:30", "01:00", "01:30", "02:00", "02:30", "03:00", "03:30", "04:00", "04:30", "05:00", "05:30", "06:00",
                          "06:30", "07:00", "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30",
                          "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00",
                          "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30"
                        ],
                        datasets: [
                          {
                            label: "Booking",
                            data: numberOfBookingsByHours,
                            backgroundColor: "blue",
                            borderColor: "#008cea",
                            borderWidth: 1,
                            pointRadius: 0.4,
                            lineTension: 0.3
                          },
                        ],
                      }}
                      height={400}
                      width={600}
                      options={{
                        maintainAspectRatio: false,
                        scales: {
                          y:
                          {
                            ticks: {
                              beginAtZero: true,
                              precision: 0
                            },
                          },
                          x: {
                            ticks: {
                              autoSkip: false,
                            }
                          }
                        },
                        legend: {
                          labels: {
                            fontSize: 25,
                          },
                        },
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Statistics;
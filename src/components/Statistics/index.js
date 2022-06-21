import { defaults } from "lodash";
//import React from "react";
import React, { useState } from "react";
import * as moment from "moment";
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";
import { Chart as chartjs } from "chart.js/auto";

import "./style.scss";

function Statistics() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDate2, setSelectedDate2] = useState(new Date());

  return (
    <div className="pt-4 w-100">
      <div>
        <div className="d-flex justify-content-around">
          <h3>Statistics</h3>
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
              value={selectedDate}
              onChange={(e) => {
                setSelectedDate(e.target.value);
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
              value={selectedDate2}
              onChange={(e) => {
                setSelectedDate2(e.target.value);
              }}
              required
            />
          </div>
        </div>
      </div>

      <div className="pt-4 w-100">
        <div className=" pt-4 w-100">
          <div className="d-flex">
            <div className="doughnut-chart col-4 text-center border border-1">
              <Pie
                data={{
                  labels: [
                    "Sub-Yard1",
                    "Sub-Yard2",
                    "Sub-Yard3",
                    "Sub-Yard4",
                    "Sub-Yard5",
                    "Sub-Yard6",
                  ],
                  datasets: [
                    {
                      label: "Booking",
                      data: [72, 89, 33, 52, 50, 90],
                      backgroundColor: [
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(153, 102, 255, 1)",
                        "rgba(255, 159, 64, 1)",
                      ],
                      borderColor: "white",
                      borderWidth: 1,
                    },
                  ],
                }}
                height={400}
                width={600}
                options={{
                  maintainAspectRatio: false,
                  scales: {
                    yAxes: [
                      {
                        ticks: {
                          beginAtZero: true,
                        },
                      },
                    ],
                  },
                  legend: {
                    labels: {
                      fontSize: 25,
                    },
                  },
                }}
              />
            </div>

            <div className=" col-8 border border-1">
              <div>
                <h3 class="text-center">name</h3>
                <div>
                  <Bar
                    data={{
                      labels: [
                        "Sub-Yard1",
                        "Sub-Yard2",
                        "Sub-Yard3",
                        "Sub-Yard4",
                        "Sub-Yard5",
                        "Sub-Yard6",
                      ],
                      datasets: [
                        {
                          label: "Booking",
                          data: [72, 89, 33, 52, 50, 90],
                          backgroundColor: "#059bff",
                          borderColor: "white",
                          borderWidth: 1,
                        },

                        {
                          label: "Cancel",
                          data: [27, 12, 37, 8, 19, 35],
                          backgroundColor: "#ff4069",
                          borderColor: "white",
                        },
                      ],
                    }}
                    height={400}
                    width={600}
                    options={{
                      maintainAspectRatio: false,
                      scales: {
                        yAxes: [
                          {
                            ticks: {
                              beginAtZero: true,
                            },
                          },
                        ],
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

              <div className="pt-4 w-100">
                <div className=" border border-2">
                  <h3 class="text-center">name</h3>
                  <div className="line-chart">
                    <Line
                      data={{
                        labels: [
                          "Time1",
                          "Time2",
                          "Time3",
                          "Time4",
                          "Time5",
                          "Time6",
                        ],
                        datasets: [
                          {
                            label: "Booking",
                            data: [40, 59, 33, 82, 90, 95],
                            // backgroundColor: [
                            //   "rgba(255, 99, 132, 1)",
                            //   "rgba(54, 162, 235, 1)",
                            //   "rgba(255, 206, 86, 1)",
                            //   "rgba(75, 192, 192, 1)",
                            //   "rgba(153, 102, 255, 1)",
                            //   "rgba(255, 159, 64, 1)",
                            // ],
                            backgroundColor: "blue",
                            borderColor: "#008cea",
                            borderWidth: 1,
                          },

                          // {
                          //   label: "Cancel",
                          //   data: [27, 12, 37, 8, 19, 35],
                          //   backgroundColor: "red",
                          //   borderColor: "#ff2050",
                          //   borderWidth: 1,
                          // },
                        ],
                      }}
                      height={400}
                      width={600}
                      options={{
                        maintainAspectRatio: false,
                        scales: {
                          yAxes: [
                            {
                              ticks: {
                                beginAtZero: true,
                              },
                            },
                          ],
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
      </div>
    </div>
  );
}
export default Statistics;

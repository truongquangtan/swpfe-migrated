import React, { useEffect, useState } from "react";

import "./style.scss";
import chart from "../../assets/images/chart.png";

function StatisticWidget() {
  return (
    <div className="pt-5 w-100">
      <div className="row">
        <h4 className="mb-4 d-inline-block col-5">
          <img src={chart} alt="Statistic" className="width-60 pe-3" />
          Statistics
        </h4>
        <div className="row p-2 col-3 justify-content-end size-1">
          <span className="col-3 lh-44 signup__icon-wrapper">FROM</span>
          <input
            className="col-9 outline-none p-2 signup__input-border"
            type="month"
            placeholder="Date"
            required
          />
        </div>
        <div className="row p-2 col-3 justify-content-end size-1">
          <span className="col-2 lh-44 signup__icon-wrapper">TO</span>
          <input
            className="col-9 outline-none p-2 signup__input-border"
            type="month"
            placeholder="Date"
            required
          />
        </div>
        <div className="row p-2 col-1 justify-content-center ps-4">
          <button className="btn btn-primary w-100 p-2">
            <i class="fas fa-redo"></i>
          </button>
        </div>
      </div>
      <div className="statistic text-center">
        <div className="row statistic-row">
          <div className="col-3">
            <h1 className="size-4">220</h1>
            <p>Trận đấu</p>
          </div>
          <div className="col-3 red">
            <h1 className="size-4">50</h1>
            <p>Trận đã hủy</p>
          </div>
          <div className="col-3 green">
            <h1 className="size-4">150</h1>
            <p>Trận đã hoàn thành</p>
          </div>
          <div className="col-3 yellow">
            <h1 className="size-4">20</h1>
            <p>Trận chưa hoàn thành</p>
          </div>
        </div>
        <div className="row justify-content-between statistic-row">
          <div className="col-3">
            <h1 className="size-4">50.000.000</h1>
            <p>Tiền thu vào</p>
          </div>
          <div className="col-3 red">
            <h1 className="size-4">7.000.000</h1>
            <p>Tiền hoàn lại</p>
          </div>
          <div className="col-3 green">
            <h1 className="size-4">43.000.000</h1>
            <p>Lợi nhuận</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatisticWidget;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "./style.scss";
import yardImg from "../../assets/images/bg-wall.jpg";
import noData from "../../assets/images/no-data.jpg";
import { EMPTY, TOAST_CONFIG } from "../../constants/default";
import { decrypt, encrypt, encryptKey } from "../../helpers/crypto.helper";
import {
  getAllProvinces,
  getDistrictsByProvinceId,
} from "../../services/location.service";
import { INTERNAL_SERVER_ERROR } from "../../constants/error-message";
import { searchYard } from "../../services/yard.service";
import yard1 from "../../assets/images/yard-1.jpg";
import yard2 from "../../assets/images/yard-2.jpg";
import yard3 from "../../assets/images/yard-3.jpg";
import { TIMELINE } from "../../constants/time";

function OutstandingYard() {
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [yards, setYards] = useState([
    {
      id: "c62f6d14-3114-435a-8c9a-c1c767eed9ca",
      name: "Sân Thủ Đức",
      address: "503 Lê Văn Việt, Thành phố Thủ Đức, Thành phố Hồ Chí Minh",
      openAt: 360,
      closeAt: 600,
      slotDuration: 60,
      images: [yard1, yard2, yard3],
      subYards: [
        {
          name: "Sân 1",
          type: "3 vs 3",
          slots: [
            {
              startTime: "06:00",
              endTime: "07:00",
              price: 50000,
            },
            {
              startTime: "07:00",
              endTime: "08:00",
              price: 60000,
            },
            {
              startTime: "08:00",
              endTime: "09:00",
              price: 60000,
            },
            {
              startTime: "09:00",
              endTime: "10:00",
              price: 50000,
            },
          ],
        },
        {
          name: "Sân 2",
          type: "5 vs 5",
          slots: [
            {
              startTime: "06:00",
              endTime: "07:00",
              price: 70000,
            },
            {
              startTime: "07:00",
              endTime: "08:00",
              price: 60000,
            },
            {
              startTime: "08:00",
              endTime: "09:00",
              price: 60000,
            },
            {
              startTime: "09:00",
              endTime: "10:00",
              price: 70000,
            },
          ],
        },
      ],
    },
    {
      id: "09effa30-d3d9-4d62-bb21-a795d0deba03",
      name: "Sân Quận 1",
      address: "2 Đinh Tiên Hoàng, Đa Kao, Quận 1, Thành phố Hồ Chí Minh",
      openAt: 360,
      closeAt: 600,
      slotDuration: 60,
      images: [yard2, yard1, yard3],
      subYards: [
        {
          name: "Sân 1",
          type: "3 vs 3",
          slots: [
            {
              startTime: "06:00",
              endTime: "07:00",
              price: 50000,
            },
            {
              startTime: "07:00",
              endTime: "08:00",
              price: 60000,
            },
            {
              startTime: "08:00",
              endTime: "09:00",
              price: 60000,
            },
            {
              startTime: "09:00",
              endTime: "10:00",
              price: 50000,
            },
          ],
        },
        {
          name: "Sân 2",
          type: "5 vs 5",
          slots: [
            {
              startTime: "06:00",
              endTime: "07:00",
              price: 70000,
            },
            {
              startTime: "07:00",
              endTime: "08:00",
              price: 60000,
            },
            {
              startTime: "08:00",
              endTime: "09:00",
              price: 60000,
            },
            {
              startTime: "09:00",
              endTime: "10:00",
              price: 70000,
            },
          ],
        },
        {
          name: "Sân 3",
          type: 2,
          slots: [
            {
              startTime: "06:00",
              endTime: "07:00",
              price: 70000,
            },
            {
              startTime: "07:00",
              endTime: "08:00",
              price: 70000,
            },
            {
              startTime: "08:00",
              endTime: "09:00",
              price: 60000,
            },
            {
              startTime: "09:00",
              endTime: "10:00",
              price: 50000,
            },
          ],
        },
      ],
    },
    {
      id: "970824f1-69b1-478e-9445-b3f8ca9a320c",
      name: "Sân Điện Biên Phủ",
      address: "186 Điện Biên Phủ, Quận 3, Thành phố Hồ Chí Minh",
      openAt: 360,
      closeAt: 600,
      slotDuration: 60,
      images: [yard3, yard1, yard2],
      subYards: [
        {
          name: "Sân 1",
          type: "3 vs 3",
          slots: [
            {
              startTime: "06:00",
              endTime: "07:00",
              price: 50000,
            },
            {
              startTime: "07:00",
              endTime: "08:00",
              price: 60000,
            },
            {
              startTime: "08:00",
              endTime: "09:00",
              price: 60000,
            },
            {
              startTime: "09:00",
              endTime: "10:00",
              price: 50000,
            },
          ],
        },
        {
          name: "Sân 2",
          type: "5 vs 5",
          slots: [
            {
              startTime: "06:00",
              endTime: "07:00",
              price: 70000,
            },
            {
              startTime: "07:00",
              endTime: "08:00",
              price: 60000,
            },
            {
              startTime: "08:00",
              endTime: "09:00",
              price: 60000,
            },
            {
              startTime: "09:00",
              endTime: "10:00",
              price: 70000,
            },
          ],
        },
      ],
    },
    {
      id: "b01b78ac-add8-4fbf-85a5-89666de6f3f6",
      name: "Sân Thủ Đức",
      address: "503 Lê Văn Việt, Thành phố Thủ Đức, Thành phố Hồ Chí Minh",
      openAt: 360,
      closeAt: 600,
      slotDuration: 60,
      images: [yard1, yard2, yard3],
      subYards: [
        {
          name: "Sân 1",
          type: "3 vs 3",
          slots: [
            {
              startTime: "06:00",
              endTime: "07:00",
              price: 50000,
            },
            {
              startTime: "07:00",
              endTime: "08:00",
              price: 60000,
            },
            {
              startTime: "08:00",
              endTime: "09:00",
              price: 60000,
            },
            {
              startTime: "09:00",
              endTime: "10:00",
              price: 50000,
            },
          ],
        },
        {
          name: "Sân 2",
          type: "5 vs 5",
          slots: [
            {
              startTime: "06:00",
              endTime: "07:00",
              price: 70000,
            },
            {
              startTime: "07:00",
              endTime: "08:00",
              price: 60000,
            },
            {
              startTime: "08:00",
              endTime: "09:00",
              price: 60000,
            },
            {
              startTime: "09:00",
              endTime: "10:00",
              price: 70000,
            },
          ],
        },
      ],
    },
  ]);

  const onChangePage = (isPlus) => {
    if (isPlus && currentPage < maxPage) {
      setCurrentPage(() => currentPage + 1);
    } else if (!isPlus && currentPage > 1) {
      setCurrentPage(() => currentPage - 1);
    }
  };

  const onInputPage = (e) => {
    if (e.which === 13) {
      onBlurPage(e);
      e.target.blur();
    }
  };

  const onBlurPage = (e) => {
    const value = e.target.value;
    if (value <= 0) {
      setCurrentPage(1);
    } else if (value > maxPage) {
      setCurrentPage(maxPage);
    }
  };

  return (
    <div>
      <h1 className="outstanding-title p-4 text-center">OUTSTANDING YARD</h1>
      <div className="w-100 p-5">
        <div className="row mt-5 yard__result-container">
          {yards.map((yard) => (
            <div className="yard__result-wrapper col-3 p-3 pe-2">
              <Link className="yard-result" to={`/yard/${yard.id}`}>
                <img src={yard.images[0]} alt="basketball yard" />
                <div className="yard-details p-3">
                  <b className="d-block mb-2">{yard.name}</b>
                  <p className="row mb-1">
                    <i className="fas fa-clock col-1 pt-1"></i>
                    <span className="ps-2 color-blur col-10">
                      {
                        TIMELINE.find((time) => time.value === yard.openAt)
                          .label
                      }{" "}
                      -{" "}
                      {
                        TIMELINE.find((time) => time.value === yard.closeAt)
                          .label
                      }
                    </span>
                  </p>
                  <p className="row mb-1">
                    <i className="fas fa-map-marker-alt col-1 pt-1"></i>
                    <span className="ps-2 color-blur col-10">
                      {yard.address}
                    </span>
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="yard-pagination mt-4">
          <div>
            <span
              className="pagination-arrow"
              onClick={() => onChangePage(false)}
            >
              <i className="fas fa-arrow-left"></i>
            </span>
            <span className="pagination-statistic">
              <input
                type="text"
                value={currentPage}
                onChange={(e) => setCurrentPage(e.target.value)}
                onBlur={(e) => onBlurPage(e)}
                onKeyUp={(e) => onInputPage(e)}
              />
              / {maxPage}
            </span>
            <span
              className="pagination-arrow"
              onClick={() => onChangePage(true)}
            >
              <i className="fas fa-arrow-right"></i>
            </span>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default OutstandingYard;

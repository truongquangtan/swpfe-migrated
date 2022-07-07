import { useState, useEffect } from "react";
import "./style.scss";

import Pagination from "../Pagination";

function MatchManagementWidget() {
  const [maxPage, setMaxPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const onChangePage = () => {};

  return (
    <div className="pt-4 w-100">
      <div>
        <div>
          <div className="mt-2 ms-5">
            <h4>Booking Management</h4>
          </div>
        </div>
        <div className="pt-3">
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" style={{ width: "5%" }}>
                    Actions
                  </th>
                  <th scope="col" style={{ width: "16%" }}>
                    Yard
                  </th>
                  <th scope="col" style={{ width: "8%" }}>
                    Sub-yard
                  </th>
                  <th scope="col" style={{ width: "8%" }}>
                    Type
                  </th>
                  <th scope="col" style={{ width: "15%" }}>
                    Address
                  </th>
                  <th scope="col" style={{ width: "10%" }}>
                    Price
                  </th>
                  <th scope="col" style={{ width: "8%" }}>
                    Created By
                  </th>
                  <th scope="col" style={{ width: "10%" }}>
                    Created At
                  </th>
                  <th scope="col" style={{ width: "14%" }}>
                    Note
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td title="actions">
                    <i
                      className="trash-icon fas fa-trash-alt col-4"
                      title="Delete"
                      onClick={() => {}}
                    ></i>
                  </td>
                  <td className="text-truncate" title="yard">
                    Sân Bóng Rổ Quận 8
                  </td>
                  <td title="subYard">Sân 1</td>
                  <td>5 VS 5</td>
                  <td className="text-truncate" title="address">
                    Số 369 Lê Văn Việt
                  </td>
                  <td title="price"> 20000 VND</td>

                  <td className="text-truncate" title="createBy">
                    HungLD
                  </td>
                  <td title="createAt">07/07/2022</td>
                  <td title="Note">N/A</td>
                </tr>

                <tr>
                  <td title="actions">
                    <i
                      className="trash-icon fas fa-trash-alt col-4"
                      title="Delete"
                      onClick={() => {}}
                    ></i>
                  </td>
                  <td className="text-truncate" title="yard">
                    Sân Bóng Rổ Thủ Đức
                  </td>
                  <td title="subYard">Sân 1</td>
                  <td>5 VS 5</td>
                  <td className="text-truncate" title="address">
                    Số 369 Lê Văn Việt
                  </td>
                  <td title="price"> 20000 VND</td>

                  <td className="text-truncate" title="createBy">
                    Quang Tân
                  </td>
                  <td title="createAt">07/07/2022</td>
                  <td title="Note">N/A</td>
                </tr>

                <tr>
                  <td title="actions">
                    <i
                      className="trash-icon fas fa-trash-alt col-4"
                      title="Delete"
                      onClick={() => {}}
                    ></i>
                  </td>
                  <td className="text-truncate" title="yard">
                    Sân Bóng Rổ Bình Thạnh
                  </td>
                  <td title="subYard">Sân 1</td>
                  <td>5 VS 5</td>
                  <td className="text-truncate" title="address">
                    Số 369 Lê Văn Việt
                  </td>
                  <td title="price"> 20000 VND</td>

                  <td className="text-truncate" title="createBy">
                    Bảo Toàn
                  </td>
                  <td title="createAt">07/07/2022</td>
                  <td title="Note">N/A</td>
                </tr>

                <tr>
                  <td title="actions">
                    <i
                      className="trash-icon fas fa-trash-alt col-4"
                      title="Delete"
                      onClick={() => {}}
                    ></i>
                  </td>
                  <td className="text-truncate" title="yard">
                    Sân Bóng Rổ Quận 2
                  </td>
                  <td title="subYard">Sân 1</td>
                  <td>5 VS 5</td>
                  <td className="text-truncate" title="address">
                    Số 369 Lê Văn Việt
                  </td>
                  <td title="price"> 20000 VND</td>

                  <td className="text-truncate" title="createBy">
                    Minh Trung
                  </td>
                  <td title="createAt">07/07/2022</td>
                  <td title="Note">N/A</td>
                </tr>

                <tr>
                  <td title="actions">
                    <i
                      className="trash-icon fas fa-trash-alt col-4"
                      title="Delete"
                      onClick={() => {}}
                    ></i>
                  </td>
                  <td className="text-truncate" title="yard">
                    Sân Bóng Rổ Quận 1
                  </td>
                  <td title="subYard">Sân 1</td>
                  <td>5 VS 5</td>
                  <td className="text-truncate" title="address">
                    Số 369 Lê Văn Việt
                  </td>
                  <td title="price"> 20000 VND</td>

                  <td className="text-truncate" title="createBy">
                    Hà Giang
                  </td>
                  <td title="createAt">07/07/2022</td>
                  <td title="Note">N/A</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Pagination maxPage={maxPage} onChangePage={onChangePage} />
    </div>
  );
}

export default MatchManagementWidget;

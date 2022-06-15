import { useState } from "react";

function Pagination({ maxPage, onChangePage }) {
  const [currentPage, setCurrentPage] = useState(1);

  const acceptableChange = () => {
    onChangePage(currentPage);
  };

  const onChangeCurrentPage = (isPlus) => {
    if (isPlus && currentPage < maxPage) {
      setCurrentPage(() => currentPage + 1);
      acceptableChange();
    } else if (!isPlus && currentPage > 1) {
      setCurrentPage(() => currentPage - 1);
      acceptableChange();
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
      acceptableChange();
    } else if (value > maxPage) {
      setCurrentPage(maxPage);
      acceptableChange();
    }
  };

  return (
    <div className="yard-pagination mt-4">
      <div>
        <span
          className="pagination-arrow"
          onClick={() => onChangeCurrentPage(false)}
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
            className="p-0"
          />
          / {maxPage}
        </span>
        <span
          className="pagination-arrow"
          onClick={() => onChangeCurrentPage(true)}
        >
          <i className="fas fa-arrow-right"></i>
        </span>
      </div>
    </div>
  );
}

export default Pagination;

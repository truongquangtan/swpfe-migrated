import { useState } from "react";

function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);

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
    <div className="yard-pagination mt-4">
      <div>
        <span className="pagination-arrow" onClick={() => onChangePage(false)}>
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
        <span className="pagination-arrow" onClick={() => onChangePage(true)}>
          <i className="fas fa-arrow-right"></i>
        </span>
      </div>
    </div>
  );
}

export default Pagination;

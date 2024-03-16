import { hospitalsInfo } from "../../Data/hospitals.tsx";

import "./Pagination.css";

const Pagination = ({
  disabledPrev,
  disabledNext,
  page,
  setPage,
  indexOfLastHospital,
}) => {
  const pagination = (pageNumber) => {
    setPage(pageNumber);
  };
  
 


  return (
    <div className="pagination-btn-container">
      <button
        disabled={page === 1}
        aria-disabled={disabledPrev}
        onClick={() => pagination(page - 1)}
        className="pagination-btn"
      >
        Prev
      </button>

      <span>{page}</span>
      <button
        disabled={indexOfLastHospital >= hospitalsInfo.length}
        aria-disabled={disabledNext}
        onClick={() => pagination(page + 1)}
        // onClick={handleNextButton}
        className="pagination-btn"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

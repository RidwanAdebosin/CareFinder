// import { hospitalsInfo } from "../../Data/hospitals.tsx";

import { Button } from "../../assets/svg/Button";
import "./Pagination.css";

const Pagination = ({
  hospitalResult,
  disabledPrev,
  disabledNext,
  page,
  setPage,
  indexOfLastHospital,
}) => {
  const pagination = (pageNumber) => {
    setPage(pageNumber);
  };
  
 const prev = (() => pagination(page - 1))


  return (
    <div className="pagination-btn-container">
    //   <button
    //     disabled={page === 1}
    //     aria-disabled={disabledPrev}
    //     onClick={() => pagination(page - 1)}
    //     className="pagination-btn"
    //   >
    //     Prev
    //   </button>
    <Button onClick={prev}>
      Prev
    </Button>

      <span>{page}</span>
      <button
        disabled={indexOfLastHospital >= hospitalResult.length}
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

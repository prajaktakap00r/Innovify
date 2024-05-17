import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import Wrapper from "../assets/wrappers/PageBtnContainer";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { useAllJobsContext } from "../pages/AllJobs";

export default function PageBtnContainer() {
  const {
    data: { numOfPages, currentPage },
  } = useAllJobsContext();
  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });
  const { search, pathname } = useLocation();
  const navigate = useNavigate();
  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };
  return (
    <Wrapper>
      <button
        className="btn prev-btn"
        onClick={() => {
          let prevpage = currpage - 1;
          if (prevpage < 1) prevpage = numOfPages;
          handlePageChange(prevpage);
        }}
      >
        <HiChevronDoubleLeft />
        prev
      </button>
      <div className="btn-container">
        {pages.map((pageNumber) => {
          return (
            <button
              className={`btn page-btn ${
                pageNumber === currentPage && "active"
              }`}
              key={pageNumber}
              onClick={() => {
                handlePageChange(pageNumber);
              }}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
      <button
        className="btn next-btn"
        onClick={() => {
          let nextpage = currpage + 1;
          if (nextpage > numOfPages) nextpage = 1;
          handlePageChange(nextpage);
        }}
      >
        next
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  );
}

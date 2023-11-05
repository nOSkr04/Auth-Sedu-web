import Link from "next/link";

const Pagination = ({ pageIndex, setPageIndex }) => {
  const prevPage = () => {
    if (pageIndex === 1) {
      return null;
    }
    setPageIndex(pageIndex - 1);
  };

  const nextPage = () => {
    setPageIndex(pageIndex + 1);
  };

  return (
    <>
      <nav className="mb-50">
        <ul className="pagination">
          <li
            className="page-item wow animate__animated animate__fadeIn"
            data-wow-delay=".0s"
          >
            <Link onClick={prevPage} className="page-link page-prev" href="#">
              <i className="fi-rr-arrow-small-left" />
            </Link>
          </li>
          <li
            className="page-item wow animate__animated animate__fadeIn"
            data-wow-delay=".1s"
          >
            <Link className="page-link" href="#">
              {pageIndex}
            </Link>
          </li>
          <li
            className="page-item wow animate__animated animate__fadeIn"
            data-wow-delay=".5s"
          >
            <Link className="page-link page-next" href="#" onClick={nextPage}>
              <i className="fi-rr-arrow-small-right" />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Pagination;

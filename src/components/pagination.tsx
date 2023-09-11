type PaginationProps = {
  pageNum: number;
  setPageNum: React.Dispatch<React.SetStateAction<number>>;
};

const Pagination = ({ pageNum, setPageNum }: PaginationProps) => {
  return (
    <ul className="flex space-x-5">
      {pageNum !== 1 ? (
        <li
          onClick={() => setPageNum((prev) => prev - 1)}
          className="cursor-pointer"
        >
          Prev
        </li>
      ) : (
        ""
      )}

      <li className="cursor-pointer">1</li>
      <li className="cursor-pointer">2</li>
      <li className="cursor-pointer">3</li>
      <li className="cursor-pointer">4</li>
      <li className="cursor-pointer">5</li>
      {pageNum !== 5 ? (
        <li
          onClick={() => setPageNum((prev) => prev + 1)}
          className="cursor-pointer"
        >
          Next
        </li>
      ) : (
        ""
      )}
    </ul>
  );
};

export default Pagination;

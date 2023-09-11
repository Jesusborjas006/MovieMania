type PaginationProps = {
  pageNum: number;
  setPageNum: React.Dispatch<React.SetStateAction<number>>;
};

const Pagination = ({ pageNum, setPageNum }: PaginationProps) => {
  return (
    <ul className="flex space-x-8 justify-center mt-20 mb-10">
      {pageNum !== 1 && (
        <li
          onClick={() => setPageNum((prev) => prev - 1)}
          className="cursor-pointer border py-2 px-4 rounded-md"
        >
          Prev
        </li>
      )}

      <li
        onClick={() => setPageNum(1)}
        className={
          pageNum === 1
            ? " bg-blue-500 text-white border py-2 px-4 rounded-md"
            : " cursor-pointer border py-2 px-4 rounded-md"
        }
      >
        1
      </li>
      <li
        onClick={() => setPageNum(2)}
        className={
          pageNum === 2
            ? " bg-blue-500 text-white border py-2 px-4 rounded-md"
            : "text-black cursor-pointer border py-2 px-4 rounded-md"
        }
      >
        2
      </li>
      <li
        onClick={() => setPageNum(3)}
        className={
          pageNum === 3
            ? " bg-blue-500 text-white border py-2 px-4 rounded-md "
            : " cursor-pointer border py-2 px-4 rounded-md"
        }
      >
        3
      </li>
      <li
        onClick={() => setPageNum(4)}
        className={
          pageNum === 4
            ? " bg-blue-500 text-white border py-2 px-4 rounded-md "
            : " cursor-pointer border py-2 px-4 rounded-md"
        }
      >
        4
      </li>
      <li
        onClick={() => setPageNum(5)}
        className={
          pageNum === 5
            ? " bg-blue-500 text-white border py-2 px-4 rounded-md "
            : " cursor-pointer border py-2 px-4 rounded-md"
        }
      >
        5
      </li>
      {pageNum !== 5 && (
        <li
          onClick={() => setPageNum((prev) => prev + 1)}
          className="cursor-pointer border py-2 px-4 rounded-md"
        >
          Next
        </li>
      )}
    </ul>
  );
};

export default Pagination;

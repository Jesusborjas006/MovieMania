type PaginationProps = {
  pageNum: number;
  setPageNum: React.Dispatch<React.SetStateAction<number>>;
};

const Pagination = ({ pageNum, setPageNum }: PaginationProps) => {
  return (
    <ul className="flex justify-between mt-20 mb-10 max-w-[350px] mx-auto">
      {pageNum !== 1 && (
        <li
          onClick={() => setPageNum((prev) => prev - 1)}
          className="cursor-pointer border py-2 px-3 rounded-md text-sm"
        >
          Prev
        </li>
      )}

      <li
        onClick={() => setPageNum(1)}
        className={
          pageNum === 1
            ? " bg-blue-500 text-white border py-2 px-3 rounded-md text-sm"
            : " cursor-pointer border py-2 px-3 rounded-md text-sm"
        }
      >
        1
      </li>
      <li
        onClick={() => setPageNum(2)}
        className={
          pageNum === 2
            ? " bg-blue-500 text-white border py-2 px-3 rounded-md text-sm"
            : " cursor-pointer border py-2 px-3 rounded-md text-sm"
        }
      >
        2
      </li>
      <li
        onClick={() => setPageNum(3)}
        className={
          pageNum === 3
            ? " bg-blue-500 text-white border py-2 px-3 rounded-md text-sm"
            : " cursor-pointer border py-2 px-3 rounded-md text-sm"
        }
      >
        3
      </li>
      <li
        onClick={() => setPageNum(4)}
        className={
          pageNum === 4
            ? " bg-blue-500 text-white border py-2 px-3 rounded-md text-sm"
            : " cursor-pointer border py-2 px-3 rounded-md text-sm"
        }
      >
        4
      </li>
      <li
        onClick={() => setPageNum(5)}
        className={
          pageNum === 5
            ? " bg-blue-500 text-white border py-2 px-3 rounded-md text-sm"
            : " cursor-pointer border py-2 px-3 rounded-md text-sm"
        }
      >
        5
      </li>
      {pageNum !== 5 && (
        <li
          onClick={() => setPageNum((prev) => prev + 1)}
          className="cursor-pointer border py-2 px-3 rounded-md text-sm"
        >
          Next
        </li>
      )}
    </ul>
  );
};

export default Pagination;

import { FC } from 'react';
import ReactPaginate from 'react-paginate';

interface IPaginationProps {
  handlePageClick: ({ selected }: { selected: number }) => void;
  pageCount: number;
}

export const Pagination: FC<IPaginationProps> = ({
  handlePageClick,
  pageCount,
}) => {
  return (
    <>
      <ReactPaginate
        breakLabel="..."
        onPageChange={handlePageClick}
        pageCount={pageCount ? pageCount : 0}
        renderOnZeroPageCount={null}
        containerClassName="pagenation-container"
        pageLinkClassName="pagenation-page-link"
        activeLinkClassName="pagenation-active-link"
        prevPageRel="none"
        pageRangeDisplayed={1}
        marginPagesDisplayed={3}
      />
    </>
  );
};

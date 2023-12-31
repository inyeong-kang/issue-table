import { useState } from 'react';
import Pagination from '.';

const meta = {
    component: Pagination,
};

export default meta;

export const Default = () => {
    const [currentPage, setCurrentPage] = useState(2);

    const handlePageButtonClick = (newPage: number) => {
        setCurrentPage(newPage);
    };

    return (
        <>
            <p>현재 페이지: {currentPage}</p>
            <Pagination show={10} total={25} current={currentPage} onPageClick={handlePageButtonClick} />
        </>
    );
};



/**
 * 
 * @param data: los datos que se van a mostrar
 * @param itemsPerPage: numero de filas que se van a mostrar en la tabla
 * @param currentPage: pagina inicial
 * @returns visibleData: la nueva data
 */
export const paginator = (data, itemsPerPage, currentPage) => {

    //* Asegúrese de que los datos sean una matriz y estén definidos
    const dataPager = Array.isArray(data) ? data : [];

    const startIndex = (currentPage - 1) * itemsPerPage;
    const visibleData = dataPager.slice(startIndex, startIndex + itemsPerPage).map((item, index) => {
        return {
            id: startIndex + index + 1,
            ...item,
        };
    });

    const totalItemsNum = typeof data?.length === 'number' ? data?.length : 0;
    const itemsPerPageNum = typeof itemsPerPage === 'number' ? itemsPerPage : 1;
    const totalPages = Math.max(Math.ceil(totalItemsNum / itemsPerPageNum), 1);

    //* Mostrar solo 3 posiciones a la vez
    const maxPagesToShow = 3;
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);

    //* Ajustar el inicio si estamos cerca del final
    if (endPage - startPage + 1 < maxPagesToShow) {
        startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    return {
        totalItem: data?.length,
        currentPage: currentPage,
        endPage: endPage,
        startPage: startPage,
        totalPages: totalPages,
        visibleData: visibleData
    }
} 
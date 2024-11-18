// pagination
$(document).ready(function () {
    let totalPages = 10;
    let currentPage = 1;

    function renderPagination() {
        $("#pagination").empty();

        $("#pagination").append(`
            <li class="page-item ${currentPage === 1 ? "disabled" : ""}" id="first-page">
                <a class="page-link" href="#" aria-label="First">&lt;&lt;</a>
            </li>
            <li class="page-item ${currentPage === 1 ? "disabled" : ""}" id="previous-page">
                <a class="page-link" href="#" aria-label="Previous">&lt;</a>
            </li>
        `);

        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
                $("#pagination").append(`
                    <li class="page-item ${i === currentPage ? "active" : ""}">
                        <a class="page-link" href="#">${i}</a>
                    </li>
                `);
            }
        } else {
            $("#pagination").append(`
                <li class="page-item ${currentPage === 1 ? "active" : ""}">
                    <a class="page-link" href="#">1</a>
                </li>
                <li class="page-item ${currentPage === 2 ? "active" : ""}">
                    <a class="page-link" href="#">2</a>
                </li>
                <li class="page-item ${currentPage === 3 ? "active" : ""}">
                    <a class="page-link" href="#">3</a>
                </li>
            `);

            if (currentPage > 3 && currentPage < totalPages - 2) {
                $("#pagination").append(`
                    <li class="page-item disabled"><a class="page-link" href="#">...</a></li>
                    <li class="page-item active"><a class="page-link" href="#">${currentPage}</a></li>
                    <li class="page-item disabled"><a class="page-link" href="#">...</a></li>
                `);
            } else if (currentPage >= totalPages - 2) {
                $("#pagination").append(`
                    <li class="page-item disabled"><a class="page-link" href="#">...</a></li>
                `);
                for (let i = totalPages - 2; i <= totalPages - 1; i++) {
                    $("#pagination").append(`
                        <li class="page-item ${i === currentPage ? "active" : ""}">
                            <a class="page-link" href="#">${i}</a>
                        </li>
                    `);
                }
            } else {
                $("#pagination").append(`
                    <li class="page-item disabled"><a class="page-link" href="#">...</a></li>
                `);
            }
            $("#pagination").append(`
                <li class="page-item ${currentPage === totalPages ? "active" : ""}">
                    <a class="page-link" href="#">${totalPages}</a>
                </li>
            `);
        }

        $("#pagination").append(`
            <li class="page-item ${currentPage === totalPages ? "disabled" : ""}" id="next-page">
                <a class="page-link" href="#" aria-label="Next">&gt;</a>
            </li>
            <li class="page-item ${currentPage === totalPages ? "disabled" : ""}" id="last-page">
                <a class="page-link" href="#" aria-label="Last">&gt;&gt;</a>
            </li>
        `);
    }

    $(document).on("click", ".page-item:not(.disabled) .page-link", function (e) {
        e.preventDefault();
        const text = $(this).text();

        if (text === "««") currentPage = 1;
        else if (text === "<") currentPage = Math.max(1, currentPage - 1);
        else if (text === ">") currentPage = Math.min(totalPages, currentPage + 1);
        else if (text === "»»") currentPage = totalPages;
        else currentPage = parseInt(text);

        renderPagination();
    });

    renderPagination();
});







    // Load header and footer dynamically

$(document).ready(function() {
    $('#header-placeholder').load('header.html');
    $('#footer-placeholder').load('footer.html');
});




// how to call hedaer and foter dynimacally fro other papges in html jqueery


// create folder structrue fot this header and footer and for header and footer crete a folder main and for other pages crete afolde pages 

var theExchangeLab = {};

theExchangeLab.bindFilterControls = function () {
    var parent_filter;
    // Buttons
    var controls = $("[filter-wrapper]").find("[filters] a");
    var sub_filter_controls = $("[filter-wrapper]").find("[sub-filters] a");
    // Container
    var container = $(controls).parents("[filter-wrapper]");
    // Items to be filtered
    var items = $(container).find("[filter-type]");
    var sub_filter_items = $(container).find("[sub-filter]");
    // Sub filter controls
    var sub_filters = $(container).find("[sub-category]");
    $(controls).on("click", function (e) {
        e.preventDefault();
        var button = $(this);
        var filter = $(button).text();
        parent_filter = filter;
        // Button highlighting
        $(controls).removeClass("active");
        $(button).toggleClass("active");
        // Reset sub filters
        $(sub_filter_items).show();
        // Reset filtered items
        if (filter == "All") {
            $(items).show();
            $(sub_filters).stop().slideUp(300);
        }
        // Compare location attribute of each item in our array to filter text
        // If matching display item, otherwise hide
        else {
            $.each(items, function (k, item) {
                var filter_type = $(item).attr("filter-type");
                if (filter_type == filter) {
                    $(item).show();
                } else {
                    $(item).hide();
                }
            });

            $.each(sub_filters, function (k, item) {
                var sub_filter = $(item).attr("sub-category");
                if (sub_filter == filter) {
                    $(item).stop().slideDown(300);
                } else {
                    $(item).stop().slideUp(300);
                }
            });
        }
    });
    $(sub_filter_controls).on("click", function (e) {
        e.preventDefault();
        var button = $(this);
        var filter = $(button).text();
        // Button highlighting
        $(sub_filter_controls).removeClass("active");
        $(button).toggleClass("active");

        // Compare location attribute of each item in our array to filter text
        // If matching display item, otherwise hide
        $.each(sub_filter_items, function (k, item) {
            var filter_type = $(item).attr("sub-filter");
            var parent_filter_type = $(item).attr("filter-type");

            if (filter_type == filter && parent_filter_type == parent_filter) {
                $(item).show();
            } else {
                $(item).hide();
            }
        });
    });
}

theExchangeLab.generateCircleCharts = function () {
    $("#recommended-percent").circliful({
        percent: 87,
        animation: 1,
        animationStep: 15,
        backgroundColor: '#43bdb8',
        foregroundColor: '#fff',
        fontColor: '#fff',
        foregroundBorderWidth: 10,
        backgroundBorderWidth: 10,
    });
    $("#approval-rating").circliful({
        percent: 100,
        animation: 1,
        animationStep: 15,
        backgroundColor: '#43bdb8',
        foregroundColor: '#fff',
        fontColor: '#fff',
        foregroundBorderWidth: 10,
        backgroundBorderWidth: 10,
    });
}

theExchangeLab.generateStarRating = function () {
    $("#star-rating").rateYo({
        starWidth: "45px",
        spacing: "5px",
        ratedFill: "#fff",
        normalFill: "#50d6cf",
        rating: 4.6,
    });
}

$(document).ready(function () {
    theExchangeLab.bindFilterControls();
    theExchangeLab.generateCircleCharts();
    theExchangeLab.generateStarRating();
});
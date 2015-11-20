var myTable;
$(document).ready(function () {
	refresh();
});

function refresh() {
    $("#get_data").click(function () {
        $.get("GetOrders", function (result) {
            console.log(result);
            var assetsSet = [];
            for (var x in result) {
                var object = result[x];
                assetsSet.push(object);
            }

            var dataSet = [];
            for (var x in assetsSet) {
                var item = assetsSet[x];
                var asset = [item.sequence, item.ticker, item.side, item.amount, item.price, item.orderType, item.date, item.tif, item.status,
                             item.ID, item.traderID, item.algoOrderID, item.executeStat, item.activeStatus];
                dataSet.push(asset);
            }
            drawTable(dataSet);

        });
    });
}

function drawTable(dataSet) {
    if (myTable != undefined) {
        console.log("refresh");
        console.log(dataSet);
        myTable.clear();
        myTable.rows.add(dataSet);
        myTable.draw();
    }
    else {
        console.log("new");
        myTable = $('#table_id').DataTable({
            data: dataSet,
            columns: [
            {title: "EMSX Sequence"},
            {title: "Ticker"},
            {title: "Side"},
            {title: "Amount"},
            {title: "Price"},
            {title: "Order Type"},
            {title: "Date"},
            {title: "Tif"},
            {title: "Status"},
            {title: "ID"},
            {title: "Trader"},
            {title: "Algo Order ID"},
            {title: "Execute Stat"},
            {title: "Active Status"}
            ]
        });
    }
}
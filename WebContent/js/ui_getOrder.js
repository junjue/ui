
var myTable;
$(document).ready(function () {
    getOrder();
});

function getOrder() {
    $("#get_data").click(function () {
        $.post('UI_GetOrder', function (result) {
            var assetsSet = [];
            var assetsJSON = result;
            for (var x in assetsJSON) {
                var object = assetsJSON[x];
                assetsSet.push(object);
            }

            var dataSet = [];
            for (var x in assetsSet) {
                var item = assetsSet[x];
                var asset = [item.EMSX_Sequence, item.Ticker, item.Side, item.Amount, item.Price, item.Order_Type, item.Date, item.Tif, item.Status,
                    item.ID, item.TraderID, item.Algo_Order_ID, item.Execute_Stat, item.Active_Status];
                dataSet.push(asset);
            }
            drawTable(dataSet);

        });
    });
    function drawTable(dataSet) {
        if (myTable != undefined) {
            console.log("refresh2");
            myTable.clear();
            myTable.rows.add(dataSet);
            myTable.draw();
        }
        else {
            console.log("new2");
            myTable = $('#table_showcase').DataTable({
                data: dataSet,
                columns: [
                    {title: "EMSX"},
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
}






/**
 * Created by junjue on 11/16/2015.
 */

var myTable;
$(document).ready(function () {
    refresh();
});

function refresh() {
    $("#get_data_json").click(function () {
        $.getJSON("testjson", function (result) {
            var assetsSet = [];
            var assetsJSON = result.assets;
            for (var x in assetsJSON) {
                var object = assetsJSON[x];
                assetsSet.push(object);
            }

            var dataSet = [];
            for (var x in assetsSet) {
                var item = assetsSet[x];
                var asset = [item.Name, item.Position, item.Office, item.Extn, item.StartDate, item.Salary];
                dataSet.push(asset);
            }
            drawTable(dataSet);

        });
    });
}

function drawTable(dataSet) {
    if (myTable != undefined) {
        console.log("refresh");
        myTable.clear();
        myTable.rows.add(dataSet);
        myTable.draw();
    }
    else {
        console.log("new");
        myTable = $('#table_showcase').DataTable({
            data: dataSet,
            columns: [
                {title: "Name"},
                {title: "Position"},
                {title: "Office"},
                {title: "Extn."},
                {title: "Start date"},
                {title: "Salary"}
            ]
        });
    }
}

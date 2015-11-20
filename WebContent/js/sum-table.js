var mySumTable;
$(document).ready(function () {
	refreshSumTable();
});



function refreshSumTable(){

	$.getJSON("dummy.json", function (json) {
		var currentSumInfo = json[1];
		var tr1 = $('<tr/>');
		tr1.append("<th>Total Profit/Loss</th><th>Today's Gain/Loss</th><th>Trade Win</th><th># Trade</th><th>Commission</th>").addClass("sum-font1");
		var tr = $('<tr/>');
		if(currentSumInfo.TPL>=0){
			var string1 = "<td class=''>";
		}
		tr.append("<td id='TPL'>" + "$" +currentSumInfo.TPL + " ("+currentSumInfo.TPLP+ "%)" +"</td><td  id='GL'>" + "$" +currentSumInfo.GL + " (" +currentSumInfo.GLP
				+ "%)" +"</td><td>" + currentSumInfo.TW + "</td><td>" + currentSumInfo.Trade + "</td><td>" + currentSumInfo.Commission + "</td>").addClass("sum-font2")
				.addClass("sum-font2");
	    $('#sum_table1').append(tr1).append(tr);
	    updateColorByValue();
	});
}

function updateColorByValue(){
	console.log("adding color");
	$('#TPL').addClass("font-red");
	$('#GL').addClass("font-green");
}

//function refreshSumTable() {
//        $.getJSON("dummy.json", function (result) {
//            console.log(result);
//            var assetsSet2 = [];
//            for (var x in result) {
//                var object = result[x];
//                assetsSet2.push(object);
//            }
//
//            var dataSet2 = [];
//            for (var x in assetsSet2) {
//                var item = assetsSet2[x];
//                var asset = [item.TPL, item.TPLP, item.GL, item.GLP, item.TW, item.Trade, item.Commission];
//                dataSet2.push(asset);
//            }
//            drawSumTable(dataSet2);
//
//        });
// 
//}
//
//function drawSumTable(dataSet2) {
//    if (mySumTable != undefined) {
//        console.log("refresh");
//        console.log(dataSet2);
//        mySumTable.clear();
//        mySumTable.rows.add(dataSet2);
//        mySumTable.draw();
//    }
//    else {
//        console.log("new");
//        mySumTable = $('#sum_table1').DataTable({
//            data: dataSet2,
//            columns: [
//            {title: "Total Profit/Loss"},
//            {title: "Today's Gain/Loss"},
//            {title: "Trade Win"},
//            {title: "Trade"},
//            {title: "Commission"}
//            ]
//        });
//    }
//}
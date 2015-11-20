package controller;

import model.Order;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

public class OrderController {
    private static final String DB_URL = "jdbc:mysql://192.168.1.110:3306/";
    private static final String DB_SCHEMA_NAME = "b_pipe";
    private static final String DB_TABLE_NAME = "b_pipe_Order";
    private static final String DB_USERNAME = "UiDeveloper";
    private static final String DB_PWD = "UiDev3ic";

    public static List<Order> getOrderList() {

        List<Order> orderList = new ArrayList<>();

        try {
            //Class.forName("org.gjt.mm.mysql.Driver");
            Class.forName("com.mysql.jdbc.Driver");
            Connection con = DriverManager.getConnection(DB_URL+DB_SCHEMA_NAME, DB_USERNAME, DB_PWD);
            //Connection con = DriverManager.getConnection("jdbc:mysql://192.168.1.110:3306/b_pipe?userName=Uideveloper&passWord=Uidev3ic");
            ResultSet RS;
            PreparedStatement pr = con.prepareStatement(String.format(Locale.US, "SELECT * FROM %s.%s;", DB_SCHEMA_NAME, DB_TABLE_NAME));
            RS = pr.executeQuery();

            while (RS.next()) {
                Order order = new Order();
                order.setSequence(RS.getInt(1));
                order.setTicker(RS.getString(2));
                order.setSide(RS.getString(3));
                order.setAmount(RS.getInt(4));
                order.setPrice(RS.getFloat(5));
                order.setOrderType(RS.getString(6));
                order.setDate(RS.getDate(7).toString() + " " + RS.getTime(7).toString());
                order.setTif(RS.getString(8));
                order.setStatus(RS.getString(9));
                order.setID(RS.getInt(10));
                order.setTraderID(RS.getString(11));
                order.setAlgoOrderID(RS.getString(12));
                order.setExecuteStat(RS.getString(13));
                order.setActiveStatus(RS.getString(14));
                orderList.add(order);
            }
        } catch (Exception e) {
            System.out.println(e);
        }
        return orderList;
    }
}

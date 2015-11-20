package model;

public class Order {
    private int sequence;
    private String ticker;
    private String side;
    private int amount;
    private float price;
    private String orderType;
    private String date;
    private String tif;
    private String status;
    private int ID;
    private String traderID;
    private String algoOrderID;
    private String executeStat;
    private String activeStatus;

    public void setSequence(int sequence) {
        this.sequence = sequence;
    }

    public void setTicker(String ticker) {
        this.ticker = ticker;
    }

    public void setSide(String side) {
        this.side = side;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public void setOrderType(String orderType) {
        this.orderType = orderType;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public void setTif(String tif) {
        this.tif = tif;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public void setID(int ID) {
        this.ID = ID;
    }

    public void setTraderID(String traderID) {
        this.traderID = traderID;
    }

    public void setAlgoOrderID(String algoOrderID) {
        this.algoOrderID = algoOrderID;
    }

    public void setExecuteStat(String executeStat) {
        this.executeStat = executeStat;
    }

    public void setActiveStatus(String activeStatus) {
        this.activeStatus = activeStatus;
    }

    public int getSequence() {
        return sequence;
    }

    public String getTicker() {
        return ticker;
    }

    public String getSide() {
        return side;
    }

    public int getAmount() {
        return amount;
    }

    public double getPrice() {
        return price;
    }

    public String getOrderType() {
        return orderType;
    }

    public String getDate() {
        return date;
    }

    public String getTif() {
        return tif;
    }

    public String getStatus() {
        return status;
    }

    public int getID() {
        return ID;
    }

    public String getTraderID() {
        return traderID;
    }

    public String getAlgoOrderID() {
        return algoOrderID;
    }

    public String getExecuteStat() {
        return executeStat;
    }

    public String getActiveStatus() {
        return activeStatus;
    }
}

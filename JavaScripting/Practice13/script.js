document.write("<b> Object Creation using Object Literal method </b><br>");
var bElements = document.getElementsByTagName("b");
if (bElements.length > 0) {
    bElements[0].style.color = "red";
}

var Pdt1 = {
    PdtId: "P001",
    PdtName: "Furniture",
    Price: 850,
    Qty: 0,
    TotalAmount: 0,
    ChangeQty: function (newQty) {
        this.TotalAmount = newQty * this.Price;
        return this.TotalAmount;
    },
};

document.write("<br/>");
document.write(Pdt1.PdtId);
document.write("<br/>");
document.write(Pdt1["PdtName"]);
document.write("<br/>");
document.write(Pdt1.TotalAmount);
Pdt1.ChangeQty(10);
document.write("<br/>");
document.write(Pdt1.TotalAmount);
document.write("<br/>");

document.write("-----------");

document.write("<br/>");
document.write(Pdt1.PdtId);
document.write("<br/>");
document.write(Pdt1["PdtName"]);
document.write("<br/>");
document.write(Pdt1.TotalAmount);
Pdt1.ChangeQty(25);
document.write("<br/>");
document.write(Pdt1.TotalAmount);
document.write("<br/>");

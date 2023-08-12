function bookTickets()
{
    
    let ticketsBooked = parseInt(document.getElementById("tickets").value);
    document.write("<h4>Your Ticket Details:</h4>");
    if(ticketsBooked<=2)
    {
        
        document.write("You Booked "+ticketsBooked+" tickets so you need to pay "+ticketsBooked*9+"$");
    }
    else if(ticketsBooked>5)
    {
        document.write("We are really sorry, we cant process your booking as maximum limit to tickets is exceeded");
        document.write("\nPlease book not more than 5 tickets at once!");
    }
    else{
        let p1,p2,p3;
        p1=9-0.05*9;
        p2=9-0.07*9;
        p3=9-0.09*9;
        p4=9-0.11*9;

        document.write("<br>First person recieves 5% discount!, so ticket price would be: "+p1+"$");
        document.write("<br>Second person recieves 7% discount!, so ticket price would be: "+p2+"$");
        document.write("<br>Third person recieves 9% discount!, so ticket price would be: "+p3+"$");
        if(ticketsBooked==3){
        document.write("<br>Total price is: "+(p1+p2+p3)+"$");
        }
        else{
            document.write("<br>Fourth person recieves 11% discount so ticket price would be: "+p4+"$");
            document.write("<br>Total price is: "+(p1+p2+p3+p4)+"$");
        }


    }











}
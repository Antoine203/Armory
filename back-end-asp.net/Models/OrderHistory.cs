using System;
namespace Armory.Models
{
    public class OrderHistory
    {
        public int orderHistoryID { get; set; }
        public string orderDate { get; set; }
        public int userID { get; set; }
        public int itemID { get; set; }
    }
}

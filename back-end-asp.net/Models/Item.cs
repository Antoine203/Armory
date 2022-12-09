using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations.Schema;
namespace Armory.Models
{
    public class Item
    {
        public int itemID { get; set; }
        public string itemName { get; set; }
        public string itemDescription { get; set; }
        public double itemPrice { get; set; }
        public string itemType { get; set; }
        public string itemCategory { get; set; }
        public string itemImage { get; set; }

    }
}

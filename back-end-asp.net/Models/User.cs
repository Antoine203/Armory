using System;

namespace Armory.Models
{
    public class User
    {
        public int UserId { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string email { get; set; }
        public string password { get; set; }
        public string phoneNumber { get; set; }
        public int orderHistoryID { get; set; }
        public int cardInformationID { get; set; }
    }
}

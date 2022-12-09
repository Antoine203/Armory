using System;
namespace Armory.Models
{
    public class CardInformation
    {
        public int cardID { get; set; }
        public string cardHolderName { get; set; }
        public string cardNumber { get; set; }
        public int cardSecurityNumber { get; set; }
        public string cardExpirationDate { get; set; }
        public string billingStreetAddress { get; set; }
        public string billingCity { get; set; }
        public string billingState { get; set; }
        public string billingCountry { get; set; }
        public string billingZipCode { get; set; }
        public int userID { get; set; }
    }
}

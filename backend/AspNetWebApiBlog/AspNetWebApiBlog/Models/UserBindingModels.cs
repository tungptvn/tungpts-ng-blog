using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AspNetWebApiBlog.Models
{
    public class UserBindingModel
    {
        public string Id { get; set; }
        public bool IsActive { get; set; }
        public string  FName { get; set; }
        public string LName { get; set; }
        public int Age { get; set; }
        public string Gender  { get; set; }
        public string Email { get; set; }
        public string Address  { get; set; }
        public string  UserName { get; set; }
        public string PhoneNumber { get; set; }
        public UserBindingModel(ApplicationUser user)
        {
            this.IsActive = user.IsActive;
            FName = user.FName;
            LName = user.LName;
            Address = user.Address;
            Age = user.Age;
            Email = user.Email;
            Gender = user.Gender;
            UserName = user.UserName;
            PhoneNumber = user.PhoneNumber;
            Id = user.Id;

        }

    }
   
}
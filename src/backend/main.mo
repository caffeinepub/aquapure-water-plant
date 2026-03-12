import Map "mo:core/Map";
import Time "mo:core/Time";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";
import Order "mo:core/Order";
import Text "mo:core/Text";
import Nat "mo:core/Nat";

actor {
  type Product = {
    #jar20L;
    #bottle1L;
    #bottle500ml;
  };

  module Product {
    public func toText(product : Product) : Text {
      switch (product) {
        case (#jar20L) { "20L Jar" };
        case (#bottle1L) { "1L Bottle" };
        case (#bottle500ml) { "500ml Bottle" };
      };
    };
  };

  type ContactSubmission = {
    id : Nat;
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module ContactSubmission {
    public func compare(a : ContactSubmission, b : ContactSubmission) : Order.Order {
      Nat.compare(a.id, b.id);
    };
  };

  type OrderInquiry = {
    id : Nat;
    name : Text;
    phone : Text;
    product : Product;
    quantity : Nat;
    message : Text;
    timestamp : Time.Time;
  };

  module OrderInquiry {
    public func compare(a : OrderInquiry, b : OrderInquiry) : Order.Order {
      Nat.compare(a.id, b.id);
    };
  };

  let contactSubmissions = Map.empty<Nat, ContactSubmission>();
  let orderInquiries = Map.empty<Nat, OrderInquiry>();

  var contactIdCounter = 0;
  var orderIdCounter = 0;

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, phone : Text, message : Text) : async () {
    let submission : ContactSubmission = {
      id = contactIdCounter;
      name;
      email;
      phone;
      message;
      timestamp = Time.now();
    };
    contactSubmissions.add(contactIdCounter, submission);
    contactIdCounter += 1;
  };

  public shared ({ caller }) func submitOrderInquiry(name : Text, phone : Text, product : Product, quantity : Nat, message : Text) : async () {
    let inquiry : OrderInquiry = {
      id = orderIdCounter;
      name;
      phone;
      product;
      quantity;
      message;
      timestamp = Time.now();
    };
    orderInquiries.add(orderIdCounter, inquiry);
    orderIdCounter += 1;
  };

  public query ({ caller }) func getAllContactSubmissions(adminPassword : Text) : async [ContactSubmission] {
    if (adminPassword != "secureAdminPassword") {
      Runtime.trap("Unauthorized access");
    };
    contactSubmissions.values().toArray().sort();
  };

  public query ({ caller }) func getAllOrderInquiries(adminPassword : Text) : async [OrderInquiry] {
    if (adminPassword != "secureAdminPassword") {
      Runtime.trap("Unauthorized access");
    };
    orderInquiries.values().toArray().sort();
  };
};

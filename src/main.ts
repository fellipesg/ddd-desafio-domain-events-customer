import Customer from "./domain/customer/entity/customer";
import Address from "./domain/customer/value-object/address";
import OrderItem from "./domain/checkout/entity/order_item";
import Order from "./domain/checkout/entity/order";

let customer = new Customer("123", "Felipe Gonçalves");
const address = new Address("Rua da Ilha", 356, '79097-030', 'Campo Grande');
customer.Address = address;
customer.activate();

const item1 = new OrderItem("1", "Item 1", 10, "1", 10);
const item2 = new OrderItem("2", "Item 2", 15, "2", 15);

const order = new Order("1", customer.id, [item1, item2]);
import EventHandlerInterface from "../../../@shared/event/event-handler.interface";
import CustomerChangedAddressEvent from "../customer-changed-address.event";
import CustomerCreatedEvent from "../customer-created.event";

export default class EnviaConsoleLogHandler
  implements EventHandlerInterface<CustomerChangedAddressEvent>
{
  handle(event: CustomerChangedAddressEvent): void {
    console.log("Endereço do cliente: " + event.eventData.id +", "+ event.eventData.name +" alterado para: "+event.eventData.address.city +" - "+event.eventData.address.number+" - "+event.eventData.address.street+" - "+event.eventData.address.zip+""); 
  }
}

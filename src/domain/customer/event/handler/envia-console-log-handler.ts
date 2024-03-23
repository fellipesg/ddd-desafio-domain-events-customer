import EventHandlerInterface from "../../../@shared/event/event-handler.interface";
import CustomerCreatedEvent from "../customer-created.event";

export default class EnviaConsoleLogHandler
  implements EventHandlerInterface<CustomerCreatedEvent>
{
  handle(event: CustomerCreatedEvent): void {
    debugger
    console.log("Endereço do cliente: " + event.eventData.id +", "+ event.eventData.name +" alterado para: "+event.eventData.address.city +" - "+event.eventData.address.number+" - "+event.eventData.address.street+" - "+event.eventData.address.zip+""); 
  }
}

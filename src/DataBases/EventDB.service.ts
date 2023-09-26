import {IEventData} from './types';

export class EventDBService {
  private static instance: EventDBService | null = null;
  public events;
  constructor() {
    if (EventDBService.instance) {
      return EventDBService.instance;
    }

    this.events = [
      {
        id: 'asjka-dakdm-1920',
        name: 'Camping Paty',
        local: 'Rio de Janeiro, Urca',
        time: 1698246000000,
        image:
          'https://www.iol.pt/multimedia/oratvi/multimedia/imagem/id/607ecd240cf2b0de202b23f5/',
      },
      {
        id: 'asjka-dakdm-1930',
        name: 'Camping Hotel',
        local: 'Rio de Janeiro, Centro',
        time: 1698246000000,
        image:
          'https://th.bing.com/th/id/OIP.Nr5wdRzn-3arG4zyw30D8QHaD8?pid=ImgDet&rs=1',
      },
      {
        id: 'asjka-dakdm-1940',
        name: 'Blue Dreams',
        local: 'Recife, Totó ',
        time: 1698246000000,
        image:
          'https://www.horoscopovirtual.com.br/imagem/artigos/interno/images/64785334_s.jpg',
      },
    ];
    EventDBService.instance = this;
  }
  public static getInstance(): EventDBService {
    if (!EventDBService.instance) {
      EventDBService.instance = new EventDBService();
    }
    return EventDBService.instance;
  }

  createEvent(eventData: IEventData) {
    this.events!.push(eventData);
  }

  getEvents() {
    return this.events;
  }
}

import { Client } from './Client';

export interface Item {
  name: string;
  price: string;
  owner: Client;
}

export enum Status {
  PENDING = 'Pending',
  IN_PROGRESS = 'In Progress',
  READY_TO_TABLE = 'Ready to Table',
  DONE = 'Done',
}

export interface Order {
  id: number;
  table: number;
  status: Status;
  items: Item[];
  restaurantId: string;
}

import dayjs from 'dayjs';
import { IUser } from 'app/shared/model/user.model';
import { state } from 'app/shared/model/enumerations/state.model';

export interface ITask {
  id?: number;
  name?: string | null;
  description?: string;
  dateStart?: string | null;
  dateEnd?: string;
  state?: state;
  creer?: IUser | null;
}

export const defaultValue: Readonly<ITask> = {};

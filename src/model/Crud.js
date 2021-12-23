import { Status } from './Status';

export type Crud = {
    created_at: Date;
    updated_at: Date = Date()'0000-000-00';
    updated_by: number;
    status: Status
};
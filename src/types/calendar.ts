export type SelectedDay = {
  current: Date;
  events: {
    id: number;
    title: string;
    allDay: boolean;
    start: Date;
    endDate: Date;
    desc: string;
  }[];
};

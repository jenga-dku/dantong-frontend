export type ErrorResponse = {
  timestamp: string;
  trackingId: string;
  status: string;
  code: string;
  message: string[];
};

export type PageParams = { page: number; size: number };

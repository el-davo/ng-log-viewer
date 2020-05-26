export interface Log<T> {
  date: string;
  message: string;
  metadata: T;
}

export type FormatExceptionMessageType = {
  message: string,
  code_error: number
}
export interface ExcetionsServiceInterface {
  badRequestException(data: FormatExceptionMessageType): void;
  internalServerErrorException(data?: FormatExceptionMessageType): void;
  forbiddenException(data?: FormatExceptionMessageType): void;
  unauthotizedException(data?: FormatExceptionMessageType): void;
}
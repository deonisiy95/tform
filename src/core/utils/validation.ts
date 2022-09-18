export class Validation {
  public static notEmpty = (value: string): boolean => {
    return value !== null && value !== undefined && value.trim().length > 0;
  };
}

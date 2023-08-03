export class Validation {
  public static notEmpty = (value: string): boolean => {
    return value !== null && value !== undefined && value.trim().length > 0;
  };

  public static isEmpty = (value: string): boolean => {
    return value === null || value === undefined || value.trim().length === 0;
  };

  public static isEmail = (value: string): boolean => {
    return Boolean(value.match(/.+@.+\..+/gim));
  };
}

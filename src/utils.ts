type FlattenedObject = Record<string, string>;

export function flattenObject(
  obj: Record<string, unknown>,
  parentKey = ""
): FlattenedObject {
  let result: FlattenedObject = {};

  for (const [key, value] of Object.entries(obj)) {
    const newKey = parentKey ? `${parentKey}.${key}` : key;

    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      const nestedResult = flattenObject(
        value as Record<string, unknown>,
        newKey
      );
      result = { ...result, ...nestedResult };
    } else {
      result[newKey] = String(value);
    }
  }

  return result;
}

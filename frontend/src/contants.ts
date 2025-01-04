export const BackendUrl = "http://localhost:8000/api/notifyUser";
export function trimText(text: string) {
  return text.trim();
}

export function readableFormat(date: Date) {
  return new Date(date).toLocaleDateString();
}

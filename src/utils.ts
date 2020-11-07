export const cutText = (text: string, characterLimit: number = 28) =>
  text.length > 28 ? `${text.slice(0, 25)}...` : text;

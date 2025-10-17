export const readFileContent = async (file: File): Promise<string> => {
  return new Promise(async (resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve(e.target?.result as string);
    reader.onerror = reject;
    return reader.readAsText(file);
  });
};

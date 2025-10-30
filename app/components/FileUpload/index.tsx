import React, { MouseEvent } from 'react';
import { ChangeEvent, DragEvent, useRef, useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { FiFileText } from 'react-icons/fi';
import { formatFileSize } from '../utils/formatFileSize';
import { sendFlashcardRequest } from '../utils/sendFlashcardRequest';
export const FileUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [flashCards, setFlashcards] = useState();
  const inputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  console.log(flashCards);
  const handleScanFile = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!file) return;
    setIsLoading(true);
    try {
      const data = await sendFlashcardRequest(file);
      setFlashcards(data.flashCards);
      setIsLoading(false);
    } catch (error) {
      console.error('Error:', error);
      setIsLoading(false);
    }
  };

  const handleFile = async (f: File) => {
    if (!f) return;
    setFile(f);
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    inputRef.current?.click();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const data = e.target.files?.[0];
    handleFile(data!);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const data = e.dataTransfer;
    const file = data.files[0];
    handleFile(file);
  };

  const resetDragEvent = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleRemoveFile = () => {
    setFile(null);
  };
  return (
    <section
      aria-labelledby="heading"
      className="flex sm:m-0 sm:p-10 flex-col gap-5 items-center justify-around h-fit w-full"
    >
      <div className="flex flex-col py-5 sm:px-15 sm:shadow-md rounded-xl h-90 justify-around w-full max-w-120 text-center sm:bg-gray-100">
        <h1 id="heading" className="text-3xl font-bold text-orange-700">
          Upload your file
        </h1>
        <form className="flex w-full justify-center">
          <div
            id="dropbox"
            onDragEnter={(e) => resetDragEvent(e)}
            onDragOver={(e) => resetDragEvent(e)}
            onDrop={handleDrop}
            className="flex bg-white flex-col items-center shadow-md sm:shadow-none justify-center w-full max-w-85 h-50 rounded-xl border-2 border-dashed border-gray-300 hover:border-orange-500 gap-5"
          >
            <div className="flex items-end m-0 p-0">
              <FiFileText
                color="#ccc"
                className="relative left-6"
                size="60px"
              />
              <FiFileText color="#ccc" className="bg-white z-10" size="80px" />
              <FiFileText
                color="#ccc"
                className="relative right-6"
                size="60px"
              />
            </div>
            <div className="flex">
              <p aria-describedby="file-requirements">
                Drop file<span className="text-orange-700">*</span> here or{' '}
              </p>
              <button
                onClick={(e) => handleClick(e)}
                className="underline cursor-pointer text-orange-700 font-bold mx-1"
              >
                select
              </button>
              <p> manually.</p>
            </div>

            <input
              ref={inputRef}
              type="file"
              aria-describedby="file-requirements"
              accept=".pdf,.txt,image/*"
              onChange={(e) => handleChange(e)}
              className="sr-only"
            />

            <p
              id="file-requirements"
              className="text-orange-700 font-bold text-xs"
            >
              *accepted files: pdf, txt, img
            </p>
          </div>
        </form>
      </div>
      {file && (
        <div className="sm:max-w-120 max-w-85 w-full">
          <ul className="flex w-full">
            <li className="w-full shadow-md justify-between list-disc flex items-center gap-2 bg-white rounded-lg border border-gray-200 p-3">
              <div className="flex gap-2">
                <span className="bg-orange-200 h-fit p-2 rounded-md">
                  <FiFileText size="30" color="#b97003" />
                </span>
                <div>
                  <p className="text-sm font-bold">{file.name}</p>
                  <p className="text-sm">{formatFileSize(file.size)}</p>
                </div>
              </div>
              <button
                aria-label="Delete file selection"
                onClick={handleRemoveFile}
                className={`ml-10 p-3 cursor-pointer ${
                  isLoading ? 'cursor-not-allowed' : 'cursor-pointer'
                }`}
                disabled={isLoading}
              >
                <MdDelete size="20" color={isLoading ? '#8f7676' : '#d40202'} />
              </button>
            </li>
          </ul>
          <button
            disabled={isLoading}
            onClick={(e) => handleScanFile(e)}
            className={` w-full sm:max-w-120 p-3 mt-5 border flex justify-center ${
              isLoading ? 'bg-orange-600/60' : 'bg-orange-600'
            } text-white text-lg font-bold rounded-md ${
              isLoading ? 'cursor-not-allowed' : 'cursor-pointer'
            }`}
          >
            {isLoading ? (
              <>
                Elaborating
                <span className="animate-bounce ml-1 ">.</span>
                <span
                  style={{ animationDelay: '75ms' }}
                  className="animate-bounce"
                >
                  .
                </span>
                <span
                  style={{ animationDelay: '100ms' }}
                  className="animate-bounce"
                >
                  .
                </span>
              </>
            ) : (
              'Scan file'
            )}
          </button>
        </div>
      )}
    </section>
  );
};

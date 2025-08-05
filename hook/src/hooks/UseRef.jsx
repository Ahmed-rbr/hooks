import { useState, useEffect, useRef } from "react";

const ClickOutsideModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);
  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutSide = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.currentTarget)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutSide);
    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, [isOpen]);
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Open Modal
      </button>

      {isOpen && (
        <div
          ref={modalRef}
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                     bg-white p-6 rounded shadow-lg z-50"
        >
          <p>This is a modal. Click outside to close.</p>
          <button
            onClick={() => setIsOpen(false)}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default ClickOutsideModal;

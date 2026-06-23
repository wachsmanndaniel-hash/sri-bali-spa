"use client";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

export default function Modal({
  open,
  onClose,
  title,
  children,
}: ModalProps) {
  if (!open) return null;

  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm"
      />

      <div className="fixed left-1/2 top-1/2 z-[101] w-[90%] max-w-4xl -translate-x-1/2 -translate-y-1/2">
        <div className="rounded-[32px] border border-white/10 bg-[#1F1F1F]/95 p-10 text-white shadow-2xl backdrop-blur-xl">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-light">{title}</h2>

            <button
              onClick={onClose}
              className="text-3xl text-gray-400 transition hover:text-white"
            >
              ×
            </button>
          </div>

          <div className="max-h-[70vh] overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
import { useRef, useState, useImperativeHandle, forwardRef } from "react";

import { DialogAction, Image } from "../interfaces/Interfaces";

const Dialog = forwardRef<DialogAction>((_, ref) => {
    const DialogRef = useRef<HTMLDialogElement>(null);
    const [CurrentImages, SetCurrentImages] = useState<Image[]>([]);
    const [CurrentImageIndex, SetCurrentImageIndex] = useState<number>(0);

    const OpenDialog = (Images: Image[], Index: number) => {
        SetCurrentImages(Images);
        SetCurrentImageIndex(Index);
        DialogRef.current?.showModal();
    };

    const CloseDialog = () => {
        SetCurrentImages([]);
        SetCurrentImageIndex(0);
        DialogRef.current?.close();
    };

    const NextImage = () => {
        SetCurrentImageIndex((Prev) => (Prev + 1) % CurrentImages.length);
    };

    const PrevImage = () => {
        SetCurrentImageIndex((Prev) => (Prev - 1 + CurrentImages.length) % CurrentImages.length);
    };

    useImperativeHandle(ref, () => ({
        Open: OpenDialog,
        Close: CloseDialog
    }));

    return (
        <>
            <dialog
                ref={DialogRef}
                className="min-w-full min-h-screen bg-black bg-opacity-90 p-0 m-0 overflow-hidden"
            >
                <div className="relative min-w-full min-h-screen flex items-center justify-center">
                    <img
                        src={CurrentImages[CurrentImageIndex]?.Source}
                        alt={CurrentImages[CurrentImageIndex]?.Alternative}
                        className="h-[40rem]"
                    />

                    <button
                        onClick={CloseDialog}
                        className="absolute top-4 right-4 text-white p-2 bg-black/50 rounded-full hover:bg-black/80"
                    >
                        X
                    </button>

                    <button
                        onClick={PrevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 bg-black/50 rounded-full hover:bg-black/80"
                    >
                        LEFT
                    </button>

                    <button
                        onClick={NextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 bg-black/50 rounded-full hover:bg-black/80"
                    >
                        RIGHT
                    </button>
                </div>
            </dialog>
        </>
    );
});

export default Dialog;

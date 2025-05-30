import { useRef } from "react"

import { JourneyProps, Image, DialogAction } from "../interfaces/Interfaces"

import Dialog from "./Dialog";

export default function Journey({ Props }: { Props: JourneyProps[] }) {
    const DialogRef = useRef<DialogAction>(null);

    const OpenDialog = (Images: Image[], Index: number) => {
        DialogRef.current?.Open(Images, Index);
    }

    return (
        <>
            <div className="w-[calc(100%-0.6rem)] ml-[0.6rem] flex flex-col gap-[2rem] my-[2rem] pl-[2rem] border-l-[0.3rem] border-solid border-blue-800 border-opacity-[0.1]">
                {Props.map((Prop, PropIndex) => (<div className="
                    relative w-full p-[2%] border-[0.05rem] border-solid border-blue-800 border-opacity-[0.2] bg-blue-800 bg-opacity-[0.1]
                    before:content-[''] before:absolute before:top-[-0.08rem] before:right-[calc(100%+2rem-0.55rem)] before:bg-blue-800 before:w-[1.5rem] before:h-[1.5rem] before:rounded-[50%] before:border-[0.1rem] before:border-solid before:border-white
                " key={PropIndex}>
                    <div className='w-full flex justify-between'>
                        <div>
                            <div className="flex items-center gap-[0.3rem] font-bold text-blue-800">
                                <h2>
                                    {Prop.Position}
                                </h2>
                                <div className="w-[0.15rem] h-[0.15rem] bg-blue-800 rounded-[50%]"></div>
                                <h2>{Prop.Type}</h2>
                            </div>
                            <h2 className="opacity-[0.5]">
                                {Prop.OrganizationName}
                                <br />
                                {Prop.Periode}
                                <br />
                                {Prop.Place}
                            </h2>
                        </div>
                        <img src={Prop.OrganizationImage.Source} alt={Prop.OrganizationImage.Alternative} className='h-[2rem]' />
                    </div>

                    <div className='my-[1rem]'>
                        <p>
                            {Prop.Description.split('\n').map((Line, LineIndex) => (
                                <span key={LineIndex}>
                                    {Line}
                                    <br />
                                </span>
                            ))}
                        </p>
                    </div>

                    <div className='flex justify-start items-center flex-wrap gap-[0.5rem]'>
                        {Prop.Images.map((Image, ImageIndex) => (
                            <div className='flex justify-center items-center w-[8rem] h-[4rem] rounded-[0.5rem] overflow-hidden bg-black cursor-pointer transition-all duration-300 hover:scale-[105%]' key={ImageIndex}>
                                <img src={Image.Source} alt={Image.Alternative} onClick={() => OpenDialog(Prop.Images, ImageIndex)} />
                            </div>
                        ))}
                    </div>
                </div>))}
            </div>

            <Dialog ref={DialogRef} />
        </>
    )
}
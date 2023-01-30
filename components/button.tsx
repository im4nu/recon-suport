export interface ButtonProps{
    label: string;
}
export default function GlobalButton({label} : ButtonProps){
    return(
        <a href="https://forms.gle/tGnYqR5QQcStY1Z58" target={"_blank"} className="flex bg-Primary-gray rounded-md text-Primary-white text-center py-4 px-12" rel="noreferrer">
            {label}
        </a>
    )
}
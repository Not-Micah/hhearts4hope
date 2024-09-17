interface HighlightProps {
    text: string;
}

const Highlight: React.FC<HighlightProps> = ({ text }) => {
  return (
    <div className="p-2 inline-block mb-6
    text-sm font-title text-white
    bg-primary drop-shadow-[0px_4px_0px_rgba(134,5,5,1)] rounded-lg">
        {text}
    </div>
  )
}

export default Highlight
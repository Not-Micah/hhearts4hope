interface HighlightProps {
    text: string;
}

const Highlight: React.FC<HighlightProps> = ({ text }) => {
  return (
    <div className="p-2 text-sm font-title bg-primary text-white inline-block">
        {text}
    </div>
  )
}

export default Highlight
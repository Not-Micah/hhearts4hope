interface InputFieldProps {
    label: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, placeholder, value, onChange }) => {
    return (
        <div className="w-full">
            <p>{label}</p>
            <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="input-field"
            />
        </div>
    );
};

export default InputField;
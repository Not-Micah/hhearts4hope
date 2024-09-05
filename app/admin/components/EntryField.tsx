const adminUsername = "admin123";
const adminPassword = "12345";

interface EntryFieldProps {
    username: string;
    setUsername: Function;
    password: string;
    setPassword: Function;
    setAdminStatus: Function;
}

const EntryField: React.FC<EntryFieldProps> = ({ username, setUsername, password, setPassword, setAdminStatus }) => {
  return (
    <form className="
    flex flex-col justify-center items-start gap-y-3
    w-[500px] bg-gray-300/50 rounded-lg shadow-md
    p-6"
    onSubmit={(e) => {
        e.preventDefault();
        console.log(process.env.ADMIN_PASSCODE)
        if (username === adminUsername && password === adminPassword) {
            setAdminStatus(true);
        }
    }}>
        <input type="text" placeholder="Username..." value={username} onChange={(e) => setUsername(e.target.value)}
        className='input-field' />
        <input type="text" placeholder="Password..." value={password} onChange={(e) => setPassword(e.target.value)}
        className='input-field' />
        <button type="submit"
        className='input-field bg-primary text-white font-bold'>Submit</button>
    </form>
  )
}

export default EntryField
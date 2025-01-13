import { FC, useState, Dispatch, SetStateAction } from "react";
import { Freelance } from "../types/types";
import { supabase } from "../utils/setupSupabase";

interface AddFreelanceProps {
    setFreelances: Dispatch<SetStateAction<Freelance[]>>;
}

const AddFreelance: FC<AddFreelanceProps> = ({ setFreelances }) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    async function addFreelance() {
        const freelance: Omit<Freelance, 'id' | 'created_at'> = {
            name,
            description
        }
        const { data, error } = await supabase.from('freelances').insert(freelance).select()
        if (data) {
            setFreelances((prev: Freelance[]) => [...prev, data[0]])
            setName('');
            setDescription('');
        }
        if (error) console.error('Error adding freelance:', error)
    }

    return (
        <div>
            <input 
                type="text" 
                placeholder="Project Name" 
                value={name}
                onChange={(e) => setName(e.target.value)} 
            />
            <textarea 
                placeholder="Project Description" 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button onClick={addFreelance}>Add Project</button>
        </div>
    );
}

export default AddFreelance;

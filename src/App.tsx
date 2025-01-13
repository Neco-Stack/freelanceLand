import React, { useState, useEffect } from 'react';
import { Freelance } from './types/types';
import { supabase } from './utils/setupSupabase';
import MyFreelanceList from './components/MyFreelanceList';
import AddFreelance from './components/AddFreelance';

const App: React.FC = () => {
  const [freelances, setFreelances] = useState<Freelance[]>([]);

  useEffect(() => {
    fetchFreelances();
  }, []);

  async function fetchFreelances() {
    const { data, error } = await supabase
      .from('freelances')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) console.error('Error fetching freelances:', error);
    else setFreelances(data || []);
  }

  async function deleteFreelance(id: number) {
    const { error } = await supabase.from('freelances').delete().match({ id });
    if (error) {
      console.error('Error deleting freelance:', error);
    } else {
      setFreelances(freelances.filter(freelance => freelance.id !== id));
    }
  }

  return (
    <div className="App">
      <h1>Freelance Projects</h1>
      <AddFreelance setFreelances={setFreelances} />
      <MyFreelanceList freelances={freelances} onDelete={deleteFreelance} />
    </div>
  );
};

export default App;

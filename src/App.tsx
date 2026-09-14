import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import Hero from './components/Hero';
import { TechGrid } from './components/TechGrid';
import YourStack from './components/YourStack';
import { Footer } from './components/Footer';
import { Technology } from './types/technology';
import { ToastContainer, toast } from 'react-toastify';
import technologiesData from './data/technologies.json';

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [selectedTechs, setSelectedTechs] = useState<Technology[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // small delay to show the loading spinner, feels nicer
    setTimeout(() => {
      setTechnologies(technologiesData as Technology[]);
      setIsLoading(false);
    }, 300);
  }, []);

  // add tech to stack
  const handleAddToStack = (tech: Technology) => {
    const alreadyAdded = selectedTechs.find((t) => t.id === tech.id);
    
    if (alreadyAdded) {
      toast.warning(`${tech.name} is already added to your stack!`);
      return;
    }

    setSelectedTechs([...selectedTechs, tech]);
    toast.success(`🎉 ${tech.name} added to your stack!`);
  };

  // remove single tech
  function handleRemoveFromStack(id: string) {
    const techName = selectedTechs.find((t) => t.id === id);
    setSelectedTechs(selectedTechs.filter((t) => t.id !== id));
    
    if (techName) {
      toast.info(`${techName.name} removed from stack`);
    }
  }

  // remove all at once
  function handleRemoveAll() {
    if (selectedTechs.length === 0) return;

    const count = selectedTechs.length;
    setSelectedTechs([]);
    toast.error(`Removed all ${count} technologies from your stack`);
  }

  return (
    <div className="app-layout">
      <Navbar />

      <main className="flex-1">
        <Hero />

        <section id="technologies" className="tech-section">
          <div className="main-grid">
            
            <div className="content-area">
              <TechGrid
                technologies={technologies}
                selectedTechs={selectedTechs}
                isLoading={isLoading}
                onAddToStack={handleAddToStack}
              />
            </div>

            <div className="sidebar-area">
              <YourStack
                selectedTechs={selectedTechs}
                onRemove={handleRemoveFromStack}
                onRemoveAll={handleRemoveAll}
              />
            </div>

          </div>
        </section>
      </main>

      <Footer />

      <ToastContainer position="bottom-right" autoClose={2500} />
    </div>
  );
}

export default App;

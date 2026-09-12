import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import Hero from './components/Hero';
import { TechGrid } from './components/TechGrid';
import YourStack from './components/YourStack';
import { Footer } from './components/Footer';
import { Technology } from './types/technology';
import { ToastContainer, toast } from 'react-toastify';

export const App = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [selectedTechs, setSelectedTechs] = useState<Technology[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // load tech data on mount
  useEffect(() => {
    fetch('/technologies.json')
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  const handleAddToStack = (tech: Technology) => {
    const isExist = selectedTechs.find((item) => item.id === tech.id);
    
    if (isExist) {
      toast.warning(`${tech.name} is already added to your stack!`);
      return;
    }

    const newSelected = [...selectedTechs, tech];
    setSelectedTechs(newSelected);

    toast.success(`🎉 ${tech.name} added to your stack!`);
  };

  const handleRemoveFromStack = (id: string) => {
    const itemToRemove = selectedTechs.find((item) => item.id === id);
    const updated = selectedTechs.filter((item) => item.id !== id);
    setSelectedTechs(updated);
    
    if (itemToRemove) {
      toast.info(`${itemToRemove.name} removed from stack`);
    }
  };

  const handleRemoveAll = () => {
    if (selectedTechs.length === 0) {
      return;
    }
    const count = selectedTechs.length;
    setSelectedTechs([]);
    toast.error(`Removed all ${count} technologies from your stack`);
  };

  return (
    <div className="app-layout">
      <Navbar />

      <main className="app-main">
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
};

export default App;

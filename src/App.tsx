import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Technology } from './types/technology';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechGrid } from './components/TechGrid';
import { YourStack } from './components/YourStack';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [selectedTechs, setSelectedTechs] = useState<Technology[]>([]);
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    fetch('/technologies.json')
      .then((res) => res.json())
      .then((data: Technology[]) => {
        setTechnologies(data);
        setTimeout(() => {
          setIsLoading(false);
        }, 300);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  const handleAddToStack = (tech: Technology) => {
    const isExist = selectedTechs.find((item) => item.id === tech.id);
    
    if (isExist) {
      toast.warning(`${tech.name} is already added to your stack!`, {
        position: 'top-right',
        autoClose: 2500,
      });
      return;
    }

    const newSelected = [...selectedTechs, tech];
    setSelectedTechs(newSelected);

    toast.success(`🎉 ${tech.name} added to your stack!`, {
      position: 'top-right',
      autoClose: 2500,
    });
  };

  const handleRemoveFromStack = (id: string) => {
    const itemToRemove = selectedTechs.find((item) => item.id === id);
    const updated = selectedTechs.filter((item) => item.id !== id);
    setSelectedTechs(updated);
    
    if (itemToRemove) {
      toast.info(`${itemToRemove.name} removed from stack`, {
        position: 'top-right',
        autoClose: 2000,
      });
    }
  };

  const handleRemoveAll = () => {
    if (selectedTechs.length === 0) {
      return;
    }
    const count = selectedTechs.length;
    setSelectedTechs([]);
    toast.error(`Removed all ${count} technologies from your stack`, {
      position: 'top-right',
      autoClose: 2500,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FCFCFD]">
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Navbar />

      <main className="flex-1">
        <Hero />

        <section id="technologies" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-8 xl:col-span-9 order-2 lg:order-1">
              <TechGrid
                technologies={technologies}
                selectedTechs={selectedTechs}
                isLoading={isLoading}
                onAddToStack={handleAddToStack}
              />
            </div>

            <div className="lg:col-span-4 xl:col-span-3 order-1 lg:order-2">
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
    </div>
  );
};

export default App;

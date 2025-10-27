import React, { useState, useEffect } from 'react';
import { Download, Sparkles, Image as ImageIcon, Smartphone, Palette, Zap, Star, TrendingUp } from 'lucide-react';

// Generador de wallpapers con IA (simulado - integra tu API preferida)
const generateWallpaper = async (category, quality) => {
  // Aquí integrarías APIs como:
  // - Stability AI (Stable Diffusion)
  // - OpenAI DALL-E
  // - Midjourney
  // - Leonardo.ai
  
  const prompts = {
    naturaleza: [
      "pristine mountain landscape at golden hour, 8k ultra HD",
      "serene tropical beach with crystal clear water, 4k wallpaper",
      "majestic waterfall in lush forest, cinematic lighting",
      "northern lights over snowy mountains, ultra detailed"
    ],
    abstracto: [
      "flowing liquid colors abstract art, vibrant gradients, 8k",
      "geometric patterns with neon colors, modern design",
      "ethereal smoke wisps on dark background, artistic",
      "crystalline structures with rainbow reflections"
    ],
    espacio: [
      "spiral galaxy with vibrant nebula clouds, 8k space photography",
      "earth from space with city lights, ultra realistic",
      "colorful nebula with stars, cosmic wallpaper",
      "astronaut floating in space, cinematic scene"
    ],
    minimal: [
      "minimalist gradient background, soft pastel colors",
      "clean geometric shapes on solid background",
      "simple line art abstract design, modern aesthetic",
      "monochromatic waves pattern, elegant design"
    ],
    tecnologia: [
      "futuristic city skyline at night, neon lights, cyberpunk",
      "circuit board patterns with glowing connections",
      "holographic interface display, sci-fi aesthetic",
      "digital matrix code flowing, high tech wallpaper"
    ],
    anime: [
      "anime style cityscape at sunset, detailed illustration",
      "peaceful anime forest scene with magical lighting",
      "anime character silhouette against vibrant sky",
      "japanese street at night, anime art style"
    ]
  };

  const categoryPrompts = prompts[category] || prompts.naturaleza;
  const prompt = categoryPrompts[Math.floor(Math.random() * categoryPrompts.length)];
  
  // Simulación de generación (reemplaza con llamada API real)
  return new Promise((resolve) => {
    setTimeout(() => {
      const id = Date.now() + Math.random();
      resolve({
        id,
        url: `https://picsum.photos/seed/${id}/${quality === '4k' ? '2160/3840' : '1080/1920'}`,
        category,
        quality,
        prompt,
        likes: Math.floor(Math.random() * 1000),
        downloads: Math.floor(Math.random() * 5000)
      });
    }, 1500);
  });
};

export default function WallpaperApp() {
  const [wallpapers, setWallpapers] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedQuality, setSelectedQuality] = useState('hd');
  const [selectedWallpaper, setSelectedWallpaper] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const categories = [
    { id: 'todos', name: 'Todos', icon: ImageIcon },
    { id: 'naturaleza', name: 'Naturaleza', icon: Palette },
    { id: 'abstracto', name: 'Abstracto', icon: Sparkles },
    { id: 'espacio', name: 'Espacio', icon: Star },
    { id: 'minimal', name: 'Minimal', icon: Zap },
    { id: 'tecnologia', name: 'Tech', icon: TrendingUp },
    { id: 'anime', name: 'Anime', icon: Smartphone }
  ];

  // Cargar wallpapers iniciales
  useEffect(() => {
    const initialWallpapers = [
      { id: 1, url: 'https://picsum.photos/seed/1/1080/1920', category: 'naturaleza', quality: 'hd', likes: 1243, downloads: 5421 },
      { id: 2, url: 'https://picsum.photos/seed/2/1080/1920', category: 'abstracto', quality: '4k', likes: 892, downloads: 3210 },
      { id: 3, url: 'https://picsum.photos/seed/3/1080/1920', category: 'espacio', quality: 'hd', likes: 2156, downloads: 8932 },
      { id: 4, url: 'https://picsum.photos/seed/4/1080/1920', category: 'minimal', quality: '4k', likes: 1678, downloads: 6543 },
      { id: 5, url: 'https://picsum.photos/seed/5/1080/1920', category: 'tecnologia', quality: 'hd', likes: 945, downloads: 4321 },
      { id: 6, url: 'https://picsum.photos/seed/6/1080/1920', category: 'anime', quality: '4k', likes: 3421, downloads: 12543 }
    ];
    setWallpapers(initialWallpapers);
  }, []);

  const handleGenerate = async () => {
    setIsGenerating(true);
    try {
      const category = selectedCategory === 'todos' 
        ? categories[Math.floor(Math.random() * (categories.length - 1)) + 1].id 
        : selectedCategory;
      
      const newWallpaper = await generateWallpaper(category, selectedQuality);
      setWallpapers([newWallpaper, ...wallpapers]);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (error) {
      console.error('Error generando wallpaper:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownload = (wallpaper) => {
    // Incrementar contador de descargas
    setWallpapers(wallpapers.map(w => 
      w.id === wallpaper.id ? { ...w, downloads: w.downloads + 1 } : w
    ));
    
    // Simular descarga
    const link = document.createElement('a');
    link.href = wallpaper.url;
    link.download = `wallpaper-${wallpaper.quality}-${wallpaper.id}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000);
  };

  const filteredWallpapers = selectedCategory === 'todos' 
    ? wallpapers 
    : wallpapers.filter(w => w.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black text-white">
      {/* Header */}
      <header className="bg-black bg-opacity-50 backdrop-blur-lg border-b border-purple-500 border-opacity-30 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-xl">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  WallAI Generator
                </h1>
                <p className="text-xs text-gray-400">Fondos HD/4K con IA</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-purple-500 bg-opacity-20 px-3 py-1 rounded-full text-sm">
                <span className="text-purple-300">{wallpapers.length}</span> wallpapers
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Panel de Generación */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-1 rounded-2xl mb-8 shadow-2xl">
          <div className="bg-black bg-opacity-90 backdrop-blur-xl rounded-2xl p-6">
            <div className="flex items-center space-x-3 mb-6">
              <Sparkles className="w-8 h-8 text-purple-400" />
              <div>
                <h2 className="text-2xl font-bold">Genera Wallpapers con IA</h2>
                <p className="text-gray-400 text-sm">Crea fondos únicos en segundos</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-purple-300">Calidad</label>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setSelectedQuality('hd')}
                    className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all ${
                      selectedQuality === 'hd'
                        ? 'bg-purple-500 text-white shadow-lg scale-105'
                        : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                    }`}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <Smartphone className="w-4 h-4" />
                      <span>HD 1080p</span>
                    </div>
                  </button>
                  <button
                    onClick={() => setSelectedQuality('4k')}
                    className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all ${
                      selectedQuality === '4k'
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105'
                        : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                    }`}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <Star className="w-4 h-4" />
                      <span>4K Ultra</span>
                    </div>
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-purple-300">Categoría</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full py-3 px-4 rounded-xl bg-gray-800 border border-gray-700 focus:border-purple-500 focus:outline-none text-white"
                >
                  {categories.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className={`w-full py-4 rounded-xl font-bold text-lg transition-all shadow-lg ${
                isGenerating
                  ? 'bg-gray-700 cursor-not-allowed'
                  : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transform hover:scale-105'
              }`}
            >
              {isGenerating ? (
                <span className="flex items-center justify-center space-x-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Generando wallpaper...</span>
                </span>
              ) : (
                <span className="flex items-center justify-center space-x-2">
                  <Sparkles className="w-5 h-5" />
                  <span>Generar Wallpaper</span>
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Categorías */}
        <div className="flex overflow-x-auto space-x-3 pb-4 mb-8 scrollbar-hide">
          {categories.map(cat => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Galería de Wallpapers */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredWallpapers.map(wallpaper => (
            <div
              key={wallpaper.id}
              className="group relative aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer transform transition-all hover:scale-105 shadow-xl"
              onClick={() => setSelectedWallpaper(wallpaper)}
            >
              <img
                src={wallpaper.url}
                alt={`Wallpaper ${wallpaper.category}`}
                className="w-full h-full object-cover"
              />
              
              {/* Overlay con información */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-purple-500 px-2 py-1 rounded-full text-xs font-medium">
                      {wallpaper.quality.toUpperCase()}
                    </span>
                    <span className="text-xs text-gray-300 capitalize">{wallpaper.category}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span className="flex items-center space-x-1">
                      <Download className="w-3 h-3" />
                      <span>{wallpaper.downloads}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span>{wallpaper.likes}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Badge de calidad */}
              <div className="absolute top-2 right-2">
                {wallpaper.quality === '4k' && (
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-2 py-1 rounded-full text-xs font-bold">
                    4K
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredWallpapers.length === 0 && (
          <div className="text-center py-20">
            <ImageIcon className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400 text-lg">No hay wallpapers en esta categoría</p>
            <p className="text-gray-500 text-sm mt-2">Genera uno nuevo con IA</p>
          </div>
        )}
      </div>

      {/* Modal de vista previa */}
      {selectedWallpaper && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedWallpaper(null)}
        >
          <div
            className="max-w-2xl w-full bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[9/16] max-h-[70vh]">
              <img
                src={selectedWallpaper.url}
                alt="Preview"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="bg-purple-500 px-3 py-1 rounded-full text-sm font-medium mr-2">
                    {selectedWallpaper.quality.toUpperCase()}
                  </span>
                  <span className="text-gray-400 capitalize">{selectedWallpaper.category}</span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <span className="flex items-center space-x-1">
                    <Download className="w-4 h-4" />
                    <span>{selectedWallpaper.downloads}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{selectedWallpaper.likes}</span>
                  </span>
                </div>
              </div>
              <button
                onClick={() => handleDownload(selectedWallpaper)}
                className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-bold hover:from-purple-600 hover:to-pink-600 transition-all flex items-center justify-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>Descargar {selectedWallpaper.quality.toUpperCase()}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Notificación de éxito */}
      {showSuccess && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg flex items-center space-x-2 animate-bounce">
          <Download className="w-5 h-5" />
          <span>¡Descarga exitosa!</span>
        </div>
      )}

      {/* Footer con info de monetización */}
      <footer className="bg-black bg-opacity-50 border-t border-purple-500 border-opacity-30 mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span className="text-gray-400">Monetización integrada con Google AdMob</span>
          </div>
          <p className="text-gray-500 text-sm">
            Los wallpapers generados con IA son únicos y de alta calidad
          </p>
        </div>
      </footer>
    </div>
  );
}
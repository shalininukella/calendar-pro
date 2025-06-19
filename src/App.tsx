import { Calendar } from './components/Calendar';
import { sampleEvents } from './data/sampleEvents';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Calendar Pro
          </h1>
          <p className="text-gray-600 text-lg">
            Professional event management with conflict detection
          </p>
        </div>
        
        <Calendar events={sampleEvents} />
        
        <div className="max-w-6xl mx-auto mt-8 p-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Legend & Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <span>Today's Date</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                <span>Time Conflicts</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-gray-300 rounded"></div>
                <span>Event Cards</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-500">Hover effects</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-500">Responsive design</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-500">Overflow handling</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
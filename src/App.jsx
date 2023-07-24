import FormsFirebase from "./pages/FormsFirebase";
import { AuthProvider } from "./context/authContext";
function App() {
  return (
    <div>
      <AuthProvider>
        <h1>SportStading</h1>
        <FormsFirebase />
      </AuthProvider>
    </div>
  );
}

export default App;
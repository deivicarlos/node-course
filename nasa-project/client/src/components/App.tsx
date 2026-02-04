import 'styles/styles.css';
import Header from './Header';
import ZustandPage from 'pages/ZustandPage';

const App = () => {
  return (
    <div className="flex h-screen flex-col gap-y-2 bg-white p-2 font-sans">
      <Header>
        <span className="text-2xl font-semibold">React Hook Form</span>
      </Header>
      <ZustandPage />
    </div>
  );
};

export default App;

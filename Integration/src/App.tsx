import { useState } from 'react';
import { Connect } from './Connect';

// Class to manage name with getter and setter
class UserProfile {
  private _name: string;

  constructor(initialName: string = '') {
    this._name = initialName;
  }

  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    if (newName.trim() === '') {
      console.error('Name cannot be empty');
      return;
    }
    this._name = newName.trim();
  }
}

function App() {
  const [profile] = useState<UserProfile>(new UserProfile());
  const [inputName, setInputName] = useState<string>('');
  const [displayName, setDisplayName] = useState<string>('');

  const handleSetName = () => {
    profile.name = inputName;
    setInputName('');
  };

  const handleGetName = () => {
    setDisplayName(profile.name);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#fff',
        fontFamily: 'Arial, sans-serif',
      }}
    >

 <Connect/>
      <input
        type="text"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
        placeholder="Enter name"
        style={{
          padding: '8px',
          fontSize: '16px',
          border: '1px solid #ddd',
          borderRadius: '4px',
          width: '200px',
          marginBottom: '10px',
        }}
      />
      <div style={{ display: 'flex', gap: '10px' }}>
        <button
          onClick={handleSetName}
          style={{
            padding: '8px 16px',
            fontSize: '16px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Set Name
        </button>
        <button
          onClick={handleGetName}
          style={{
            padding: '8px 16px',
            fontSize: '16px',
            backgroundColor: '#28a745',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Get Name
        </button>
      </div>
      {displayName && (
        <p style={{ marginTop: '10px', fontSize: '16px', color: '#333' }}>
          Name: {displayName}
        </p>
      )}
    </div>
  );
}

export default App;
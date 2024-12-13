import Input from './components/Input';
import Form, { FormHandle } from './components/Form';
import Button from './components/Button';
import { useRef } from 'react';

function App() {
  const customeRef = useRef<FormHandle>(null);

  function handleSave(data: unknown) {
    const extentedData = data as { name: string; id: number };
    console.log(extentedData);
    customeRef.current?.clear();
  }

  return (
    <main>
      <Form onSave={handleSave} ref={customeRef}>
        <Input label="Name" id="name" type="text" />
        <Input label="Age" id="age" type="number" />
        <p>
          <Button el="button">Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;

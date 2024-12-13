import { useRef } from 'react';

import Button from './UI/Button.tsx';
import Form, { FormHandle } from './UI/Form.tsx';
import Input from './UI/Input.tsx';
import { useTimers } from '../store/timersContext.tsx';

export default function AddTimer() {
  const { addTimer } = useTimers();
  const form = useRef<FormHandle>(null);

  function handleSaveTimer(data: unknown) {
    const extractedData = data as { name: string; duration: string };
    addTimer({ name: extractedData.name, duration: +extractedData.duration });
    form.current?.clear();
  }

  return (
    <Form ref={form} onSave={handleSaveTimer} id="add-timer">
      <Input type="text" label="Name" id="name" />
      <Input type="number" label="Duration" id="duration" />
      <p>
        <Button>Add Timer</Button>
      </p>
    </Form>
  );
}

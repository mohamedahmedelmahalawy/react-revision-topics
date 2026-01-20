import { useActionState, useState, type ChangeEvent } from "react";

interface Person {
  id: string;
  name: string;
  job: string;
}

const initalState: Person[] = [];
const addPerson = async (state: Person[], formData: FormData) => {
  await new Promise((res) => setTimeout(res, 3000));
  const name = formData.get("name") as string;
  const job = formData.get("job") as string;
  const newPerson = {
    id: crypto.randomUUID(),
    name,
    job,
  };
  return [...state, newPerson];
};

function FormAction() {
  const [state, formAction, pending] = useActionState(addPerson, initalState);

  return (
    <div>
      <form className="flex flex-col max-w-96" action={formAction}>
        <input
          type="text"
          placeholder="name"
          className="input"
          name="name"
          required
        />
        <input
          type="text"
          placeholder="job"
          className="input"
          name="job"
          required
        />
        <button className="btn">Add Person</button>
      </form>
      <div>
        {pending && <h3>Loading...</h3>}
        {state.length !== 0 && state?.map((p) => <h3 key={p.id}>{p.name}</h3>)}
      </div>
    </div>
  );
}

export default FormAction;

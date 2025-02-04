import { createSignal } from "solid-js";

export default () => {
  const [count, setCount] = createSignal(0);

  return (
    <div class="bg-blue-900 text-white p-5">
      <div>Count = {count()}</div>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => setCount(count() + 1)}>Add 1</button>
    </div>
  );
};

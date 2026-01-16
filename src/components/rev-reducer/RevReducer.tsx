import { useReducer, useRef, type ChangeEvent } from "react";

interface State {
  count: number;
  error: string | null;
}
interface Action {
  type:
    | "INCREMENT"
    | "DECREMENT"
    | "INCREMENT_VALUE"
    | "DECREMENT_VALUE"
    | "RESET"
    | "INPUT";
  payload?: number;
}

const initalState: State = {
  count: 0,
  error: null,
};

const reducer = (state: State, action: Action) => {
  //   const { type } = action;

  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "INCREMENT_VALUE":
      return { ...state, count: state.count + (action.payload ?? 0) };
    case "DECREMENT_VALUE":
      return { ...state, count: state.count - (action.payload ?? 0) };

    case "RESET":
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
};

function RevReducer() {
  const [state, dispatch] = useReducer(reducer, initalState);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const incrementHandler = () => dispatch({ type: "INCREMENT" });
  const decrementHandler = () => dispatch({ type: "DECREMENT" });
  const resetHandler = () => dispatch({ type: "RESET" });
  //   const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
  //     dispatch({ type: "INPUT", payload: Number(e.target.value) });
  //   };
  const addValueHandler = () => {
    // console.log(inputRef.current!.value);
    dispatch({
      type: "INCREMENT_VALUE",
      payload: Number(inputRef.current!.value),
    });
    inputRef.current!.value = "0";
  };
  const subtractValueHandler = () => {
    dispatch({
      type: "DECREMENT_VALUE",
      payload: Number(inputRef.current!.value),
    });
    inputRef.current!.value = "0";
  };

  return (
    <div className="min-h-screen  ">
      <div className="max-w-96 flex flex-col gap-4 p-8 bg-slate-950">
        <h2 className="text-5xl font-semibold text-center">{state.count}</h2>
        <div className="flex flex-col gap-4">
          <button onClick={incrementHandler} className="btn">
            Increment
          </button>
          <button onClick={decrementHandler} className="btn">
            Decrement
          </button>
          <button onClick={resetHandler} className="btn">
            Reset
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <input type="text" className="input w-full" ref={inputRef} />
          <div className="flex gap-2 ">
            <button onClick={addValueHandler} className="btn grow">
              Add value
            </button>
            <button onClick={subtractValueHandler} className="btn grow">
              Subtract value
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RevReducer;

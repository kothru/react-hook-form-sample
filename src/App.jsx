import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example"));
  return (
    <div className="container mx-auto">
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <input className="input input-bordered w-full max-w-xs" defaultValue="test" {...register("example")} />
        <div className="form-control">
          <input className="input input-bordered w-full max-w-xs" {...register("exampleReq", { required: true })} />
          {errors.exampleReq && <span>This is required</span>}
        </div>
        <input className="btn" type="submit" />
      </form>
    </div>
  )
}

export default App

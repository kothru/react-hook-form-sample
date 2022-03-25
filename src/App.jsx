import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example"));
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="test" {...register("example")} />
      <input {...register("exampleReq", { required: true })} />
      {errors.exampleReq && <span>This is required</span>}
      <input type="submit" />
    </form>
  )
}

export default App

import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

function ValidApp() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div className="container mx-auto">
      <form className="form-control flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <input className="input input-bordered w-full max-w-xs" {...register("firstName", { required: true, maxLength: 20 })} />
        <ErrorMessage errors={errors} name="firstName" />
        <input className="input input-bordered w-full max-w-xs" {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
        <ErrorMessage errors={errors} name="lastName" />
        <input type="number" className="input input-bordered w-full max-w-xs" {...register("age", { min: 18, max: 99 })} />
        <ErrorMessage errors={errors} name="age" />
        <input className="btn w-full max-w-xs" type="submit" />
      </form>
    </div>
  )
}

export default ValidApp

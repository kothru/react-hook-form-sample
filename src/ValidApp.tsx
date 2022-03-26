import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

type FormInput = {
  firstName: string,
  lastName: string,
  age: number
}

function ValidApp() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormInput>({
    defaultValues: {
      firstName: "",
      lastName: "",
      age: 20
    }
  });
  const onSubmit = (data: FormInput) => console.log(data);
  return (
    <div className="container mx-auto">
      <form className="form-control flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <input className="input input-bordered w-full max-w-xs" {...register("firstName", {
          required: 'This is Required', maxLength: { value: 10, message: 'max 10 chars' }
        })} />
        <ErrorMessage errors={errors} name="firstName" />
        <input className="input input-bordered w-full max-w-xs" {...register("lastName", {
          pattern: { value: /^[A-Za-z]+$/i, message: 'only a to z' }
        })} />
        <ErrorMessage errors={errors} name="lastName" />
        <input type="number" className="input input-bordered w-full max-w-xs" {...register("age", {
          min: { value: 18, message: 'between 18 and 99' }, max: { value: 99, message: 'between 18 and 99' }
        })} />
        <ErrorMessage errors={errors} name="age" />
        <input className="btn w-full max-w-xs" type="submit" />
      </form>
    </div>
  )
}

export default ValidApp

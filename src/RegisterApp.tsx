import { useForm } from "react-hook-form";

type FormInput = {
  firstName: string,
  gender: string
}

function RegisterApp() {
  const { register, handleSubmit } = useForm<FormInput>({
    defaultValues: {
      firstName: "",
      gender: "femail"
    }
  });
  const onSubmit = (data: FormInput) => console.log(data);
  return (
    <div className="container mx-auto">
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <input className="input input-bordered w-full max-w-xs" {...register("firstName")} />
        <select className="select w-full max-w-xs" {...register("gender")}>
          <option value="femail">femail</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
        <input className="btn w-full max-w-xs" type="submit" />
      </form>
    </div>
  )
}

export default RegisterApp

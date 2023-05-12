import { useForm } from "react-hook-form";
import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";
import * as zod from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";


const newCycleFormValidateSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  minutesAmount: zod
    .number()
    .min(5, "O ciclo precisa ser de no máximo 5 minutos.")
    .max(60, "O ciclo precisa ser de no máximo 60 minutos. "),
});

type NewCycleFormData = zod.infer<typeof newCycleFormValidateSchema>;

export function NewCycleForm() {
  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidateSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  return (
    <FormContainer>
  <label htmlFor="task">Vou trabalhar em</label>
  <TaskInput
    type="text"
    id="task"
    disabled={!!activeCycle}
    placeholder="Dê um nome para o seu projeto"
    list="task-suggestions"
    {...register("task")}
  />

  <datalist id="task-suggestions">
    <option value="pro" />
  </datalist>

  <label htmlFor="minutesAmount">durante</label>
  <MinutesAmountInput
    type="number"
    id="minutesAmount"
    placeholder="00"
    step={5}
    min={5}
    max={60}
    disabled={!!activeCycle}
    {...register("minutesAmount", { valueAsNumber: true })}
  />
  <span>Minutos.</span>
</FormContainer>;

  )
}
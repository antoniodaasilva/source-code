import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";

export function NewCycleForm() {
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
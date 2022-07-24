import {SubmitHandler, useForm} from "react-hook-form";
import {Fruit} from "@/types/typescript-axios";
import {arrayInQueryParamsApi} from "@/apiClient";
import {useState} from "react";

type FormInput = {
  name1: string
  name2: string
}


const Component = (): JSX.Element => {
  const [fruits, setFruits] = useState<Array<Fruit>>([])

  const {handleSubmit, register} = useForm<FormInput>({
    criteriaMode: 'all',
  })

  const onSubmit: SubmitHandler<FormInput> = async (formInput) => {
    const names = Object.values(formInput).filter(v => !!v)
    const {data} = await arrayInQueryParamsApi.fetchArrayInQueryParamsFruits(names)

    setFruits(data.fruits)
  }

  return (
    <>
      <h1>Array In Query Params Page</h1>

      <h2>検索条件</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <p>
          <label>
            1つ目の果物を入れてください：
            <input type="text" {...register('name1')} />
          </label>
        </p>

        <p>
          <label>
            2つ目の果物を入れてください：
            <input type="text" {...register('name2')} />
          </label>
        </p>

        <button type="submit">検索</button>
      </form>

      <h2>結果</h2>

      {fruits && (
        <ul>
          {fruits.map((fruit) => <li key={fruit.id}>{fruit.id}: {fruit.name}</li>)}
        </ul>
      )}
    </>
  )
}

export default Component
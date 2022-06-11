const Component = (): JSX.Element => {

  const fetchApi = async (id: number) => {
    const res = await fetch(`/api/try_redirect/fruits/${id}`)

    console.log(res)
    console.log(res.status)

    const t = await res.text()
    console.log(t)
  }

  const onRedirectTo = () => {
    fetchApi(1)
  }

  const onRedirectTo303 = () => {
    fetchApi(2)
  }

  const onRender = () => {
    fetchApi(3)
  }

  const onRenderWithLocation = () => {
    fetchApi(4)
  }

  const onRedirectToWithManual = async () => {
    const res = await fetch(`/api/try_redirect/fruits/1`,
                        {redirect: 'manual'}) // 追加

    console.log(res)
    console.log(res.status)

    const t = await res.text()
    console.log(t)
  }

  const onOther = async () => {
    fetchApi(999)
  }

  return (
    <>
      <h1>Try Redirect</h1>

      <p>
        <button onClick={onRedirectTo}>redirect_to</button>
      </p>

      <p>
        <button onClick={onRedirectTo303}>redirect_to_303</button>
      </p>

      <p>
        <button onClick={onRender}>render</button>
      </p>

      <p>
        <button onClick={onRenderWithLocation}>render with location</button>
      </p>

      <p>
        <button onClick={onRedirectToWithManual}>redirect_to with redirect: manual</button>
      </p>

      <p>
        <button onClick={onOther}>other</button>
      </p>
    </>
  )
}

export default Component
import Button from "@/components/button"

export default () => { 
  return (
    <>
      <header className="text-2xl font-extrabold m-8">
        CALIDAD QUE INSPIRA
      </header>
      <div className="grid gap-4 grid-cols-2">
        <Button
          text="Crear"
          onClick={()=>{}}
          />
        <Button
          text="Consultar"
          onClick={()=>{}}
          secondary={true}
          />
      </div>
      <span className="mx-16 text-center m-8">
        El contrato de arrendamiento automatizado más poderoso del mercado.
      </span>
    </>
  )
}
